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

function PrimaryBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-8 py-4 hover:bg-red-700 transition-colors"
    >
      {children}
    </Link>
  );
}

function OutlineBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block font-display font-black text-base uppercase tracking-widest border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-brand-black transition-colors"
    >
      {children}
    </Link>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="pt-36 pb-24 px-6 bg-brand-black">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display font-black uppercase leading-none mb-4" style={{ letterSpacing: "-0.01em" }}>
            <span
              className="block text-white"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
            >
              AI Built for
            </span>
            <span
              className="block text-brand-red"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
            >
              The Trades.
            </span>
          </h1>
          <p className="font-display font-bold text-sm uppercase tracking-[0.2em] text-brand-steel mb-8">
            HVAC &nbsp;·&nbsp; Plumbing &nbsp;·&nbsp; Pest Control &nbsp;·&nbsp; Electrical &nbsp;·&nbsp; Garage Doors &nbsp;·&nbsp; Landscaping
          </p>
          <p className="font-display font-bold text-xl md:text-2xl text-brand-steel uppercase tracking-wide mb-6 max-w-3xl">
            Your Business Should Work As Hard As You Do.
          </p>
          <p className="text-brand-steel text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
            You built something real. You show up every day, run a crew, and handle things nobody else will touch. Your business should work the same way. RuggedAI brings AI to the trades — not the watered-down, built-for-a-startup version. The real thing. Built for you.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <PrimaryBtn href="/ruggedgenius">Join RuggedGenius — $997</PrimaryBtn>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="py-24 px-6 bg-brand-light">
        <div className="max-w-5xl mx-auto">
          <RedLabel>Sound familiar?</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-4"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", letterSpacing: "-0.01em" }}
          >
            88% of Home Service Businesses Haven&apos;t Touched AI Yet.
          </h2>
          <p className="font-display font-bold text-xl md:text-2xl text-brand-steel uppercase tracking-wide mb-8 max-w-3xl">
            The ones who move first are already pulling ahead.
          </p>
          <p className="text-[#374151] text-base md:text-lg max-w-3xl mb-16 leading-relaxed">
            Every week your phone rings after hours and goes to voicemail. Estimates go out and nobody follows up. Customers finish a job and never get asked for a review. You know you should do something about it. You don&apos;t have the time or the expertise to figure out how. And every week you wait, a competitor who did figure it out is getting the jobs you should have closed.
          </p>

          {/* Stats — dark cards on light bg for contrast */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { stat: "88%", label: "of trades businesses haven't adopted AI" },
              { stat: "$50K–$150K", label: "in recoverable revenue lost annually" },
              { stat: "80%+", label: "lead-to-job conversion for businesses using AI agents" },
            ].map(({ stat, label }) => (
              <div key={stat} className="bg-brand-black px-8 py-10 border-t-4 border-brand-red">
                <p
                  className="font-display font-black text-brand-red uppercase leading-none mb-3"
                  style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}
                >
                  {stat}
                </p>
                <p className="text-brand-iron text-sm uppercase tracking-wide leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ─── */}
      <section className="py-24 px-6 bg-white border-t border-brand-iron/20">
        <div className="max-w-5xl mx-auto">
          <RedLabel>Here's what we do about it</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-4"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", letterSpacing: "-0.01em" }}
          >
            We Build AI That Works The Way You Do. Hard.
          </h2>
          <p className="font-display font-bold text-xl md:text-2xl text-brand-steel uppercase tracking-wide mb-6 max-w-3xl">
            No corporate software. No generic tools built for someone else. Custom AI built specifically for your business.
          </p>
          <p className="text-[#374151] text-base md:text-lg max-w-3xl mb-16 leading-relaxed">
            RuggedAI works with home service business owners to build AI systems that run in the background while you do the real work. Calls get answered. Estimates get followed up. Reviews get requested. Jobs get closed. All without hiring anyone new.
          </p>

          {/* Offering cards — dark on white for strong contrast */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "RuggedGenius Workshop",
                price: "$997",
                period: "one-time",
                description:
                  "Learn to build AI agents in your business in four weeks. Live, hands-on, specific to your trade. You leave with working systems — not slides.",
                cta: "Join RuggedGenius →",
                href: "/ruggedgenius",
                primary: true,
              },
              {
                name: "Rugged 1:1 Consulting",
                price: "$2,000–$3,000",
                period: "per month",
                description:
                  "Colin works directly with you to identify your highest-impact AI opportunities and build them together.",
                cta: "Apply for 1:1 →",
                href: "/apply",
                primary: false,
              },
              {
                name: "Rugged Builds",
                price: "Custom",
                period: "pricing",
                description:
                  "Custom AI infrastructure built for your business by our development team.",
                cta: "Get Started →",
                href: "/apply",
                primary: false,
              },
            ].map((offer) => (
              <div
                key={offer.name}
                className={`flex flex-col p-8 border ${
                  offer.primary
                    ? "border-brand-red bg-[#130000]"
                    : "border-[#1a1a1a] bg-brand-black"
                }`}
              >
                {offer.primary && (
                  <span className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-red mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display font-black text-2xl uppercase text-white leading-tight mb-2">
                  {offer.name}
                </h3>
                <div className="mb-6">
                  <span className="font-display font-black text-3xl text-brand-red">{offer.price}</span>
                  <span className="text-brand-steel text-sm ml-2 uppercase tracking-wide">{offer.period}</span>
                </div>
                <p className="text-brand-steel text-sm leading-relaxed flex-1 mb-8">{offer.description}</p>
                <Link
                  href={offer.href}
                  className={`font-display font-black text-sm uppercase tracking-widest px-6 py-3 text-center transition-colors ${
                    offer.primary
                      ? "bg-brand-red text-white hover:bg-red-700"
                      : "border border-brand-iron text-brand-iron hover:border-white hover:text-white"
                  }`}
                >
                  {offer.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 px-6 bg-brand-dark border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <RedLabel>Don't wait on this</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-white mb-6"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", letterSpacing: "-0.01em" }}
          >
            Your Competitors Are Making Their Move. Are You?
          </h2>
          <p className="text-brand-steel text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            The window is open right now. Trades businesses that adopt AI in the next 18 months will operate at a level their competitors can&apos;t match.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <PrimaryBtn href="/ruggedgenius">Join RuggedGenius — $997</PrimaryBtn>
            <OutlineBtn href="/apply">Apply for 1:1</OutlineBtn>
            <OutlineBtn href="/apply">Get Started</OutlineBtn>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-brand-black border-t border-[#1a1a1a] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-display font-black text-xl uppercase tracking-wider text-brand-red">
            RuggedAI
          </span>
          <p className="text-brand-steel text-xs uppercase tracking-widest">
            AI that works as hard as you do.
          </p>
          <p className="text-brand-steel text-xs">
            &copy; {new Date().getFullYear()} RuggedAI. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
