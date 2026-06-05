import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RuggedAI — AI Built for the Trades",
  description: "AI consulting for HVAC, plumbing, pest control, and electrical businesses. Stop losing jobs to voicemail. RuggedU Workshop $497 or 1:1 consulting.",
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
          <div className="flex items-center justify-between gap-8 mb-4">
            <h1 className="font-display font-black uppercase leading-none" style={{ letterSpacing: "-0.01em" }}>
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
            <div className="hidden md:block flex-shrink-0">
              <svg viewBox="0 0 200 200" className="w-52 h-52" aria-hidden="true">
                <polygon points="169.28,140 100,180 30.72,140 30.72,60 100,20 169.28,60" fill="#C41E1E" />
                <text x="100" y="93" textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="36" fontWeight="900" letterSpacing="1"
                  style={{ fontFamily: "var(--font-barlow-condensed), 'Barlow Condensed', Arial, sans-serif" }}>RUGGED</text>
                <line x1="58" y1="108" x2="142" y2="108" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
                <text x="100" y="123" textAnchor="middle" dominantBaseline="middle"
                  fill="rgba(255,255,255,0.7)" fontSize="16" fontWeight="700" letterSpacing="6"
                  style={{ fontFamily: "var(--font-barlow-condensed), 'Barlow Condensed', Arial, sans-serif" }}>AI</text>
              </svg>
            </div>
          </div>
          <div className="overflow-hidden mb-8 -mx-6">
            <div className="animate-marquee flex whitespace-nowrap" style={{ width: "max-content" }}>
              {(() => {
                const trades = [
                  "HVAC", "Plumbing", "Pest Control", "Electrical", "Garage Doors",
                  "Landscaping", "Roofing", "Window Cleaning", "Pressure Washing",
                  "Pool Service", "Painting", "Handyman", "Tree Service",
                  "Gutters", "Carpet Cleaning", "Appliance Repair", "Locksmith", "Fencing",
                ];
                return [...trades, ...trades].map((trade, i) => (
                  <span
                    key={i}
                    className="font-display font-bold text-sm uppercase tracking-[0.2em] text-brand-steel flex-shrink-0"
                    style={{ padding: "0 1.5rem" }}
                  >
                    {trade}&nbsp;<span className="text-brand-red">·</span>
                  </span>
                ));
              })()}
            </div>
          </div>
          <p
            className="font-display font-black uppercase leading-none text-brand-steel mb-6 max-w-4xl"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.01em" }}
          >
            Your Business Should Work As Hard As You Do.
          </p>
          <p className="text-brand-steel text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
            The same mindset that gets you through a 12-hour service day — showing up, solving problems, handling what nobody else will touch — now works in software. Learn to build AI that answers your phones after hours, follows up on every estimate, requests reviews automatically, and closes more jobs. No technical background needed. No developers. Just you and systems that actually work.
          </p>
        </div>
      </section>

      {/* ─── SOLUTION ─── */}
      <section className="py-24 px-6 bg-white border-t border-brand-iron/20">
        <div className="max-w-5xl mx-auto">
          <RedLabel>Here&apos;s what we build, together</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-4"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", letterSpacing: "-0.01em" }}
          >
            We Build AI That Works The Way You Do. Hard.
          </h2>
          <p className="font-display font-bold text-xl md:text-2xl text-brand-steel uppercase tracking-wide mb-6 max-w-3xl">
            Custom AI built specifically for your business.
          </p>
          <p className="text-[#374151] text-base md:text-lg max-w-3xl mb-16 leading-relaxed">
            Together, we build AI systems that run in the background while you do the real work. Calls get answered. Estimates get followed up. Reviews get requested. Jobs get closed. All without hiring anyone new.
          </p>

          <RedLabel>Get to Work</RedLabel>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "RuggedU Workshop",
                price: "$497",
                period: "4-week workshop",
                description:
                  "Learn to build AI agents in your business in four weeks. Live, hands-on, specific to your trade. You leave with real AI running in your operation.",
                cta: "Learn More →",
                href: "/ruggedu",
                primary: true,
              },
              {
                name: "RuggedConsulting",
                price: "Custom",
                period: "monthly · 1:1 with Colin",
                description:
                  "You and Colin work directly together to find your highest-impact AI opportunities and build them — fast.",
                cta: "Learn More →",
                href: "/work-with-us",
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
                <h3 className="font-display font-black text-2xl uppercase text-white leading-tight mb-2">
                  {offer.name.startsWith("Rugged") ? (
                    <><span className="text-brand-red">Rugged</span>{offer.name.slice(6)}</>
                  ) : offer.name}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { stat: "88%", label: "of your competitors haven't fully embedded AI — only 12% have moved", source: "ServiceTitan 2026" },
              { stat: "66%", label: "expect AI to meaningfully transform the trades within 1–3 years", source: "ServiceTitan 2026" },
              { stat: "3+", label: "hours saved per week by contractors already using AI tools", source: "ServiceTitan 2026" },
              { stat: "60%", label: "reduction in missed calls for trades businesses using AI-powered call handling" },
            ].map(({ stat, label, source }) => (
              <div key={stat} className="bg-brand-black px-8 py-10 border-t-4 border-brand-red flex flex-col">
                <p
                  className="font-display font-black text-brand-red uppercase leading-none mb-3"
                  style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}
                >
                  {stat}
                </p>
                <p className="text-brand-iron text-sm uppercase tracking-wide leading-snug flex-1">{label}</p>
                {source && (
                  <p className="text-brand-steel text-xs mt-3 tracking-wide">{source}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 px-6 bg-brand-dark border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <RedLabel>Don&apos;t wait on this</RedLabel>
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
            <PrimaryBtn href="/ruggedu">Join RuggedU — $497</PrimaryBtn>
            <OutlineBtn href="/work-with-us">RuggedConsulting</OutlineBtn>
          </div>
        </div>
      </section>

    </main>
  );
}
