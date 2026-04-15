const tasks = [
  {
    id: "cluster-01-failed",
    kind: "Notification",
    badge: "Alert",
    title: "Cluster-01 failed",
    description: 'A cluster in "Resource 1" has lost networking to an application server',
    accent: "rose",
    prompt: "Investigate why Cluster-01 lost networking to the application server.",
    timeline: "Needs attention",
    assistantLabel: "Cluster incident",
    messages: [
      {
        sender: "assistant",
        author: "Finn",
        tone: "intro",
        text:
          'A cluster in "Resource 1" has lost networking to an application server. After several attempts to rerun the service, I need your permission to investigate deeper.',
      },
      {
        sender: "user",
        author: "Adam",
        tone: "user",
        text: "Approved",
      },
      {
        sender: "assistant",
        author: "Finn",
        tone: "detail",
        text:
          'I am tracing the network path now and checking whether the cluster lost access at the ingress layer or between the service mesh and the application server.',
      },
    ],
  },
  {
    id: "cluster-rollout",
    kind: "Task",
    badge: "Priority",
    title: "Create a production cluster",
    description: "Deploy a production OpenShift cluster with safe defaults.",
    accent: "blue",
    prompt: "Set up a new Red Hat OpenShift cluster for the retail payments workload.",
    timeline: "Ready now",
    assistantLabel: "Cluster launch guide",
    messages: [
      {
        sender: "assistant",
        author: "Finn",
        tone: "intro",
        text:
          "I can get the rollout started. I found the retail payments deployment profile and matched it to your hybrid baseline.",
      },
      {
        sender: "assistant",
        author: "Finn",
        tone: "detail",
        text:
          "Recommended plan: deploy the primary cluster in Dallas, mirror ingress in Frankfurt, and attach the on-prem network policy pack before provisioning.",
      },
      {
        sender: "user",
        author: "Adam",
        tone: "user",
        text: "Start with the safest production-ready defaults and show the cost impact.",
      },
      {
        sender: "assistant",
        author: "Finn",
        tone: "detail",
        text:
          "Estimated monthly cost is $4.8k with three worker pools. I can now generate the provisioning workflow, DNS checklist, and approval summary.",
      },
    ],
  },
  {
    id: "health-check",
    kind: "Task",
    badge: "Ops",
    title: "Run a system health check",
    description: "Check latency, cert expiry, and node pressure.",
    accent: "teal",
    prompt: "Review the health of our hybrid cloud estate and highlight anything urgent.",
    timeline: "2 min scan",
    assistantLabel: "Health summary",
    messages: [
      {
        sender: "assistant",
        author: "Finn",
        tone: "intro",
        text:
          "Health scan is already in motion. Three signals need attention before the next deployment window.",
      },
      {
        sender: "assistant",
        author: "Finn",
        tone: "detail",
        text:
          "I detected elevated API latency between the Virginia cluster and the private VMware segment, plus two certificates that expire within five days.",
      },
      {
        sender: "user",
        author: "Adam",
        tone: "user",
        text: "Prioritize what could affect customers today.",
      },
      {
        sender: "assistant",
        author: "Finn",
        tone: "detail",
        text:
          "Customer risk is highest on the API latency path. I can open a remediation plan, compare it to the last healthy baseline, or draft a status note for the platform team.",
      },
    ],
  },
  {
    id: "insights",
    kind: "Task",
    badge: "AI Insight",
    title: "Discover workload insights",
    description: "Surface spend, scaling, and migration trends.",
    accent: "amber",
    prompt: "Show me key trends across our hybrid workloads from the last 7 days.",
    timeline: "Fresh data",
    assistantLabel: "Insight digest",
    messages: [
      {
        sender: "assistant",
        author: "Finn",
        tone: "intro",
        text:
          "Here's a seven-day digest. Your cloud burst pattern is predictable enough to automate and trim standby cost.",
      },
      {
        sender: "assistant",
        author: "Finn",
        tone: "detail",
        text:
          "Batch analytics moved 28% more traffic to IBM Cloud overnight, while on-prem storage remained under 42% utilization. Two apps are good candidates for scheduled capacity shifts.",
      },
      {
        sender: "user",
        author: "Adam",
        tone: "user",
        text: "Which workloads should we move first?",
      },
      {
        sender: "assistant",
        author: "Finn",
        tone: "detail",
        text:
          "Start with claims-processing and event reconciliation. Both already depend on cloud-native messaging, so migration friction is lower than the rest of the estate.",
      },
    ],
  },
  {
    id: "benchmark",
    kind: "Task",
    badge: "Governance",
    title: "Benchmark workloads",
    description: "Compare workloads to platform baselines.",
    accent: "slate",
    prompt: "Benchmark our live workloads against platform standards and show the biggest gaps.",
    timeline: "Policy aware",
    assistantLabel: "Benchmark review",
    messages: [
      {
        sender: "assistant",
        author: "Finn",
        tone: "intro",
        text:
          "Benchmark comparison is ready. Most workloads are compliant, but one production namespace falls short on resiliency.",
      },
      {
        sender: "assistant",
        author: "Finn",
        tone: "detail",
        text:
          "The payments namespace is single-region and missing the preferred policy bundle for secret rotation. Cost efficiency is otherwise above target by 11%.",
      },
      {
        sender: "user",
        author: "Adam",
        tone: "user",
        text: "Open the resiliency gaps first.",
      },
      {
        sender: "assistant",
        author: "Finn",
        tone: "detail",
        text:
          "I can walk through the failover upgrade plan and prefill the policy changes needed to move that namespace back into compliance.",
      },
    ],
  },
];

