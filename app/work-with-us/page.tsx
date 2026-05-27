import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work With Us — RuggedAI Consulting",
  description: "Work directly with Colin Hirdman to build AI into your trades business. RuggedConsulting at $4,500/month or a Lunch & Learn for $500. Apply now.",
};

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
          <RedLabel>Consulting</RedLabel>
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
            You already know where your business is bleeding — the calls that go to voicemail, the estimates that go cold, the reviews you never got around to asking for. This is about fixing those specific holes in your specific operation. Not a course. Not a template. Your business, built to close more.
          </p>
          <Link
            href="/apply"
            className="inline-block font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-10 py-4 hover:bg-red-700 transition-colors"
          >
            Apply Now →
          </Link>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 px-6 bg-brand-light">
        <div className="max-w-6xl mx-auto">
          <RedLabel>Engagement Options</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-12"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Pick Your Path.
          </h2>

          {/* Lunch & Learn */}
          <div className="border-t-4 border-brand-red bg-brand-black p-10 mb-6 flex flex-col md:flex-row md:items-center gap-10">
            <div className="flex-1">
              <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-red mb-3">Start Here</p>
              <h3 className="font-display font-black text-3xl uppercase text-white mb-2">
                <span className="text-brand-red">Rugged</span> Lunch &amp; Learn
              </h3>
              <p className="text-brand-steel text-base leading-relaxed max-w-2xl">
                I come to your office, buy lunch, and spend 90 minutes showing your team exactly where AI can have the biggest impact on your operation — specific to your trade, your market, your roles. No slides. No theory. Real examples built around how you actually run your business. Most companies leave with three immediate opportunities they can act on that week.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-4">
              <div>
                <span className="font-display font-black text-brand-red" style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)" }}>$500</span>
                <span className="text-brand-steel text-sm ml-2 uppercase tracking-wide">flat</span>
              </div>
              <Link
                href="/apply"
                className="font-display font-black text-sm uppercase tracking-widest bg-brand-red text-white px-8 py-3 hover:bg-red-700 transition-colors whitespace-nowrap"
              >
                Book a Lunch &amp; Learn →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1:1 Consulting */}
            <div className="border border-brand-red bg-brand-black p-10 flex flex-col border-t-4">
              <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-red mb-4">
                Most Popular
              </p>
              <h3 className="font-display font-black text-3xl uppercase text-white mb-2">
                <span className="text-brand-red">Rugged</span>Consulting
              </h3>
              <div className="mb-6">
                <span
                  className="font-display font-black text-brand-red"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  $4,500
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
                Apply Now →
              </Link>
            </div>

            {/* Rugged Teams */}
            <div className="border border-brand-iron/40 bg-brand-black p-10 flex flex-col border-t-4 border-t-brand-steel">
              <h3 className="font-display font-black text-3xl uppercase text-white mb-2">
                <span className="text-brand-red">Rugged</span>Teams
              </h3>
              <div className="mb-6">
                <span
                  className="font-display font-black text-brand-red"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  $2,500
                </span>
                <span className="text-brand-steel text-sm ml-2 uppercase tracking-wide">two days on-site</span>
              </div>
              <p className="text-brand-steel text-sm leading-relaxed mb-6">
                We come to your team. Every role gets AI built for what they actually do — your ops manager, parts manager, sales team, and CSR all leave with tools specific to their job. Private, focused, and built around how your operation actually runs.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Private — your company only",
                  "Role-specific AI for each position",
                  "Ops, parts, sales, dispatch covered",
                  "Live sessions with your full crew",
                  "Custom to your trade and market",
                  "Post-session support included",
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
                Bring Us In →
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
                  "Tell us about your business — what you run, how it operates, and where you think you're losing the most. Five minutes. No fluff.",
              },
              {
                step: "02",
                title: "Strategy Call",
                description:
                  "You talk, Colin listens. By the end of the call you'll know exactly which three or four systems will have the biggest impact on your revenue — and in what order to build them.",
              },
              {
                step: "03",
                title: "Build",
                description:
                  "Week by week, you get working systems. Actual AI running in your business, tested against real calls and real customers.",
              },
              {
                step: "04",
                title: "Operate",
                description:
                  "The calls get answered. The estimates get followed up. The reviews come in. You run your business the same way you always have — just without the holes.",
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
            We work with a small number of businesses at a time. That&apos;s intentional — the work only gets done right when we&apos;re fully in it together.
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
