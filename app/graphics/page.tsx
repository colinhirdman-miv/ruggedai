const FONT = "var(--font-barlow-condensed), 'Barlow Condensed', 'Arial Narrow', Arial, sans-serif";

const HEX_OUTER = "169,140 100,180 31,140 31,60 100,20 169,60";
const HEX_INNER = "154,131 100,162 46,131 46,69 100,38 154,69";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-steel mb-12">
      {children}
    </p>
  );
}

function BadgeLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-xs uppercase tracking-widest text-brand-steel text-center mt-5">
      {children}
    </p>
  );
}

export default function GraphicsPage() {
  return (
    <main className="bg-brand-black min-h-screen pt-28 pb-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-3">
          Internal
        </p>
        <h1
          className="font-display font-black uppercase text-white mb-24"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.01em" }}
        >
          Graphics
        </h1>

        {/* ── HEX BOLT HEAD ── */}
        <section className="mb-28">
          <Label>01 — Hex Bolt Head</Label>
          <div className="grid grid-cols-3 gap-16 items-end">

            {/* A: Red, single R */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 200 200" className="w-48 h-48" xmlns="http://www.w3.org/2000/svg">
                <polygon points={HEX_OUTER} fill="#C41E1E" />
                <polygon points={HEX_INNER} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
                <text
                  x="100" y="100"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="78" fontWeight="900"
                  style={{ fontFamily: FONT }}
                >R</text>
              </svg>
              <BadgeLabel>Red · Monogram</BadgeLabel>
            </div>

            {/* B: Dark, red outline, RUGGED / AI stacked */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 200 200" className="w-48 h-48" xmlns="http://www.w3.org/2000/svg">
                <polygon points={HEX_OUTER} fill="#0A0A0A" stroke="#C41E1E" strokeWidth="3" />
                <polygon points={HEX_INNER} fill="none" stroke="#C41E1E" strokeWidth="1" opacity="0.35" />
                <text
                  x="100" y="87"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="#C41E1E" fontSize="16" fontWeight="900" letterSpacing="5"
                  style={{ fontFamily: FONT }}
                >RUGGED</text>
                <line x1="62" y1="100" x2="138" y2="100" stroke="#C41E1E" strokeWidth="0.75" opacity="0.45" />
                <text
                  x="100" y="120"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="50" fontWeight="900"
                  style={{ fontFamily: FONT }}
                >AI</text>
              </svg>
              <BadgeLabel>Dark · Wordmark</BadgeLabel>
            </div>

            {/* C: Red, full wordmark */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 200 200" className="w-48 h-48" xmlns="http://www.w3.org/2000/svg">
                <polygon points={HEX_OUTER} fill="#C41E1E" />
                <text
                  x="100" y="87"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="rgba(255,255,255,0.88)" fontSize="16" fontWeight="900" letterSpacing="5"
                  style={{ fontFamily: FONT }}
                >RUGGED</text>
                <line x1="55" y1="100" x2="145" y2="100" stroke="rgba(255,255,255,0.28)" strokeWidth="0.75" />
                <text
                  x="100" y="120"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="50" fontWeight="900"
                  style={{ fontFamily: FONT }}
                >AI</text>
              </svg>
              <BadgeLabel>Red · Full Mark</BadgeLabel>
            </div>
          </div>
        </section>

        {/* ── METAL STAMP ── */}
        <section>
          <Label>02 — Metal Stamp</Label>
          <div className="grid grid-cols-3 gap-16 items-end">

            {/* A: Dark, red ring */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 300 300" className="w-48 h-48" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path id="arcA" d="M 42,150 A 108,108 0 0,1 258,150" />
                </defs>
                <circle cx="150" cy="150" r="135" fill="#0A0A0A" stroke="#C41E1E" strokeWidth="3" />
                <circle cx="150" cy="150" r="120" fill="none" stroke="#C41E1E" strokeWidth="1" opacity="0.55" />
                <text fill="#C41E1E" fontSize="20" fontWeight="900" letterSpacing="12" style={{ fontFamily: FONT }}>
                  <textPath href="#arcA" startOffset="50%" textAnchor="middle">RUGGED</textPath>
                </text>
                <text
                  x="150" y="148"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="92" fontWeight="900"
                  style={{ fontFamily: FONT }}
                >AI</text>
                <text
                  x="150" y="222"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="#6B7280" fontSize="12" fontWeight="700" letterSpacing="4"
                  style={{ fontFamily: FONT }}
                >FOR THE TRADES</text>
                <circle cx="50" cy="194" r="2.5" fill="#C41E1E" opacity="0.55" />
                <circle cx="250" cy="194" r="2.5" fill="#C41E1E" opacity="0.55" />
              </svg>
              <BadgeLabel>Dark · Red Ring</BadgeLabel>
            </div>

            {/* B: Red filled */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 300 300" className="w-48 h-48" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path id="arcB" d="M 42,150 A 108,108 0 0,1 258,150" />
                </defs>
                <circle cx="150" cy="150" r="135" fill="#C41E1E" />
                <circle cx="150" cy="150" r="120" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                <text fill="white" fontSize="20" fontWeight="900" letterSpacing="12" style={{ fontFamily: FONT }}>
                  <textPath href="#arcB" startOffset="50%" textAnchor="middle">RUGGED</textPath>
                </text>
                <text
                  x="150" y="148"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="92" fontWeight="900"
                  style={{ fontFamily: FONT }}
                >AI</text>
                <text
                  x="150" y="222"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="rgba(255,255,255,0.6)" fontSize="12" fontWeight="700" letterSpacing="4"
                  style={{ fontFamily: FONT }}
                >FOR THE TRADES</text>
                <circle cx="50" cy="194" r="2.5" fill="rgba(255,255,255,0.45)" />
                <circle cx="250" cy="194" r="2.5" fill="rgba(255,255,255,0.45)" />
              </svg>
              <BadgeLabel>Red · Fill</BadgeLabel>
            </div>

            {/* C: Outlined only */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 300 300" className="w-48 h-48" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path id="arcC" d="M 42,150 A 108,108 0 0,1 258,150" />
                </defs>
                <circle cx="150" cy="150" r="135" fill="none" stroke="#C41E1E" strokeWidth="3" />
                <circle cx="150" cy="150" r="120" fill="none" stroke="#C41E1E" strokeWidth="1" opacity="0.45" />
                <text fill="#C41E1E" fontSize="20" fontWeight="900" letterSpacing="12" style={{ fontFamily: FONT }}>
                  <textPath href="#arcC" startOffset="50%" textAnchor="middle">RUGGED</textPath>
                </text>
                <text
                  x="150" y="148"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="#C41E1E" fontSize="92" fontWeight="900"
                  style={{ fontFamily: FONT }}
                >AI</text>
                <text
                  x="150" y="222"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="#6B7280" fontSize="12" fontWeight="700" letterSpacing="4"
                  style={{ fontFamily: FONT }}
                >FOR THE TRADES</text>
                <circle cx="50" cy="194" r="2.5" fill="#C41E1E" opacity="0.55" />
                <circle cx="250" cy="194" r="2.5" fill="#C41E1E" opacity="0.55" />
              </svg>
              <BadgeLabel>Outlined</BadgeLabel>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
