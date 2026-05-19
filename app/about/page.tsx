import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-24 px-6 bg-brand-black">
        <div className="max-w-4xl mx-auto">
          <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-4">
            About RuggedAI
          </p>
          <h1
            className="font-display font-black uppercase leading-none text-white mb-8"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.01em" }}
          >
            Built for the People Who Do the Real Work.
          </h1>
          <p className="text-brand-steel text-base md:text-lg max-w-2xl leading-relaxed">
            RuggedAI was built for one reason: the home service business owner has been left behind in the AI revolution. Every new tool, every new platform, every new &ldquo;AI solution&rdquo; is designed for tech companies and corporate offices — not the guy running a crew of five HVAC techs at 6am.
          </p>
        </div>
      </section>

      <div className="h-px bg-brand-iron opacity-10" />

      {/* Mission */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-4">
              The Mission
            </p>
            <h2
              className="font-display font-black uppercase leading-none text-white mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Close the Gap.
            </h2>
            <p className="text-brand-steel text-base leading-relaxed mb-4">
              Fortune 500 companies have entire teams deploying AI to cut costs, win customers, and outmaneuver competition. Home service businesses have none of that. RuggedAI levels the field.
            </p>
            <p className="text-brand-steel text-base leading-relaxed">
              We build practical AI systems — not demos, not experiments. Systems that answer your phones, follow up on your estimates, request reviews, and close jobs. Real work. Real results.
            </p>
          </div>
          <div>
            <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-4">
              Who We Serve
            </p>
            <h2
              className="font-display font-black uppercase leading-none text-white mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              The Trades.
            </h2>
            <ul className="space-y-3">
              {[
                "HVAC",
                "Pest Control",
                "Plumbing",
                "Electrical",
                "Garage Doors",
                "Landscaping",
              ].map((trade) => (
                <li
                  key={trade}
                  className="font-display font-bold text-lg uppercase tracking-wide text-white flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-brand-red flex-shrink-0" />
                  {trade}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="h-px bg-brand-iron opacity-10" />

      {/* Colin section */}
      <section className="py-24 px-6 bg-brand-black">
        <div className="max-w-4xl mx-auto">
          <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-4">
            The Founder
          </p>
          <h2
            className="font-display font-black uppercase leading-none text-white mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Colin Hirdman
          </h2>
          <p className="text-brand-steel text-base md:text-lg max-w-2xl leading-relaxed mb-6">
            Colin has spent years at the intersection of AI technology and real-world business operations. He built RuggedAI after seeing the same pattern over and over: hardworking business owners with serious operations getting left behind while tech-savvy competitors pulled ahead.
          </p>
          <p className="text-brand-steel text-base md:text-lg max-w-2xl leading-relaxed mb-10">
            His approach is direct. No fluff. No jargon. He identifies where AI creates leverage in your specific business and builds it — fast.
          </p>
          <Link
            href="/apply"
            className="inline-block font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-8 py-4 hover:bg-red-700 transition-colors"
          >
            Work With Colin →
          </Link>
        </div>
      </section>
    </main>
  );
}
