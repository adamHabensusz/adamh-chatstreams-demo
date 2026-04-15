const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

function send(response, statusCode, body, contentType) {
  response.writeHead(statusCode, { "Content-Type": contentType });
  response.end(body);
}

async function serve(requestPath, response) {
  const safePath = requestPath === "/" ? "/index.html" : requestPath;
  const filePath = path.join(ROOT, safePath);

  if (!filePath.startsWith(ROOT)) {
    send(response, 403, JSON.stringify({ error: "Forbidden" }), MIME_TYPES[".json"]);
    return;
  }

  try {
    const content = await fs.readFile(filePath);
    const ext = path.extname(filePath);
    send(response, 200, content, MIME_TYPES[ext] || "application/octet-stream");
  } catch {
    if (!path.extname(safePath)) {
      const html = await fs.readFile(path.join(ROOT, "index.html"));
      send(response, 200, html, MIME_TYPES[".html"]);
      return;
    }

    send(response, 404, JSON.stringify({ error: "Not found" }), MIME_TYPES[".json"]);
  }
}

const server = http.createServer((request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  serve(requestUrl.pathname, response).catch((error) => {
    send(
      response,
      500,
      JSON.stringify({ error: "Server error", detail: error.message }),
      MIME_TYPES[".json"]
    );
  });
});

server.listen(PORT, () => {
  console.log(`IBM Cloud app running at http://localhost:${PORT}`);
});