const notifications = [
  {
    id: "network-alert",
    kind: "Notification",
    badge: "Alert",
    title: "Ingress latency spiked on the private link",
    description: "Private link traffic is 44% slower than normal.",
    accent: "rose",
    prompt: "Investigate the ingress latency spike on our hybrid private link.",
    timeline: "4 min ago",
    assistantLabel: "Latency incident",
    messages: [
      {
        sender: "assistant",
        author: "Finn",
        tone: "intro",
        text:
          "I correlated the alert with a routing change and an unexpected failover to the backup appliance.",
      },
      {
        sender: "assistant",
        author: "Finn",
        tone: "detail",
        text:
          "The issue started at 09:12 CET after packet loss crossed the threshold on the primary path. Customer sessions stayed healthy, but response times climbed sharply for admin traffic.",
      },
      {
        sender: "user",
        author: "Adam",
        tone: "user",
        text: "What is the fastest low-risk fix?",
      },
      {
        sender: "assistant",
        author: "Finn",
        tone: "detail",
        text:
          "Re-route admin traffic back to the primary appliance and hold the backup node in warm standby. I can also prepare a rollback command set before you approve anything.",
      },
    ],
  },
  {
    id: "security-alert",
    kind: "Notification",
    badge: "Security",
    title: "Two certificates are about to expire",
    description: "Two production certificates need renewal this week.",
    accent: "violet",
    prompt: "Help me renew the certificates that are expiring this week.",
    timeline: "11 min ago",
    assistantLabel: "Certificate renewal",
    messages: [
      {
        sender: "assistant",
        author: "Finn",
        tone: "intro",
        text:
          "I found the affected certificates and matched them to the services they protect.",
      },
      {
        sender: "assistant",
        author: "Finn",
        tone: "detail",
        text:
          "The API gateway certificate expires first on Friday at 18:00 CET. The OpenShift route certificate follows the next morning. Neither rotation has been scheduled yet.",
      },
      {
        sender: "user",
        author: "Adam",
        tone: "user",
        text: "Queue the renewal steps and flag any downtime risk.",
      },
      {
        sender: "assistant",
        author: "Finn",
        tone: "detail",
        text:
          "I can queue both renewals with rolling updates. Expected downtime risk is low if we rotate during the next maintenance window.",
      },
    ],
  },
  {
    id: "cost-alert",
    kind: "Notification",
    badge: "Spend",
    title: "Hybrid storage costs are trending above forecast",
    description: "Backup traffic rose 18% after the retention change.",
    accent: "amber",
    prompt: "Explain the backup cost spike and suggest a cheaper setup.",
    timeline: "28 min ago",
    assistantLabel: "Cost review",
    messages: [
      {
        sender: "assistant",
        author: "Finn",
        tone: "intro",
        text:
          "The spend increase is tied to the new retention policy and duplicate replication windows.",
      },
      {
        sender: "assistant",
        author: "Finn",
        tone: "detail",
        text:
          "Backups are now replicating every four hours to both cloud regions and the local archive cluster. That overlap adds resilience, but it is more aggressive than the platform standard.",
      },
      {
        sender: "user",
        author: "Adam",
        tone: "user",
        text: "Show me a cheaper alternative that preserves recovery goals.",
      },
      {
        sender: "assistant",
        author: "Finn",
        tone: "detail",
        text:
          "A tiered plan with hourly local snapshots and twice-daily cloud replication reduces cost by about 21% while keeping the same RPO for the customer-facing systems.",
      },
    ],
  },
];

