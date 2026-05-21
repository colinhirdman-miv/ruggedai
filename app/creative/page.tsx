const FONT = "var(--font-barlow-condensed), 'Barlow Condensed', 'Arial Narrow', Arial, sans-serif";
const HEX_OUTER = "169,140 100,180 31,140 31,60 100,20 169,60";
const HEX_INNER = "154,131 100,162 46,131 46,69 100,38 154,69";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-3">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="border-t border-[#1a1a1a] my-20" />;
}

export default function CreativePage() {
  return (
    <main className="bg-brand-black min-h-screen pt-28 pb-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-3">Internal</p>
        <h1
          className="font-display font-black uppercase text-white mb-4"
          style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", letterSpacing: "-0.01em" }}
        >
          Brand Guide
        </h1>
        <p className="text-brand-steel text-base max-w-xl mb-20 leading-relaxed">
          Everything that defines how RuggedAI looks, sounds, and feels. Not a rulebook — a reference.
        </p>

        {/* ── 01 COLORS ── */}
        <section>
          <SectionLabel>01</SectionLabel>
          <h2 className="font-display font-black text-3xl uppercase text-white mb-10">Colors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { name: "Brand Black", hex: "#0A0A0A", bg: "bg-[#0A0A0A]", border: true, text: "text-white", role: "Primary background" },
              { name: "Brand Dark", hex: "#111111", bg: "bg-[#111111]", border: true, text: "text-white", role: "Section background" },
              { name: "Brand Red", hex: "#C41E1E", bg: "bg-[#C41E1E]", border: false, text: "text-white", role: "Accent · CTAs · Rugged" },
              { name: "Brand Steel", hex: "#6B7280", bg: "bg-[#6B7280]", border: false, text: "text-white", role: "Body text · Secondary" },
              { name: "Brand Iron", hex: "#D1D1D1", bg: "bg-[#D1D1D1]", border: false, text: "text-brand-black", role: "Borders · Light text" },
              { name: "Brand Light", hex: "#F5F4F2", bg: "bg-[#F5F4F2]", border: false, text: "text-brand-black", role: "Light section background" },
            ].map((color) => (
              <div key={color.name} className={`${color.border ? "border border-[#2a2a2a]" : ""}`}>
                <div className={`${color.bg} h-24 w-full`} />
                <div className="bg-[#111111] px-4 py-3">
                  <p className="font-display font-black text-sm uppercase text-white tracking-wide">{color.name}</p>
                  <p className="font-mono text-xs text-brand-steel mt-0.5">{color.hex}</p>
                  <p className="font-display text-xs uppercase tracking-wide text-brand-steel mt-1">{color.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── 02 TYPOGRAPHY ── */}
        <section>
          <SectionLabel>02</SectionLabel>
          <h2 className="font-display font-black text-3xl uppercase text-white mb-10">Typography</h2>

          {/* Display font */}
          <div className="mb-14">
            <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-steel mb-6">
              Barlow Condensed — Display
            </p>
            <div className="space-y-4">
              <p className="font-display font-black uppercase text-white leading-none" style={{ fontSize: "clamp(3rem, 7vw, 5rem)", letterSpacing: "-0.01em" }}>
                Black 900
              </p>
              <p className="font-display font-bold uppercase text-white leading-none text-4xl tracking-tight">
                Bold 700 — Section Headings
              </p>
              <p className="font-display font-semibold uppercase text-brand-steel text-xl tracking-widest">
                Semibold 600 — Navigation · Labels
              </p>
              <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red">
                Bold · Small · Tracked — Section Labels
              </p>
            </div>
          </div>

          {/* Body font */}
          <div>
            <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-steel mb-6">
              Barlow — Body
            </p>
            <div className="space-y-4 max-w-2xl">
              <p className="text-white text-lg leading-relaxed">
                Regular 400 — The same mindset that gets you through a 12-hour service day now works in software. No technical background needed.
              </p>
              <p className="text-brand-steel text-base leading-relaxed">
                Steel / Secondary — Every week your phone rings after hours and goes to voicemail. Estimates go out and nobody follows up.
              </p>
              <p className="text-brand-steel text-sm leading-relaxed">
                Small / Supporting — Four live sessions with Colin. Ask questions, build in real time, get specific answers for your trade.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── 03 BRAND VOICE ── */}
        <section>
          <SectionLabel>03</SectionLabel>
          <h2 className="font-display font-black text-3xl uppercase text-white mb-10">Brand Voice</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#111111] p-8 border-t-4 border-brand-red">
              <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-6">We sound like</p>
              <ul className="space-y-3">
                {[
                  "Direct. No fluff, no corporate softening.",
                  "A partner — 'we build together', not 'we sell to you'.",
                  "Confident without being arrogant.",
                  "Specific — name the problem, name the fix.",
                  "Grounded in how trades businesses actually work.",
                  "Short sentences. Clear point. Move on.",
                ].map((item) => (
                  <li key={item} className="text-brand-steel text-sm flex items-start gap-3 leading-relaxed">
                    <span className="w-2 h-2 bg-brand-red flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#111111] p-8 border-t-4 border-brand-steel">
              <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-steel mb-6">We don't sound like</p>
              <ul className="space-y-3">
                {[
                  "Corporate AI hype. No 'leverage synergies'.",
                  "A vendor pitching features. We solve problems.",
                  "Preachy or condescending to the owner.",
                  "Generic — could apply to any industry.",
                  "Overly technical. The owner doesn't care how it works.",
                  "Soft or hedged. Say the thing.",
                ].map((item) => (
                  <li key={item} className="text-brand-steel text-sm flex items-start gap-3 leading-relaxed">
                    <span className="w-2 h-2 bg-brand-steel flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Voice examples */}
          <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-steel mb-6">Examples</p>
          <div className="space-y-4">
            {[
              {
                bad: "Our AI-powered platform leverages cutting-edge automation to optimize your business workflows.",
                good: "AI that answers your calls after hours, follows up on every estimate, and closes more jobs. No developers needed.",
              },
              {
                bad: "We help you unlock the potential of artificial intelligence for your team.",
                good: "One recovered job pays for the workshop. The AI runs every night after that.",
              },
              {
                bad: "Join our community of forward-thinking business owners.",
                good: "The window is open right now. Trades businesses that move in the next 18 months will operate at a level their competitors can't match.",
              },
            ].map((ex, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
                <div className="bg-brand-black p-6">
                  <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-steel mb-3">✕ Not this</p>
                  <p className="text-brand-steel text-sm leading-relaxed italic">&ldquo;{ex.bad}&rdquo;</p>
                </div>
                <div className="bg-[#0d0000] p-6 border-l border-brand-red/20">
                  <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-brand-red mb-3">✓ This</p>
                  <p className="text-white text-sm leading-relaxed">&ldquo;{ex.good}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── 04 BRAND NAMES ── */}
        <section>
          <SectionLabel>04</SectionLabel>
          <h2 className="font-display font-black text-3xl uppercase text-white mb-4">Brand Name Treatment</h2>
          <p className="text-brand-steel text-base max-w-xl mb-10 leading-relaxed">
            &ldquo;Rugged&rdquo; is always brand red. The modifier word is white on dark backgrounds, black on light backgrounds.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { rugged: "Rugged", modifier: "AI" },
              { rugged: "Rugged", modifier: "Genius" },
              { rugged: "Rugged", modifier: "Consulting" },
              { rugged: "Rugged", modifier: "Teams" },
            ].map((name) => (
              <div key={name.modifier} className="bg-[#111111] p-6 flex items-center justify-center">
                <p className="font-display font-black text-2xl uppercase leading-none">
                  <span className="text-brand-red">{name.rugged}</span>
                  <span className="text-white">{name.modifier}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { rugged: "Rugged", modifier: "AI" },
              { rugged: "Rugged", modifier: "Genius" },
              { rugged: "Rugged", modifier: "Consulting" },
              { rugged: "Rugged", modifier: "Teams" },
            ].map((name) => (
              <div key={name.modifier} className="bg-brand-light p-6 flex items-center justify-center">
                <p className="font-display font-black text-2xl uppercase leading-none">
                  <span className="text-brand-red">{name.rugged}</span>
                  <span className="text-brand-black">{name.modifier}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="font-display text-xs uppercase tracking-widest text-brand-steel mt-3">On dark · On light</p>
        </section>

        <Divider />

        {/* ── 05 GRAPHIC MARKS ── */}
        <section>
          <SectionLabel>05</SectionLabel>
          <h2 className="font-display font-black text-3xl uppercase text-white mb-4">Graphic Mark</h2>
          <p className="text-brand-steel text-base max-w-xl mb-10 leading-relaxed">
            Hex bolt head — reads as industrial hardware and network node. Works at any size.
          </p>

          <div className="flex items-end gap-16">
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 200 200" className="w-56 h-56" xmlns="http://www.w3.org/2000/svg">
                <polygon points={HEX_OUTER} fill="#C41E1E" />
                <text x="100" y="93" textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="36" fontWeight="900" letterSpacing="1"
                  style={{ fontFamily: FONT }}>RUGGED</text>
                <line x1="58" y1="108" x2="142" y2="108" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
                <text x="100" y="123" textAnchor="middle" dominantBaseline="middle"
                  fill="rgba(255,255,255,0.7)" fontSize="16" fontWeight="700" letterSpacing="6"
                  style={{ fontFamily: FONT }}>AI</text>
              </svg>
              <p className="font-display text-xs uppercase tracking-widest text-brand-steel text-center mt-4">Large</p>
            </div>
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 200 200" className="w-32 h-32" xmlns="http://www.w3.org/2000/svg">
                <polygon points={HEX_OUTER} fill="#C41E1E" />
                <text x="100" y="93" textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="36" fontWeight="900" letterSpacing="1"
                  style={{ fontFamily: FONT }}>RUGGED</text>
                <line x1="58" y1="108" x2="142" y2="108" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
                <text x="100" y="123" textAnchor="middle" dominantBaseline="middle"
                  fill="rgba(255,255,255,0.7)" fontSize="16" fontWeight="700" letterSpacing="6"
                  style={{ fontFamily: FONT }}>AI</text>
              </svg>
              <p className="font-display text-xs uppercase tracking-widest text-brand-steel text-center mt-4">Medium</p>
            </div>
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 200 200" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg">
                <polygon points={HEX_OUTER} fill="#C41E1E" />
                <text x="100" y="93" textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="36" fontWeight="900" letterSpacing="1"
                  style={{ fontFamily: FONT }}>RUGGED</text>
                <line x1="58" y1="108" x2="142" y2="108" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
                <text x="100" y="123" textAnchor="middle" dominantBaseline="middle"
                  fill="rgba(255,255,255,0.7)" fontSize="16" fontWeight="700" letterSpacing="6"
                  style={{ fontFamily: FONT }}>AI</text>
              </svg>
              <p className="font-display text-xs uppercase tracking-widest text-brand-steel text-center mt-4">Small</p>
            </div>
          </div>

          {/* Crossed Tools Variant */}
          <div className="mt-20">
            <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-steel mb-2">Crossed Tools Variant</p>
            <p className="text-brand-steel text-sm max-w-lg mb-10 leading-relaxed">
              Hammer and screwdriver crossed behind the wordmark — a trades take on the crossbones. Tools are ghosted so the text stays dominant.
            </p>
            <div className="flex items-end gap-16">
              {[{ size: "w-56 h-56", label: "Large" }, { size: "w-32 h-32", label: "Medium" }, { size: "w-16 h-16", label: "Small" }].map(({ size, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <svg viewBox="0 0 200 200" className={size} xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <clipPath id={`tools-clip-${label}`}>
                        <polygon points={HEX_OUTER} />
                      </clipPath>
                    </defs>
                    <polygon points={HEX_OUTER} fill="#C41E1E" />
                    <g clipPath={`url(#tools-clip-${label})`} opacity="0.18" fill="white">
                      {/* Hammer — head at top-left, handle at bottom-right (rotate -45°) */}
                      <g transform="rotate(-45, 100, 100)">
                        <rect x="80" y="20" width="40" height="26" rx="2" />
                        <rect x="96" y="46" width="8" height="128" rx="3" />
                      </g>
                      {/* Screwdriver — tip at top-right, handle at bottom-left (rotate 45°) */}
                      <g transform="rotate(45, 100, 100)">
                        <rect x="95" y="20" width="10" height="10" rx="1" />
                        <rect x="98" y="30" width="4" height="96" />
                        <rect x="93" y="126" width="14" height="8" rx="1" />
                        <rect x="87" y="134" width="26" height="40" rx="5" />
                      </g>
                    </g>
                    <text x="100" y="93" textAnchor="middle" dominantBaseline="middle"
                      fill="white" fontSize="36" fontWeight="900" letterSpacing="1"
                      style={{ fontFamily: FONT }}>RUGGED</text>
                    <line x1="58" y1="108" x2="142" y2="108" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
                    <text x="100" y="123" textAnchor="middle" dominantBaseline="middle"
                      fill="rgba(255,255,255,0.7)" fontSize="16" fontWeight="700" letterSpacing="6"
                      style={{ fontFamily: FONT }}>AI</text>
                  </svg>
                  <p className="font-display text-xs uppercase tracking-widest text-brand-steel text-center mt-4">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── 06 PRODUCTS ── */}
        <section>
          <SectionLabel>06</SectionLabel>
          <h2 className="font-display font-black text-3xl uppercase text-white mb-10">Product Ladder</h2>
          <div className="space-y-px">
            {[
              {
                name: "RuggedGenius",
                price: "$997 one-time",
                description: "Group workshop. Four weeks, live, hands-on. Owners learn to build AI in their business.",
                status: "Active",
              },
              {
                name: "RuggedU",
                price: "$997 one-time",
                description: "Alternative name for RuggedGenius — University framing. Under consideration.",
                status: "Considering",
              },
              {
                name: "RuggedConsulting",
                price: "$2,000–$3,000/mo",
                description: "Direct advisory with Colin. Highest-impact AI opportunities identified and built together.",
                status: "Active",
              },
              {
                name: "RuggedTeams",
                price: "Custom",
                description: "Company-wide upskill. Role-specific AI for ops managers, parts managers, sales, dispatch.",
                status: "New",
              },
              {
                name: "RuggedBuilds",
                price: "Custom",
                description: "Done for you. Full AI infrastructure built and integrated via Cloudburst.",
                status: "Active",
              },
            ].map((product) => (
              <div key={product.name} className="bg-[#111111] px-8 py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                <div className="flex-shrink-0 w-48">
                  <p className="font-display font-black text-xl uppercase leading-none">
                    <span className="text-brand-red">Rugged</span>
                    <span className="text-white">{product.name.slice(6)}</span>
                  </p>
                </div>
                <div className="flex-shrink-0 w-40">
                  <p className="font-display font-bold text-sm text-brand-red uppercase tracking-wide">{product.price}</p>
                </div>
                <p className="text-brand-steel text-sm leading-relaxed flex-1">{product.description}</p>
                <div className="flex-shrink-0">
                  <span className={`font-display font-bold text-xs uppercase tracking-widest px-3 py-1 ${
                    product.status === "Active" ? "text-brand-red border border-brand-red/40" :
                    product.status === "New" ? "text-white border border-white/20" :
                    "text-brand-steel border border-brand-steel/30"
                  }`}>
                    {product.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── 07 TARGET CUSTOMER ── */}
        <section>
          <SectionLabel>07</SectionLabel>
          <h2 className="font-display font-black text-3xl uppercase text-white mb-10">Target Customer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: "Who they are",
                points: [
                  "Owner or CEO of a trades business",
                  "$500K–$3M annual revenue",
                  "1–20 employees",
                  "HVAC, plumbing, pest control, electrical, garage doors, landscaping",
                  "Running the business AND doing the work",
                ],
              },
              {
                label: "What they feel",
                points: [
                  "Losing jobs to competitors with better follow-up",
                  "Phone rings after hours, goes to voicemail",
                  "Estimates go cold, no time to chase",
                  "Knows AI is coming, doesn't know where to start",
                  "Doesn't want to hire — wants systems",
                ],
              },
              {
                label: "What they want",
                points: [
                  "More closed jobs without more overhead",
                  "Systems that run while they're on the job",
                  "Something built for their trade, not generic",
                  "A partner who speaks their language",
                  "Fast ROI — one recovered job pays for it",
                ],
              },
            ].map((col) => (
              <div key={col.label} className="bg-[#111111] p-8">
                <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-5">{col.label}</p>
                <ul className="space-y-3">
                  {col.points.map((point) => (
                    <li key={point} className="text-brand-steel text-sm flex items-start gap-3 leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-brand-red flex-shrink-0 mt-1.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
