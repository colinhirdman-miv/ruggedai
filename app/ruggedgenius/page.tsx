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
    a: "None. If you can use a smartphone and run a crew, you can build these systems. The workshop is designed for business owners, not developers.",
  },
  {
    q: "What trades does this cover?",
    a: "HVAC, plumbing, pest control, electrical, garage doors, and landscaping. Every session is built around how home service businesses actually operate.",
  },
  {
    q: "How long are the sessions?",
    a: "60 minutes each, live, once a week for four weeks. Recordings are available immediately after each session.",
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
    q: "When does the next cohort start?",
    a: "Cohorts run quarterly. Apply now and we'll reach out with the next available date.",
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

export default function RuggedGeniusPage() {
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
            RuggedGenius
          </h1>
          <p className="font-display font-bold text-xl md:text-2xl text-brand-steel uppercase tracking-wide mb-6 max-w-3xl">
            Learn to build AI agents in your business in four weeks.
          </p>
          <p className="text-brand-steel text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
            Live. Hands-on. Specific to your trade. You leave with working systems — not slides.
          </p>
          <div className="flex items-baseline gap-3 mb-10">
            <span
              className="font-display font-black text-brand-red"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              $997
            </span>
            <span className="text-brand-steel uppercase tracking-wide text-sm">one-time · lifetime access</span>
          </div>
          <Link
            href="/apply"
            className="inline-block font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-10 py-4 hover:bg-red-700 transition-colors"
          >
            Join RuggedGenius →
          </Link>
        </div>
      </section>

      {/* ─── COHORT BAR ─── */}
      <div className="bg-brand-red px-6 py-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-white">
          <p className="font-display font-bold text-sm uppercase tracking-widest">
            Next Cohort: June 2026
          </p>
          <span className="hidden sm:block w-px h-4 bg-white/40" />
          <p className="font-display font-bold text-sm uppercase tracking-widest">
            4 Live Weekly Sessions
          </p>
          <span className="hidden sm:block w-px h-4 bg-white/40" />
          <p className="font-display font-bold text-sm uppercase tracking-widest">
            HVAC · Plumbing · Pest Control · Electrical & More
          </p>
          <Link
            href="/apply"
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
            Four Weeks. Real Work.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Working AI In Your Business",
                body: "Before the four weeks are up, you have real systems running. Calls answered. Estimates followed up. Reviews coming in. Not theory — your actual operation, running better.",
              },
              {
                title: "No New Hires Needed",
                body: "The AI handles what you&apos;d otherwise pay a part-timer for — without the payroll, the scheduling, or the management.",
              },
              {
                title: "Built Around How You Work",
                body: "Not a generic template dropped into your business. Every system is built around your trade, your market, and the way your operation actually runs.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-brand-black p-8">
                <h3 className="font-display font-black text-xl uppercase text-white leading-tight mb-4">
                  {pillar.title}
                </h3>
                <p className="text-brand-steel text-sm leading-relaxed">{pillar.body}</p>
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
            What We Build Together Over 4 Weeks
          </h2>
          <p className="text-[#374151] text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
            You already know how to solve problems on the job. This teaches you to solve them in software. Every session is live, specific to your trade, and ends with something working in your business — not homework to do later.
          </p>
          <div className="space-y-px bg-brand-iron/20">
            {[
              {
                week: "Week 1",
                title: "AI Fundamentals for the Trades",
                body: "Understand how AI agents actually work and where they create the most leverage in a home service business. Map your own operation for opportunities — calls, estimates, reviews, scheduling. Set up your tools.",
              },
              {
                week: "Week 2",
                title: "After-Hours Call Handling",
                body: "Build an AI that answers calls, qualifies leads, and books jobs when you can't pick up. Stop losing jobs to voicemail. This system alone pays for the workshop.",
              },
              {
                week: "Week 3",
                title: "Estimate Follow-Up & Review Requests",
                body: "Automated follow-up sequences that chase down estimates without you. Review request systems that go out at exactly the right moment. Closed-loop customer communication.",
              },
              {
                week: "Week 4",
                title: "Full Deployment & Integration",
                body: "Connect every system to your existing tools — CRM, phone, scheduling software. Go live. Test under real conditions. Leave the session with everything running.",
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
            <div className="w-24 h-24 bg-brand-red flex-shrink-0 flex items-center justify-center">
              <span className="font-display font-black text-white text-3xl">CH</span>
            </div>
            <div>
              <h3 className="font-display font-black text-3xl uppercase text-white mb-1">Colin Hirdman</h3>
              <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-red mb-4">
                Founder, RuggedAI
              </p>
              <p className="text-brand-steel text-base leading-relaxed mb-4 max-w-xl">
                Colin has spent years at the intersection of AI and real-world business operations. He built RuggedAI after seeing the same pattern over and over: hardworking trades business owners watching tech-savvy competitors pull ahead — not because they worked harder, but because they had better systems.
              </p>
              <p className="text-brand-steel text-base leading-relaxed max-w-xl">
                His approach is direct. No fluff. No jargon. Every session is specific, practical, and focused on getting your systems live before the workshop ends.
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
            Built for Owners Who Do the Work.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-brand-black p-8">
              <p className="font-display font-bold text-sm uppercase tracking-widest text-brand-red mb-6">
                Right for you if:
              </p>
              <ul className="space-y-4">
                {[
                  "You run a home service business",
                  "You're done losing jobs to faster competitors",
                  "You want AI that actually works in your business",
                  "You can commit four weeks to building something real",
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
              <p className="font-display font-bold text-sm uppercase tracking-widest text-brand-steel mb-6">
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
            className="font-display font-black uppercase leading-none text-brand-black mb-12"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Everything You Need to Build.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "4 Live Weekly Sessions",
                body: "60-minute live sessions with Colin. Ask questions, build in real time, get specific answers for your trade.",
              },
              {
                title: "Session Recordings",
                body: "Every session recorded and available immediately. Lifetime access — rewatch anytime.",
              },
              {
                title: "RuggedAI Trade Playbook",
                body: "The complete playbook for AI in your specific trade. HVAC, plumbing, pest control, electrical, and more.",
              },
              {
                title: "AI Agent Templates",
                body: "Pre-built templates for call handling, follow-up, and review requests. Plug in your business and go.",
              },
              {
                title: "Private Community",
                body: "Connect with other trades owners building AI systems. Share what works, get help when you're stuck.",
              },
              {
                title: "30-Day Post-Workshop Support",
                body: "Direct access to Colin for 30 days after the workshop ends. Get unstuck, dial in your systems.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-brand-iron/30 p-6">
                <h3 className="font-display font-black text-lg uppercase text-brand-black mb-2">
                  {item.title}
                </h3>
                <p className="text-[#374151] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
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
            Join RuggedGenius
          </h2>
          <div className="flex items-baseline justify-center gap-3 mb-6">
            <span
              className="font-display font-black text-brand-red"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              $997
            </span>
            <span className="text-brand-steel uppercase tracking-wide text-sm">one-time · lifetime access</span>
          </div>
          <p className="text-brand-steel text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Four weeks. Working systems. No fluff. If you show up to the first session and it&apos;s not right for you, full refund — no questions asked.
          </p>
          <Link
            href="/apply"
            className="inline-block font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-12 py-5 hover:bg-red-700 transition-colors"
          >
            Reserve Your Spot — $997
          </Link>
        </div>
      </section>
    </main>
  );
}
