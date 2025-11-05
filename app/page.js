"use client";

// --- Icon Components (unchanged logic, simplified styling) ---

const CogIcon = () => (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.34 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774a1.125 1.125 0 0 1 .12 1.45l-.527.737c-.25.35-.272.806-.108 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.11v1.093c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.142.854.108 1.204l.527.738a1.125 1.125 0 0 1-.12 1.45l-.773.773a1.125 1.125 0 0 1-1.45.12l-.737-.527c-.35-.25-.806-.272-1.204-.108-.397.165-.71.505-.78.93l-.15.893c-.09.543-.56.94-1.11.94h-1.093c-.55 0-1.02-.397-1.11-.94l-.149-.893c-.07-.425-.383-.765-.78-.93-.398-.165-.854-.142-1.204.108l-.738.527a1.125 1.125 0 0 1-1.45-.12l-.773-.773a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.11v-1.093c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.764-.383.93-.78.165-.398.142-.854-.108-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.806.272 1.204.108.397-.165.71-.505.78-.93l.15-.893zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
    />
  </svg>
);

const CloudArrowUpIcon = () => (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.33-2.13 3 3 0 0 1 .11-5.875"
    />
  </svg>
);

const DocumentTextIcon = () => (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
    />
  </svg>
);

// --- Feature Card (Minimal Clean style) ---

const FeatureCard = ({ icon: Icon, title, description, href, ctaText }) => (
  <a
    href={href}
    className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300 dark:border-zinc-700 dark:bg-zinc-900"
  >
    <div>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition group-hover:bg-blue-100 group-hover:text-blue-600 dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-blue-900/40 dark:group-hover:text-blue-400">
        <Icon />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-zinc-50">{title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-zinc-400">
        {description}
      </p>
    </div>

    <div className="mt-4 text-sm font-medium text-blue-600 transition group-hover:translate-x-1 dark:text-blue-400">
      {ctaText} →
    </div>
  </a>
);

// --- Home Page (Refined layout, minimal clean design) ---

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 dark:bg-zinc-950 dark:text-zinc-50">
      <main className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        {/* Header / Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Drone Management <span className="text-blue-600">🚀</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
            
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/config"
              className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Start Configuration
            </a>

            <a
              href="/logs"
              className="rounded-lg bg-gray-100 px-6 py-3 text-base font-semibold text-gray-800 shadow-sm transition hover:bg-gray-200 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700"
            >
              Review Latest Logs
            </a>
          </div>
        </section>

        {/* Feature Section */}
        <section>
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
            Core Operations
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <FeatureCard
              icon={CogIcon}
              title="Manage Configuration"
              description="View and manage your drone’s core settings, including ID, name, and operational parameters."
              href="/config"
              ctaText="Go to Config"
            />

            <FeatureCard
              icon={CloudArrowUpIcon}
              title="Submit Operational Data"
              description="Easily submit new operational data, such as temperature logs, directly from the field."
              href="/submit"
              ctaText="Submit New Log"
            />

            <FeatureCard
              icon={DocumentTextIcon}
              title="Review History & Logs"
              description="Access and review the complete, paginated history of all submitted logs to track performance."
              href="/logs"
              ctaText="View All Logs"
            />
          </div>
        </section>
      </main>
    </div>
  );
}