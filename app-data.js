export const SHELL_NAV = [
  { label: "Home", path: "/", icon: "home" },
  { label: "Catalog", path: "/catalog", icon: "catalog" },
  { label: "Resources", path: "/resources", icon: "resource" },
  { label: "Activities", path: "/activities", icon: "activity" },
  { label: "Containers", path: "/containers", icon: "cluster" },
  { label: "Observability", path: "/observability", icon: "monitoring" },
  { label: "Infrastructure", path: "/infrastructure", icon: "grid" },
  { label: "Access (IAM)", path: "/access-iam", icon: "user" },
  { label: "Billing", path: "/billing", icon: "billing" },
];

export const HOME_EXPLORE = [
  {
    title: "Product Catalog",
    description: "Discover IBM Cloud services and jump into the products you use most.",
    action: "Explore",
    path: "/catalog",
    tone: "blue",
  },
  {
    title: "Resources",
    description: "See active workloads, regions, and service status across your account.",
    action: "Open",
    path: "/resources",
    tone: "green",
  },
  {
    title: "Billing and usage",
    description: "Track monthly spend, invoices, and active promotions in one place.",
    action: "Review",
    path: "/billing",
    tone: "yellow",
  },
  {
    title: "Access (IAM)",
    description: "Invite users, manage API keys, and assign access groups quickly.",
    action: "Manage",
    path: "/access-iam",
    tone: "ink",
  },
];

export const HOME_SOLUTIONS = [
  {
    title: "Application Hosting",
    description: "Run web apps, APIs, and mobile backends with secure global reach.",
    path: "/catalog",
    icon: "app",
  },
  {
    title: "Virtual Machines",
    description: "Provision VPC-based virtual servers for traditional workloads.",
    path: "/resources",
    icon: "vm",
  },
  {
    title: "Containers & Kubernetes",
    description: "Deploy and scale Kubernetes clusters and containerized services.",
    path: "/containers",
    icon: "cluster",
  },
  {
    title: "Observability",
    description: "Centralize logs, monitoring, and activity tracking across teams.",
    path: "/observability",
    icon: "monitoring",
  },
];

export const HOME_PROMOTIONS = [
  { title: "Use promo code BUYVPC for 60% off Virtual Servers", subtitle: "Expires April 30, 2026" },
  { title: "Apply VPC1000 for $1,000 of confidential compute credits", subtitle: "Remaining credit: $215" },
  { title: "Enterprise support review available for production accounts", subtitle: "Schedule with IBM Cloud Support" },
  { title: "AI500 credit available for watsonx workloads", subtitle: "Remaining credit: $320" },
];

