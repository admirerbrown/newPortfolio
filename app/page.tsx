'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero Section - Full Viewport */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden glitch-hero">
        {/* Animated Grid Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.24)_1px,transparent_1px)] bg-[length:50px_50px] opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/50 to-slate-950" />
        </div>

        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-violet-500/60" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-500/60" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-emerald-500/60" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-emerald-500/60" />

        {/* Main Content Container */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-700/50 text-slate-400 transition hover:border-violet-500/60 hover:text-violet-400 hover:bg-violet-950/30"
                title="GitHub"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-700/50 text-slate-400 transition hover:border-violet-500/60 hover:text-violet-400 hover:bg-violet-950/30"
                title="LinkedIn"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-700/50 text-slate-400 transition hover:border-emerald-500/60 hover:text-emerald-400 hover:bg-emerald-950/30"
                title="Twitter"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 002.856-3.915 10 10 0 01-2.891.775 4.958 4.958 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="mailto:samuel@example.com"
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-700/50 text-slate-400 transition hover:border-purple-500/60 hover:text-purple-400 hover:bg-purple-950/30"
                title="Email"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
            <div className="inline-flex items-center gap-4 rounded-2xl border border-slate-700/70 bg-slate-950/90 px-4 py-4 shadow-[0_24px_90px_-40px_rgba(15,23,42,0.95)] backdrop-blur-sm glitch-card">
              <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-violet-500/70 bg-slate-950/80 p-1 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.15)] sm:h-24 sm:w-24 animate-heartbeat">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-900/70 shadow-[0_16px_40px_-24px_rgba(99,102,241,0.4)]">
                  <img
                    src="/sammyNewProfile2.png"
                    alt="Profile picture of Samuel Kyere"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full ring-2 ring-emerald-400/20" />
              </div>
              <div className="space-y-2 text-left">
                <p className="font-mono text-xs text-slate-500 tracking-wide">
                  user@sammy:~$ <span className="text-violet-400">// profile</span>
                </p>
                <p className="font-mono text-base font-semibold text-slate-100">
                  Samuel Kyere
                </p>
                <p className="font-mono text-sm text-emerald-300">
                  Software Engineer
                </p>
              </div>
            </div>
          </div>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Column 1: Core Value Proposition (Left Side) */}
            <div className="relative -top-8 space-y-8">
              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/60 bg-emerald-950/30 px-3 py-1.5">
                  <span className="relative inline-flex h-2 w-2">
                    <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-mono text-xs font-semibold text-emerald-300">
                    SYSTEMS ACTIVE // AVAILABLE FOR ENGINEERING ROLES
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-5xl">
                  Software &{" "}
                  <span className="glitch-text bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent" data-text="Integration Engineer">
                    Integration Engineer
                  </span>
                </h1>
              </div>

              {/* Primary Body Copy */}
              <p className="text-lg leading-relaxed text-slate-300">
                I build the systems that connect code, data, automation, and AI.
                I design backend services, multi-system integrations,
                event-driven webhook architectures, and automated data pipelines
                using Node.js, Python, n8n, and modern AI infrastructure.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-lg border border-violet-600/60 bg-violet-950/40 px-5 py-2.5 text-sm font-semibold text-violet-200 transition hover:border-violet-500 hover:bg-violet-900/60 hover:shadow-lg hover:shadow-violet-500/20"
                >
                  Examine Architecture
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg border border-emerald-600/60 bg-emerald-950/40 px-5 py-2.5 font-mono text-sm font-semibold text-emerald-200 transition hover:border-emerald-500 hover:bg-emerald-900/60 hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  Download Technical Resume (PDF)
                </a>
              </div>
            </div>

            {/* Column 2: Live System Status Component (Right Side) */}
            <div className="relative">
              {/* Gradient Background Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-violet-600/20 via-emerald-600/10 to-purple-600/20 rounded-lg blur-xl opacity-50" />

              <div className="relative space-y-4 rounded-lg border border-zinc-800/80 bg-gradient-to-br from-zinc-900/60 to-zinc-950/80 p-6 backdrop-blur-sm">
                {/* Dashboard Header */}
                <div className="pb-4 border-b border-zinc-800/60">
                  <p className="font-mono text-xs text-slate-500 tracking-wide">
                    <span className="text-violet-400">➤</span> Host:
                    Localhost:8000 // Database:{" "}
                    <span className="text-emerald-400 font-semibold">
                      Active
                    </span>
                  </p>
                </div>

                {/* System Footprint Row 1 */}
                <div className="space-y-2 pb-2">
                  <p className="font-mono text-xs uppercase tracking-wide text-violet-400 font-semibold">
                    ◆ Manvelle Menswear PRODUCTION ENGINE
                  </p>
                  <p className="text-sm text-slate-200 pl-4 border-l-2 border-violet-600/50">
                    ~70% reduction in manual operations via multi-modal GPT-4o
                    state streams.
                  </p>
                </div>

                {/* System Footprint Row 2 */}
                <div className="space-y-2 py-2 border-t border-zinc-800/60">
                  <p className="font-mono text-xs uppercase tracking-wide text-emerald-400 font-semibold">
                    ◆ DATAOPS SEEDING PIPELINE
                  </p>
                  <p className="text-sm text-slate-200 pl-4 border-l-2 border-emerald-600/50">
                    Cloudflare Edge Workers processing high-volume CSV scrubbing
                    into Confluence API hooks.
                  </p>
                </div>

                {/* System Footprint Row 3 */}
                <div className="space-y-2 pt-2 border-t border-zinc-800/60">
                  <p className="font-mono text-xs uppercase tracking-wide text-purple-400 font-semibold">
                    ◆ LOCALIZED RAG CLUSTER
                  </p>
                  <p className="text-sm text-slate-200 pl-4 border-l-2 border-purple-600/50">
                    Python-driven semantic querying pipeline running over
                    localized ChromaDB vector indexes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative py-20 border-t border-zinc-800/40"
      >
        {/* Decorative Code Divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-slate-950">
          <p className="font-mono text-xs text-slate-500 tracking-widest">
            /* FEATURED SYSTEMS */
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
                Featured Work
              </p>
              <h2 className="text-4xl font-bold text-white">
                Projects & Case Studies
              </h2>
              <p className="mx-auto max-w-2xl text-slate-400">
                A selection of projects that showcase my expertise in building
                scalable systems and automation.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Project Card 1 */}
              <div className="group overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 transition hover:border-slate-600 hover:bg-slate-900/80">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-600/20 to-blue-600/20">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/65418420e2d3f205e0a0db76/dd849595-54ac-48fd-a3db-86631070485e/Ingenuity+Rotation+Sim.gif"
                    alt="Automation Pipeline"
                    className="h-full w-full object-cover opacity-60 group-hover:opacity-80 transition"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-cyan-400">
                      Infrastructure
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-white">
                      Webhook Automation
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Built a high-throughput webhook processing system handling
                    1.2k requests per minute with 99.8% reliability.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                      n8n
                    </span>
                    <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                      Python
                    </span>
                    <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                      APIs
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="group overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 transition hover:border-slate-600 hover:bg-slate-900/80">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-sky-600/20 to-cyan-600/20">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/65418420e2d3f205e0a0db76/dd849595-54ac-48fd-a3db-86631070485e/Ingenuity+Rotation+Sim.gif"
                    alt="Data Pipeline"
                    className="h-full w-full object-cover opacity-60 group-hover:opacity-80 transition"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-sky-400">
                      Operations
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-white">
                      Data Pipelines
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Designed scalable data flow systems with comprehensive error
                    handling, recovery, and monitoring.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                      Node.js
                    </span>
                    <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                      Docker
                    </span>
                    <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                      PostgreSQL
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="group overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 transition hover:border-slate-600 hover:bg-slate-900/80">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-violet-600/20 to-sky-600/20">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/65418420e2d3f205e0a0db76/dd849595-54ac-48fd-a3db-86631070485e/Ingenuity+Rotation+Sim.gif"
                    alt="System Integration"
                    className="h-full w-full object-cover opacity-60 group-hover:opacity-80 transition"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-violet-400">
                      Integration
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-white">
                      System Architecture
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400">
                    Architected distributed systems with microservices, message
                    queues, and real-time monitoring dashboards.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                      Microservices
                    </span>
                    <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                      Redis
                    </span>
                    <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
                      Kubernetes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
