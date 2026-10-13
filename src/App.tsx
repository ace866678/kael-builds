import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Palette,
  Check,
  Code2,
  ExternalLink,
  Layers3,
  Menu,
  RadioTower,
  Search,
  Sparkles,
  Terminal,
  Workflow,
  Wrench,
  X,
} from "lucide-react";

type Category = "Web apps" | "Research" | "Systems";
type Filter = "All work" | Category;

type Project = {
  id: string;
  number: string;
  name: string;
  eyebrow: string;
  description: string;
  category: Category;
  status: string;
  tags: string[];
  repo?: string;
  liveUrl?: string;
  screenshotUrl?: string;
  visual: "research" | "alvora" | "iot" | "server";
};

const filters: Filter[] = ["All work", "Web apps", "Research", "Systems"];

const projects: Project[] = [
  {
    id: "research-room",
    number: "01",
    name: "Research Room",
    eyebrow: "COLLABORATION · WEB APP",
    description:
      "A workspace concept for helping students and small research groups keep their work organized and move from scattered tasks toward a shared process.",
    category: "Web apps",
    status: "In progress",
    tags: ["React", "Vite", "Firebase"],
    liveUrl: "https://research-room-sable.vercel.app/",
    screenshotUrl: "https://image.thum.io/get/width/1200/crop/760/noanimate/https://research-room-sable.vercel.app/",
    visual: "research",
  },
  {
    id: "alvora",
    number: "02",
    name: "Alvora",
    eyebrow: "OPPORTUNITY DISCOVERY",
    description:
      "A Philippines-first opportunity discovery platform concept for scholarships, internships, hackathons, competitions, grants, and technology events.",
    category: "Web apps",
    status: "Early prototype",
    tags: ["React", "TypeScript", "Vite"],
    repo: "https://github.com/ace866678/alvora",
    liveUrl: "https://alvora-nine.vercel.app/",
    screenshotUrl: "https://image.thum.io/get/width/1200/crop/760/noanimate/https://alvora-nine.vercel.app/",
    visual: "alvora",
  },
  {
    id: "crash-detection",
    number: "03",
    name: "IoT Crash Detection",
    eyebrow: "RESEARCH · CONNECTED SYSTEMS",
    description:
      "A research project exploring an IoT-based crash detection and emergency alert system for motorcycle and tricycle drivers in Kalibo.",
    category: "Research",
    status: "Research project",
    tags: ["IoT", "Detection logic", "Emergency alerts"],
    visual: "iot",
  },
  {
    id: "studyvault",
    number: "03",
    name: "StudyVault",
    eyebrow: "STUDENT TOOLS · WEB APP",
    description:
      "A student-focused study workspace designed to make learning resources and study sessions easier to organize in one place.",
    category: "Web apps",
    status: "Live website",
    tags: ["Web app", "Study resources", "Student tools"],
    liveUrl: "https://studyvault-lilac.vercel.app/",
    screenshotUrl: "https://image.thum.io/get/width/1200/crop/760/noanimate/https://studyvault-lilac.vercel.app/",
    visual: "research",
  },
  {
    id: "mcl-server",
    number: "04",
    name: "MCL Server",
    eyebrow: "INFRASTRUCTURE · OPEN SOURCE",
    description:
      "Cross-play Minecraft server tooling built around repeatable setup, maintenance, backups, and a management path for server operators.",
    category: "Systems",
    status: "Public repository",
    tags: ["Python", "Shell", "Server tooling"],
    repo: "https://github.com/ace866678/MCL-server",
    visual: "server",
  },
];