export const RESOURCE_ITEMS = [
  { id: "vsi-prod-web-01", name: "vsi-prod-web-01", group: "default", region: "us-south-1", product: "Virtual Server Instances", status: "Running", icon: "vsi", tags: ["production", "frontend"], summary: "Production web tier serving customer traffic." },
  { id: "vpc-network-prod", name: "vpc-network-prod", group: "network", region: "us-south-2", product: "Virtual Server Instances", status: "Failed", icon: "vsi", tags: ["networking"], summary: "Critical network node with recent connectivity loss." },
  { id: "vsi-dev-sandbox-03", name: "vsi-dev-sandbox-03", group: "staging", region: "eu-de-1", product: "Virtual Server Instances", status: "Running", icon: "vsi", tags: ["development"], summary: "Sandbox compute for developer experiments." },
  { id: "cos-media-assets", name: "cos-media-assets", group: "production", region: "us-east-1", product: "Cloud Object Storage", status: "Running", icon: "storage", tags: ["media"], summary: "Object storage for images and downloadable content." },
  { id: "cos-migration-store", name: "cos-migration-store", group: "default", region: "us-south-3", product: "Cloud Object Storage", status: "Failed", icon: "storage", tags: ["migration"], summary: "Migration bucket currently blocked by failed sync tasks." },
  { id: "cos-backup-archive", name: "cos-backup-archive", group: "default", region: "us-south-1", product: "Cloud Object Storage", status: "Running", icon: "storage", tags: ["backup"], summary: "Long-term archival storage for weekly backups." },
  { id: "fn-data-processor", name: "fn-data-processor", group: "default", region: "us-south-3", product: "Serverless", status: "Warning", icon: "serverless", tags: ["functions"], summary: "Event-driven data processing flow with warning thresholds." },
  { id: "fn-event-handler", name: "fn-event-handler", group: "production", region: "us-south-1", product: "Serverless", status: "Running", icon: "serverless", tags: ["events"], summary: "Primary event fan-out for customer notifications." },
  { id: "fn-api-gateway", name: "fn-api-gateway", group: "default", region: "eu-de-1", product: "Serverless", status: "Running", icon: "serverless", tags: ["api"], summary: "Serverless gateway for regional edge integrations." },
  { id: "iks-prod-cluster-01", name: "iks-prod-cluster-01", group: "default", region: "us-south-1", product: "Clusters", status: "Running", icon: "cluster", tags: ["kubernetes"], summary: "Primary production cluster for core applications." },
  { id: "iks-staging-cluster-02", name: "iks-staging-cluster-02", group: "staging", region: "eu-de-1", product: "Clusters", status: "Running", icon: "cluster", tags: ["staging"], summary: "Cluster for pre-production validation." },
  { id: "iks-dev-cluster-03", name: "iks-dev-cluster-03", group: "default", region: "us-south-2", product: "Clusters", status: "Running", icon: "cluster", tags: ["development"], summary: "Developer cluster with shared namespaces." },
  { id: "log-prod-us-south", name: "log-prod-us-south", group: "observability", region: "us-south-1", product: "Logging instances", status: "Running", icon: "logging", tags: ["logging"], summary: "Centralized production log analysis instance." },
  { id: "log-staging-eu-de", name: "log-staging-eu-de", group: "staging", region: "eu-de-1", product: "Logging instances", status: "Running", icon: "logging", tags: ["staging"], summary: "Staging log search and retention." },
  { id: "log-dev-analytics", name: "log-dev-analytics", group: "analytics", region: "us-south-2", product: "Logging instances", status: "Running", icon: "logging", tags: ["analytics"], summary: "Development and analytics logging workspace." },
  { id: "mon-prod-infra", name: "mon-prod-infra", group: "observability", region: "us-south-1", product: "Monitoring instances", status: "Running", icon: "monitoring", tags: ["monitoring"], summary: "Infrastructure monitoring with alert policies." },
  { id: "mon-app-performance", name: "mon-app-performance", group: "production", region: "us-south-2", product: "Monitoring instances", status: "Running", icon: "monitoring", tags: ["performance"], summary: "Application performance monitors and SLO dashboards." },
  { id: "mon-network-health", name: "mon-network-health", group: "default", region: "us-south-3", product: "Monitoring instances", status: "Running", icon: "monitoring", tags: ["network"], summary: "Network latency and health observability workspace." },
];

export const ACTIVITY_ITEMS = [
  { id: "activity-1", title: 'A cluster in "Resource 1" has lost networking to an application server', severity: "failed", time: "February 28, 2026 5:00 AM", resourceId: "iks-prod-cluster-01", state: "Needs attention" },
  { id: "activity-2", title: '"Resource 2" has lost connection to the server', severity: "failed", time: "February 28, 2026 5:00 AM", resourceId: "vpc-network-prod", state: "Needs attention" },
  { id: "activity-3", title: 'Storage capacity in "Resource 3" is running low', severity: "warning", time: "February 28, 2026 5:00 AM", resourceId: "cos-migration-store", state: "Needs attention" },
  { id: "activity-4", title: 'A recovery action for "Resource 4" is pending approval', severity: "warning", time: "February 28, 2026 5:00 AM", resourceId: "fn-data-processor", state: "Needs attention" },
  { id: "activity-5", title: '"automate cluster creation" task has been scheduled', severity: "info", time: "February 28, 2026 5:00 AM", resourceId: "iks-dev-cluster-03", state: "Scheduled" },
  { id: "activity-6", title: "cluster03 is being created", severity: "info", time: "February 28, 2026 5:00 AM", resourceId: "iks-dev-cluster-03", state: "In progress" },
  { id: "activity-7", title: "cluster04 is being deleted", severity: "info", time: "February 28, 2026 5:00 AM", resourceId: "iks-staging-cluster-02", state: "In progress" },
  { id: "activity-8", title: "prod-test-tgw is being deleted", severity: "info", time: "February 28, 2026 5:00 AM", resourceId: "vpc-network-prod", state: "In progress" },
];

