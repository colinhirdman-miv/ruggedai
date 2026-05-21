const FONT = "var(--font-barlow-condensed), 'Barlow Condensed', 'Arial Narrow', Arial, sans-serif";
const HEX_OUTER = "169,140 100,180 31,140 31,60 100,20 169,60";
const HEX_INNER = "154,131 100,162 46,131 46,69 100,38 154,69";

// Source SVG viewBox="0 0 1440 810", content centered ~(720,403)
// Transform: translate(100,100) scale(0.13) translate(-720,-403) centers each tool in the 200×200 hex
const HAMMER_PATH = "M 383.796875 31.964844 L 349.996094 65.761719 C 346.054688 69.699219 345.214844 75.777344 347.90625 80.632812 L 406.269531 185.824219 C 408.621094 190.066406 413.214844 192.558594 418.046875 192.21875 L 456.183594 189.550781 L 704.296875 437.742188 L 668.421875 473.613281 C 663.746094 478.292969 663.746094 486.578125 668.421875 491.253906 L 702.738281 525.5625 C 707.609375 530.4375 715.511719 530.4375 720.378906 525.5625 C 722.453125 523.492188 725.214844 522.347656 728.148438 522.347656 C 731.085938 522.347656 733.847656 523.492188 735.921875 525.5625 L 737.164062 526.808594 C 741.3125 530.964844 741.3125 538.195312 737.164062 542.351562 C 732.484375 547.03125 732.484375 555.316406 737.164062 559.992188 L 934.96875 757.800781 C 960.089844 782.921875 1000.941406 782.949219 1026.03125 757.859375 L 1076.03125 707.855469 C 1088.203125 695.691406 1094.90625 679.5 1094.90625 662.289062 C 1094.90625 645.078125 1088.203125 628.898438 1076.035156 616.730469 L 878.230469 418.925781 C 875.886719 416.585938 872.714844 415.269531 869.402344 415.269531 C 866.09375 415.269531 862.921875 416.585938 860.582031 418.925781 C 858.507812 421.003906 855.75 422.148438 852.816406 422.148438 C 849.886719 422.148438 847.128906 421.003906 845.019531 418.894531 L 843.808594 417.691406 C 839.65625 413.523438 839.664062 406.296875 843.804688 402.144531 C 848.484375 397.46875 848.484375 389.183594 843.804688 384.503906 L 809.492188 350.195312 C 804.617188 345.320312 796.71875 345.320312 791.847656 350.195312 L 755.777344 386.265625 L 507.589844 138.152344 L 510.257812 100.015625 C 510.285156 94.636719 507.847656 90.449219 503.863281 88.238281 L 398.671875 29.878906 C 393.800781 27.167969 387.730469 28.023438 383.796875 31.964844 Z M 818.90625 394.890625 C 815.636719 404.636719 815.636719 409.914062 815.636719 409.914062 C 815.636719 419.507812 819.371094 428.539062 826.191406 435.363281 L 827.402344 436.566406 C 834.1875 443.355469 843.214844 447.101562 852.816406 447.101562 C 858.09375 447.101562 863.195312 445.972656 867.84375 443.828125 L 1058.394531 634.371094 C 1065.847656 641.828125 1069.953125 651.746094 1069.953125 662.289062 C 1069.953125 672.839844 1065.847656 682.757812 1058.390625 690.214844 L 1008.390625 740.214844 C 993.027344 755.574219 968.003906 755.550781 952.617188 740.15625 L 762.0625 549.605469 C 765.332031 539.847656 765.332031 534.578125 765.332031 534.578125 C 765.332031 524.976562 761.597656 515.953125 754.804688 509.164062 L 753.5625 507.921875 C 746.777344 501.132812 737.753906 497.394531 728.144531 497.394531 C 722.875 497.394531 717.773438 498.519531 713.121094 500.667969 L 694.886719 482.433594 L 730.667969 446.648438 L 764.5 412.816406 L 800.667969 376.652344 Z M 484.808594 106.203125 L 482.296875 142.039062 C 482.308594 142.878906 482.332031 143.316406 482.332031 143.316406 C 482.371094 144.734375 482.628906 146.101562 483.121094 147.375 C 483.96875 149.25 484.742188 150.433594 485.710938 151.457031 L 738.132812 403.90625 L 721.941406 420.097656 L 469.800781 167.878906 C 468.472656 166.722656 467.335938 165.984375 466.097656 165.417969 C 464.113281 164.609375 462.804688 164.367188 461.445312 164.3125 L 424.234375 166.773438 L 374.289062 76.753906 L 394.789062 56.257812 Z";

