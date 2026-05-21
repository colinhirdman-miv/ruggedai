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

export default function HomePage() {
  const trades = [
    "HVAC", "Plumbing", "Pest Control", "Electrical", "Garage Doors",
    "Landscaping", "Roofing", "Window Cleaning", "Pressure Washing",
    "Pool Service", "Painting", "Handyman", "Tree Service",
    "Gutters", "Carpet Cleaning", "Appliance Repair", "Locksmith", "Fencing",
  ];

  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="pt-36 pb-24 px-6 bg-brand-black">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display font-black uppercase leading-none mb-4" style={{ letterSpacing: "-0.01em" }}>
            <span className="block text-white" style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}>
              AI Built for
            </span>
            <span className="block text-brand-red" style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}>
              The Trades.
            </span>
          </h1>

          <div className="overflow-hidden mb-10 -mx-6">
            <div className="animate-marquee flex whitespace-nowrap" style={{ width: "max-content" }}>
              {[...trades, ...trades].map((trade, i) => (
                <span
                  key={i}
                  className="font-display font-bold text-sm uppercase tracking-[0.2em] text-brand-steel flex-shrink-0"
                  style={{ padding: "0 1.5rem" }}
                >
                  {trade}&nbsp;<span className="text-brand-red">·</span>
                </span>
              ))}
            </div>
          </div>

          <p className="text-brand-steel text-base md:text-lg max-w-xl mb-10 leading-relaxed">
            Your phone rings after hours and goes to voicemail. Estimates go cold. Reviews never get asked for. We build AI that handles all of it — automatically, while you&apos;re on the job.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <PrimaryBtn href="/ruggedgenius">Join RuggedGenius — $997</PrimaryBtn>
            <Link
              href="/work-with-us"
              className="font-display font-bold text-sm uppercase tracking-widest text-brand-steel hover:text-white transition-colors"
            >
              Need something more custom? →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="py-24 px-6 bg-brand-light">
        <div className="max-w-5xl mx-auto">
          <RedLabel>Sound familiar?</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-8"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", letterSpacing: "-0.01em" }}
          >
            The Businesses Beating You Aren&apos;t Working Harder.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { problem: "Missed calls", detail: "Jobs go to whoever picks up first. After hours, that's not you." },
              { problem: "Cold estimates", detail: "You sent the quote. Nobody followed up. The job went to someone who did." },
              { problem: "No reviews", detail: "You did the work. They would have left five stars. You never asked." },
            ].map(({ problem, detail }) => (
              <div key={problem} className="bg-brand-black px-8 py-10 border-t-4 border-brand-red">
                <p className="font-display font-black text-white uppercase text-xl mb-3">{problem}</p>
                <p className="text-brand-steel text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RUGGEDGENIUS ─── */}
      <section className="py-24 px-6 bg-white border-t border-brand-iron/20">
        <div className="max-w-5xl mx-auto">
          <RedLabel>The Workshop</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-4"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", letterSpacing: "-0.01em" }}
          >
            <span className="text-brand-red">Rugged</span>Genius
          </h2>
          <p className="font-display font-bold text-xl md:text-2xl text-brand-steel uppercase tracking-wide mb-6 max-w-3xl">
            Four weeks. Live. Hands-on. You leave with real AI running in your operation.
          </p>
          <p className="text-[#374151] text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
            We build it together — specific to your trade, your market, and the way your operation actually runs. No developers. No technical background. Just you and systems that work.
          </p>

          <div className="space-y-4 mb-12 max-w-xl">
            {[
              { title: "After-hours call handling", detail: "AI answers your phone, qualifies the lead, and books the job while you sleep." },
              { title: "Estimate follow-up", detail: "Automated sequences that chase down every quote without you lifting a finger." },
              { title: "Review requests", detail: "Five-star reviews go out at exactly the right moment — every time, automatically." },
            ].map(({ title, detail }) => (
              <div key={title} className="flex gap-5 items-start">
                <span className="w-2 h-2 bg-brand-red flex-shrink-0 mt-2" />
                <div>
                  <p className="font-display font-black text-base uppercase text-brand-black tracking-wide">{title}</p>
                  <p className="text-[#374151] text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-baseline gap-3 mb-8">
            <span
              className="font-display font-black text-brand-red"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              $997
            </span>
            <span className="text-brand-steel text-sm uppercase tracking-wide">one-time · Next cohort: June 2026</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <PrimaryBtn href="/ruggedgenius">Join RuggedGenius →</PrimaryBtn>
            <Link
              href="/work-with-us"
              className="font-display font-bold text-sm uppercase tracking-widest text-brand-steel hover:text-brand-black transition-colors"
            >
              Want us to build it for you? →
            </Link>
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
            The Window Is Open Right Now.
          </h2>
          <p className="text-brand-steel text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Trades businesses that adopt AI in the next 18 months will operate at a level their competitors can&apos;t match. One recovered job pays for the workshop.
          </p>
          <PrimaryBtn href="/ruggedgenius">Join RuggedGenius — $997</PrimaryBtn>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-brand-black border-t border-[#1a1a1a] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-display font-black text-xl uppercase tracking-wider">
            <span className="text-brand-red">Rugged</span><span className="text-white">AI</span>
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
