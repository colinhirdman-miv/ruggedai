import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work With Us — RuggedAI Consulting",
  description: "Work directly with Colin Hirdman to build AI into your trades business. RuggedConsulting at $4,500/month or a RuggedKickstart for $500.",
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
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-12">
          <div className="flex-1">
            <RedLabel>Consulting</RedLabel>
            <h1
              className="font-display font-black uppercase leading-none text-white mb-6"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.01em" }}
            >
              Work Directly With Colin.
            </h1>
            <p className="font-display font-bold text-xl md:text-2xl text-[#9CA3AF] uppercase tracking-wide mb-6 max-w-3xl">
              Your highest-impact AI opportunities, built together.
            </p>
            <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl mb-6 leading-relaxed">
              You already know where your business is bleeding — the busywork that eats your team&apos;s day, the work that should run itself, the things that slip through the cracks when everyone&apos;s slammed. Not a course. Not a template. We find the highest-impact fixes for your specific operation and build them with you.
            </p>
            <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
              Colin&apos;s spent two decades working with the trades — hiring and working alongside dozens of contractors through twenty years in real estate. He knows where these businesses lose work, and where AI actually closes the gap.
            </p>
            <Link
              href="/build"
              className="inline-block font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-10 py-4 hover:bg-red-700 transition-colors"
            >
              Let's Build →
            </Link>
          </div>
          <div className="hidden md:block flex-shrink-0">
            <img
              src="/colin-headshot.jpeg"
              alt="Colin Hirdman"
              className="w-72 h-72 object-cover object-top ring-4 ring-brand-red"
            />
          </div>
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

          {/* RuggedKickstart */}
          <div className="border-t-4 border-brand-red bg-brand-black p-10 mb-6 flex flex-col md:flex-row md:items-center gap-10">
            <div className="flex-1">
              <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-red mb-3">Start Here</p>
              <h3 className="font-display font-black text-3xl uppercase text-white mb-2">
                <span className="text-brand-red">Rugged</span>Kickstart
              </h3>
              <p className="text-[#9CA3AF] text-base leading-relaxed max-w-2xl">
                A 90-minute AI 101 for the trades — in your office or over video, for you or your team. Plain English, no jargon: what AI actually is, what it can and can&apos;t do, and how other trades businesses are starting to use it. We&apos;ll talk through how it might fit an operation like yours, using real examples from your trade — so you walk away understanding the landscape instead of drowning in hype. Pick any day, any time.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-4">
              <div>
                <span className="font-display font-black text-brand-red" style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)" }}>$500</span>
                <span className="text-[#9CA3AF] text-sm ml-2 uppercase tracking-wide">flat</span>
              </div>
              <Link
                href="/build"
                className="font-display font-black text-sm uppercase tracking-widest bg-brand-red text-white px-8 py-3 hover:bg-red-700 transition-colors whitespace-nowrap"
              >
                Book a RuggedKickstart →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <span className="text-[#9CA3AF] text-sm ml-2 uppercase tracking-wide">two days on-site</span>
              </div>
              <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
                We come to your team and work hands-on across the roles that run your operation — ops, parts, sales, dispatch. Together we put AI to work on what they actually do, day to day. Private to your company, and built around how your shop really runs.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Private — your company only",
                  "Hands-on with each role's real work",
                  "Ops, parts, sales, dispatch covered",
                  "Live sessions with your full crew",
                  "Custom to your trade and market",
                  "Post-session support included",
                ].map((item) => (
                  <li key={item} className="text-[#9CA3AF] text-sm flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-steel flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/build"
                className="font-display font-black text-sm uppercase tracking-widest border-2 border-white text-white px-6 py-3 text-center hover:bg-white hover:text-brand-black transition-colors"
              >
                Bring Us In →
              </Link>
            </div>

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
                <span className="text-[#9CA3AF] text-sm ml-2 uppercase tracking-wide">/ month</span>
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
                  <li key={item} className="text-[#9CA3AF] text-sm flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-red flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/build"
                className="font-display font-black text-sm uppercase tracking-widest bg-brand-red text-white px-6 py-3 text-center hover:bg-red-700 transition-colors"
              >
                Let's Build →
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
                title: "Reach Out",
                description:
                  "Tell us about your business — what you run, how it operates, and where you think you're losing the most. Five minutes. No fluff.",
                link: "/build",
                linkText: "Fill out the form →",
              },
              {
                step: "02",
                title: "Quick Call",
                description:
                  "A short call to talk through where AI can help and which option fits — Kickstart, Teams, or ongoing consulting. No pressure, no hard sell.",
              },
              {
                step: "03",
                title: "Pick Your Path",
                description:
                  "You decide what fits your business and your budget. We get it on the calendar and lay out exactly what happens next.",
              },
              {
                step: "04",
                title: "Get to Work",
                description:
                  "We build AI that actually fits how you operate — and you start closing the holes that are costing you jobs.",
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
                  {s.link && (
                    <Link
                      href={s.link}
                      className="inline-block mt-3 font-display font-black text-sm uppercase tracking-widest text-brand-red hover:text-red-700 transition-colors"
                    >
                      {s.linkText}
                    </Link>
                  )}
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
            Let&apos;s Find Where AI Pays Off for You.
          </h2>
          <p className="text-[#9CA3AF] text-base max-w-xl mx-auto mb-10 leading-relaxed">
            We work with a small number of businesses at a time. That&apos;s intentional — the work only gets done right when we&apos;re fully in it together.
          </p>
          <Link
            href="/build"
            className="inline-block font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-12 py-5 hover:bg-red-700 transition-colors"
          >
            Let's Build →
          </Link>
        </div>
      </section>
    </main>
  );
}