const resources = [
  {
    id: "cluster-01",
    name: "cluster1",
    title: "cluster-01",
    description: "us-south-01",
    widgets: {
      summary: [
        { label: "CPU usage", value: "68%", delta: "+4.2%", tone: "good" },
        { label: "Active pods", value: "248", delta: "+12", tone: "good" },
        { label: "Requests / min", value: "12.4k", delta: "+8.1%", tone: "good" },
        { label: "Error rate", value: "0.18%", delta: "-0.04%", tone: "good" },
      ],
      status: [
        { name: "API server", detail: "Uptime 99.98%", state: "operational" },
        { name: "Worker pool", detail: "18 / 18 nodes ready", state: "operational" },
        { name: "Ingress gateway", detail: "2 edge routes degraded", state: "degraded" },
        { name: "Service mesh", detail: "Latency within target", state: "operational" },
      ],
      activity: [
        { title: "Scale-up completed", detail: "3 worker nodes added to pool-b", time: "4 minutes ago", tone: "good" },
        { title: "Certificate renewed", detail: "Ingress wildcard cert rotated successfully", time: "18 minutes ago", tone: "info" },
        { title: "Traffic spike detected", detail: "Checkout namespace peaked above baseline", time: "41 minutes ago", tone: "warning" },
        { title: "Backup snapshot saved", detail: "Daily control plane backup stored", time: "1 hour ago", tone: "good" },
      ],
      trend: [
        { month: "Jan", value: 42 },
        { month: "Feb", value: 36 },
        { month: "Mar", value: 58 },
        { month: "Apr", value: 52 },
        { month: "May", value: 71 },
        { month: "Jun", value: 66 },
        { month: "Jul", value: 82 },
      ],
      categories: [
        { name: "Payments", value: 84 },
        { name: "Orders", value: 61 },
        { name: "Catalog", value: 43 },
        { name: "Identity", value: 57 },
        { name: "Search", value: 38 },
        { name: "Edge", value: 49 },
      ],
      headerMetrics: [
        { label: "CPU usage", value: "68%", delta: "+4.2%" },
        { label: "Active pods", value: "248", delta: "+12" },
        { label: "Requests / min", value: "12.4k", delta: "+8.1%" },
        { label: "Error rate", value: "0.18%", delta: "-0.04%" },
      ],
      backlog: [
        { title: "Rotate worker pool certificates", detail: "Scheduled for 22:00 CET", state: "planned" },
        { title: "Tune autoscaler thresholds", detail: "Pending performance review", state: "in review" },
        { title: "Namespace backup validation", detail: "Awaiting approver sign-off", state: "blocked" },
      ],
      incidents: [
        { title: "Ingress 5xx spike", detail: "Recovered after gateway rollout", time: "Yesterday" },
        { title: "Node memory pressure", detail: "Mitigated by horizontal scale-out", time: "2 days ago" },
        { title: "Image pull throttling", detail: "Registry rate limit tuned", time: "Last week" },
      ],
    },
  },
  {
    id: "storage-01",
    name: "storage1",
    title: "storage-01",
    description: "us-south-01",
    widgets: {
      hero: "Storage capacity, replication health, and access activity for this resource.",
      left: "Capacity and retention posture",
      right: "Access patterns and alerts",
    },
  },
  {
    name: "retail-payments-prod",
    description: "Payment services across cloud and on-prem",
  },
];

const panels = [...tasks, ...notifications];

const state = {
  activeId: "",
  activeResourceId: "",
  deletedIds: [],
  openThreadIds: [],
  draftByThreadId: {},
  extraMessagesByThreadId: {},
  threadSizes: [],
  sections: {
    attention: true,
    tasks: false,
    projects: false,
  },
};

state.deletedIds = [];

const app = document.getElementById("app");
let workspaceRailScrollTop = 0;
let chatStageScrollTop = 0;
let shouldResetChatStageScroll = false;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function carbonIcon(name) {
  const icons = {
    add: `
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8.5 1h-1v6.5H1v1h6.5V15h1V8.5H15v-1H8.5z" />
      </svg>
    `,
    chevronDown: `
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z" />
      </svg>
    `,
    close: `
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="m8 7.3 4.6-4.6.8.7L8.7 8l4.7 4.6-.8.7L8 8.7l-4.6 4.6-.7-.7L7.3 8 2.7 3.4l.7-.7z" />
      </svg>
    `,
    delete: `
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M6 1h4l1 1h3v1H2V2h3zm-2 3v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4zm2 2h1v6H6zm3 0h1v6H9z" />
      </svg>
    `,
  };

  return icons[name] || "";
}

function getInitialAssistantMessage(item) {
  return item.messages.find((message) => message.sender === "assistant")?.text || "";
}

function threadTitle(item) {
  return item.title;
}

function renderConversationMessage(message) {
  return `
    <div class="conversation-row conversation-row--${message.sender}">
      <div class="conversation-block conversation-block--${message.sender}">
        <div class="conversation-bubble conversation-bubble--${message.sender}">
          ${escapeHtml(message.text)}
        </div>
      </div>
    </div>
  `;
}

function getActivePanel() {
  const visiblePanels = getVisiblePanels();
  return visiblePanels.find((item) => item.id === state.activeId) || visiblePanels[0] || null;
}

function getVisiblePanels() {
  return panels.filter((item) => !state.deletedIds.includes(item.id));
}

function getThreadMessages(panel) {
  return [...panel.messages, ...(state.extraMessagesByThreadId[panel.id] || [])];
}

function getOpenPanels() {
  const visibleIds = new Set(getVisiblePanels().map((item) => item.id));
  return state.openThreadIds
    .filter((id) => visibleIds.has(id))
    .map((id) => panels.find((item) => item.id === id))
    .filter(Boolean);
}

function syncThreadSizes(count) {
  if (count <= 0) {
    state.threadSizes = [];
    return;
  }

  if (state.threadSizes.length === count) return;

  const next = state.threadSizes.slice(0, count);
  while (next.length < count) next.push(1);

  const total = next.reduce((sum, value) => sum + value, 0) || count;
  state.threadSizes = next.map((value) => value / total);
}

function resetThreadSizes(count) {
  if (count <= 0) {
    state.threadSizes = [];
    return;
  }

  state.threadSizes = Array.from({ length: count }, () => 1 / count);
}

function setPrimaryThread(id) {
  state.activeId = id;
  if (state.openThreadIds.length > 1) {
    const secondaryThreads = state.openThreadIds.slice(1);

    if (!secondaryThreads.includes(id)) {
      state.openThreadIds = [id, ...secondaryThreads];
    }

    syncThreadSizes(state.openThreadIds.length);
    return;
  }

  state.openThreadIds = [id];
  resetThreadSizes(1);
}

