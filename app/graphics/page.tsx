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

            {/* A: Red — RUGGED fills hex, edge text */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 200 200" className="w-48 h-48" xmlns="http://www.w3.org/2000/svg">

                <polygon points={HEX_OUTER} fill="#C41E1E" />
                <polygon points={HEX_INNER} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <text
                  x="100" y="97"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="36" fontWeight="900" letterSpacing="1"
                  style={{ fontFamily: FONT }}
                >RUGGED</text>
                <text x="100" y="150" textAnchor="middle" dominantBaseline="middle"
                  fill="rgba(255,255,255,0.75)" fontSize="8" fontWeight="700" letterSpacing="2"
                  style={{ fontFamily: FONT }}>For the Trades</text>
              </svg>
              <BadgeLabel>Red · Word</BadgeLabel>
            </div>

            {/* B: Dark — RUGGED dominant, AI secondary, edge text */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 200 200" className="w-48 h-48" xmlns="http://www.w3.org/2000/svg">

                <polygon points={HEX_OUTER} fill="#0A0A0A" stroke="#C41E1E" strokeWidth="3" />
                <polygon points={HEX_INNER} fill="none" stroke="#C41E1E" strokeWidth="1" opacity="0.3" />
                <text
                  x="100" y="87"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="#C41E1E" fontSize="36" fontWeight="900" letterSpacing="1"
                  style={{ fontFamily: FONT }}
                >RUGGED</text>
                <line x1="58" y1="103" x2="142" y2="103" stroke="#C41E1E" strokeWidth="0.75" opacity="0.4" />
                <text
                  x="100" y="119"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="rgba(255,255,255,0.7)" fontSize="16" fontWeight="700" letterSpacing="6"
                  style={{ fontFamily: FONT }}
                >AI</text>
                <text x="100" y="147" textAnchor="middle" dominantBaseline="middle"
                  fill="rgba(255,255,255,0.45)" fontSize="8" fontWeight="700" letterSpacing="2"
                  style={{ fontFamily: FONT }}>For the Trades</text>
              </svg>
              <BadgeLabel>Dark · Full Mark</BadgeLabel>
            </div>

            {/* C: Red — RUGGED dominant, AI secondary, edge text */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 200 200" className="w-48 h-48" xmlns="http://www.w3.org/2000/svg">

                <polygon points={HEX_OUTER} fill="#C41E1E" />
                <text
                  x="100" y="87"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="36" fontWeight="900" letterSpacing="1"
                  style={{ fontFamily: FONT }}
                >RUGGED</text>
                <line x1="58" y1="103" x2="142" y2="103" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
                <text
                  x="100" y="119"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="rgba(255,255,255,0.7)" fontSize="16" fontWeight="700" letterSpacing="6"
                  style={{ fontFamily: FONT }}
                >AI</text>
                <text x="100" y="147" textAnchor="middle" dominantBaseline="middle"
                  fill="rgba(255,255,255,0.5)" fontSize="8" fontWeight="700" letterSpacing="2"
                  style={{ fontFamily: FONT }}>For the Trades</text>
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
                <circle cx="150" cy="150" r="135" fill="#0A0A0A" stroke="#C41E1E" strokeWidth="3" />
                <circle cx="150" cy="150" r="120" fill="none" stroke="#C41E1E" strokeWidth="1" opacity="0.5" />
                <circle cx="30" cy="150" r="3" fill="#C41E1E" opacity="0.5" />
                <circle cx="270" cy="150" r="3" fill="#C41E1E" opacity="0.5" />
                <text
                  x="150" y="132"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="#C41E1E" fontSize="60" fontWeight="900" letterSpacing="2"
                  style={{ fontFamily: FONT }}
                >RUGGED</text>
                <line x1="45" y1="155" x2="255" y2="155" stroke="#C41E1E" strokeWidth="0.75" opacity="0.4" />
                <text
                  x="150" y="174"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="rgba(255,255,255,0.65)" fontSize="20" fontWeight="700" letterSpacing="10"
                  style={{ fontFamily: FONT }}
                >AI</text>
                <text
                  x="150" y="215"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="#6B7280" fontSize="11" fontWeight="700" letterSpacing="4"
                  style={{ fontFamily: FONT }}
                >FOR THE TRADES</text>
              </svg>
              <BadgeLabel>Dark · Red Ring</BadgeLabel>
            </div>

            {/* B: Red filled */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 300 300" className="w-48 h-48" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="150" r="135" fill="#C41E1E" />
                <circle cx="150" cy="150" r="120" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                <circle cx="30" cy="150" r="3" fill="rgba(255,255,255,0.4)" />
                <circle cx="270" cy="150" r="3" fill="rgba(255,255,255,0.4)" />
                <text
                  x="150" y="132"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="60" fontWeight="900" letterSpacing="2"
                  style={{ fontFamily: FONT }}
                >RUGGED</text>
                <line x1="45" y1="155" x2="255" y2="155" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
                <text
                  x="150" y="174"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="rgba(255,255,255,0.65)" fontSize="20" fontWeight="700" letterSpacing="10"
                  style={{ fontFamily: FONT }}
                >AI</text>
                <text
                  x="150" y="215"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="rgba(255,255,255,0.5)" fontSize="11" fontWeight="700" letterSpacing="4"
                  style={{ fontFamily: FONT }}
                >FOR THE TRADES</text>
              </svg>
              <BadgeLabel>Red · Fill</BadgeLabel>
            </div>

            {/* C: Outlined */}
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 300 300" className="w-48 h-48" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="150" r="135" fill="none" stroke="#C41E1E" strokeWidth="3" />
                <circle cx="150" cy="150" r="120" fill="none" stroke="#C41E1E" strokeWidth="1" opacity="0.4" />
                <circle cx="30" cy="150" r="3" fill="#C41E1E" opacity="0.5" />
                <circle cx="270" cy="150" r="3" fill="#C41E1E" opacity="0.5" />
                <text
                  x="150" y="132"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="#C41E1E" fontSize="60" fontWeight="900" letterSpacing="2"
                  style={{ fontFamily: FONT }}
                >RUGGED</text>
                <line x1="45" y1="155" x2="255" y2="155" stroke="#C41E1E" strokeWidth="0.75" opacity="0.35" />
                <text
                  x="150" y="174"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="#C41E1E" fontSize="20" fontWeight="700" letterSpacing="10"
                  opacity="0.65"
                  style={{ fontFamily: FONT }}
                >AI</text>
                <text
                  x="150" y="215"
                  textAnchor="middle" dominantBaseline="middle"
                  fill="#6B7280" fontSize="11" fontWeight="700" letterSpacing="4"
                  style={{ fontFamily: FONT }}
                >FOR THE TRADES</text>
              </svg>
              <BadgeLabel>Outlined</BadgeLabel>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
