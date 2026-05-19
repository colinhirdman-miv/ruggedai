import Link from "next/link";

const weeks = [
  {
    week: "Week 1",
    title: "Foundation",
    description:
      "Understand what AI agents actually are, how they work, and where they create leverage in a home service business. Map your own business for opportunities.",
  },
  {
    week: "Week 2",
    title: "Build Your First Agent",
    description:
      "Hands-on build session. You leave week two with a working AI agent specific to your business — not a template, not a demo.",
  },
  {
    week: "Week 3",
    title: "Calls, Follow-Ups & Reviews",
    description:
      "Build the three systems that drive revenue: after-hours call handling, estimate follow-up automation, and automated review requests.",
  },
  {
    week: "Week 4",
    title: "Full Deployment",
    description:
      "Connect your systems to your existing tools. Go live. Leave with fully operational AI running in your business.",
  },
];

export default function RuggedGeniusPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-24 px-6 bg-brand-black">
        <div className="max-w-5xl mx-auto">
          <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-4">
            The Workshop
          </p>
          <h1
            className="font-display font-black uppercase leading-none text-white mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.01em" }}
          >
            RuggedGenius
          </h1>
          <p className="font-display font-bold text-xl md:text-2xl text-brand-steel uppercase tracking-wide mb-6 max-w-3xl">
            Learn to build AI agents in your business in four weeks.
          </p>
          <p className="text-brand-steel text-base md:text-lg max-w-2xl mb-4 leading-relaxed">
            Live. Hands-on. Specific to your trade. You leave with working systems — not slides.
          </p>
          <div className="flex items-baseline gap-3 mb-10">
            <span
              className="font-display font-black text-brand-red"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              $997
            </span>
            <span className="text-brand-steel uppercase tracking-wide text-sm">one-time</span>
          </div>
          <Link
            href="/apply"
            className="inline-block font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-10 py-4 hover:bg-red-700 transition-colors"
          >
            Join RuggedGenius →
          </Link>
        </div>
      </section>

      <div className="h-px bg-brand-iron opacity-10" />

      {/* What you get */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-5xl mx-auto">
          <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-4">
            What You Get
          </p>
          <h2
            className="font-display font-black uppercase leading-none text-white mb-12"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Four Weeks. Real Systems. Zero Fluff.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
            {weeks.map((w) => (
              <div key={w.week} className="bg-brand-dark p-10">
                <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-red mb-3">
                  {w.week}
                </p>
                <h3 className="font-display font-black text-2xl uppercase text-white mb-4">
                  {w.title}
                </h3>
                <p className="text-brand-steel text-sm leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-brand-iron opacity-10" />

      {/* Who it's for */}
      <section className="py-24 px-6 bg-brand-black">
        <div className="max-w-4xl mx-auto">
          <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-4">
            Who It&apos;s For
          </p>
          <h2
            className="font-display font-black uppercase leading-none text-white mb-8"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Built for Owners Who Do the Work.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <p className="font-display font-bold text-sm uppercase tracking-widest text-white mb-4">
                Right for you if:
              </p>
              <ul className="space-y-3">
                {[
                  "You run a home service business",
                  "You're done losing jobs to faster competitors",
                  "You want AI that actually works in your business",
                  "You can commit four weeks to building something real",
                ].map((item) => (
                  <li key={item} className="text-brand-steel text-sm flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-red flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display font-bold text-sm uppercase tracking-widest text-white mb-4">
                Not for you if:
              </p>
              <ul className="space-y-3">
                {[
                  "You want theory without practice",
                  "You're not ready to implement",
                  "You want someone else to do it all for you",
                  "You're not in the trades",
                ].map((item) => (
                  <li key={item} className="text-brand-steel text-sm flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-steel flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            href="/apply"
            className="inline-block font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-10 py-4 hover:bg-red-700 transition-colors"
          >
            Join RuggedGenius — $997
          </Link>
        </div>
      </section>
    </main>
  );
}
