"use client";

import Link from "next/link";
import { useState } from "react";

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

const faqs = [
  {
    q: "Do I need technical experience?",
    a: "None. If you can use a smartphone and run a crew, you can build these systems. The workshop is designed for trades professionals, not developers.",
  },
  {
    q: "What trades does this cover?",
    a: "HVAC, plumbing, pest control, electrical, landscaping, and more. Every session is built around how home service businesses actually operate.",
  },
  {
    q: "How long are the sessions?",
    a: "About 90 minutes each, live, once a week for three weeks. Recordings are available immediately after each session.",
  },
  {
    q: "What does it cost to use Claude?",
    a: "A Claude account runs $20/month and covers everything you'll do in the workshop. That's it — the $497 is for the workshop itself.",
  },
  {
    q: "Will sessions be recorded?",
    a: "Yes. You get lifetime access to all recordings and materials — so if life gets in the way, you don't fall behind.",
  },
  {
    q: "What if this isn't right for me after the first session?",
    a: "Show up to the first session. If it's not what you expected, we'll refund you in full — no questions asked.",
  },
  {
    q: "Who else is in the cohort?",
    a: "Professionals from trades businesses — HVAC, plumbing, pest control, electrical, landscaping, and more. Different trades, different markets, same problems. You're learning alongside people who get exactly what you're dealing with.",
  },
  {
    q: "How many people are in a cohort?",
    a: "A small group — small enough that you get real time with Colin and real answers to your specific situation, not a webinar where you're one of 500 with your question buried in a chat box.",
  },
  {
    q: "When does the next cohort start?",
    a: "The next cohort runs three Tuesdays in a row — June 23, June 30, and July 7, 2026 — from 10:30am to noon CT. Fill out the form to reserve your spot. If the timing doesn't work, let us know and we'll get you into the next one.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-brand-iron/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left gap-4"
      >
        <span className="font-display font-bold text-lg uppercase tracking-wide text-brand-black">
          {q}
        </span>
        <span className="text-brand-red font-black text-xl flex-shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p className="pb-6 text-[#374151] text-base leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function RuggedUClient() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="pt-36 pb-16 px-6 bg-brand-black">
        <div className="max-w-5xl mx-auto">
          <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-4">
            The Workshop
          </p>
          <h1
            className="font-display font-black uppercase leading-none text-white mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.01em" }}
          >
            <span className="text-brand-red">Rugged</span>U
          </h1>
          <p className="font-display font-bold text-xl md:text-2xl text-[#9CA3AF] uppercase tracking-wide mb-6 max-w-3xl">
            You leave with an AI co-pilot that knows your business — and works for you every day.
          </p>
          <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
            Built over three weeks, live and hands-on, alongside a small group of trades pros with the same problems you have. Not slides. Not theory. The real thing — and it&apos;s yours to keep.
          </p>
          <div className="flex items-baseline gap-3 mb-6">
            <span
              className="font-display font-black text-brand-red"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              $497
            </span>
            <span className="text-[#9CA3AF] uppercase tracking-wide text-sm">3-week workshop</span>
          </div>
          <p className="font-display font-bold text-brand-iron text-sm uppercase tracking-wide mb-8">
            Tuesdays · June 23, 30 &amp; July 7 · 10:30am–Noon CT
          </p>
          <div className="border border-brand-red bg-[#130000] px-6 py-4 mb-10 max-w-xl flex items-start gap-4">
            <span className="text-brand-red font-black text-xl flex-shrink-0 mt-0.5">★</span>
            <div>
              <p className="font-display font-black text-white text-sm uppercase tracking-wide mb-1">
                Lifetime Cohort Access Included
              </p>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                Enroll once and you&apos;re in every future RuggedU cohort. The curriculum evolves with AI — and so will you.
              </p>
            </div>
          </div>
          <Link
            href="/build"
            className="inline-block font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-10 py-4 hover:bg-red-700 transition-colors"
          >
            Join RuggedU →
          </Link>
        </div>
      </section>

      {/* ─── COHORT BAR ─── */}
      <div className="bg-brand-red px-6 py-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-3 text-white">
          <p className="font-display font-bold text-sm uppercase tracking-widest">
            Next Cohort Starts Tuesday, June 23
          </p>
          <span className="hidden sm:block w-px h-4 bg-white/40" />
          <p className="font-display font-bold text-sm uppercase tracking-widest">
            3 Live Weekly Sessions
          </p>
          <Link
            href="/build"
            className="font-display font-black text-xs uppercase tracking-widest bg-white text-brand-red px-5 py-2 hover:bg-brand-iron transition-colors"
          >
            Reserve Your Spot →
          </Link>
        </div>
      </div>

      {/* ─── VALUE PILLARS ─── */}
      <section className="py-24 px-6 bg-brand-light">
        <div className="max-w-5xl mx-auto">
          <RedLabel>What You Walk Away With</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-12"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Three Weeks. AI That Works for You.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "An AI Co-Pilot That Knows Your Business",
                body: "You leave with a co-pilot that knows your pricing, your service area, your services, and how you talk to customers — so it stops giving generic answers and starts answering like someone who actually works there. Yours to keep.",
              },
              {
                title: "You Build What Matters to You",
                body: "No cookie-cutter tool. You pick the work that's actually eating your time — quoting, follow-ups, dispatch, whatever it is — and build AI around that. It's your business, so it's your call what gets built.",
              },
              {
                title: "You're Not in the Room Alone",
                body: "You build alongside professionals from HVAC, plumbing, pest control, electrical, and more. Everyone in the room has the same problems. Nobody's doing this alone.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-brand-black p-8">
                <h3 className="font-display font-black text-xl uppercase text-white leading-tight mb-4">
                  {pillar.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CURRICULUM ─── */}
      <section className="py-24 px-6 bg-white border-t border-brand-iron/20">
        <div className="max-w-4xl mx-auto">
          <RedLabel>The Curriculum</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-4"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Learn Claude. Build for Your Business.
          </h2>
          <p className="text-[#374151] text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
            This isn&apos;t a lecture series. Over three weeks you learn to actually use Claude — Anthropic&apos;s AI — and put it to work on the stuff that eats your time. You pick what to build for your own business, and you leave with it running plus the know-how to keep building.
          </p>
          <div className="space-y-px bg-brand-iron/20">
            {[
              {
                week: "Week 1",
                title: "Get Comfortable With Claude",
                body: "Cut through the hype and understand what AI actually does and doesn't do. Learn how to talk to Claude and get real results. Get set up on Claude and start spotting where it could help in your business.",
              },
              {
                week: "Week 2",
                title: "Build Your Business Co-Pilot",
                body: "Teach Claude your business — your services, your pricing, your voice — so it stops giving generic answers and starts working like it actually knows your shop. By the end of this session you have a co-pilot that gets your operation.",
              },
              {
                week: "Week 3",
                title: "Put It to Work",
                body: "Now make it run without you. Set up a routine that works in the background — a morning briefing, lead triage, whatever saves you the most time — so AI is handling real work while you're on the job. Make it reliable enough for your team, learn what's worth building yourself versus paying for, and leave with a roadmap for what to build next.",
              },
            ].map((item, i) => (
              <div key={item.week} className="bg-white px-8 py-8 flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 text-center">
                  <span
                    className="font-display font-black text-brand-red leading-none"
                    style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-steel mb-1">
                    {item.week}
                  </p>
                  <h3 className="font-display font-black text-xl uppercase text-brand-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#374151] text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RECORDED SESSIONS ─── */}
      <section className="py-20 px-6 bg-brand-black">
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-brand-red bg-[#130000] p-10 md:p-12 flex flex-col md:flex-row items-start gap-10">
            <div className="flex-shrink-0 flex items-center gap-3">
              <span className="w-4 h-4 rounded-full bg-brand-red animate-pulse" />
              <span className="font-display font-black text-brand-red text-sm uppercase tracking-[0.4em]">
                Rec
              </span>
            </div>
            <div>
              <h2
                className="font-display font-black uppercase leading-none text-white mb-4"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                Every Session is Recorded
              </h2>
              <p className="text-[#9CA3AF] text-base md:text-lg leading-relaxed">
                The trades don&apos;t run on a 9-to-5. Emergency calls, long days, jobs that run over — your schedule isn&apos;t always your own. That&apos;s why every live session is recorded and available on-demand, and any prep work can be done whenever you&apos;ve got the time. Join live when you can, catch up when you can&apos;t. You won&apos;t fall behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INSTRUCTOR ─── */}
      <section className="py-24 px-6 bg-brand-black">
        <div className="max-w-4xl mx-auto">
          <RedLabel>Who&apos;s Running It</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-white mb-12"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Your Instructor
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-shrink-0">
              <img
                src="/colin-headshot.jpeg"
                alt="Colin Hirdman"
                className="w-32 h-32 object-cover object-top ring-4 ring-brand-red"
              />
            </div>
            <div>
              <h3 className="font-display font-black text-3xl uppercase text-white mb-1">Colin Hirdman</h3>
              <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-red mb-4">
                Founder, Rugged<span className="text-white">AI</span>
              </p>
              <p className="text-[#9CA3AF] text-base leading-relaxed mb-4 max-w-xl">
                Colin has spent over two decades building companies. He co-founded Monkey Island Ventures and built Augurian, a digital marketing agency, and Cloudburst, a custom software studio. He&apos;s also spent two decades working with the trades — hiring and working alongside dozens of contractors through twenty years in real estate — so he knows the world you operate in. RuggedAI is where it all comes together — bringing the marketing, technology, and AI know-how he&apos;s built across industries to the trades.
              </p>
              <p className="text-[#9CA3AF] text-base leading-relaxed max-w-xl">
                His approach is direct. No fluff. No jargon. Just practical, hands-on work focused on building AI that actually fits how your business runs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ─── */}
      <section className="py-24 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <RedLabel>Who This Is For</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-12"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Built for Businesses That Want to Win.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-brand-black p-8">
              <p className="font-display font-bold text-sm uppercase tracking-widest text-brand-red mb-6">
                Right for you if:
              </p>
              <ul className="space-y-4">
                {[
                  "You run a trades business — or help run one",
                  "You're done losing jobs to faster competitors",
                  "You want AI that actually works in your business",
                  "You (or someone on your team) can commit three weeks",
                  "You're tired of tools built for someone else",
                ].map((item) => (
                  <li key={item} className="text-brand-iron text-sm flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-red flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F0EFED] p-8">
              <p className="font-display font-bold text-sm uppercase tracking-widest text-[#9CA3AF] mb-6">
                Not for you if:
              </p>
              <ul className="space-y-4">
                {[
                  "You want theory without practice",
                  "You're not ready to implement",
                  "You want someone else to do all the work",
                  "You're not in the trades",
                  "You're looking for a generic AI course",
                ].map((item) => (
                  <li key={item} className="text-[#374151] text-sm flex items-start gap-3">
                    <span className="w-2 h-2 bg-brand-steel flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT'S INCLUDED ─── */}
      <section className="py-24 px-6 bg-white border-t border-brand-iron/20">
        <div className="max-w-4xl mx-auto">
          <RedLabel>What&apos;s Included</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-4"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            What You&apos;ll Get.
          </h2>
          <p className="text-[#374151] text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
            What you need to start putting AI to work in your trades business — and keep building after.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "3 Live Weekly Sessions",
                body: "Build live with Colin, three weeks running. Bring the real bottlenecks — estimates, dispatch, after-hours calls — and work on them together, live.",
              },
              {
                title: "Direct Access to Colin",
                body: "Hit a wall building something between sessions? Reach Colin directly all three weeks — not just during class.",
              },
              {
                title: "Set Up on Claude",
                body: "You leave with Claude set up around your business — your services, your pricing, the way you work. Not a trial you're left to figure out alone.",
              },
              {
                title: "A Cohort of Peers",
                body: "Build alongside other trades operators working through the same problems you are. A small group that gets it.",
              },
              {
                title: "Forever Access to Recordings",
                body: "Every session recorded. Miss one for an emergency call or a packed schedule? Watch and rewatch anytime, on your schedule.",
              },
              {
                title: "Templates & Prompts",
                body: "Prompts and templates to adapt for trades work — quoting, follow-ups, review requests — so you're not starting from a blank page.",
              },
              {
                title: "AI Tool Comparison Guide",
                body: "A clear read on the AI tools out there — what's worth paying for, what's hype, and what fits a trades business.",
              },
              {
                title: "A Repeatable System",
                body: "A repeatable way to keep building trade-specific AI after the workshop — so as your business changes, you're not starting over.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-brand-iron/30 p-6 border-t-4 border-t-brand-red">
                <h3 className="font-display font-black text-base uppercase text-brand-black mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#374151] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-brand-steel text-sm mt-8">
            Plus lifetime access to every future RuggedU cohort — the curriculum evolves with AI, and so do you.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 px-6 bg-brand-light">
        <div className="max-w-3xl mx-auto">
          <RedLabel>Common Questions</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-12"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="border-t border-brand-iron/30">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 px-6 bg-brand-black">
        <div className="max-w-3xl mx-auto text-center">
          <RedLabel>Ready to Build?</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-white mb-4"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Join <span className="text-brand-red">Rugged</span>U
          </h2>
          <div className="flex items-baseline justify-center gap-3 mb-6">
            <span
              className="font-display font-black text-brand-red"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              $497
            </span>
            <span className="text-[#9CA3AF] uppercase tracking-wide text-sm">3-week workshop · lifetime access</span>
          </div>
          <p className="text-[#9CA3AF] text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Four weeks. Working systems. No fluff. If you show up to the first session and it&apos;s not right for you, full refund — no questions asked.
          </p>
          <Link
            href="/build"
            className="inline-block font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-12 py-5 hover:bg-red-700 transition-colors"
          >
            Reserve Your Spot — $497
          </Link>
        </div>
      </section>
    </main>
  );
}
