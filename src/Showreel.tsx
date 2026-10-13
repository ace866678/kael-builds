import { ArrowDownRight, ArrowUpRight, Play } from "lucide-react";
import "./showreel.css";

export default function Showreel() {
  return (
    <section className="showreel-section section-pad" id="motion-showreel" aria-labelledby="showreel-title">
      <div className="page-shell">
        <div className="showreel-heading">
          <div>
            <div className="eyebrow section-eyebrow"><span className="eyebrow-mark" /> SVG MOTION STUDY / 001</div>
            <h2 id="showreel-title">Ideas, in <span>motion.</span></h2>
          </div>
          <p className="section-intro">A tiny brand film made from code: scalable vector graphics, CSS animation, and a little timing. No stock footage required.</p>
        </div>

        <div className="showreel-frame">
          <div className="showreel-topline"><span><i className="showreel-live-dot" /> KAEL BUILDS / BRAND FILM</span><span>SVG · CSS · REACT <b> / 15 SEC LOOP</b></span></div>
          <div className="showreel-canvas">
            <div className="showreel-grid" aria-hidden="true" />
            <svg className="showreel-art" viewBox="0 0 1000 500" role="img" aria-labelledby="showreel-svg-title showreel-svg-desc">
              <title id="showreel-svg-title">Kael Builds animated brand artwork</title>
              <desc id="showreel-svg-desc">Gold orbital lines circle a glowing K monogram while small digital project windows move into place.</desc>
              <defs>
                <linearGradient id="showreelGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff0b3" /><stop offset=".48" stopColor="#d7ad58" /><stop offset="1" stopColor="#87632a" /></linearGradient>
                <radialGradient id="showreelGlow"><stop offset="0" stopColor="#c9a45b" stopOpacity=".3" /><stop offset="1" stopColor="#c9a45b" stopOpacity="0" /></radialGradient>
                <filter id="showreelBlur"><feGaussianBlur stdDeviation="18" /></filter>
                <filter id="showreelSoftGlow"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              <circle className="showreel-aura" cx="500" cy="245" r="190" fill="url(#showreelGlow)" />
              <circle className="showreel-halo" cx="500" cy="245" r="142" fill="none" stroke="#b99752" strokeOpacity=".2" />
              <ellipse className="showreel-orbit showreel-orbit-one" cx="500" cy="245" rx="235" ry="88" fill="none" stroke="url(#showreelGold)" strokeWidth="1.2" />
              <ellipse className="showreel-orbit showreel-orbit-two" cx="500" cy="245" rx="180" ry="112" fill="none" stroke="#c9a45b" strokeOpacity=".55" strokeWidth="1" />
              <ellipse className="showreel-orbit showreel-orbit-three" cx="500" cy="245" rx="270" ry="150" fill="none" stroke="#d4b46b" strokeOpacity=".16" strokeDasharray="2 12" />
              <g className="showreel-core">
                <circle cx="500" cy="245" r="84" fill="#10110f" stroke="#c9a45b" strokeOpacity=".65" />
                <circle cx="500" cy="245" r="72" fill="none" stroke="#c9a45b" strokeOpacity=".17" />
                <text x="500" y="266" textAnchor="middle" fontFamily="Georgia, serif" fontSize="86" fill="url(#showreelGold)">K<tspan fill="#f0dba7">.</tspan></text>
              </g>
              <circle className="showreel-satellite satellite-one" cx="264" cy="245" r="5" fill="#f0dba7" filter="url(#showreelSoftGlow)" />
              <circle className="showreel-satellite satellite-two" cx="735" cy="245" r="4" fill="#d7ad58" filter="url(#showreelSoftGlow)" />
              <g className="showreel-window showreel-window-left">
                <rect x="88" y="122" width="205" height="126" rx="8" fill="#171a17" stroke="#c9a45b" strokeOpacity=".5" />
                <path d="M88 148H293" stroke="#c9a45b" strokeOpacity=".25" />
                <circle cx="104" cy="135" r="2.5" fill="#d7ad58" /><circle cx="114" cy="135" r="2.5" fill="#6d705f" /><circle cx="124" cy="135" r="2.5" fill="#6d705f" />
                <rect x="106" y="166" width="75" height="6" rx="3" fill="#d7ad58" opacity=".8" />
                <rect x="106" y="181" width="126" height="4" rx="2" fill="#6e7168" />
                <rect x="106" y="193" width="104" height="4" rx="2" fill="#6e7168" opacity=".65" />
                <rect x="106" y="214" width="55" height="17" rx="3" fill="#c9a45b" opacity=".85" />
                <path d="M116 222h33" stroke="#171a17" strokeWidth="1.5" />
              </g>
              <g className="showreel-window showreel-window-right">
                <rect x="706" y="275" width="205" height="126" rx="8" fill="#171a17" stroke="#c9a45b" strokeOpacity=".5" />
                <path d="M706 301H911" stroke="#c9a45b" strokeOpacity=".25" />
                <circle cx="722" cy="288" r="2.5" fill="#d7ad58" /><circle cx="732" cy="288" r="2.5" fill="#6d705f" /><circle cx="742" cy="288" r="2.5" fill="#6d705f" />
                <path d="M731 370l28-30 22 16 31-37 36 22" fill="none" stroke="#d7ad58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M731 378h155" stroke="#6e7168" strokeOpacity=".7" />
                <circle cx="812" cy="319" r="4" fill="#f0dba7" />
              </g>
              <g className="showreel-caption-svg">
                <text x="500" y="435" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" letterSpacing="5" fill="#c9a45b">IDEAS INTO DIGITAL PRODUCTS</text>
                <path d="M350 451H650" stroke="#c9a45b" strokeOpacity=".35" />
              </g>
            </svg>
            <div className="showreel-copy">
              <span className="showreel-kicker">INDEPENDENT DIGITAL STUDIO</span>
              <p>From a thought<br />to <em>something real.</em></p>
              <span className="showreel-signature">KAEL BUILDS<span>/</span></span>
            </div>
            <div className="showreel-index">01 <span>—</span> 05</div>
          </div>
          <div className="showreel-bottomline"><span><Play size={13} fill="currentColor" /> LOOPING SVG ANIMATION</span><span>MADE IN THE BROWSER <b>· NO VIDEO ASSETS</b></span></div>
        </div>
        <div className="showreel-footer"><p>This is a live, responsive animation—not a pre-rendered video file. It stays sharp on every screen and respects reduced-motion settings.</p><a className="text-link" href="#work">Explore the projects <ArrowDownRight size={16} /></a></div>
      </div>
    </section>
  );
}
