const FONT = "var(--font-barlow-condensed), 'Barlow Condensed', 'Arial Narrow', Arial, sans-serif";
const HEX = "169.28,140 100,180 30.72,140 30.72,60 100,20 169.28,60";

function Card({ children, bg }: { children: React.ReactNode; bg: string }) {
  return (
    <div
      style={{
        width: "3.5in",
        height: "2in",
        backgroundColor: bg,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

export default function BusinessCardPage() {
  return (
    <main className="bg-[#222] min-h-screen pt-24 pb-32 px-6">
      <div className="max-w-5xl mx-auto">

        <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-red mb-2">Internal</p>
        <h1 className="font-display font-black uppercase text-white text-4xl mb-2">Business Card Preview</h1>
        <p className="text-brand-steel text-sm mb-12">3.5" × 2" — print at 300dpi (1050 × 600px) in Canva</p>

        {/* FRONT */}
        <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-steel mb-4">Front</p>
        <Card bg="#C41E1E">
          {/* Background hex watermark — large, bottom-right */}
          <svg
            viewBox="0 0 200 200"
            style={{ position: "absolute", width: "2.2in", height: "2.2in", right: "-0.4in", bottom: "-0.4in", opacity: 0.12 }}
          >
            <polygon points={HEX} fill="white" />
          </svg>

          {/* Logo — top left */}
          <div style={{ position: "absolute", top: "0.2in", left: "0.25in" }}>
            <span style={{
              fontFamily: FONT,
              fontWeight: 900,
              fontSize: "0.22in",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "white",
            }}>
              Rugged<span style={{ opacity: 0.85 }}>AI</span>
              <sup style={{ fontSize: "0.12in", verticalAlign: "super", marginLeft: "0.02in" }}>™</sup>
            </span>
          </div>

          {/* Name + Title — center left */}
          <div style={{ position: "absolute", top: "0.52in", left: "0.25in" }}>
            <div style={{
              fontFamily: FONT,
              fontWeight: 900,
              fontSize: "0.42in",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              color: "white",
              lineHeight: 1,
              marginBottom: "0.06in",
            }}>
              Colin Hirdman
            </div>
            <div style={{
              fontFamily: FONT,
              fontWeight: 700,
              fontSize: "0.13in",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.75)",
            }}>
              Co-Founder
            </div>
          </div>

          {/* Contact — bottom left */}
          <div style={{ position: "absolute", bottom: "0.2in", left: "0.25in" }}>
            {[
              "612-850-4200",
              "colin.hirdman@gmail.com",
              "ruggedai.com",
            ].map((line) => (
              <div key={line} style={{
                fontFamily: FONT,
                fontWeight: 600,
                fontSize: "0.115in",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.7,
              }}>
                {line}
              </div>
            ))}
          </div>
        </Card>

        {/* BACK */}
        <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-steel mt-12 mb-4">Back</p>
        <Card bg="#0A0A0A">
          {/* Centered hex badge */}
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.12in" }}>
            <svg viewBox="0 0 200 200" style={{ width: "1.1in", height: "1.1in" }}>
              <polygon points={HEX} fill="#C41E1E" />
              <text x="100" y="93" textAnchor="middle" dominantBaseline="middle"
                fill="white" fontSize="36" fontWeight="900" letterSpacing="1"
                style={{ fontFamily: FONT }}>RUGGED</text>
              <line x1="58" y1="108" x2="142" y2="108" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
              <text x="100" y="123" textAnchor="middle" dominantBaseline="middle"
                fill="rgba(255,255,255,0.7)" fontSize="16" fontWeight="700" letterSpacing="6"
                style={{ fontFamily: FONT }}>AI</text>
            </svg>
            <div style={{
              fontFamily: FONT,
              fontWeight: 700,
              fontSize: "0.1in",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.4)",
            }}>
              AI that works as hard as you do.
            </div>
          </div>
        </Card>

        {/* Canva instructions */}
        <div className="mt-16 border border-brand-iron/20 p-8 max-w-2xl">
          <p className="font-display font-black text-white text-lg uppercase mb-4">Canva Setup</p>
          <ol className="space-y-2">
            {[
              "New design → Custom size → 3.5in × 2in",
              "Front: background #C41E1E · text white",
              "Back: background #0A0A0A · hex badge centered",
              "Font: Barlow Condensed (available in Canva) · weight Black for name, Bold for contact",
              "Download as PDF Print → 300dpi · crop marks on",
            ].map((step, i) => (
              <li key={i} className="text-brand-steel text-sm flex items-start gap-3">
                <span className="font-display font-black text-brand-red flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

      </div>
    </main>
  );
}
