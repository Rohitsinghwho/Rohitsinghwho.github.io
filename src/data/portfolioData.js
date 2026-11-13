// Single source of truth for static content. Swap usePortfolioData() to use an API instead.
const portfolioData = {
  personal: {
    firstName: "Rohit",
    lastName: "Singh",
    role: "full stack developer",
    accent: "full stack",
    location: { city: "remote", country: "", flag: "🌍", region: "worldwide" },
    tagline:
      "one year of building, breaking and shipping. i like understanding how systems work under the hood, from code analyzers to distributed queues.",
    portraitUrl: "https://avatars.githubusercontent.com/u/113612032?v=4",
    socials: {
      linkedin: "",
      github: "https://github.com/Rohitsinghwho",
      instagram: "https://www.instagram.com/rohitsinghwho",
      twitter: "",
    },
  },
  about: {
    paragraphs: [
      {
        id: 1,
        text: "i'm a full stack developer with one year of hands-on experience, building across the node.js, typescript and react stack.",
        highlights: [
          { word: "full stack developer", color: "blue" },
          { word: "node.js", color: "purple" },
          { word: "typescript", color: "purple" },
          { word: "react", color: "purple" },
        ],
      },
      {
        id: 2,
        text: "i learn by building things from scratch: a static code analyzer, a distributed task queue, a rate limiter, a caching proxy. the goal is to know how real tools like celery, bullmq and sqs actually work.",
        highlights: [
          { word: "static code analyzer", color: "blue" },
          { word: "distributed task queue", color: "blue" },
          { word: "rate limiter", color: "blue" },
          { word: "caching proxy", color: "blue" },
        ],
      },
      {
        id: 3,
        text: "i care about reliability, durability and clean architecture, and i write docs, tests and runbooks for what i ship.",
        highlights: [
          { word: "reliability", color: "green" },
          { word: "durability", color: "green" },
          { word: "clean architecture", color: "green" },
        ],
      },
      {
        id: 4,
        text: "currently deepening my system design knowledge and learning something new every day.",
        highlights: [{ word: "system design", color: "blue" }],
      },
    ],
    collaborations: [
      {
        id: 1,
        text: "teams building backend-heavy products where reliability matters.",
        highlights: [
          { word: "backend-heavy", color: "blue" },
          { word: "reliability", color: "green" },
        ],
      },
      {
        id: 2,
        text: "open source projects and developer tooling.",
        highlights: [{ word: "developer tooling", color: "purple" }],
      },
      {
        id: 3,
        text: "people who like learning in public.",
        highlights: [{ word: "learning in public", color: "green" }],
      },
    ],
    whereIWork:
      "working remotely, open to roles and collaborations worldwide. full time coder, currently available for new opportunities.",
    stack: [
      "javascript", "typescript", "node.js", "react", "next.js", "express",
      "redis", "prisma", "postgresql", "fastapi", "websockets", "system design",
    ],
  },
  projects: [
    {
      id: "01",
      name: "CodeFlow Analyzer",
      tags: ["node.js", "acorn", "ast", "graph algorithms", "express"],
      year: 2026,
      description:
        "reads a javascript project and shows which function calls which. point it at a folder and it tells you what functions exist, who calls them, and the shortest call chain between any two. built on a real parser, so it never runs your code and never guesses from text patterns.",
      flow: [
        { label: "project folder" },
        { label: "scanner", hl: true },
        { label: "parser", hl: true },
        { label: "analyzer", hl: true },
        { label: "linker", hl: true },
        { label: "graph" },
      ],
      features: [
        "functions, methods (incl. #private) and callbacks",
        "es import/export and commonjs require",
        "links calls across files with certain / guess confidence",
        "callers, callees and shortest path, safe against recursion",
      ],
      code: `const cf = new CodeFlow();
const { fileResults } = await cf.analyze("./project");
const graph = cf.buildGraph(fileResults);

graph.getCallees("main.js#main");
graph.findPath("b.js#init", "b.js#helper");
// ["b.js#init", "b.js#helper"]`,
      status: "javascript · in progress (api + ui next)",
      sourceUrl: "https://github.com/Rohitsinghwho/CodeFlow-Analyzer",
    },
    {
      id: "02",
      name: "Realtime Distributed Task Queue",
      tags: ["typescript", "node.js", "redis", "workers", "dead letter queue", "retries"],
      year: 2026,
      description:
        "a production-grade distributed task queue built from scratch, covering persistence, reliability, durability and concurrency. built to understand how celery, bullmq and sqs work under the hood, with docs for the data model, failure modes, runbook and performance tuning.",
      flow: [
        { label: "producer" },
        { label: "redis queue", hl: true },
        { label: "worker", hl: true },
        { label: "ack" },
        { label: "fail → dead letter queue", danger: true },
      ],
      features: [
        "lease / visibility timeout so no two workers grab one task",
        "ack handling and bounded retries with backoff + jitter",
        "dead letter queue for tasks that keep failing",
        "idempotent processing and durable persistence",
      ],
      code: `// producer
await queue.add("send-email", { to, subject });

// worker
worker.process(async (job) => {
  await sendEmail(job.data);
  // ack on success, retry or DLQ on failure
});`,
      status: "typescript · redis",
      sourceUrl: "https://github.com/Rohitsinghwho/Task-Queue-Management",
    },
    {
      id: "03",
      name: "GitHub Profile Analysis",
      tags: ["javascript", "node.js", "express", "prisma", "sql", "render"],
      year: 2026,
      description:
        "a full stack web app that analyzes a github profile and turns it into insights, deployed live. express backend, prisma orm and a database behind it.",
      flow: [
        { label: "client" },
        { label: "express api", hl: true },
        { label: "github api" },
        { label: "prisma / db", hl: true },
      ],
      features: [
        "fetches and aggregates public github data",
        "schema and migrations managed with prisma",
        "deployed on render",
      ],
      code: "",
      status: "live",
      liveUrl: "https://github-profile-analysis-veh2.onrender.com",
      sourceUrl: "https://github.com/Rohitsinghwho/github-profile-analysis",
    },
  ],
  moreRepos: [
    { name: "Token Bucket Rate Limiter", desc: "token bucket rate limiter implemented in node.js.", lang: "javascript", url: "https://github.com/Rohitsinghwho/Token-bucket-rate-limitter" },
    { name: "Caching Proxy Server", desc: "http/https proxy in node.js and typescript that caches get responses in memory.", lang: "javascript", url: "https://github.com/Rohitsinghwho/Proxy-Server" },
    { name: "GitHub Activity Notifier", desc: "webhook server that notifies you when an issue or pr is raised on your repo.", lang: "typescript", url: "https://github.com/Rohitsinghwho/Github-Activity-Notifier" },
    { name: "System Design Notes", desc: "my running notes on system design learning.", lang: "notes", url: "https://github.com/Rohitsinghwho/SystemDesign" },
  ],
  // no real testimonials yet — the section stays hidden until you add some:
  // { id: 1, quote: "", authorName: "", authorTitle: "", avatarUrl: "" }
  testimonials: [],
};

export default portfolioData;