export const CONTAINER_PRODUCTS = [
  { id: "containers", title: "IBM Cloud Kubernetes Service", description: "Managed Kubernetes clusters with VPC integration.", value: "3 active clusters" },
  { id: "registry", title: "Container Registry", description: "Private image registry with regional storage.", value: "12 repos" },
  { id: "openshift", title: "Red Hat OpenShift on IBM Cloud", description: "Managed OpenShift with enterprise operators.", value: "1 subscription" },
];

export const CLUSTERS = [
  { id: "iks-prod-cluster-01", name: "iks-prod-cluster-01", zone: "us-south-1", workers: 6, status: "normal", version: "1.30", flavor: "bx2.4x16" },
  { id: "iks-staging-cluster-02", name: "iks-staging-cluster-02", zone: "eu-de-1", workers: 4, status: "normal", version: "1.29", flavor: "bx2.2x8" },
  { id: "iks-dev-cluster-03", name: "iks-dev-cluster-03", zone: "us-south-2", workers: 3, status: "warning", version: "1.29", flavor: "bx2.2x8" },
];

export const BILLING_TABS = [
  { id: "overview", label: "Overview" },
  { id: "usage", label: "Usage" },
  { id: "billing-items", label: "Billing items" },
  { id: "payments", label: "Payments" },
  { id: "invoices", label: "Invoices" },
  { id: "promotions", label: "Promotions" },
  { id: "settings", label: "Settings" },
];

export const BILLING_OVERVIEW = {
  mtdSpend: "$22,340.00",
  forecast: "$24,856.00",
  creditsRemaining: "$535.00",
  topServices: [
    { name: "Red Hat OpenShift on IBM Cloud", amount: "$4,210.00" },
    { name: "Cloud Object Storage Standard", amount: "$2,115.00" },
    { name: "Virtual Server (bx2-8x32)", amount: "$1,945.00" },
  ],
};

export const BILLING_ITEMS = [
  { name: "Red Hat OpenShift on IBM Cloud", type: "Infrastructure", period: "Mar 1-31, 2026", amount: "$4,210.00", status: "Billed" },
  { name: "Cloud Object Storage Standard", type: "Storage", period: "Mar 1-31, 2026", amount: "$2,115.00", status: "Billed" },
  { name: "Virtual Server (bx2-8x32)", type: "Compute", period: "Mar 1-31, 2026", amount: "$1,945.00", status: "Pending" },
  { name: "Databases for PostgreSQL", type: "Database", period: "Mar 1-31, 2026", amount: "$990.00", status: "Billed" },
  { name: "Watson Discovery", type: "AI / ML", period: "Mar 1-31, 2026", amount: "$780.00", status: "Pending" },
  { name: "VPC Network", type: "Networking", period: "Mar 1-31, 2026", amount: "$610.00", status: "Billed" },
];

export const PAYMENTS = [
  { date: "Mar 1, 2026", method: "Credit Card ****4821", amount: "$22,340.00", status: "Completed" },
  { date: "Feb 1, 2026", method: "Credit Card ****4821", amount: "$19,720.00", status: "Completed" },
  { date: "Jan 1, 2026", method: "Credit Card ****4821", amount: "$18,950.00", status: "Completed" },
  { date: "Dec 1, 2025", method: "Credit Card ****4821", amount: "$17,680.00", status: "Completed" },
];

