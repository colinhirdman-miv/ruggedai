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
                    className="font-display font-bold text-sm uppercase tracking-[0.2em] text-[#9CA3AF] flex-shrink-0"
                    style={{ padding: "0 1.5rem" }}
                  >
                    {trade}&nbsp;<span className="text-brand-red">·</span>
                  </span>
                ));
              })()}
            </div>
          </div>
          <p
            className="font-display font-black uppercase leading-none text-[#9CA3AF] mb-6 max-w-4xl"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.01em" }}
          >
            Your Business Should Work As Hard As You Do.
          </p>
          <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl mb-6 leading-relaxed">
            The same mindset that gets you through a 12-hour service day — showing up, solving problems, handling what nobody else will touch — works in software too. Learn to put AI to work on the busywork that eats your day, built around how you actually run things. No technical background needed. No developers. Just you and AI that actually works.
          </p>
          <p className="text-[#9CA3AF] text-sm md:text-base max-w-2xl leading-relaxed">
            Built by someone who&apos;s spent 20 years in real estate hiring every trade there is — RuggedAI comes from your customer&apos;s side of the table, not a tech lab.
          </p>
        </div>
      </section>

      {/* ─── SOLUTION ─── */}
      <section className="py-24 px-6 bg-white border-t border-brand-iron/20">
        <div className="max-w-5xl mx-auto">
          <RedLabel>Where to Start</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-6"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", letterSpacing: "-0.01em" }}
          >
            Get Ahead of AI — and Get Your Time Back.
          </h2>
          <p className="text-[#374151] text-base md:text-lg max-w-3xl mb-16 leading-relaxed">
            Whether you&apos;re growing fast or just trying to get your head above water, there are two ways in. Learn to use AI yourself in the RuggedU workshop — or have us build it with you directly. Either way, the goal&apos;s the same: less time buried in busywork, more room to run your business.
          </p>

          <RedLabel>Two Ways In</RedLabel>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                tag: "Learn it yourself",
                name: "RuggedU Workshop",
                price: "$497",
                period: "3-week workshop",
                description:
                  "Learn to actually use Claude over three weeks, live and hands-on. You build a co-pilot that knows your business — and leave with it running.",
                cta: "Learn More →",
                href: "/ruggedu",
                primary: true,
              },
              {
                tag: "We build it with you",
                name: "RuggedConsulting",
                price: "Custom",
                period: "multiple options",
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
                <p className={`font-display font-bold text-xs uppercase tracking-[0.2em] mb-3 ${offer.primary ? "text-brand-red" : "text-brand-iron"}`}>
                  {offer.tag}
                </p>
                <h3 className="font-display font-black text-3xl md:text-4xl uppercase text-white leading-tight mb-2">
                  {offer.name.startsWith("Rugged") ? (
                    <><span className="text-brand-red">Rugged</span>{offer.name.slice(6)}</>
                  ) : offer.name}
                </h3>
                <div className="mb-6">
                  <span className="font-display font-black text-3xl text-brand-red">{offer.price}</span>
                  <span className="text-[#9CA3AF] text-sm ml-2 uppercase tracking-wide">{offer.period}</span>
                </div>
                <p className="text-[#9CA3AF] text-sm leading-relaxed flex-1 mb-8">{offer.description}</p>
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
            Every week there&apos;s more to keep up with — quotes, scheduling, follow-ups, the admin that piles up after a long day. You know AI could help. You just don&apos;t have the time to figure out which tools matter, or someone you trust to show you how. And every week you wait, a competitor who did figure it out is pulling further ahead.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: "88%", label: "of your competitors haven't fully embedded AI — only 12% have moved", source: "ServiceTitan 2026" },
              { stat: "66%", label: "expect AI to meaningfully transform the trades within 1–3 years", source: "ServiceTitan 2026" },
              { stat: "3+", label: "hours saved per week by contractors already using AI tools", source: "ServiceTitan 2026" },
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
                  <p className="text-[#9CA3AF] text-xs mt-3 tracking-wide">{source}</p>
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
          <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
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
