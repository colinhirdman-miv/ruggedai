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
          <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl leading-relaxed">
            You get up early. You run a crew. You bid jobs, deal with customers, and keep it all together. The businesses pulling ahead right now aren&apos;t working harder — they&apos;ve figured out how to put AI to work on the stuff that eats your day: the follow-ups that slip, the quotes that sit, the busywork that piles up after a long day. You can do the same — you just need someone to show you how without the jargon.
          </p>
          <p className="text-white text-lg md:text-xl font-semibold max-w-2xl leading-relaxed mt-6">
            That&apos;s what RuggedAI is for: helping you put AI to work in your own business, built around how you actually run it, so you get your time back.
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
              You&apos;re not competing with Fortune 500 companies. You&apos;re competing with the HVAC guy down the street who got a head start on AI. The plumber who&apos;s not drowning in admin after a 12-hour day. The pest control company doing more without adding office staff.
            </p>
            <p className="text-[#374151] text-base leading-relaxed">
              That gap is closeable — and we close it together. No tech team required, no big budget, no learning a new industry. Just AI built around the way you already operate.
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
                label: "of contractors haven't fully embedded AI — only 12% have",
              },
              {
                stat: "66%",
                label: "expect AI to meaningfully transform the trades within 1–3 years",
              },
              {
                stat: "60%",
                label: "reduction in missed calls for trades using AI-powered call handling",
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
          <p className="text-brand-steel text-xs mt-6 tracking-wide">Source: ServiceTitan State of AI in the Trades, 2026</p>
        </div>
      </section>

      {/* Why Claude */}
      <section className="py-24 px-6 bg-white border-t border-brand-iron/20">
        <div className="max-w-4xl mx-auto">
          <RedLabel>The AI We Use</RedLabel>
          <h2
            className="font-display font-black uppercase leading-none text-brand-black mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            We Build on Claude.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#374151] text-base leading-relaxed mb-4">
                Every system we build runs on Claude — Anthropic&apos;s AI. Not because it&apos;s the most hyped. Because it&apos;s the best tool for what trades businesses actually need: it remembers what you&apos;ve already told it instead of making you repeat yourself, it follows directions the way a sharp employee would, and it connects to the software you already use.
              </p>
              <p className="text-[#374151] text-base leading-relaxed">
                We&apos;re certified in Claude. That means when you work with us, you&apos;re not getting someone figuring it out on your dime. You&apos;re getting someone who knows exactly how to configure it, prompt it, and connect it to your phone system, CRM, and scheduling software.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Built on Claude",
                  body: "Every participant gets set up on Claude — Anthropic's AI. Skills, connectors, and custom workflows built around how your operation actually runs.",
                },
                {
                  title: "Certified & Current",
                  body: "We stay ahead of what Claude can do so you don't have to. When new capabilities drop, we know how to apply them to your business first.",
                },
                {
                  title: "Built to Last",
                  body: "The systems we build don't depend on us to run. You own them. You can operate them. And when you need more, we're here.",
                },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-brand-red pl-5">
                  <h3 className="font-display font-black text-sm uppercase tracking-wide text-brand-black mb-1">{item.title}</h3>
                  <p className="text-[#374151] text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-brand-iron/20 pt-12">
            <RedLabel>Certifications</RedLabel>
            <p className="text-[#374151] text-base leading-relaxed max-w-2xl mb-8">
              Earned directly through Anthropic Education — verifiable, not self-awarded. Click any to confirm it.
            </p>
            <div className="space-y-px bg-brand-iron/20 border border-brand-iron/20">
              {[
                { title: "Claude Code 101", url: "https://verify.skilljar.com/c/6coa8btk9ew5" },
                { title: "Introduction to Claude Cowork", url: "https://verify.skilljar.com/c/hszwcaegzht6" },
                { title: "Introduction to Agent Skills", url: "https://verify.skilljar.com/c/f4fywuey6ndf" },
                { title: "Claude Code in Action", url: "https://verify.skilljar.com/c/uzs7cn6k94xi" },
                { title: "Introduction to Model Context Protocol", url: "https://verify.skilljar.com/c/u4mia89t5yjs" },
              ].map((cert) => (
                <a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white px-6 py-5 flex items-center justify-between gap-4 hover:bg-brand-light transition-colors"
                >
                  <span className="font-display font-bold text-sm uppercase tracking-wide text-brand-black leading-snug">
                    {cert.title}
                  </span>
                  <span className="font-display font-black text-xs uppercase tracking-widest text-brand-red flex-shrink-0 whitespace-nowrap">
                    Verify →
                  </span>
                </a>
              ))}
            </div>
            <p className="text-brand-steel text-xs mt-4 tracking-wide">Issued by Anthropic Education</p>
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
              <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl leading-relaxed mb-4">
                I started my first company a week after graduating from college and I&apos;ve been an entrepreneur ever since. Everything I&apos;ve built since then has been through Monkey Island Ventures — a company I co-founded with two of my best friends, Josh and Zack. We named it after a park we played at together since we were five years old.
              </p>
              <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl leading-relaxed mb-4">
                Over the years the three of us have built over a dozen software and service businesses. Along the way we built Augurian, a digital marketing agency, and Cloudburst, a custom software studio. The mission behind all of it has always been the same: share what we know and help create as many successful entrepreneurs as we can.
              </p>
              <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl leading-relaxed mb-4">
                For the last twenty years I&apos;ve worked hand in hand with the trades. Two decades in real estate meant hiring and working alongside dozens of contractors — HVAC techs, plumbers, electricians, every trade there is — on more projects, repairs, and renovations than I can count. I&apos;ve seen up close what separates the businesses that win steady work from the ones that lose it. That&apos;s the perspective I bring to RuggedAI: I know the world you operate in, and I know where AI actually moves the needle in it.
              </p>
              <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl leading-relaxed mb-4">
                RuggedAI is the next chapter. The trades are full of serious operators — real crews, real revenue — getting outpaced by competitors who figured out how to use AI first. Not because they&apos;re smarter. Because they moved faster. That gap is closeable, and closing it is what RuggedAI is built to do.
              </p>
              <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl leading-relaxed mb-10">
                My approach is direct. We sit down with your operation, find the highest-leverage places AI can help, and build them together. No jargon. No theory. No wasted time.
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
            Where the Experience Comes From.
          </h2>
          <p className="text-[#9CA3AF] text-base md:text-lg max-w-2xl mb-16 leading-relaxed">
            RuggedAI didn&apos;t come out of nowhere. It&apos;s backed by companies we own and operate — across marketing, software, and operations. That&apos;s the experience behind everything we do.
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
                description: "A full-service digital marketing agency we own and operate — years of learning what actually drives leads and revenue for real businesses.",
                href: "https://augurian.com",
              },
              {
                name: "Cloudburst",
                role: "Custom Software",
                logo: "/logo-cloudburst.png",
                description: "A custom software studio we own and operate — the technical muscle behind RuggedAI, and proof we know how to turn ideas into working product.",
                href: "https://cloudburststudio.com",
              },
            ].map((co) => (
              <div key={co.name} className="border border-[#1a1a1a] p-8 bg-brand-black flex flex-col">
                <div className="h-36 mb-6 flex items-center justify-center">
                  <img
                    src={co.logo}
                    alt={co.name}
                    className={`object-contain ${co.name === "Monkey Island Ventures" ? "max-h-36 max-w-[500px]" : "max-h-10 max-w-[160px]"}`}
                    style={ co.name === "Cloudburst" ? { filter: "brightness(0) invert(1)" } : undefined }
                  />
                </div>
                <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-red mb-3">{co.role}</p>
                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6 flex-1">{co.description}</p>
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
