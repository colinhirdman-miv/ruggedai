import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — RuggedAI",
  description: "RuggedAI was built to close the AI gap in home service businesses. Meet founder Colin Hirdman and learn why trades businesses are falling behind — and how to catch up.",
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
            You get up early. You run a crew. You bid jobs, deal with customers, and keep it all together. The businesses beating you to jobs right now aren&apos;t working harder — they have better systems. AI that follows up when you&apos;re on a ladder. AI that answers calls at 10pm. AI that turns a finished job into a five-star review before you&apos;ve packed up the truck. That&apos;s what this is about.
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
              You&apos;re not competing with Fortune 500 companies. You&apos;re competing with the HVAC guy down the street who stopped losing jobs to voicemail. The plumber whose estimates follow up automatically. The pest control company that gets five-star reviews without ever asking.
            </p>
            <p className="text-[#374151] text-base leading-relaxed">
              That gap is closeable. And we close it together — no tech team required, no big budget, no learning a new industry. Just the right systems built around the way you already operate.
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
                "And others!",
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
            <div className="flex-shrink-0">
              <img
                src="/colin-headshot.jpeg"
                alt="Colin Hirdman"
                className="w-32 h-32 object-cover object-top ring-4 ring-brand-red"
              />
            </div>
            <div>
              <h2
                className="font-display font-black uppercase leading-none text-white mb-2"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Colin Hirdman
              </h2>
              <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-6">
                Co-Founder, Rugged<span className="text-white">AI</span>
              </p>
              <p className="text-brand-steel text-base md:text-lg max-w-2xl leading-relaxed mb-4">
                I started my first company a week after graduating from college and I&apos;ve been an entrepreneur ever since. Everything I&apos;ve built since then has been through Monkey Island Ventures — a company I co-founded with two of my best friends, Josh and Zack. We named it after a park we played at together since we were five years old.
              </p>
              <p className="text-brand-steel text-base md:text-lg max-w-2xl leading-relaxed mb-4">
                Over the years the three of us have built over a dozen software and service businesses. Along the way we built Augurian, a digital marketing agency, and Cloudburst, a custom software studio. The mission behind all of it has always been the same: share what we know and help create as many successful entrepreneurs as we can.
              </p>
              <p className="text-brand-steel text-base md:text-lg max-w-2xl leading-relaxed mb-4">
                RuggedAI is the next chapter. I kept watching trades owners — people running real operations, real crews, real revenue — get outmaneuvered by competitors who figured out how to use AI first. Not because they were smarter. Because they moved faster. That gap is closeable, and I know exactly how to close it.
              </p>
              <p className="text-brand-steel text-base md:text-lg max-w-2xl leading-relaxed mb-10">
                My approach is direct. I sit down with your operation, find the highest-leverage places AI creates real impact, and build them — fast. No jargon. No theory. No wasted time.
              </p>
              <Link
                href="/build"
                className="inline-block font-display font-black text-base uppercase tracking-widest bg-brand-red text-white px-8 py-4 hover:bg-red-700 transition-colors"
              >
                Work With Colin →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Backing companies */}
      <section className="py-24 px-6 bg-brand-dark border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <RedLabel>The Companies Behind It</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-white mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            You&apos;re Not Just Getting Colin.
          </h2>
          <p className="text-brand-steel text-base md:text-lg max-w-2xl mb-16 leading-relaxed">
            RuggedAI is backed by a set of operating companies that have been building and growing businesses for years. When you need more than AI — you already have a path forward.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Monkey Island Ventures",
                role: "The Venture Platform",
                logo: "/logo-miv.png",
                description: "The holding company behind RuggedAI. Founded by Colin, Josh, and Zack — three childhood friends committed to building as many successful companies as they can in their lifetimes.",
                href: "https://www.monkeyislandventures.com",
              },
              {
                name: "Augurian",
                role: "Digital Marketing",
                logo: "/logo-augurian-white.svg",
                description: "A full-service digital marketing agency. When your AI systems start generating more leads than your marketing can handle, the team to scale it is already in the room.",
                href: "https://augurian.com",
              },
              {
                name: "Cloudburst",
                role: "Custom Software",
                logo: "/logo-cloudburst.png",
                description: "A software studio for founders who need to build real product. When your AI workflows outgrow off-the-shelf tools, Cloudburst builds what's next.",
                href: "https://cloudburststudio.com",
              },
            ].map((co) => (
              <div key={co.name} className="border border-[#1a1a1a] p-8 bg-brand-black flex flex-col">
                <div className="h-14 mb-6 flex items-center justify-center">
                  <img
                    src={co.logo}
                    alt={co.name}
                    className={`object-contain ${co.name === "Monkey Island Ventures" ? "max-h-14 max-w-[200px]" : "max-h-10 max-w-[160px]"}`}
                    style={ co.name === "Cloudburst" ? { filter: "brightness(0) invert(1)" } : undefined }
                  />
                </div>
                <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-red mb-3">{co.role}</p>
                <p className="text-brand-steel text-sm leading-relaxed mb-6 flex-1">{co.description}</p>
                <a
                  href={co.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-bold text-xs uppercase tracking-widest text-brand-iron hover:text-white transition-colors"
                >
                  Visit →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
