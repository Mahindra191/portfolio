export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  category: string;
  title: string;
  tagline: string;
  summary: string;
  tags: string[];
  role: string;
  accent: "amber" | "cyan";
  image: string;
  links: ProjectLink[];
  overview: string;
  architecture: string;
  whatIBuilt: string[];
  technology: string[];
  challenge: string;
  result: {
    metric: string;
    label: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "persistent-organizational-memory",
    category: "AI / GenAI",
    title: "Persistent Organizational Memory",
    tagline: "AI Knowledge Platform · RAG & AI Agents",
    summary:
      "AI-powered organizational knowledge platform combining vector search, knowledge graphs and structured data to retrieve and reason over documents and source code.",
    tags: ["Python", "FastAPI", "LangChain", "Qdrant"],
    role: "AI / Full-Stack Developer",
    accent: "amber",
    image: "/projects/persistent-memory.jpg",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Mahindra191/Persistent-Knowledge-Platform",
      },
    ],
    overview:
      "Most AI assistants reason from scratch every session — they have no memory of an organization's documents, codebase, or past decisions. This project asks what changes when that context persists: a knowledge platform that ingests documents and source code once, keeps a durable, queryable model of them, and lets a Q&A assistant and an autonomous coding assistant both draw on the same grounded context instead of starting cold every time.",
    architecture: `Documents
   ↓
Ingestion
   ↓
Chunking
   ↓
Embeddings
   ↓
Qdrant ─────┐
            ├── Retrieval → LLM → Answer
Neo4j ──────┘
   ↑
PostgreSQL`,
    whatIBuilt: [
      "Document ingestion",
      "Code parsing",
      "RAG",
      "Vector retrieval",
      "Knowledge graph",
      "Query planning",
      "Agent workflows",
      "Tool execution",
    ],
    technology: [
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "Qdrant",
      "Neo4j",
      "PostgreSQL",
      "Docker",
    ],
    challenge:
      "Agent workflows initially took more than 12 minutes to complete end to end. I profiled the pipeline and found the cost was concentrated in cold model loads, blocking generation calls, and redundant token usage across retrieval steps. Rebuilding around streaming responses, persistent sessions, and tighter token budgets cut execution time to under 2.5 minutes — the kind of change that comes from understanding the system, not just calling an API.",
    result: [
      { metric: "12+ min → <2.5 min", label: "agent pipeline latency" },
      { metric: "3", label: "knowledge layers — vector, graph, relational" },
      { metric: "2", label: "cooperating agents on one shared context" },
    ],
  },
  {
    slug: "finsight-agents",
    category: "AI / GenAI",
    title: "FinSight Agents",
    tagline: "Multi-Agent AI Platform · Real-Time Decisions",
    summary:
      "Real-time multi-agent platform where configurable AI personas analyze financial news and generate BUY/SELL/HOLD decisions.",
    tags: ["AI Agents", "FastAPI", "WebSockets", "Next.js"],
    role: "AI / Full-Stack Developer",
    accent: "amber",
    image: "/projects/finsight.jpg",
    links: [
      { label: "GitHub", href: "https://github.com/Mahindra191/FinSight" },
      { label: "Live Demo", href: "https://finsight-jade.vercel.app/" },
    ],
    overview:
      "A single AI model reading the news doesn't reflect how real trading desks think — different strategies weigh the same headline differently. FinSight models that directly: configurable AI personas, each with its own strategy and risk posture, independently analyze incoming financial news and arrive at a BUY, SELL, or HOLD call, streamed to the client the moment a decision is made.",
    architecture: `Financial News
      ↓
  News Ingestion
      ↓
 ┌────────────┬────────────┬────────────┐
 │ Persona A  │ Persona B  │ Persona C  │
 │ (strategy) │ (strategy) │ (strategy) │
 └─────┬──────┴─────┬──────┴─────┬──────┘
       │            │            │
       └──────── Decision Engine ┘
                    ↓
         WebSocket → Next.js UI
                    ↓
          BUY  /  SELL  /  HOLD`,
    whatIBuilt: [
      "News ingestion pipeline",
      "Configurable AI personas",
      "Decision engine",
      "WebSocket streaming layer",
      "Real-time Next.js dashboard",
      "Node.js service integration",
    ],
    technology: [
      "Python",
      "FastAPI",
      "Next.js",
      "Node.js",
      "WebSockets",
      "JavaScript",
      "AI Agents",
    ],
    challenge:
      "Streaming independent agent decisions to the frontend in real time meant the UI couldn't just poll for state — it needed a persistent connection that stayed correct as personas produced decisions asynchronously and at different speeds. I built the WebSocket layer around per-persona channels with explicit connection lifecycle handling, so the dashboard updates the instant any single persona resolves, without blocking on the slowest one.",
    result: [
      { metric: "Real-time", label: "WebSocket-based decision streaming" },
      { metric: "N personas", label: "independently configurable strategies" },
    ],
  },
  {
    slug: "snaplink",
    category: "Full-Stack",
    title: "SnapLink",
    tagline: "Distributed URL Shortener",
    summary:
      "Full-stack URL shortening platform with atomic code generation, caching, custom aliases and cloud deployment.",
    tags: ["React", "Spring Boot", "Redis", "MongoDB"],
    role: "Full-Stack Developer",
    accent: "cyan",
    image: "/projects/snaplink.jpg",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Mahindra191/url-shortener",
      },
      { label: "Live Demo", href: "https://url-926.vercel.app/" },
    ],
    overview:
      "A URL shortener looks trivial until two users request a short code in the same instant, or a link needs to survive a server restart. SnapLink is built as a proper distributed-systems exercise: atomic short-code generation under concurrent load, a caching layer that keeps redirects fast, and persistent storage that keeps them correct — deployed as a real cloud-hosted service, not a local demo.",
    architecture: `Long URL
   ↓
React Client
   ↓
Spring Boot API
   ↓
 ┌──────────────┬──────────────┐
 │ Redis        │ MongoDB      │
 │ (atomic code │ (persistent  │
 │ gen + cache) │ URL mapping) │
 └──────────────┴──────────────┘
        ↓
   Short URL → Redirect`,
    whatIBuilt: [
      "REST API design",
      "Atomic short-code generation (Redis)",
      "URL caching layer",
      "Custom alias support",
      "Persistent URL mappings",
      "Cloud deployment & reverse-proxy routing",
    ],
    technology: [
      "Java",
      "Spring Boot",
      "React",
      "JavaScript",
      "Redis",
      "MongoDB",
      "Vercel",
      "Render",
      "Git",
    ],
    challenge:
      "Generating short codes safely under concurrent requests was the core problem — a naive counter or random-string check-then-insert breaks under load. I used Redis' atomic increment operations to hand out collision-free codes without a database round trip on the hot path, then handled the frontend-to-backend split (Vercel + Render) with reverse-proxy rewrites so cross-origin requests behave like a single origin in production.",
    result: [
      { metric: "Atomic", label: "collision-free code generation under load" },
      { metric: "2 services", label: "Vercel frontend + Render backend, one origin" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
