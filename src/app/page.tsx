import Link from "next/link";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl space-y-32 px-6 py-24">
      {/* HERO */}
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Dnyaneshwar Shinde
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Digital Product Lead building 0→1 MVPs, AI-enabled tools, and scalable
          SaaS platforms.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/case-study-theater"
            className="rounded-md bg-black px-6 py-3 text-white hover:bg-gray-800"
          >
            View Case Studies
          </Link>

          <Link
            href="/thought-leadership-blog"
            className="rounded-md border border-gray-300 px-6 py-3 hover:bg-gray-50"
          >
            Thought Leadership
          </Link>
        </div>
      </div>

      {/* PRODUCT AREAS */}
      <div className="grid gap-8 md:grid-cols-2">
        <Link
          href="/competency-matrix-center"
          className="rounded-lg border p-6 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold">Product Competency Matrix</h2>
          <p className="mt-2 text-gray-600">
            Structured breakdown of my product skills across discovery,
            strategy, execution, and scale.
          </p>
        </Link>

        <Link
          href="/framework-methodology-center"
          className="rounded-lg border p-6 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold">Frameworks & Methodologies</h2>
          <p className="mt-2 text-gray-600">
            Practical frameworks I use to make product decisions under
            constraints.
          </p>
        </Link>

        <Link
          href="/pm-tool-sandbox"
          className="rounded-lg border p-6 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold">PM Tool Sandbox</h2>
          <p className="mt-2 text-gray-600">
            Experiments with AI tools, analytics, and internal product systems.
          </p>
        </Link>

        <Link
          href="/strategic-landing-hub"
          className="rounded-lg border p-6 hover:bg-gray-50"
        >
          <h2 className="text-xl font-semibold">Strategic Thinking</h2>
          <p className="mt-2 text-gray-600">
            How I approach product strategy, prioritization, and leadership.
          </p>
        </Link>
      </div>
    </section>
  );
}