export const INVOICES = [
  { id: "INV-2026-003", date: "Mar 1, 2026", amount: "$24,856.00", status: "Open" },
  { id: "INV-2026-002", date: "Feb 1, 2026", amount: "$22,340.00", status: "Paid" },
  { id: "INV-2026-001", date: "Jan 1, 2026", amount: "$19,720.00", status: "Paid" },
  { id: "INV-2025-012", date: "Dec 1, 2025", amount: "$17,680.00", status: "Paid" },
];

export const PROMOTIONS = [
  { code: "VPC1000", description: "VPC Infrastructure Credit", credit: "$1,000.00", remaining: "$215.00", expires: "Jun 30, 2026", status: "Active" },
  { code: "AI500", description: "Watson AI Trial Credit", credit: "$500.00", remaining: "$320.00", expires: "Sep 15, 2026", status: "Active" },
  { code: "STARTUP2025", description: "Startup Program Credit", credit: "$10,000.00", remaining: "$0.00", expires: "Dec 31, 2025", status: "Expired" },
];

export const IAM_TABS = [
  { id: "overview", label: "Overview" },
  { id: "dashboard", label: "Dashboard" },
  { id: "users", label: "Users" },
  { id: "api-keys", label: "API keys" },
  { id: "access-groups", label: "Access groups" },
];

export const IAM_NEWS = [
  {
    title: "Limit access with resource attribute-based conditions",
    date: "7 December 2023",
    description: "Create a single policy with multiple resource attribute-based conditions instead of separate rules.",
  },
  {
    title: "Centrally administer your multi-account environment",
    date: "5 September 2023",
    description: "Use enterprise IAM templates to apply consistent access across accounts more quickly.",
  },
];

export const IAM_USERS = [
  { name: "Adam Habensusz", email: "adam.h@company.com", status: "Active", lastLogin: "2 hours ago" },
  { name: "Sarah Chen", email: "sarah.chen@company.com", status: "Active", lastLogin: "1 day ago" },
  { name: "Marcus Johnson", email: "m.johnson@company.com", status: "Active", lastLogin: "3 days ago" },
  { name: "Emily Rivera", email: "e.rivera@company.com", status: "Pending", lastLogin: "Never" },
  { name: "James Kim", email: "j.kim@company.com", status: "Active", lastLogin: "5 hours ago" },
];

export const IAM_GROUPS = [
  { name: "Admin Group", description: "Full administrator access", members: 3 },
  { name: "Developer Group", description: "Access to development resources", members: 8 },
  { name: "Viewer Group", description: "Read-only access to all resources", members: 12 },
  { name: "Network Admin", description: "Network infrastructure management", members: 2 },
];

export const IAM_API_KEYS = [
  { name: "Production API Key", created: "2024-01-15", lastUsed: "2 hours ago", status: "Active" },
  { name: "Dev Environment Key", created: "2024-03-22", lastUsed: "1 day ago", status: "Active" },
  { name: "CI/CD Pipeline Key", created: "2023-11-08", lastUsed: "30 mins ago", status: "Active" },
  { name: "Legacy Integration", created: "2023-06-14", lastUsed: "45 days ago", status: "Inactive" },
];

export const INVITE_GROUP_CHOICES = [
  { name: "Admin Group", description: "Full admin access" },
  { name: "Developer Group", description: "Development resources" },
  { name: "Viewer Group", description: "Read-only access" },
  { name: "Security Team", description: "Security and compliance" },
];

export const OBSERVABILITY_INVENTORY = [
  { label: "Logging instances", count: 3 },
  { label: "Monitoring instances", count: 3 },
  { label: "Activity Tracker routes", count: 0 },
];
