const panelTitle = document.getElementById("panel-title");
const panelBody = document.getElementById("panel-body");
const toast = document.getElementById("toast");
const aiInput = document.getElementById("ai-input");
const createButton = document.getElementById("create-button");
const sendAiPromptButton = document.getElementById("send-ai-prompt");

const panelDescriptions = {
  Home: "This homepage shell matches the provided IBM Cloud layout with Carbon-inspired spacing, cards, navigation, and action placement.",
  Catalog: "Catalog will slot into the same shell next, using the left navigation and top bar we now have in place.",
  Projects: "Projects is connected as a clickable state target so additional screens can reuse this frame without rework.",
  Resources: "Resources interactions are wired, including quick top-level access and recent resource cards.",
  Activities: "Activities highlights status counts and recent incidents, matching the dashboard panel behavior from the reference.",
  Manage: "Manage is stubbed as a clickable destination inside the prototype shell.",
  Support: "Support is represented as a functional top-bar control for the prototype.",
  Learning: "Learning is represented as a functional top-bar control for the prototype.",
  "John Doe's Account": "Account actions are wired as top-bar prototype controls.",
  "Adam Habensusz": "Profile actions are represented inside the persistent side navigation.",
};

let toastTimer = 0;

function setPrototypeState(title, body) {
  panelTitle.textContent = title;
  panelBody.textContent = body || panelDescriptions[title] || "This control is clickable and ready to route into a deeper screen when we add the next page.";
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

document.querySelectorAll("[data-expandable] .section-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const section = button.closest("[data-expandable]");
    const isOpen = section.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

document.querySelectorAll("[data-panel-title]").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    const title = element.getAttribute("data-panel-title");
    setPrototypeState(title);
  });
});

document.querySelectorAll("[data-toast]").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    const message = element.getAttribute("data-toast");
    showToast(message);
    if (!element.hasAttribute("data-panel-title")) {
      setPrototypeState("Home", `${message}. The prototype is responding to clicks and can now branch into more detailed screens.`);
    }
  });
});

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    aiInput.value = chip.textContent.trim();
    setPrototypeState("Home", `Quick action selected: "${chip.textContent.trim()}". The AI prompt field updates in place, just like a real homepage assistant entry.`);
  });
});

sendAiPromptButton.addEventListener("click", () => {
  const value = aiInput.value.trim() || "Ask IBM Cloud AI ...";
  setPrototypeState("Home", `AI prompt sent: "${value}". This interaction is stubbed so we can connect it to future conversational screens.`);
  showToast("AI prompt submitted");
});

createButton.addEventListener("click", () => {
  const expanded = createButton.getAttribute("aria-expanded") === "true";
  createButton.setAttribute("aria-expanded", String(!expanded));
  setPrototypeState(
    "Home",
    expanded
      ? "Create menu collapsed. The main shell remains stable for additional screens."
      : "Create menu expanded state toggled. We can attach a real creation menu or route in the next pass."
  );
  showToast(expanded ? "Create menu closed" : "Create menu opened");
});

document.querySelectorAll(".resource-card").forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.getAttribute("data-panel-title");
    setPrototypeState(title, `${title} is selected from Recently visited. Resource cards are fully clickable and ready to deep-link into dedicated detail screens.`);
  });
});

document.querySelectorAll(".activity-item").forEach((item) => {
  item.addEventListener("click", () => {
    const title = item.querySelector(".activity-item__title")?.textContent || "Activity";
    const state = item.getAttribute("data-state");
    setPrototypeState("Activities", `${title} is selected. Severity is ${state}, and the dashboard panel is behaving like a live prototype surface.`);
    showToast(`Opened ${state} activity`);
  });
});
