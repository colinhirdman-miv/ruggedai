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

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-24 px-6 bg-brand-black">
        <div className="max-w-4xl mx-auto">
          <RedLabel>About RuggedAI</RedLabel>
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

      {/* Mission */}
      <section className="py-24 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <RedLabel>The Mission</RedLabel>
            <h2
              className="font-display font-black uppercase leading-none text-brand-black mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Close the Gap.
            </h2>
            <p className="text-[#374151] text-base leading-relaxed mb-4">
              Fortune 500 companies have entire teams deploying AI to cut costs, win customers, and outmaneuver competition. Home service businesses have none of that. RuggedAI levels the field.
            </p>
            <p className="text-[#374151] text-base leading-relaxed">
              We build practical AI systems — not demos, not experiments. Systems that answer your phones, follow up on your estimates, request reviews, and close jobs. Real work. Real results.
            </p>
          </div>
          <div>
            <RedLabel>Who We Serve</RedLabel>
            <h2
              className="font-display font-black uppercase leading-none text-brand-black mb-6"
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
                  className="font-display font-bold text-lg uppercase tracking-wide text-brand-black flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-brand-red flex-shrink-0" />
                  {trade}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why it exists */}
      <section className="py-24 px-6 bg-white border-t border-brand-iron/20">
        <div className="max-w-4xl mx-auto">
          <RedLabel>Why We Exist</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            The Gap Is Real. And It&apos;s Getting Wider.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                stat: "88%",
                label: "of trades businesses haven't touched AI",
              },
              {
                stat: "18 mo.",
                label: "window before the gap becomes permanent",
              },
              {
                stat: "3×",
                label: "faster lead conversion with AI-assisted follow-up",
              },
            ].map(({ stat, label }) => (
              <div key={stat} className="bg-brand-black px-8 py-10 border-t-4 border-brand-red">
                <p
                  className="font-display font-black text-brand-red uppercase leading-none mb-3"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                >
                  {stat}
                </p>
                <p className="text-brand-iron text-sm uppercase tracking-wide leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colin section */}
      <section className="py-24 px-6 bg-brand-black">
        <div className="max-w-4xl mx-auto">
          <RedLabel>The Founder</RedLabel>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-24 h-24 bg-brand-red flex-shrink-0 flex items-center justify-center">
              <span className="font-display font-black text-white text-3xl">CH</span>
            </div>
            <div>
              <h2
                className="font-display font-black uppercase leading-none text-white mb-2"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Colin Hirdman
              </h2>
              <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-6">
                Founder, RuggedAI
              </p>
              <p className="text-brand-steel text-base md:text-lg max-w-2xl leading-relaxed mb-4">
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
          </div>
        </div>
      </section>
    </main>
  );
}
