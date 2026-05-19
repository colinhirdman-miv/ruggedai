import Link from "next/link";

function RedLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-1 h-5 bg-brand-red flex-shrink-0" />
      <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red">
        {children}
      </p>
    </div>
  );
}

export default function WorkWithUsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-24 px-6 bg-brand-black">
        <div className="max-w-5xl mx-auto">
          <RedLabel>1:1 Consulting</RedLabel>
          <h1
            className="font-display font-black uppercase leading-none text-white mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.01em" }}
          >
            Work Directly With Colin.
          </h1>
          <p className="font-display font-bold text-xl md:text-2xl text-brand-steel uppercase tracking-wide mb-6 max-w-3xl">
            Your highest-impact AI opportunities, built together.
          </p>
          <p className="text-brand-steel text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
            This isn&apos;t a course. It&apos;s not a template. Colin sits down with you, learns your operation, and builds custom AI systems that work for your specific business — in your specific market, with your specific problems.
          </p>
          <Link
            href="/apply"
            className="inline-block font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-10 py-4 hover:bg-red-700 transition-colors"
          >
            Apply for 1:1 →
          </Link>
        </div>
      </section>

      {/* Two offerings */}
      <section className="py-24 px-6 bg-brand-light">
        <div className="max-w-5xl mx-auto">
          <RedLabel>Engagement Options</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-12"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Pick Your Path.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1:1 Consulting */}
            <div className="border border-brand-red bg-brand-black p-10 flex flex-col border-t-4">
              <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-red mb-4">
                Most Popular
              </p>
              <h3 className="font-display font-black text-3xl uppercase text-white mb-2">
                Rugged 1:1 Consulting
              </h3>
              <div className="mb-6">
                <span
                  className="font-display font-black text-brand-red"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  $2,000–$3,000
                </span>
                <span className="text-brand-steel text-sm ml-2 uppercase tracking-wide">/ month</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Weekly sessions with Colin",
                  "Custom AI system identification and build",
                  "Direct Slack access",
                  "Full implementation support",
                  "Monthly strategy and roadmap review",
                  "Specific to your trade and market",
                ].map((item) => (
                  <li key={item} className="text-brand-steel text-sm flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-red flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/apply"
                className="font-display font-black text-sm uppercase tracking-widest bg-brand-red text-white px-6 py-3 text-center hover:bg-red-700 transition-colors"
              >
                Apply for 1:1 →
              </Link>
            </div>

            {/* Rugged Builds */}
            <div className="border border-brand-iron/40 bg-brand-black p-10 flex flex-col border-t-4 border-t-brand-steel">
              <h3 className="font-display font-black text-3xl uppercase text-white mb-2">
                Rugged Builds
              </h3>
              <div className="mb-6">
                <span
                  className="font-display font-black text-brand-red"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  Custom
                </span>
                <span className="text-brand-steel text-sm ml-2 uppercase tracking-wide">pricing</span>
              </div>
              <p className="text-brand-steel text-sm leading-relaxed mb-6">
                For businesses that want a full-service solution. Our development team builds your custom AI infrastructure from the ground up — designed around your operation, integrated with your existing systems.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Full custom AI infrastructure",
                  "Integration with existing tools",
                  "Dedicated development team",
                  "Ongoing support and iteration",
                  "Enterprise-grade reliability",
                ].map((item) => (
                  <li key={item} className="text-brand-steel text-sm flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-steel flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/apply"
                className="font-display font-black text-sm uppercase tracking-widest border-2 border-white text-white px-6 py-3 text-center hover:bg-white hover:text-brand-black transition-colors"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-white border-t border-brand-iron/20">
        <div className="max-w-4xl mx-auto">
          <RedLabel>How It Works</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-12"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            No Wasted Time.
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Apply",
                description:
                  "Fill out the application. We need to know your business, your operation, and where you think the biggest opportunities are.",
              },
              {
                step: "02",
                title: "Strategy Call",
                description:
                  "Colin jumps on a call. We map your business, identify the highest-impact AI opportunities, and build a plan.",
              },
              {
                step: "03",
                title: "Build",
                description:
                  "We build. Together. Week by week, system by system, until your business runs differently than it did before.",
              },
              {
                step: "04",
                title: "Operate",
                description:
                  "Your AI systems are live. Calls answered. Estimates followed up. Reviews requested. Jobs closed. You focus on the real work.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-brand-light px-8 py-8 flex gap-8 items-start border-l-4 border-brand-red">
                <span
                  className="font-display font-black text-brand-red flex-shrink-0"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)" }}
                >
                  {s.step}
                </span>
                <div>
                  <h3 className="font-display font-black text-xl uppercase text-brand-black mb-2">{s.title}</h3>
                  <p className="text-[#374151] text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-brand-black">
        <div className="max-w-3xl mx-auto text-center">
          <RedLabel>Ready?</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-white mb-6"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Let&apos;s Build Something That Actually Works.
          </h2>
          <p className="text-brand-steel text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Limited spots available. Colin works with a small number of businesses at a time to keep the work high-quality and high-impact.
          </p>
          <Link
            href="/apply"
            className="inline-block font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-12 py-5 hover:bg-red-700 transition-colors"
          >
            Apply Now →
          </Link>
        </div>
      </section>
    </main>
  );
}