const SCREWDRIVER_PATH = "M 399.296875 777.839844 C 401.800781 779.316406 404.597656 780.054688 407.390625 780.054688 C 410.667969 780.054688 413.945312 779.042969 416.738281 777.050781 C 466.277344 741.617188 528.695312 680.355469 602.246094 594.96875 C 660.582031 527.25 709.042969 463.769531 727.164062 439.628906 C 730.792969 434.808594 732.238281 428.996094 731.660156 423.40625 L 892.636719 254.636719 C 897.183594 257.703125 902.742188 258.910156 908.1875 257.945312 C 914.402344 256.835938 919.769531 253.0625 922.917969 247.570312 C 931.21875 233.03125 942.367188 228.457031 955.136719 234.300781 C 964.855469 238.765625 976.339844 250.863281 971.390625 263.777344 C 969.546875 268.613281 969.304688 273.832031 970.507812 278.730469 C 973.640625 286.410156 975.054688 288.449219 976.789062 290.261719 C 986.910156 300.863281 1005.203125 320.140625 1013.992188 329.984375 C 1015.871094 332.089844 1018.503906 333.199219 1021.1875 333.199219 C 1022.582031 333.199219 1023.980469 332.894531 1025.296875 332.28125 C 1062.050781 314.9375 1090.191406 290.28125 1106.671875 260.996094 C 1108.550781 257.65625 1108.277344 253.527344 1105.964844 250.460938 C 1100.148438 242.765625 1083.042969 222.960938 1073.355469 211.832031 C 1067.460938 205.066406 1059.320312 201.019531 1050.421875 200.457031 L 1039.113281 199.734375 C 1034.214844 193.984375 1023.386719 180.558594 1017.894531 168.285156 C 1014.859375 161.523438 1014.328125 152.398438 1013.863281 144.351562 C 1013.476562 137.78125 1013.15625 132.113281 1011.402344 127.726562 C 994.78125 85.964844 912.699219 37.3125 848.753906 31.335938 C 770.515625 24.011719 739.628906 47.367188 706.941406 72.085938 L 704.355469 74.046875 C 698.136719 78.738281 695.96875 86.753906 698.957031 94.011719 C 701.914062 101.222656 709.058594 105.382812 716.707031 104.355469 C 749.054688 100.035156 792.023438 101.851562 818.863281 108.695312 C 828.261719 111.085938 839.746094 114.878906 845.207031 123.039062 C 849.605469 129.605469 850.152344 139.390625 846.636719 148.5625 C 844.304688 154.664062 840.339844 160.625 834.539062 166.757812 C 827.28125 174.453125 826.667969 186.179688 833.125 194.644531 C 835.664062 197.886719 835.664062 197.886719 835.664062 197.886719 C 771.511719 261.160156 719.644531 315.351562 673.226562 367.621094 C 666.542969 366.222656 659.378906 367.878906 653.871094 372.601562 C 550.171875 461.328125 398.910156 610.324219 335.304688 696.289062 C 331.207031 701.832031 331.015625 709.382812 334.851562 715.066406 C 353.195312 742.292969 374.878906 763.414062 399.296875 777.839844 Z M 1086.578125 257.03125 C 1072.746094 278.796875 1051.109375 297.523438 1023.433594 311.707031 C 1014.054688 301.476562 1000.289062 286.972656 991.632812 277.894531 C 1006.136719 255.136719 1028.992188 235.765625 1056.8125 222.59375 C 1071.222656 238.734375 1080.921875 250.109375 1086.578125 257.03125 Z M 848.53125 179.980469 C 856.097656 171.964844 861.363281 163.933594 864.625 155.417969 C 870.34375 140.496094 869.027344 123.953125 861.203125 112.277344 C 852.097656 98.6875 836.324219 93.226562 823.601562 89.980469 C 797.035156 83.21875 756.027344 80.96875 722.792969 84.214844 C 753.070312 61.4375 779.285156 44.15625 846.941406 50.484375 C 907.367188 56.136719 980.726562 102.78125 993.476562 134.8125 C 994.601562 145.429688 994.601562 145.429688 994.601562 145.429688 C 995.132812 154.648438 995.808594 166.117188 1000.289062 176.125 C 1008.738281 194.964844 1026.582031 214.691406 1027.355469 215.523438 C 1028.191406 216.28125 1028.191406 216.28125 1028.191406 216.28125 C 1013.863281 225.257812 1001.15625 235.875 990.507812 247.714844 C 987.472656 235.683594 978.765625 223.878906 963.199219 216.746094 C 956.984375 213.902344 950.785156 212.503906 944.777344 212.503906 C 929.597656 212.503906 915.6875 221.371094 906.210938 237.964844 C 903.273438 238.511719 903.273438 238.511719 903.273438 238.511719 C 887 224.792969 866.054688 206.082031 848.449219 182.949219 C 847.761719 182.066406 847.792969 180.765625 848.53125 179.980469 Z M 848.097656 212.664062 C 858.121094 223.78125 868.417969 233.609375 877.957031 242.125 L 721.445312 406.1875 L 689.609375 378.125 C 734.96875 327.191406 785.679688 274.25 848.097656 212.664062 Z M 666.367188 387.234375 C 666.992188 386.6875 667.746094 386.414062 668.503906 386.398438 C 669 386.878906 669 386.878906 669 386.878906 C 670.09375 387.84375 671.328125 388.46875 672.628906 388.855469 L 709.636719 421.460938 C 709.367188 423.871094 709.992188 426.328125 711.535156 428.351562 C 706.265625 435.371094 697.414062 447.050781 685.769531 462.050781 C 670.414062 444.574219 653.292969 428.753906 634.738281 414.828125 C 645.40625 405.351562 655.972656 396.132812 666.367188 387.234375 Z M 620.058594 427.949219 C 639.734375 442.34375 657.726562 459 673.644531 477.550781 C 611.929688 556.066406 496.425781 695.632812 407.246094 760.140625 C 386.589844 747.53125 368.023438 729.347656 352.039062 706.074219 C 401.59375 639.71875 514.429688 523.152344 620.058594 427.949219 Z";

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
            {[{ opacity: "0.10", opLabel: "Ghost (10%)" }, { opacity: "0.18", opLabel: "Subtle (18%)" }].map(({ opacity, opLabel }) => (
              <div key={opLabel} className="mb-12">
                <p className="font-display text-xs uppercase tracking-widest text-brand-steel mb-6">{opLabel}</p>
                <div className="flex items-end gap-16">
                  {[{ size: "w-56 h-56", label: "Large" }, { size: "w-32 h-32", label: "Medium" }, { size: "w-16 h-16", label: "Small" }].map(({ size, label }) => (
                    <div key={label} className="flex flex-col items-center">
                      <svg viewBox="0 0 200 200" className={size} xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <clipPath id={`tools-clip-${opLabel}-${label}`}>
                            <polygon points={HEX_OUTER} />
                          </clipPath>
                        </defs>
                        <polygon points={HEX_OUTER} fill="#C41E1E" />
                        <g clipPath={`url(#tools-clip-${opLabel}-${label})`} opacity={opacity} fill="white">
                          <g transform="translate(100,100) scale(0.13) translate(-720,-403)">
                            <path d={HAMMER_PATH} />
                          </g>
                          <g transform="translate(100,100) scale(0.13) translate(-720,-403)">
                            <path d={SCREWDRIVER_PATH} />
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
            ))}
          </div>

          {/* Stacked Variant — cross above wordmark */}
          <div className="mt-20">
            <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-brand-steel mb-2">Stacked Variant</p>
            <p className="text-brand-steel text-sm max-w-lg mb-10 leading-relaxed">
              Cross sits small above the wordmark as an emblem. Tools read as a badge element rather than background texture.
            </p>
            <div className="flex items-end gap-16">
              {[{ size: "w-56 h-56", label: "Large" }, { size: "w-32 h-32", label: "Medium" }].map(({ size, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <svg viewBox="0 0 200 200" className={size} xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <clipPath id={`stacked-clip-${label}`}>
                        <polygon points={HEX_OUTER} />
                      </clipPath>
                    </defs>
                    <polygon points={HEX_OUTER} fill="#C41E1E" />
                    <g clipPath={`url(#stacked-clip-${label})`} opacity="0.35" fill="white">
                      <g transform="translate(100,70) scale(0.04) translate(-720,-403)">
                        <path d={HAMMER_PATH} />
                      </g>
                      <g transform="translate(100,70) scale(0.04) translate(-720,-403)">
                        <path d={SCREWDRIVER_PATH} />
                      </g>
                    </g>
                    <text x="100" y="105" textAnchor="middle" dominantBaseline="middle"
                      fill="white" fontSize="36" fontWeight="900" letterSpacing="1"
                      style={{ fontFamily: FONT }}>RUGGED</text>
                    <line x1="58" y1="120" x2="142" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="0.75" />
                    <text x="100" y="134" textAnchor="middle" dominantBaseline="middle"
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
