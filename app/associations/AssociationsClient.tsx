"use client";

import { useActionState, useState } from "react";
import { submitHost } from "@/actions/contact.action";

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

export default function AssociationsClient() {
  const [state, formAction, pending] = useActionState(submitHost, null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    audience: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="pt-36 pb-20 px-6 bg-brand-black">
        <div className="max-w-4xl mx-auto">
          <RedLabel>For Trade Associations</RedLabel>
          <h1
            className="font-display font-black uppercase leading-none text-white mb-6"
            style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)", letterSpacing: "-0.01em" }}
          >
            Bring AI to Your Members.
          </h1>
          <p className="font-display font-bold text-xl md:text-2xl text-[#9CA3AF] uppercase tracking-wide mb-6 max-w-3xl">
            Give your members a real intro to AI — the topic every one of them is asking about.
          </p>
          <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
            We&apos;ll run a free, no-pitch AI session for your members — at a chapter meeting, your annual event, or over video. You bring the audience; we bring the content and run the whole thing. It&apos;s done-for-you programming that makes your association the one helping members get ahead of AI.
          </p>
          <a
            href="#assoc-form"
            className="inline-block font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-10 py-4 hover:bg-red-700 transition-colors"
          >
            Talk About a Session →
          </a>
        </div>
      </section>

      {/* ─── WHAT IT IS ─── */}
      <section className="py-24 px-6 bg-white border-t border-brand-iron/20">
        <div className="max-w-4xl mx-auto">
          <RedLabel>What It Is</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-6"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            An AI 101 for the Trades.
          </h2>
          <p className="text-[#374151] text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
            A roughly 60-minute session, in person at your meeting or over video, taught in plain English — no jargon, no hype, and no sales pitch. We cover what AI actually is, what it can and can&apos;t do, and how trades businesses are starting to put it to work. Your members leave understanding the landscape instead of feeling behind.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {[
              "~60 minutes, in person or virtual",
              "Plain English — built for owners, not engineers",
              "No sales pitch — genuine education",
              "Specific to how trades businesses operate",
            ].map((item) => (
              <li key={item} className="text-[#374151] text-sm flex items-start gap-3">
                <span className="w-2 h-2 bg-brand-red flex-shrink-0 mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── WHY BRING IT ─── */}
      <section className="py-24 px-6 bg-brand-light">
        <div className="max-w-5xl mx-auto">
          <RedLabel>Why Bring It to Your Members</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-12"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Member Value That Fills the Room.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Deliver Real Member Value",
                body: "A tangible, useful benefit members actually feel — the kind that justifies dues and keeps them renewing year after year.",
              },
              {
                title: "Fill the Room",
                body: "AI is the hottest topic in the trades right now. Put it on the agenda and watch attendance climb — at a chapter meeting, event, or webinar.",
              },
              {
                title: "Keep Your Association Relevant",
                body: "Show your members you're ahead of where the industry is going, not catching up to it. That's what keeps an association essential.",
              },
              {
                title: "Done-for-You Programming",
                body: "It fills a slot on your calendar with zero prep on your end. We bring the content, the teaching, and the follow-up.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-brand-black p-8 border-t-4 border-brand-red">
                <h3 className="font-display font-black text-xl uppercase text-white leading-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
          <p className="text-[#374151] text-base md:text-lg max-w-2xl mt-10 leading-relaxed">
            Members will turn out for this — it&apos;s free, genuinely useful, and there&apos;s no sales pitch. You can even open it to prospective members and turn a meeting into a recruiting draw.
          </p>
        </div>
      </section>

      {/* ─── WHO DOES WHAT ─── */}
      <section className="py-24 px-6 bg-white border-t border-brand-iron/20">
        <div className="max-w-4xl mx-auto">
          <RedLabel>How It Works</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-12"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            You Bring the Members. We Handle the Rest.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-brand-black p-8">
              <p className="font-display font-bold text-sm uppercase tracking-widest text-brand-red mb-6">
                You Provide
              </p>
              <ul className="space-y-4">
                {[
                  "A slot — a chapter meeting, event, or webinar",
                  "An invite to your membership",
                  "A date on your calendar",
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
                We Provide
              </p>
              <ul className="space-y-4">
                {[
                  "The full session and all the content",
                  "An expert who teaches and runs the room",
                  "Promotion support and follow-up materials",
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

      {/* ─── WHO RUNS IT ─── */}
      <section className="py-24 px-6 bg-brand-black">
        <div className="max-w-4xl mx-auto">
          <RedLabel>Who Runs It</RedLabel>
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
              <p className="text-[#9CA3AF] text-base leading-relaxed max-w-xl">
                Colin has spent two decades building companies and twenty years working with the trades — hiring and working alongside dozens of contractors through a long career in real estate. He pairs that with deep, current AI expertise, so your members get a credible, jargon-free session from someone who knows their world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA / FORM ─── */}
      <section id="assoc-form" className="py-24 px-6 bg-brand-light border-t border-brand-iron/20">
        <div className="max-w-3xl mx-auto">
          <RedLabel>Let&apos;s Talk</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-6"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Bring It to Your Members.
          </h2>
          <p className="text-[#374151] text-base md:text-lg max-w-xl mb-12 leading-relaxed">
            Tell us about your association and your members. We&apos;ll follow up within one business day to talk through a date and the details.
          </p>

          {state?.success ? (
            <div className="border border-brand-red bg-white p-10">
              <h3 className="font-display font-black text-3xl uppercase text-brand-black mb-4">
                Got It.
              </h3>
              <p className="text-[#374151] text-base leading-relaxed">
                Thanks for reaching out. We&apos;ll follow up within one business day to talk through a session for your members.
              </p>
            </div>
          ) : (
            <form action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-widest text-brand-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white border border-brand-iron/60 text-brand-black px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-sm"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-widest text-brand-black mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-brand-iron/60 text-brand-black px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-sm"
                    placeholder="john@yourassociation.org"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-widest text-brand-black mb-2">
                    Association *
                  </label>
                  <input
                    type="text"
                    name="business"
                    required
                    value={form.business}
                    onChange={handleChange}
                    className="w-full bg-white border border-brand-iron/60 text-brand-black px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-sm"
                    placeholder="MN PHCC, NARI of Minnesota…"
                  />
                </div>
                <div>
                  <label className="block font-display font-bold text-xs uppercase tracking-widest text-brand-black mb-2">
                    Who Are Your Members?
                  </label>
                  <input
                    type="text"
                    name="audience"
                    value={form.audience}
                    onChange={handleChange}
                    className="w-full bg-white border border-brand-iron/60 text-brand-black px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-sm"
                    placeholder="HVAC, plumbing, electrical contractors…"
                  />
                </div>
              </div>

              <div>
                <label className="block font-display font-bold text-xs uppercase tracking-widest text-brand-black mb-2">
                  Anything Else?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white border border-brand-iron/60 text-brand-black px-4 py-3 focus:outline-none focus:border-brand-red transition-colors text-sm resize-none"
                  placeholder="A meeting or event you're eyeing, rough member count, or anything you're wondering about."
                />
              </div>

              {state?.error && (
                <p className="text-brand-red text-sm uppercase tracking-wide">{state.error}</p>
              )}
              <button
                type="submit"
                disabled={pending}
                className="font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-10 py-4 hover:bg-red-700 transition-colors w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {pending ? "Sending..." : "Send →"}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