function addThread(id) {
  state.activeResourceId = "";
  state.activeId = id;
  state.openThreadIds = [...new Set([...state.openThreadIds, id])].slice(0, 4);
  resetThreadSizes(state.openThreadIds.length);
}

function setActiveResource(id) {
  state.activeResourceId = id;
  state.activeId = "";
  state.openThreadIds = [];
  state.threadSizes = [];
  chatStageScrollTop = 0;
  shouldResetChatStageScroll = true;
}

function getActiveResource() {
  return resources.find((resource) => resource.id === state.activeResourceId) || null;
}

function renderPanelCard(item) {
  const isActive = item.id === state.activeId;
  const isOpen = state.openThreadIds.includes(item.id);
  return `
    <div
      class="signal-card ${item.id === "cluster-01-failed" ? "signal-card--alert" : ""} ${isOpen ? "is-open" : ""} ${isActive ? "is-active" : ""}"
      data-panel-id="${item.id}"
      draggable="true"
      role="button"
      tabindex="0"
      aria-pressed="${isActive ? "true" : "false"}"
    >
      <div class="signal-card__body">
        <div class="signal-card__title">
          <h3>${escapeHtml(item.title)}</h3>
        </div>
        <p>${escapeHtml(item.description)}</p>
      </div>
      <button class="signal-card__chat" type="button" aria-label="Open chat actions">${carbonIcon("add")}</button>
      <button class="signal-card__bin" type="button" data-delete-id="${item.id}" aria-label="Delete card">${carbonIcon("delete")}</button>
    </div>
  `;
}

function renderMessage(message) {
  return `
    <div class="message-row message-row--${message.sender}">
      <div class="message-bubble message-bubble--${message.tone}">
        ${escapeHtml(message.text)}
      </div>
    </div>
  `;
}

function renderChatStream(panel) {
  const draftValue = state.draftByThreadId[panel.id] || "";
  return `
    <section class="chat-thread-shell ${state.activeId === panel.id ? "chat-thread-shell--active" : ""}" aria-live="polite" data-thread-id="${panel.id}">
      <div class="chat-thread-header">
        <div class="chat-thread-title">
          <span class="thread-status ${state.activeId === panel.id ? "is-active" : ""}" aria-hidden="true"></span>
          <span>${escapeHtml(threadTitle(panel))}</span>
        </div>
        <div class="chat-thread-actions">
          <button class="thread-close" type="button" data-close-thread="${panel.id}" aria-label="Close conversation">${carbonIcon("close")}</button>
        </div>
      </div>

      <div class="conversation-list">
        ${getThreadMessages(panel).map(renderConversationMessage).join("")}
      </div>

      <div class="chat-input-shell">
        <div class="chat-input-wrap">
          <input
            class="chat-input"
            type="text"
            placeholder="Ask Finn a question"
            value="${escapeHtml(draftValue)}"
            data-thread-input="${panel.id}"
            aria-label="Chat input"
          />
          <button class="chat-send" type="button" data-thread-send="${panel.id}" aria-label="Send message" disabled>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 4.5 20.5 12 4 19.5l2.7-7.5z" />
              <path d="M8.6 11h7.4v2H8.6z" fill="#ffffff" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  `;
}

function renderChatStreams(openPanels) {
  if (!openPanels.length) {
    return `
      <div class="chat-thread-shell chat-thread-shell--empty" aria-live="polite">
        <div class="chat-thread-title">No active card</div>
      </div>
    `;
  }

  if (openPanels.length === 1) {
    return renderChatStream(openPanels[0]);
  }

  return openPanels
    .map((panel, index) => {
      const stream = renderChatStream(panel);
      if (index === openPanels.length - 1) return stream;

      return `
        ${stream}
        <div
          class="chat-stream-divider"
          data-resize-divider="${index}"
          role="separator"
          aria-orientation="vertical"
          aria-label="Resize chat streams"
          tabindex="0"
        >
          <span class="chat-stream-divider__line" aria-hidden="true"></span>
        </div>
      `;
    })
    .join("");
}

function buildStreamColumns(count) {
  if (count <= 1) return "minmax(0, 1fr)";

  return state.threadSizes
    .slice(0, count)
    .map((size, index) =>
      index === count - 1 ? `minmax(0, ${size}fr)` : `minmax(0, ${size}fr) 28px`
    )
    .join(" ");
}

function renderSectionHeader(id, label, count = null) {
  const isOpen = state.sections[id];
  return `
    <button
      class="section-toggle-button"
      type="button"
      data-section-toggle="${id}"
      aria-expanded="${isOpen ? "true" : "false"}"
    >
      <span class="section-toggle-button__label">
        <span>${escapeHtml(label)}</span>
        ${count !== null ? `<span class="section-count-pill">${escapeHtml(count)}</span>` : ""}
      </span>
      <span class="section-toggle-button__icon ${isOpen ? "is-open" : ""}" aria-hidden="true">${carbonIcon("chevronDown")}</span>
    </button>
  `;
}

function renderResourceSummaryCard(item) {
  return `
    <div class="resource-metric-card">
      <div class="resource-metric-card__label">${escapeHtml(item.label)}</div>
      <div class="resource-metric-card__value">${escapeHtml(item.value)}</div>
      <div class="resource-metric-card__delta resource-metric-card__delta--${item.tone}">${escapeHtml(item.delta)}</div>
    </div>
  `;
}

