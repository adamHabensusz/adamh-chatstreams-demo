# IBM Cloud Code Engine Deployment

This app is packaged as a small Node.js container that serves the static UI from `server.js`.

## Files

- `package.json`: start/check scripts
- `Dockerfile`: production container image
- `.dockerignore`: keeps the image build clean

## Local verification

```bash
npm run check
PORT=8080 node server.js
```

Then open `http://localhost:8080`.

## Option 1: Build and deploy from the local folder

If you want Code Engine to build from this source directory:

```bash
ibmcloud login
ibmcloud target -g <resource-group>
ibmcloud ce project select --name <project-name>

ibmcloud ce application create \
  --name hybrid-cloud-chat \
  --build-source . \
  --port 8080
```

If the application already exists, update it:

```bash
ibmcloud ce application update \
  --name hybrid-cloud-chat \
  --build-source . \
  --port 8080
```

## Option 2: Build an image, then deploy it

Build and push an image to a registry such as IBM Container Registry:

```bash
docker build -t us.icr.io/<namespace>/hybrid-cloud-chat:1.0.0 .
docker push us.icr.io/<namespace>/hybrid-cloud-chat:1.0.0
```

Deploy the image to Code Engine:

```bash
ibmcloud login
ibmcloud target -g <resource-group>
ibmcloud ce project select --name <project-name>

ibmcloud ce application create \
  --name hybrid-cloud-chat \
  --image us.icr.io/<namespace>/hybrid-cloud-chat:1.0.0 \
  --port 8080
```

Update an existing deployment:

```bash
ibmcloud ce application update \
  --name hybrid-cloud-chat \
  --image us.icr.io/<namespace>/hybrid-cloud-chat:1.0.0 \
  --port 8080
```

## Notes

- Code Engine injects the runtime port through `PORT`; `server.js` already supports this.
- The Docker image is self-contained and does not require `npm install` because there are no runtime dependencies.
- If you want a custom domain, TLS settings, or private registry auth, configure those after the app is created.