function ProjectArtwork({ kind }: { kind: Project["visual"] }) {
  if (kind === "research") {
    return (
      <div className="artwork artwork-research" aria-hidden="true">
        <div className="artwork-label"><span className="artwork-dot" /> WORKSPACE STUDY <span>01 / 04</span></div>
        <div className="research-window">
          <aside className="research-rail">
            <div className="rail-mark">R<span>.</span></div>
            <div className="rail-icon rail-icon-active"><Layers3 size={15} /></div>
            <div className="rail-icon"><BookOpen size={15} /></div>
            <div className="rail-icon"><Workflow size={15} /></div>
          </aside>
          <div className="research-main">
            <div className="research-topline"><span>RESEARCH ROOM</span><span className="research-avatar">K</span></div>
            <div className="research-welcome">Your workspace<span>One place to move your research forward.</span></div>
            <div className="research-stats">
              <div><span>PROJECTS</span><b>03</b><i className="stat-line stat-line-long" /></div>
              <div><span>IN PROGRESS</span><b>02</b><i className="stat-line" /></div>
            </div>
            <div className="research-list-title">Recent work <span>View all ↗</span></div>
            <div className="research-row"><i className="row-square row-square-lime" /><span>Literature review</span><small>In progress</small></div>
            <div className="research-row"><i className="row-square row-square-blue" /><span>Research outline</span><small>Draft</small></div>
          </div>
        </div>
        <div className="artwork-caption">ILLUSTRATIVE UI CONCEPT</div>
      </div>
    );
  }

  if (kind === "alvora") {
    return (
      <div className="artwork artwork-alvora" aria-hidden="true">
        <div className="artwork-label"><span className="artwork-dot" /> OPPORTUNITY MAP <span>02 / 04</span></div>
        <div className="alvora-window">
          <div className="alvora-header"><span className="alvora-symbol">a.</span><span>Discover what's possible.</span><span className="alvora-menu">•••</span></div>
          <div className="alvora-title">Find your next<br /><em>opportunity.</em></div>
          <div className="alvora-search"><span>⌕</span> Search scholarships, events, grants... <span>↵</span></div>
          <div className="alvora-tabs"><b>For you</b><span>Scholarships</span><span>Internships</span><span>Events</span></div>
          <div className="opportunity-card"><div className="opportunity-icon opportunity-icon-lime">S</div><div><b>Scholarship opportunities</b><span>Education · Sample listing</span></div><ArrowUpRight size={15} /></div>
          <div className="opportunity-card"><div className="opportunity-icon opportunity-icon-blue">✳</div><div><b>Build week / hackathon</b><span>Technology · Sample listing</span></div><ArrowUpRight size={15} /></div>
        </div>
        <div className="artwork-caption">ILLUSTRATIVE UI CONCEPT · DEMO DATA</div>
      </div>
    );
  }

  if (kind === "iot") {
    return (
      <div className="artwork artwork-iot" aria-hidden="true">
        <div className="artwork-label"><span className="artwork-dot" /> SYSTEM FLOW <span>03 / 04</span></div>
        <div className="iot-sheet">
          <div className="iot-title">From event to alert <span>CONCEPT DIAGRAM</span></div>
          <div className="iot-flow">
            <div className="iot-node"><div className="iot-node-icon"><RadioTower size={19} /></div><b>Input</b><span>Sensor signals</span></div>
            <div className="iot-connector"><i /><ArrowRight size={14} /></div>
            <div className="iot-node iot-node-active"><div className="iot-node-icon"><Workflow size={19} /></div><b>Evaluate</b><span>Detection logic</span></div>
            <div className="iot-connector"><i /><ArrowRight size={14} /></div>
            <div className="iot-node"><div className="iot-node-icon"><ArrowUpRight size={19} /></div><b>Notify</b><span>Alert pathway</span></div>
          </div>
          <div className="iot-note"><span className="iot-note-dot" /> Prototype concept — not a validated emergency device</div>
          <div className="iot-grid-lines" />
        </div>
        <div className="artwork-caption">CONCEPTUAL SYSTEM DIAGRAM</div>
      </div>
    );
  }

  return (
    <div className="artwork artwork-server" aria-hidden="true">
      <div className="artwork-label"><span className="artwork-dot" /> OPERATIONS LOG <span>04 / 04</span></div>
      <div className="server-terminal">
        <div className="terminal-top"><div><i /><i /><i /></div><span><Terminal size={13} /> mcl-server / status</span><span className="terminal-ready">SYSTEMS</span></div>
        <div className="terminal-body">
          <div className="terminal-side"><span>01</span><span>02</span><span>03</span><span>04</span></div>
          <div className="terminal-lines">
            <p><span className="terminal-muted">$</span> mc doctor</p>
            <p><span className="terminal-green">✓</span> runtime checks</p>
            <p><span className="terminal-green">✓</span> configuration</p>
            <p><span className="terminal-green">✓</span> backup workflow</p>
            <p><span className="terminal-muted">$</span> mc status <span className="terminal-cursor" /></p>
            <div className="terminal-rule" />
            <div className="terminal-bottom"><span>TOOLS FOR OPERATORS</span><span>01—04</span></div>
          </div>
        </div>
      </div>
      <div className="artwork-caption">ILLUSTRATIVE TERMINAL VIEW</div>
    </div>
  );
}


type DesignKind =
  | "bento"
  | "commerce"
  | "portfolio"
  | "analytics"
  | "travel"
  | "learning"
  | "event"
  | "fitness"
  | "assistant"
  | "iot";