function renderResourceStatus(item) {
  return `
    <div class="resource-status-row">
      <div class="resource-status-row__signal resource-status-row__signal--${item.state}"></div>
      <div class="resource-status-row__copy">
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.detail)}</span>
      </div>
      <span class="resource-status-pill resource-status-pill--${item.state}">${escapeHtml(item.state)}</span>
    </div>
  `;
}

function renderResourceActivity(item) {
  return `
    <div class="resource-activity-row">
      <div class="resource-activity-row__icon resource-activity-row__icon--${item.tone}"></div>
      <div class="resource-activity-row__copy">
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(item.detail)}</span>
        <small>${escapeHtml(item.time)}</small>
      </div>
    </div>
  `;
}

function renderTrendChart(items) {
  const points = items
    .map((item, index) => {
      const x = (index / (items.length - 1)) * 100;
      const y = 100 - item.value;
      return `${x},${y}`;
    })
    .join(" ");

  return `
    <div class="resource-chart">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="clusterTrendFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="rgba(73, 148, 226, 0.28)"></stop>
            <stop offset="100%" stop-color="rgba(73, 148, 226, 0.04)"></stop>
          </linearGradient>
        </defs>
        <polyline class="resource-chart__area" points="0,100 ${points} 100,100"></polyline>
        <polyline class="resource-chart__line" points="${points}"></polyline>
      </svg>
      <div class="resource-chart__labels">
        ${items.map((item) => `<span>${escapeHtml(item.month)}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderBarChart(items) {
  const max = Math.max(...items.map((item) => item.value), 1);
  return `
    <div class="resource-bar-chart">
      <div class="resource-bar-chart__bars">
        ${items
          .map(
            (item) => `
              <div class="resource-bar-chart__item">
                <div class="resource-bar-chart__bar-wrap">
                  <div class="resource-bar-chart__bar" style="height:${(item.value / max) * 100}%"></div>
                </div>
                <span>${escapeHtml(item.name)}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderBacklogItem(item) {
  return `
    <div class="resource-backlog-row">
      <div class="resource-backlog-row__copy">
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(item.detail)}</span>
      </div>
      <span class="resource-backlog-pill">${escapeHtml(item.state)}</span>
    </div>
  `;
}

function renderIncidentItem(item) {
  return `
    <div class="resource-incident-row">
      <strong>${escapeHtml(item.title)}</strong>
      <span>${escapeHtml(item.detail)}</span>
      <small>${escapeHtml(item.time)}</small>
    </div>
  `;
}

function getResourceMessages(resource) {
  const resourceName = resource.title || resource.name || "this resource";
  const resourceLocation = resource.description || "the primary environment";

  return [
    {
      sender: "assistant",
      text: `I reviewed ${resourceName} in ${resourceLocation}. The current posture looks stable, with a few items worth tracking before the next change window.`,
    },
    {
      sender: "user",
      text: "What changed most recently?",
    },
    {
      sender: "assistant",
      text: "Traffic climbed above the weekly baseline and a recent maintenance task completed successfully. I also flagged one follow-up item for the platform team to review.",
    },
    {
      sender: "user",
      text: "Keep an eye on it and summarize anything unusual.",
    },
  ];
}

function renderResourceWorkspace(resource) {
  const headerMetrics = resource.widgets.headerMetrics || [];
  const summary = resource.widgets.summary || [];
  const trend = resource.widgets.trend || [];
  const status = resource.widgets.status || [];
  const activity = resource.widgets.activity || [];
  const categories = resource.widgets.categories || [];
  const backlog = resource.widgets.backlog || [];
  const incidents = resource.widgets.incidents || [];

  return `
    <div class="resource-workspace">
      <div class="resource-chat-rail">
        <div class="resource-chat-history conversation-list">
          ${getResourceMessages(resource).map(renderConversationMessage).join("")}
        </div>
        <div class="resource-chat-input-shell">
          <div class="chat-input-wrap">
            <input
              class="chat-input"
              type="text"
              placeholder="Ask anything"
              aria-label="Resource chat input"
            />
            <button class="chat-send" type="button" aria-label="Send message" disabled>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4.5 20.5 12 4 19.5l2.7-7.5z" />
                <path d="M8.6 11h7.4v2H8.6z" fill="#ffffff" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="resource-dashboard">
        <div class="resource-inline-header">
          <p>Resource</p>
          <h2>${escapeHtml(resource.title)}</h2>
        </div>
        <div class="resource-header-metrics">
          ${headerMetrics
            .map(
              (item) => `
                <div class="resource-header-metric">
                  <span>${escapeHtml(item.label)}</span>
                  <strong>${escapeHtml(item.value)}</strong>
                  <small>${escapeHtml(item.delta)}</small>
                </div>
              `
            )
            .join("")}
        </div>
        <div class="resource-large-chart-card">
          <div class="resource-widget__header">
            <h3>Traffic trend</h3>
            <p>Request load over the last 7 months</p>
          </div>
          <div class="resource-widget__body">
            ${trend.length ? renderTrendChart(trend) : "<p>No trend data available yet.</p>"}
          </div>
        </div>
        ${summary.length ? `
        <div class="resource-metric-grid">
          ${summary.map(renderResourceSummaryCard).join("")}
        </div>
        ` : ""}
        <div class="resource-widget-grid resource-widget-grid--top">
          <section class="resource-widget resource-widget--stack">
            <div class="resource-widget__header">
              <h3>System status</h3>
              <p>Current health across the main cluster surfaces</p>
            </div>
            <div class="resource-widget__body resource-widget__body--stack">
              ${status.length ? status.map(renderResourceStatus).join("") : "<p>No status signals available yet.</p>"}
            </div>
          </section>
          <section class="resource-widget resource-widget--stack">
            <div class="resource-widget__header">
              <h3>Recent activity</h3>
              <p>Operational events and noteworthy changes</p>
            </div>
            <div class="resource-widget__body resource-widget__body--stack">
              ${activity.length ? activity.map(renderResourceActivity).join("") : "<p>No recent activity logged yet.</p>"}
            </div>
          </section>
        </div>
        <div class="resource-widget-grid">
          <section class="resource-widget">
            <div class="resource-widget__header">
              <h3>Workload mix</h3>
              <p>Relative traffic share by domain</p>
            </div>
            <div class="resource-widget__body">
              ${categories.length ? renderBarChart(categories) : "<p>No workload mix data available yet.</p>"}
            </div>
          </section>
          <section class="resource-widget">
            <div class="resource-widget__header">
              <h3>Open backlog</h3>
              <p>Follow-ups queued for the next platform cycle</p>
            </div>
            <div class="resource-widget__body resource-widget__body--stack">
              ${backlog.length ? backlog.map(renderBacklogItem).join("") : "<p>No backlog items queued yet.</p>"}
            </div>
          </section>
          <section class="resource-widget">
            <div class="resource-widget__header">
              <h3>Recent incidents</h3>
              <p>Last operational issues tied to this resource</p>
            </div>
            <div class="resource-widget__body resource-widget__body--stack">
              ${incidents.length ? incidents.map(renderIncidentItem).join("") : "<p>No recent incidents recorded.</p>"}
            </div>
          </section>
          <section class="resource-widget">
            <div class="resource-widget__header">
              <h3>Assistant summary</h3>
              <p>What Finn is watching for this resource right now</p>
            </div>
            <div class="resource-widget__body resource-widget__body--stack">
              <div class="resource-incident-row">
                <strong>Current focus</strong>
                <span>Traffic is healthy overall, but ingress and autoscaling behavior deserve a close watch before the next workload spike.</span>
                <small>Updated just now</small>
              </div>
              <div class="resource-incident-row">
                <strong>Suggested next step</strong>
                <span>Review the backlog items with the highest operational risk and line them up with the next maintenance window.</span>
                <small>Recommendation</small>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
}

function render() {
  const existingWorkspaceRail = document.querySelector(".workspace-rail");
  if (existingWorkspaceRail) {
    workspaceRailScrollTop = existingWorkspaceRail.scrollTop;
  }

  const existingChatStage = document.querySelector(".chat-stage");
  if (existingChatStage && !shouldResetChatStageScroll) {
    chatStageScrollTop = existingChatStage.scrollTop;
  }

  const active = getActivePanel();
  const activeResource = getActiveResource();
  const visiblePanels = getVisiblePanels();
  const openPanels = getOpenPanels();
  const attentionPanels = visiblePanels.filter((item) => item.id === "cluster-01-failed");
  syncThreadSizes(openPanels.length);

  app.className = activeResource ? "app-root--resource" : "";

  app.innerHTML = `
    <div class="home-shell ${activeResource ? "home-shell--resource" : ""}">
      <div class="app-frame ${activeResource ? "app-frame--resource" : ""}">
        <aside class="workspace-rail">
          <div class="brand-block">
            <div class="brand-mark">
              <img src="/_assets/v11/IBM-logo.svg?v=1" alt="IBM logo" />
            </div>
            <div class="brand-copy">
              <h1>Hello Adam,</h1>
              <button class="account-switcher" type="button" aria-label="Switch account">
                12580-Test-account
                <span class="chevron">${carbonIcon("chevronDown")}</span>
              </button>
            </div>
          </div>

          <section class="rail-section">
            ${renderSectionHeader("attention", "Needs attention", attentionPanels.length)}
            ${
              state.sections.attention
                ? `
            <div class="signal-list">
              ${attentionPanels.map(renderPanelCard).join("")}
            </div>
            `
                : ""
            }
          </section>

          <section class="rail-section">
            ${renderSectionHeader("tasks", "What would you like to do today?")}
            ${
              state.sections.tasks
                ? `
            <div class="signal-list">
              ${visiblePanels.filter((item) => item.id !== "cluster-01-failed").map(renderPanelCard).join("")}
            </div>
            `
                : ""
            }
          </section>

          <section class="rail-section rail-section--compact">
            ${renderSectionHeader("projects", "My resources")}
            ${
              state.sections.projects
                ? `
            <div class="project-list">
              ${resources
                .map(
                  (resource) => `
                    <button class="project-card ${state.activeResourceId === resource.id ? "is-active" : ""}" type="button" data-resource-id="${resource.id}">
                      <strong>${escapeHtml(resource.name)}</strong>
                      <span>${escapeHtml(resource.description)}</span>
                    </button>
                  `
                )
                .join("")}
            </div>
            `
                : ""
            }
          </section>
        </aside>

        <main class="chat-stage">
          <div class="chat-stage__glow"></div>
          <section
            class="chat-canvas ${!activeResource ? "chat-canvas--droppable" : ""}"
            data-view-key="${activeResource ? `resource-${activeResource.id}` : "default"}"
            ${!activeResource ? 'data-chat-dropzone="true"' : ""}
          >
            ${activeResource ? renderResourceWorkspace(activeResource) : ""}
            ${!activeResource && openPanels.length ? `
            <div
              class="chat-streams ${openPanels.length > 1 ? "chat-streams--split chat-streams--resizable" : ""} ${openPanels.length >= 3 ? "chat-streams--wide" : ""} ${openPanels.length === 4 ? "chat-streams--quad" : ""}"
              style="grid-template-columns: ${buildStreamColumns(openPanels.length)};"
            >
              ${renderChatStreams(openPanels)}
            </div>
            ` : ""}
            ${!activeResource && !openPanels.length ? `
            <div class="chat-input-shell chat-input-shell--empty">
              <div class="chat-input-wrap">
                <input
                  class="chat-input"
                  type="text"
                  placeholder="Ask Finn a question"
                  aria-label="Chat input"
                />
                <button class="chat-send" type="button" aria-label="Send message" disabled>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 4.5 20.5 12 4 19.5l2.7-7.5z" />
                    <path d="M8.6 11h7.4v2H8.6z" fill="#ffffff" />
                  </svg>
                </button>
              </div>
            </div>
            ` : ""}
          </section>
        </main>
      </div>
    </div>
  `;

  bindEvents();

  const nextWorkspaceRail = document.querySelector(".workspace-rail");
  if (nextWorkspaceRail) {
    nextWorkspaceRail.scrollTop = workspaceRailScrollTop;
  }

  const nextChatStage = document.querySelector(".chat-stage");
  if (nextChatStage) {
    nextChatStage.scrollTop = chatStageScrollTop;
    if (shouldResetChatStageScroll) {
      setTimeout(() => {
        nextChatStage.scrollTop = 0;
        const resourceHeader = document.querySelector(".resource-dashboard__header");
        if (resourceHeader) {
          const stageRect = nextChatStage.getBoundingClientRect();
          const headerRect = resourceHeader.getBoundingClientRect();
          nextChatStage.scrollTop += headerRect.top - stageRect.top - 8;
        }
      }, 0);
    }
  }

  shouldResetChatStageScroll = false;
}

function bindEvents() {
  document.querySelectorAll("[data-section-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const sectionId = button.dataset.sectionToggle;
      state.sections[sectionId] = !state.sections[sectionId];
      render();
    });
  });

  document.querySelectorAll("[data-panel-id]").forEach((button) => {
    button.addEventListener("dragstart", (event) => {
      const { panelId } = button.dataset;
      if (!panelId || !event.dataTransfer) return;

      event.dataTransfer.setData("text/plain", panelId);
      event.dataTransfer.effectAllowed = "copy";
      button.classList.add("is-dragging");
    });

    button.addEventListener("dragend", () => {
      button.classList.remove("is-dragging");
      document.querySelector("[data-chat-dropzone]")?.classList.remove("is-drop-active");
    });

    button.addEventListener("click", () => {
      state.activeResourceId = "";
      setPrimaryThread(button.dataset.panelId);
      render();
    });

    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        state.activeResourceId = "";
        setPrimaryThread(button.dataset.panelId);
        render();
      }
    });
  });

  document.querySelectorAll("[data-resource-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const existingChatStage = document.querySelector(".chat-stage");
      if (existingChatStage) {
        existingChatStage.scrollTop = 0;
      }
      setActiveResource(button.dataset.resourceId);
      render();
    });
  });

  const chatDropzone = document.querySelector("[data-chat-dropzone]");

  if (chatDropzone) {
    const activateDropzone = (event) => {
      if (!event.dataTransfer?.types?.includes("text/plain")) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = state.openThreadIds.length ? "copy" : "move";
      chatDropzone.classList.add("is-drop-active");
    };

    chatDropzone.addEventListener("dragenter", activateDropzone);
    chatDropzone.addEventListener("dragover", activateDropzone);

    chatDropzone.addEventListener("dragleave", (event) => {
      if (chatDropzone.contains(event.relatedTarget)) return;
      chatDropzone.classList.remove("is-drop-active");
    });

    chatDropzone.addEventListener("drop", (event) => {
      const panelId = event.dataTransfer?.getData("text/plain");
      chatDropzone.classList.remove("is-drop-active");

      if (!panelId) return;

      event.preventDefault();
      state.activeResourceId = "";

      if (state.openThreadIds.length) {
        addThread(panelId);
      } else {
        setPrimaryThread(panelId);
      }

      render();
    });
  }

  document.querySelectorAll(".signal-card__chat").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const card = button.closest("[data-panel-id]");
      const panelId = card?.dataset.panelId;

      if (!panelId) return;

      addThread(panelId);
      render();
    });
  });

  document.querySelectorAll("[data-delete-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const card = button.closest(".signal-card");
      const { deleteId } = button.dataset;

      if (!card || !deleteId) return;

      card.classList.add("is-removing");

      window.setTimeout(() => {
        state.deletedIds = [...state.deletedIds, deleteId];
        state.openThreadIds = state.openThreadIds.filter((id) => id !== deleteId);
        syncThreadSizes(state.openThreadIds.length);

        if (state.activeId === deleteId) {
          const nextVisible = getVisiblePanels();
          state.activeId = nextVisible[0]?.id || "";
          if (!state.openThreadIds.length && state.activeId) {
            state.openThreadIds = [state.activeId];
            resetThreadSizes(1);
          }
        }

        render();
      }, 220);
    });
  });

  document.querySelectorAll("[data-close-thread]").forEach((button) => {
    button.addEventListener("click", () => {
      const threadId = button.dataset.closeThread;
      state.openThreadIds = state.openThreadIds.filter((id) => id !== threadId);

      if (!state.openThreadIds.length) {
        state.activeId = "";
        state.threadSizes = [];
        render();
        return;
      }

      if (state.activeId === threadId) {
        state.activeId = state.openThreadIds[0] || "";
      }

      syncThreadSizes(state.openThreadIds.length);

      render();
    });
  });

  document.querySelectorAll("[data-thread-id]").forEach((thread) => {
    const threadId = thread.dataset.threadId;

    thread.addEventListener("mousedown", () => {
      if (!threadId || state.activeId === threadId) return;
      state.activeId = threadId;
      render();
    });
  });

  const streams = document.querySelector(".chat-streams--resizable");

  if (streams) {
    const applyResize = (dividerIndex, clientX) => {
      const rect = streams.getBoundingClientRect();
      const handleWidth = 28;
      const availableWidth = rect.width - handleWidth * (state.threadSizes.length - 1);
      const deltaRatio = (clientX - rect.left) / availableWidth;
      const leftBefore = state.threadSizes
        .slice(0, dividerIndex + 1)
        .reduce((sum, value) => sum + value, 0);
      const pairTotal = state.threadSizes[dividerIndex] + state.threadSizes[dividerIndex + 1];
      const pairStart = leftBefore - state.threadSizes[dividerIndex];
      const localRatio = deltaRatio - pairStart;
      const minSize = Math.max(0.06, Math.min(0.16, pairTotal / 2 - 0.01));
      const nextLeft = Math.max(minSize, Math.min(pairTotal - minSize, localRatio));
      state.threadSizes[dividerIndex] = nextLeft;
      state.threadSizes[dividerIndex + 1] = pairTotal - nextLeft;
      streams.style.gridTemplateColumns = buildStreamColumns(state.threadSizes.length);
    };

    const nudgeResize = (dividerIndex, direction) => {
      const pairTotal = state.threadSizes[dividerIndex] + state.threadSizes[dividerIndex + 1];
      const minSize = Math.max(0.06, Math.min(0.16, pairTotal / 2 - 0.01));
      const nextLeft = Math.max(
        minSize,
        Math.min(pairTotal - minSize, state.threadSizes[dividerIndex] + direction * 0.03)
      );
      state.threadSizes[dividerIndex] = nextLeft;
      state.threadSizes[dividerIndex + 1] = pairTotal - nextLeft;
      streams.style.gridTemplateColumns = buildStreamColumns(state.threadSizes.length);
    };

    document.querySelectorAll("[data-resize-divider]").forEach((divider) => {
      const dividerIndex = Number(divider.dataset.resizeDivider);

      divider.addEventListener("mousedown", (event) => {
        event.preventDefault();
        document.body.classList.add("is-resizing");

        const onMove = (moveEvent) => applyResize(dividerIndex, moveEvent.clientX);
        const onUp = () => {
          window.removeEventListener("mousemove", onMove);
          window.removeEventListener("mouseup", onUp);
          document.body.classList.remove("is-resizing");
        };

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
      });

      divider.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          nudgeResize(dividerIndex, -1);
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          nudgeResize(dividerIndex, 1);
        }
      });
    });
  }

  document.querySelectorAll(".chat-input-wrap").forEach((wrap) => {
    const input = wrap.querySelector(".chat-input");
    const sendButton = wrap.querySelector(".chat-send");

    if (!input || !sendButton) return;

    const threadId = input.dataset.threadInput;

    const syncSendState = () => {
      if (threadId) {
        state.draftByThreadId[threadId] = input.value;
      }
      sendButton.disabled = input.value.trim().length === 0;
    };

    input.addEventListener("input", syncSendState);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        sendThreadMessage(threadId);
      }
    });
    syncSendState();
  });

  document.querySelectorAll("[data-thread-send]").forEach((button) => {
    button.addEventListener("click", () => {
      sendThreadMessage(button.dataset.threadSend);
    });
  });
}

function sendThreadMessage(threadId) {
  if (!threadId) return;

  const draft = (state.draftByThreadId[threadId] || "").trim();
  if (!draft) return;

  const nextMessage = {
    sender: "user",
    author: "Adam",
    tone: "user",
    text: draft,
  };

  state.extraMessagesByThreadId[threadId] = [
    ...(state.extraMessagesByThreadId[threadId] || []),
    nextMessage,
  ];
  state.draftByThreadId[threadId] = "";
  render();
}

render();