type DesignSample = {
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  kind: DesignKind;
};

const designSamples: DesignSample[] = [
  {
    number: "01",
    name: "Orbit Workspace",
    category: "SaaS dashboard",
    description: "A calm, modular productivity dashboard built around a strong grid, quick status checks, and a clear next action.",
    tags: ["Bento grid", "Productivity", "Light UI"],
    kind: "bento",
  },
  {
    number: "02",
    name: "Form & Object",
    category: "Editorial commerce",
    description: "A premium storefront concept with oversized type, restrained navigation, and gallery-like product storytelling.",
    tags: ["E-commerce", "Editorial", "Minimal"],
    kind: "commerce",
  },
  {
    number: "03",
    name: "Alex Mori",
    category: "Creative portfolio",
    description: "A bold designer portfolio using layered color, oversized typography, and a playful art-directed visual.",
    tags: ["Portfolio", "Expressive type", "Color"],
    kind: "portfolio",
  },
  {
    number: "04",
    name: "Northstar",
    category: "Fintech analytics",
    description: "A data-forward finance interface that pairs high-contrast metrics with compact charts and a focused action panel.",
    tags: ["Analytics", "Dark UI", "Data viz"],
    kind: "analytics",
  },
  {
    number: "05",
    name: "Wander Collective",
    category: "Travel landing page",
    description: "A destination-led travel concept with a scenic visual field, minimal copy, and one obvious search action.",
    tags: ["Travel", "Immersive hero", "Booking"],
    kind: "travel",
  },
  {
    number: "06",
    name: "Learnloop",
    category: "Learning platform",
    description: "A friendly learning dashboard that turns progress into small milestones and makes the next lesson easy to find.",
    tags: ["EdTech", "Progress tracking", "Cards"],
    kind: "learning",
  },
  {
    number: "07",
    name: "Make Waves",
    category: "Event identity",
    description: "An energetic event landing page with a punchy poster-like headline, clear event details, and a strong ticket call-to-action.",
    tags: ["Events", "Brutalist type", "High energy"],
    kind: "event",
  },
  {
    number: "08",
    name: "Pulse Training",
    category: "Fitness mobile UI",
    description: "A compact wellness interface centered on daily movement, readable activity rings, and small achievable goals.",
    tags: ["Fitness", "Mobile-first", "Dark mode"],
    kind: "fitness",
  },
  {
    number: "09",
    name: "Studio AI",
    category: "AI assistant",
    description: "A soft, focused AI workspace that makes conversation feel approachable while keeping suggested actions close at hand.",
    tags: ["AI product", "Conversational UI", "Soft gradient"],
    kind: "assistant",
  },
  {
    number: "10",
    name: "Signal Home",
    category: "IoT monitoring",
    description: "A connected-home control panel combining live device states, environmental readings, and a simple energy trend.",
    tags: ["IoT", "Smart home", "Monitoring"],
    kind: "iot",
  },
];

function DesignPreview({ sample }: { sample: DesignSample }) {
  return (
    <div className={`design-preview design-preview-${sample.kind}`} aria-hidden="true">
      <div className="design-browser">
        <span className="design-browser-dots"><i /><i /><i /></span>
        <span className="design-browser-address">{sample.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.concept</span>
        <span className="design-browser-label">DESIGN STUDY</span>
      </div>

      <div className="design-screen">
        {sample.kind === "bento" && (
          <>
            <div className="bento-top"><div className="bento-brand"><span>◈</span> orbit<span className="bento-brand-dot">.</span></div><div className="bento-mini-nav"><b>Overview</b><span>Projects</span><span>Team</span></div><span className="bento-avatar">KJ</span></div>
            <div className="bento-intro"><div><span className="design-kicker">MONDAY, 09:41 AM</span><h4>Your space to<br />make progress.</h4></div><span className="bento-add">＋ New project</span></div>
            <div className="bento-grid"><div className="bento-card bento-card-feature"><span>FOCUS THIS WEEK</span><b>Build with<br />intention.</b><small>4 tasks · 2 priorities</small><div className="bento-progress"><i /></div></div><div className="bento-card bento-card-stat"><span>PROJECTS</span><b>08</b><small>↗ 2 this month</small></div><div className="bento-card bento-card-stat"><span>FOCUS HOURS</span><b>12.5</b><small>On your way</small></div><div className="bento-card bento-card-task"><span className="bento-check">✓</span><div><b>Review the sprint</b><small>Today · 2:30 PM</small></div><span>↗</span></div></div>
          </>
        )}
        {sample.kind === "commerce" && (
          <>
            <div className="commerce-nav"><b>FORM<span> / OBJECT</span></b><div>SHOP&nbsp;&nbsp;&nbsp; JOURNAL&nbsp;&nbsp;&nbsp; ABOUT</div><span> BAG (02)</span></div>
            <div className="commerce-hero"><div className="commerce-copy"><span className="design-kicker">OBJECTS FOR EVERYDAY RITUALS</span><h4>Less, but<br /><em>better.</em></h4><p>Thoughtful pieces for a slower, more considered life.</p><span className="commerce-link">EXPLORE THE COLLECTION ↗</span></div><div className="commerce-object"><div className="commerce-vase commerce-vase-one" /><div className="commerce-vase commerce-vase-two" /><div className="commerce-orbit" /><span>STUDIO SERIES / 04</span></div></div>
            <div className="commerce-bottom"><span>01 — 04 / HOME OBJECTS</span><span>DESIGNED TO LAST&nbsp; ↗</span></div>
          </>
        )}
        {sample.kind === "portfolio" && (
          <>
            <div className="portfolio-nav"><b>AM<span>®</span></b><span>SELECTED WORK 2024—26</span><span>ABOUT ↗</span></div>
            <div className="portfolio-hero"><div className="portfolio-big-type">Designing<br /><i>what's</i><br />next<span>.</span></div><div className="portfolio-art"><div className="portfolio-art-circle" /><div className="portfolio-art-sun" /><div className="portfolio-art-block">A—26</div><span>CREATIVE<br />DEVELOPMENT</span></div></div>
            <div className="portfolio-footer"><span>INDEPENDENT DESIGNER / MAKER</span><span>SCROLL TO EXPLORE ↓</span></div>
          </>
        )}
        {sample.kind === "analytics" && (
          <>
            <div className="analytics-nav"><b><span>✳</span> NORTHSTAR</b><span>Overview&nbsp;&nbsp; Accounts&nbsp;&nbsp; Reports</span><span className="analytics-live">● LIVE</span></div>
            <div className="analytics-title"><div><span className="design-kicker">MONDAY, OCTOBER 12</span><h4>Good morning, Alex.</h4></div><span className="analytics-filter">Last 30 days⌄</span></div>
            <div className="analytics-metrics"><div><span>TOTAL BALANCE</span><b>$24,680<span>.50</span></b><small>↗ 8.4% this month</small></div><div><span>INCOME</span><b>$5,420</b><small>↗ 4.2%</small></div><div><span>SPENDING</span><b>$2,180</b><small>↓ 2.1%</small></div></div>
            <div className="analytics-chart"><div><b>Cash flow</b><span>INCOME VS. SPENDING</span></div><div className="analytics-bars">{[38,52,44,67,48,80,59,73,61,91,67,77,54,85].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div><div className="analytics-chart-axis"><span>SEP 15</span><span>SEP 30</span><span>OCT 12</span></div></div>
          </>
        )}
        {sample.kind === "travel" && (
          <>
            <div className="travel-nav"><b>wander<span> / collective</span></b><span>DESTINATIONS&nbsp;&nbsp; JOURNAL&nbsp;&nbsp; OUR STORY</span><b className="travel-menu">☰</b></div>
            <div className="travel-scenery"><div className="travel-sun" /><div className="travel-mountain travel-mountain-back" /><div className="travel-mountain travel-mountain-front" /><div className="travel-water" /><div className="travel-copy"><span>YOUR NEXT CHAPTER</span><h4>Find your<br /><i>somewhere.</i></h4><p>Remarkable places. Unhurried journeys.</p><span className="travel-discover">DISCOVER PLACES&nbsp; ↗</span></div><span className="travel-location">SIARGAO, PHILIPPINES · 09°47′N</span></div>
            <div className="travel-search"><div><span>WHERE TO?</span><b>Find your destination</b></div><div><span>WHEN?</span><b>Choose dates</b></div><span className="travel-search-btn">SEARCH&nbsp; ↗</span></div>
          </>
        )}
        {sample.kind === "learning" && (
          <>
            <div className="learning-nav"><b><span>l.</span> learnloop</b><span>My learning&nbsp;&nbsp; Explore&nbsp;&nbsp; Community</span><span className="learning-avatar">A</span></div>
            <div className="learning-welcome"><div><span className="design-kicker">YOUR LEARNING SPACE</span><h4>Small steps.<br /><i>Big futures.</i></h4></div><div className="learning-streak"><b>✦ 07</b><span>DAY STREAK</span></div></div>
            <div className="learning-progress"><div><span>WEEKLY GOAL</span><b>3 of 5 hours</b></div><div className="learning-progress-track"><i /></div><small>You're building a great habit.</small></div>
            <div className="learning-courses"><div className="learning-course learning-course-purple"><span>01 / DESIGN</span><b>Design<br />foundations</b><i>↗</i></div><div className="learning-course learning-course-peach"><span>02 / CODE</span><b>Build with<br />React</b><i>↗</i></div><div className="learning-course learning-course-green"><span>03 / THINK</span><b>Research<br />methods</b><i>↗</i></div></div>
          </>
        )}
        {sample.kind === "event" && (
          <>
            <div className="event-nav"><b>MW<span>®</span></b><span>CONFERENCE&nbsp;&nbsp; SPEAKERS&nbsp;&nbsp; VENUE</span><span className="event-tick">GET TICKETS ↗</span></div>
            <div className="event-hero"><span className="event-edition">CREATIVE TECH GATHERING / VOL. 04</span><h4>MAKE<br /><i>WAVES</i><span>®</span></h4><div className="event-shape event-shape-one" /><div className="event-shape event-shape-two" /><div className="event-date"><b>24—25</b><span>OCT<br />2026</span></div></div>
            <div className="event-bottom"><span>MANILA, PHILIPPINES</span><span>IDEAS DON'T STAND STILL.</span><span>↓ EXPLORE THE PROGRAM</span></div>
          </>
        )}
        {sample.kind === "fitness" && (
          <>
            <div className="fitness-nav"><b>PULSE<span>.</span></b><span>TODAY&nbsp;&nbsp; TRAINING&nbsp;&nbsp; PROGRESS</span><span className="fitness-avatar">A</span></div>
            <div className="fitness-greeting"><span className="design-kicker">TUESDAY · LET'S MOVE</span><h4>Your body.<br /><i>Your pace.</i></h4></div>
            <div className="fitness-dashboard"><div className="fitness-ring"><div><b>78<span>%</span></b><small>DAILY GOAL</small></div></div><div className="fitness-stats"><div><span>STEPS</span><b>8,420</b><i>↗ 12% vs. yesterday</i></div><div><span>ACTIVE MIN</span><b>42 min</b><i>On track</i></div><div><span>RECOVERY</span><b>Good</b><i>Rest well tonight</i></div></div></div>
            <div className="fitness-tip"><span>✳</span><div><b>Today's nudge</b><small>Ten minutes outside counts, too.</small></div><span>↗</span></div>
          </>
        )}
        {sample.kind === "assistant" && (
          <>
            <div className="assistant-nav"><b><span>✳</span> studio ai</b><span>New chat&nbsp;&nbsp; Library&nbsp;&nbsp; Projects</span><span className="assistant-avatar">A</span></div>
            <div className="assistant-heading"><span className="assistant-orb">✳</span><h4>Room for a better<br /><i>kind of thinking.</i></h4><p>Your ideas, organized into what comes next.</p></div>
            <div className="assistant-chat"><div className="assistant-user">Help me shape a launch plan for my new idea.</div><div className="assistant-reply"><span>✳</span><div><b>Let's make it clear.</b><p>We can start with the audience, the problem you're solving, and one small test worth running this week.</p></div></div><div className="assistant-prompt"><span>Ask anything...</span><b>↑</b></div></div>
            <div className="assistant-suggestions"><span>Plan a project</span><span>Explore a topic</span><span>Write a brief</span></div>
          </>
        )}
        {sample.kind === "iot" && (
          <>
            <div className="iot-nav"><b><span>◉</span> SIGNAL HOME</b><span>OVERVIEW&nbsp;&nbsp; DEVICES&nbsp;&nbsp; ENERGY</span><span className="iot-status"><i /> ALL SYSTEMS NORMAL</span></div>
            <div className="iot-intro"><div><span className="design-kicker">YOUR HOME, AT A GLANCE</span><h4>Everything<br />in sync.</h4></div><div className="iot-weather"><b>28°</b><span>PARTLY CLOUDY<br />KALIBO, AKLAN</span></div></div>
            <div className="iot-cards"><div><span>POWER</span><b>2.4 <small>kW</small></b><i className="iot-power-bars"><i /><i /><i /><i /><i /><i /><i /></i></div><div><span>ROOM TEMP.</span><b>24.8°</b><small>Living room</small></div><div><span>CONNECTED</span><b>08 <small>/ 09</small></b><small>devices online</small></div></div>
            <div className="iot-footer-bar"><span>ENERGY USE TODAY</span><div>{[21,31,24,52,39,74,48,68,42,89,60,72,47,65,53].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div><b>−12% VS. LAST WEEK</b></div>
          </>
        )}
      </div>
      <div className="design-preview-footer"><span>{sample.category.toUpperCase()}</span><span>VISUAL STUDY / {sample.number}</span></div>
    </div>
  );
}

function App() {
  const [filter, setFilter] = useState<Filter>("All work");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDesignIndex, setActiveDesignIndex] = useState(0);
  const activeDesign = designSamples[activeDesignIndex];
  const moveDesign = (direction: -1 | 1) => {
    setActiveDesignIndex((current) => (current + direction + designSamples.length) % designSamples.length);
  };

  const visibleProjects = filter === "All work"
    ? projects
    : projects.filter((project) => project.category === filter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner page-shell">
          <a className="wordmark" href="#home" aria-label="Kael Builds home" onClick={closeMenu}>
            <span className="wordmark-icon" aria-hidden="true"><span className="wordmark-k">K</span><i className="wordmark-accent" /></span>
            <span className="wordmark-name">kael builds<span className="wordmark-period">/</span></span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <nav id="primary-navigation" className={menuOpen ? "primary-nav is-open" : "primary-nav"} aria-label="Primary navigation">
            <a href="#work" onClick={closeMenu}>Selected work <span>01</span></a>
            <a href="#design-lab" onClick={closeMenu}>Design lab <span>02</span></a>
            <a href="#approach" onClick={closeMenu}>Approach <span>03</span></a>
            <a href="#about" onClick={closeMenu}>About <span>04</span></a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero page-shell" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-mark" /> DEVELOPER <span className="eyebrow-divider">/</span> BUILDER <span className="eyebrow-divider">/</span> RESEARCHER</div>
            <h1>I build digital tools for <span className="headline-highlight">real-world problems.</span></h1>
            <p className="hero-description">From web applications and research workflows to connected-system prototypes, I turn ideas into practical experiences—and document what I learn along the way.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-secondary" href="https://github.com/ace866678" target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-footnote"><span className="footnote-dot" /> INDEPENDENT PROJECTS <span className="footnote-slash">/</span> PRACTICAL EXPERIMENTS <span className="footnote-slash">/</span> CONTINUOUS LEARNING</div>
          </div>

          <div className="hero-art" aria-label="Visual overview of web, research, and systems work">
            <div className="hero-art-top"><span>FIELD NOTES <span className="muted-slash">/</span> 001</span><span>KAEL BUILDS</span></div>
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-core"><span>K<span>.</span></span><small>IDEAS → IMPACT</small></div>
            <div className="orbit-card orbit-card-web"><span className="orbit-icon"><Code2 size={16} /></span><span><b>Web apps</b><small>Interfaces & workflows</small></span><span className="orbit-index">01</span></div>
            <div className="orbit-card orbit-card-research"><span className="orbit-icon orbit-icon-dark"><BookOpen size={16} /></span><span><b>Research</b><small>Questions into systems</small></span><span className="orbit-index">02</span></div>
            <div className="orbit-card orbit-card-systems"><span className="orbit-icon orbit-icon-outline"><RadioTower size={16} /></span><span><b>Connected systems</b><small>Concepts & prototypes</small></span><span className="orbit-index">03</span></div>
            <div className="hero-art-bottom"><span>CURIOUS BY NATURE.</span><span>BUILT WITH INTENT <ArrowUpRight size={13} /></span></div>
          </div>

          <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="page-shell">
            <div className="section-heading">
              <div>
                <div className="eyebrow section-eyebrow"><span className="eyebrow-mark" /> A SELECTION OF MY WORK</div>
                <h2>Small steps.<br /><span>Useful things.</span></h2>
              </div>
              <p className="section-intro">I like projects that connect software to a real need. Here's what I'm exploring, building, and learning from.</p>
            </div>

            <div className="work-toolbar">
              <div className="work-count"><span className="work-count-number">0{visibleProjects.length}</span> PROJECTS <span className="toolbar-divider">/</span> SELECTED WORK</div>
              <div className="filter-list" role="group" aria-label="Filter projects by category">
                {filters.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={filter === item ? "filter-button is-active" : "filter-button"}
                    aria-pressed={filter === item}
                    onClick={() => setFilter(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="project-grid" aria-live="polite">
              {visibleProjects.map((project) => {
                const isFeatured = project.id === "research-room" && filter === "All work";
                return (
                  <article className={isFeatured ? "project-card project-card-featured" : "project-card"} key={project.id}>
                    <div className={project.screenshotUrl ? "project-art-wrap project-art-wrap-live" : "project-art-wrap"}>
                      {project.screenshotUrl ? (
                        <a className="live-screenshot-link" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open live ${project.name} website`}>
                          <img className="live-screenshot" src={project.screenshotUrl} alt={`Screenshot preview of the live ${project.name} website`} loading="lazy" />
                          <span className="screenshot-overlay">LIVE WEBSITE <ArrowUpRight size={14} /></span>
                        </a>
                      ) : <ProjectArtwork kind={project.visual} />}
                      <span className="project-number">{project.number}</span>
                    </div>
                    <div className="project-copy">
                      <div className="project-meta"><span>{project.eyebrow}</span><span className="project-status"><i />{project.status}</span></div>
                      <h3>{project.name}</h3>
                      <p>{project.description}</p>
                      <div className="project-tags">
                        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                      <div className="project-card-footer">
                        <div className="project-links">
                          {project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">Live website <ArrowUpRight size={16} /></a>}
                          {project.repo && <a className="text-link text-link-source" href={project.repo} target="_blank" rel="noreferrer">Source code <ArrowUpRight size={16} /></a>}
                          {!project.liveUrl && !project.repo && <span className="text-link text-link-pending">Case study in progress <span>↗</span></span>}
                        </div>
                        <span className="category-label">{project.category}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="work-note"><Sparkles size={15} /><span>Live project cards use website screenshot previews. Conceptual artwork is labeled where a live website is not available; source links are included where public repositories are confirmed.</span></div>
            <div className="all-projects-cta"><span>There’s always something new on the workbench.</span><a href="https://github.com/ace866678?tab=repositories" target="_blank" rel="noreferrer">Explore GitHub repositories <ArrowUpRight size={16} /></a></div>
          </div>
        </section>


        <section className="design-lab-section section-pad" id="design-lab">
          <div className="page-shell">
            <div className="section-heading design-lab-heading">
              <div>
                <div className="eyebrow section-eyebrow"><span className="eyebrow-mark" /> THE DESIGN LAB / 10 CONCEPTS</div>
                <h2>Different ideas.<br /><span>Different interfaces.</span></h2>
              </div>
              <p className="section-intro">A collection of visual UI/UX explorations—from product dashboards to editorial storefronts. These are design samples, not ten separate live websites.</p>
            </div>

            <div className="design-showcase">
              <div className="design-stage">
                <DesignPreview sample={activeDesign} />
              </div>
              <div className="design-details">
                <div className="design-details-top"><span>DESIGN SAMPLE</span><span>{activeDesign.number} <i>/</i> 10</span></div>
                <span className="design-category"><Palette size={13} /> {activeDesign.category}</span>
                <h3>{activeDesign.name}</h3>
                <p>{activeDesign.description}</p>
                <div className="design-tags">
                  {activeDesign.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="design-details-bottom">
                  <span className="design-concept-note"><i /> Concept mockup · not a live product</span>
                  <div className="design-arrow-controls">
                    <button type="button" onClick={() => moveDesign(-1)} aria-label="Previous design sample"><ChevronLeft size={18} /></button>
                    <button type="button" onClick={() => moveDesign(1)} aria-label="Next design sample"><ChevronRight size={18} /></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="design-sample-picker" aria-label="Choose a design sample">
              {designSamples.map((sample, index) => (
                <button
                  key={sample.number}
                  type="button"
                  className={index === activeDesignIndex ? "design-picker-item is-active" : "design-picker-item"}
                  aria-pressed={index === activeDesignIndex}
                  onClick={() => setActiveDesignIndex(index)}
                >
                  <span className={`design-picker-swatch design-picker-swatch-${sample.kind}`} />
                  <span className="design-picker-number">{sample.number}</span>
                  <span className="design-picker-name">{sample.name}</span>
                  <ArrowUpRight size={13} />
                </button>
              ))}
            </div>
            <div className="design-lab-note"><Sparkles size={15} /><span>All ten panels are illustrative interface studies created for this portfolio. They are not screenshots, client work, or separate deployed products.</span></div>
          </div>
        </section>

        <section className="approach-section section-pad" id="approach">
          <div className="page-shell approach-layout">
            <div className="approach-heading">
              <div className="eyebrow section-eyebrow"><span className="eyebrow-mark" /> THE PROCESS</div>
              <h2>Curiosity is the start.<br /><span>Making is the method.</span></h2>
              <p>Not every idea starts with a clear answer. I work to make the problem understandable, build something useful, and improve it with evidence.</p>
              <a className="text-link approach-link" href="#about">A little more about me <ArrowRight size={16} /></a>
            </div>
            <div className="process-list">
              <div className="process-step">
                <span className="process-number">01</span>
                <div className="process-icon"><Search size={19} /></div>
                <div className="process-text"><h3>Understand the problem</h3><p>Start with the people, constraints, and real need—not the technology for its own sake.</p></div>
                <Check className="process-check" size={17} />
              </div>
              <div className="process-step">
                <span className="process-number">02</span>
                <div className="process-icon"><Layers3 size={19} /></div>
                <div className="process-text"><h3>Map the moving pieces</h3><p>Turn fuzzy requirements into flows, components, and a plan that can be tested.</p></div>
                <Check className="process-check" size={17} />
              </div>
              <div className="process-step">
                <span className="process-number">03</span>
                <div className="process-icon"><Code2 size={19} /></div>
                <div className="process-text"><h3>Build a useful version</h3><p>Choose the simplest tools that can turn the idea into a working experience.</p></div>
                <Check className="process-check" size={17} />
              </div>
              <div className="process-step">
                <span className="process-number">04</span>
                <div className="process-icon"><Wrench size={19} /></div>
                <div className="process-text"><h3>Test, learn, refine</h3><p>Make the limits visible, document lessons, and use feedback to decide what comes next.</p></div>
                <Check className="process-check" size={17} />
              </div>
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="page-shell about-layout">
            <div className="about-stamp"><div className="stamp-ring"><span>MADE WITH</span><b>CURIOSITY</b><span>AND INTENT</span></div><div className="stamp-center">K<span>.</span></div></div>
            <div className="about-copy">
              <div className="eyebrow section-eyebrow"><span className="eyebrow-mark" /> A NOTE ABOUT ME</div>
              <h2>A builder who learns<br />by <span>making.</span></h2>
              <p className="about-lead">I enjoy turning ideas into working software and exploring how technology can solve practical problems.</p>
              <p>My work spans web applications, research projects, and connected-system concepts. I care about clear interfaces, understanding how the pieces fit together, and being honest about what still needs improvement.</p>
              <p>This portfolio is a living record of that process: the things I build, the questions I follow, and the lessons I carry into the next project.</p>
              <div className="skills-block">
                <div className="skills-title"><span>TOOLS & TOPICS</span><span>WHAT I'M EXPLORING</span></div>
                <div className="skills-tags"><span>React</span><span>TypeScript</span><span>Vite</span><span>Firebase</span><span>Git & GitHub</span><span>Vercel</span><span>IoT research</span><span>UI systems</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-shell contact-inner">
            <div className="contact-left">
              <div className="eyebrow"><span className="eyebrow-mark" /> HAVE SOMETHING IN MIND?</div>
              <h2>Let's make an idea<br /><span>go somewhere.</span></h2>
              <p>Have a project, a question, or a useful challenge to explore? I'd be glad to connect.</p>
              <a className="button button-light" href="https://github.com/ace866678" target="_blank" rel="noreferrer">Connect on GitHub <ArrowUpRight size={17} /></a>
            </div>
            <div className="contact-card">
              <div className="contact-card-top"><span>OPEN CHANNEL</span><span className="contact-pulse"><i /> GITHUB</span></div>
              <div className="contact-monogram">K<span>.</span></div>
              <p>Good work starts with a conversation. Let’s start one.</p>
              <a href="https://github.com/ace866678" target="_blank" rel="noreferrer">github.com/ace866678 <ExternalLink size={15} /></a>
              <div className="contact-card-bottom"><span>IDEAS INTO REAL PROJECTS</span><ArrowUpRight size={16} /></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-icon" aria-hidden="true"><span className="wordmark-k">K</span><i className="wordmark-accent" /></span><span className="wordmark-name">kael builds<span className="wordmark-period">/</span></span></a>
          <span className="footer-note">Built with curiosity, care, and React.</span>
          <div className="footer-links"><a href="https://github.com/ace866678" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="#home">Back to top ↑</a></div>
          <span className="footer-year">© {new Date().getFullYear()} KAEL BUILDS</span>
        </div>
      </footer>
    </>
  );
}


export default App;
