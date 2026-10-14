import { useEffect, useState } from "react";
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
import { Analytics } from "@vercel/analytics/react";

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
  liveUrl?: string;
  previewImage?: string;
  previewSecondaryImage?: string;
  visual: "research" | "alvora" | "iot" | "server";
};

const filters: Filter[] = ["All work", "Web apps", "Research", "Systems"];

const CONTACT_EMAIL = "delapuertaroniel@gmail.com";
const PORTFOLIO_URL = "https://kael-builds.vercel.app";

function buildGmailComposeUrl(subject: string, service: string) {
  const body = [
    "Hi Kael,",
    "",
    `I'm interested in asking about: ${service}.`,
    "",
    "Project goal:",
    "Key pages or features:",
    "Target timeline:",
    "Approximate budget (PHP):",
    "",
    "Please share the proposed scope, quote, and payment steps.",
  ].join("\n");
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PORTFOLIO_URL)}`;

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
    previewImage: "/images/uploaded/Research%20Room.png",
    previewSecondaryImage: "/images/uploaded/Researcg%20Room%20Login%20Page.png",
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
    liveUrl: "https://alvora-nine.vercel.app/",
    previewImage: "/images/uploaded/Alvora.png",
    visual: "alvora",
  },
  {
    id: "puv-guard",
    number: "03",
    name: "PUV Guard",
    eyebrow: "TRANSPORT SAFETY · CONNECTED SYSTEMS",
    description:
      "A transport-safety project exploring an IoT-based crash detection and emergency alert system for public utility vehicle drivers.",
    category: "Research",
    status: "Research project",
    tags: ["IoT", "Crash detection", "Emergency alerts"],
    previewImage: "/images/uploaded/PUV%20Guard.png",
    visual: "iot",
  },
  {
    id: "studyvault",
    number: "04",
    name: "StudyVault",
    eyebrow: "STUDENT TOOLS · WEB APP",
    description:
      "A student-focused study workspace designed to make learning resources and study sessions easier to organize in one place.",
    category: "Web apps",
    status: "Live website",
    tags: ["Web app", "Study resources", "Student tools"],
    liveUrl: "https://studyvault-lilac.vercel.app/",
    previewImage: "/images/uploaded/Study%20Vault.png",
    visual: "research",
  },
  {
    id: "mcl-server",
    number: "05",
    name: "MCL Server",
    eyebrow: "INFRASTRUCTURE · OPEN SOURCE",
    description:
      "Cross-play Minecraft server tooling built around repeatable setup, maintenance, backups, and a management path for server operators.",
    category: "Systems",
    status: "Tooling project",
    tags: ["Python", "Shell", "Server tooling"],
    previewImage: "/images/uploaded/MCL%20Server.png",
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



function ProjectVisual({ project }: { project: Project }) {
  const [imageFailed, setImageFailed] = useState(false);
  const hasLocalPreview = Boolean(project.previewImage) && !imageFailed;

  const imagePreview = hasLocalPreview ? (
    <div className="project-preview-frame">
      <img
        className="project-preview-primary"
        src={project.previewImage}
        alt={`${project.name} project screenshot`}
        loading="lazy"
        onError={() => setImageFailed(true)}
      />
      {project.previewSecondaryImage && (
        <img
          className="project-preview-secondary"
          src={project.previewSecondaryImage}
          alt={`${project.name} login-page screenshot`}
          loading="lazy"
        />
      )}
    </div>
  ) : null;

  return (
    <div className={hasLocalPreview ? "project-art-wrap project-art-wrap-live" : "project-art-wrap"}>
      {hasLocalPreview && project.liveUrl ? (
        <a className="live-screenshot-link" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Open live ${project.name} website`}>
          {imagePreview}
          <span className="screenshot-overlay">OPEN LIVE SITE <ArrowUpRight size={14} /></span>
        </a>
      ) : hasLocalPreview ? (
        <div className="project-image-static" aria-label={`${project.name} image preview`}>
          {imagePreview}
          <span className="screenshot-overlay">PROJECT PREVIEW</span>
        </div>
      ) : (
        <ProjectArtwork kind={project.visual} />
      )}
      <span className="project-number">{project.number}</span>
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
            <div className="commerce-hero"><div className="commerce-copy"><span className="design-kicker">OBJECTS FOR EVERYDAY RITUALS</span><h4>Less, but<br /><em>better.</em></h4><p>Thoughtful pieces for a slower, more considered life.</p><span className="commerce-link">EXPLORE THE COLLECTION ↗</span></div><div className="commerce-object"><img className="design-scene-image commerce-scene-image" src="/images/design-commerce-still-life.svg" alt="" loading="lazy" /><div className="commerce-vase commerce-vase-one" /><div className="commerce-vase commerce-vase-two" /><div className="commerce-orbit" /><span>STUDIO SERIES / 04</span></div></div>
            <div className="commerce-bottom"><span>01 — 04 / HOME OBJECTS</span><span>DESIGNED TO LAST&nbsp; ↗</span></div>
          </>
        )}
        {sample.kind === "portfolio" && (
          <>
            <div className="portfolio-nav"><b>AM<span>®</span></b><span>SELECTED WORK 2024—26</span><span>ABOUT ↗</span></div>
            <div className="portfolio-hero"><div className="portfolio-big-type">Designing<br /><i>what's</i><br />next<span>.</span></div><div className="portfolio-art"><img className="design-scene-image portfolio-scene-image" src="/images/design-creative-collage.svg" alt="" loading="lazy" /><div className="portfolio-art-circle" /><div className="portfolio-art-sun" /><div className="portfolio-art-block">A—26</div><span>CREATIVE<br />DEVELOPMENT</span></div></div>
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
            <div className="travel-scenery"><img className="design-scene-image travel-scene-image" src="/images/design-travel-scene.svg" alt="" loading="lazy" /><div className="travel-sun" /><div className="travel-mountain travel-mountain-back" /><div className="travel-mountain travel-mountain-front" /><div className="travel-water" /><div className="travel-copy"><span>YOUR NEXT CHAPTER</span><h4>Find your<br /><i>somewhere.</i></h4><p>Remarkable places. Unhurried journeys.</p><span className="travel-discover">DISCOVER PLACES&nbsp; ↗</span></div><span className="travel-location">SIARGAO, PHILIPPINES · 09°47′N</span></div>
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

function CelebrationPreview({ kind }: { kind: "birthday" | "anniversary" | "celebration" }) {
  const details = {
    birthday: { eyebrow: "A LITTLE MORE MAGIC", title: <>Happy<br />Birthday!</>, note: "Today is all about you.", className: "celebration-live-birthday", symbol: "✦", message: "May your day be full of laughter, beautiful surprises, and little moments worth remembering." },
    anniversary: { eyebrow: "EVERY MOMENT, US", title: <>Our <i>Story.</i></>, note: "One love, many memories.", className: "celebration-live-love", symbol: "♡", message: "If I could choose again, in every lifetime and every version of this story, I'd still choose you." },
    celebration: { eyebrow: "TODAY IS YOURS", title: <>Let's<br />Celebrate!</>, note: "A page full of happy.", className: "celebration-live-party", symbol: "✷", message: "Here's to your next chapter, new memories, and all the good things waiting just around the corner." },
  }[kind];
  return (
    <main className={`celebration-live-page ${details.className}`}>
      <a className="celebration-live-brand" href="/"><span>K.</span> kael builds <i>/</i></a>
      <div className="celebration-live-card">
        <span className="celebration-live-symbol" aria-hidden="true">{details.symbol}</span>
        <span className="celebration-live-eyebrow">{details.eyebrow}</span>
        <h1>{details.title}</h1>
        <p className="celebration-live-note">{details.note}</p>
        <div className="celebration-live-divider"><span>✦</span></div>
        <p className="celebration-live-message">{details.message}</p>
        <div className="celebration-live-signoff">MADE WITH LOVE, JUST FOR YOU</div>
      </div>
      <footer className="celebration-live-footer"><span>DEMO DESIGN · PERSONALIZE IT YOUR WAY</span><a href={buildGmailComposeUrl(`Personalized ${kind} surprise website — ₱50 starter`, `Please make a personalized ${kind} surprise website based on the live sample at ${PORTFOLIO_URL}/surprise/${kind}. Recipient name and message to be provided.`)}>Make your own · from ₱50 ↗</a></footer>
    </main>
  );
}

function App() {
  const [filter, setFilter] = useState<Filter>("All work");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDesignIndex, setActiveDesignIndex] = useState(0);
  const activeDesign = designSamples[activeDesignIndex];
  const surpriseRoute = typeof window !== "undefined" ? window.location.pathname.split("/").filter(Boolean)[1] === "surprise" ? window.location.pathname.split("/").filter(Boolean)[2] : undefined : undefined;
  const moveDesign = (direction: -1 | 1) => {
    setActiveDesignIndex((current) => (current + direction + designSamples.length) % designSamples.length);
  };

  useEffect(() => {
    if (typeof window === "undefined" || surpriseRoute) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) return;

    const selector = [
      ".hero-copy",
      ".hero-art",
      ".scroll-cue",
      ".section-heading",
      ".project-card",
      ".service-card",
      ".work-note",
      ".all-projects-cta",
      ".design-showcase",
      ".design-picker-item",
      ".approach-heading",
      ".process-step",
      ".about-stamp",
      ".about-copy",
      ".contact-left",
      ".contact-card",
    ].join(", ");

    const targets = Array.from(document.querySelectorAll<HTMLElement>(selector));
    targets.forEach((target, index) => {
      target.classList.add("reveal-on-scroll");
      target.style.setProperty("--reveal-delay", `${(index % 5) * 65}ms`);
    });

    document.body.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.body.classList.remove("motion-ready");
      targets.forEach((target) => {
        target.classList.remove("reveal-on-scroll", "is-visible");
        target.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

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
            <a href="#services" onClick={closeMenu}>Services <span>02</span></a>
            <a href="#design-lab" onClick={closeMenu}>Design lab <span>03</span></a>
            <a href="#approach" onClick={closeMenu}>Approach <span>04</span></a>
            <a href="#about" onClick={closeMenu}>About <span>05</span></a>
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
              <a className="button button-secondary" href="#services">Hire me <ArrowUpRight size={16} /></a>
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
                    <ProjectVisual project={project} />
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
                          {!project.liveUrl && <span className="text-link text-link-pending">Project overview available on request <span>↗</span></span>}
                        </div>
                        <span className="category-label">{project.category}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="work-note"><Sparkles size={15} /><span>Project screenshots are matched to each build. Cards with a live website link open the deployed project; other images are previews of the project work.</span></div>
            <div className="all-projects-cta"><span>Have a project with a similar goal?</span><a href="#services">Explore services <ArrowUpRight size={16} /></a></div>
          </div>
        </section>




        <section className="services-section section-pad" id="services">
          <div className="page-shell">
            <div className="section-heading services-heading">
              <div>
                <div className="eyebrow section-eyebrow"><span className="eyebrow-mark" /> SERVICES / AVAILABLE FOR PROJECTS</div>
                <h2>Have an idea?<br /><span>Let's build it.</span></h2>
              </div>
              <p className="section-intro">Practical websites, product interfaces, and custom tools for people who want to get something useful into the world.</p>
            </div>

            <div className="service-grid">
              <article className="service-card service-card-featured">
                <div className="service-card-top"><span>01 / CELEBRATION SURPRISE</span><span className="service-icon"><Sparkles size={19} /></span></div>
                <h3>Surprise website</h3>
                <p className="service-description">A little website made for a big feeling—birthdays, anniversaries, monthsaries, proposals, graduations, or a just-because surprise.</p>
                <div className="service-price"><span>STARTING AT</span><strong>₱50</strong></div>
                <ul className="service-includes">
                  <li><Check size={14} /> One-page mini celebration site</li>
                  <li><Check size={14} /> Personalized message and recipient's name</li>
                  <li><Check size={14} /> Sweet visual theme and shareable link</li>
                </ul>
                <p className="service-description">More personal touches—photos, music, animations, countdowns, or interactive surprises—can be added with a separate quote.</p>
                <div className="celebration-samples" aria-label="Celebration website sample designs">
                  <div className="celebration-samples-heading"><span>CHOOSE A STYLE</span><span>LIVE PREVIEW CONCEPTS</span></div>
                  <div className="celebration-sample-grid">
                    <a className="celebration-sample celebration-sample-birthday" href="/surprise/birthday" aria-label="Order Birthday Glow sample">
                      <span className="celebration-sample-confetti" aria-hidden="true">✦　✧　✦</span><span className="celebration-sample-kicker">A LITTLE MORE MAGIC</span><strong>Happy<br/>Birthday!</strong><span className="celebration-sample-name">made just for you</span><span className="celebration-sample-action">VIEW THIS STYLE ↗</span>
                    </a>
                    <a className="celebration-sample celebration-sample-love" href="/surprise/anniversary" aria-label="Order Our Story sample">
                      <span className="celebration-sample-heart" aria-hidden="true">♡</span><span className="celebration-sample-kicker">EVERY MOMENT, US</span><strong>Our<br/><i>Story.</i></strong><span className="celebration-sample-name">one love, many memories</span><span className="celebration-sample-action">VIEW THIS STYLE ↗</span>
                    </a>
                    <a className="celebration-sample celebration-sample-party" href="/surprise/celebration" aria-label="Order Little Celebration sample">
                      <span className="celebration-sample-confetti" aria-hidden="true">✷　✦　✷</span><span className="celebration-sample-kicker">TODAY IS YOURS</span><strong>Let's<br/>Celebrate!</strong><span className="celebration-sample-name">a page full of happy</span><span className="celebration-sample-action">VIEW THIS STYLE ↗</span>
                    </a>
                  </div>
                  <p className="celebration-samples-note">These are sample styles. Your ₱50 starter includes a simple personalized page; extra animation, photos, music, and interactive features can be quoted separately.</p>
                </div>
                <a className="service-cta" href={buildGmailComposeUrl("Surprise website — Birthday / anniversary / celebration", "₱50 celebration surprise website")}>Create a surprise <ArrowUpRight size={16} /></a>
              </article>

              <article className="service-card">
                <div className="service-card-top"><span>02 / WEB DESIGN + BUILD</span><span className="service-icon"><Code2 size={19} /></span></div>
                <h3>Landing page</h3>
                <p className="service-description">A focused page for a personal brand, product launch, event, or small business.</p>
                <div className="service-price"><span>STARTING AT</span><strong>₱500+</strong></div>
                <ul className="service-includes">
                  <li><Check size={14} /> One responsive page</li>
                  <li><Check size={14} /> Clear calls to action</li>
                  <li><Check size={14} /> Basic SEO and launch setup</li>
                </ul>
                <a className="service-cta" href={buildGmailComposeUrl("Service inquiry — Landing page or portfolio", "Landing page / portfolio")}>Request this service <ArrowUpRight size={16} /></a>
              </article>

              <article className="service-card">
                <div className="service-card-top"><span>02 / BUSINESS WEBSITE</span><span className="service-icon"><Layers3 size={19} /></span></div>
                <h3>Business website</h3>
                <p className="service-description">A polished multi-page website that explains what you do and helps customers take the next step.</p>
                <div className="service-price"><span>STARTING AT</span><strong>₱2,500+</strong></div>
                <ul className="service-includes">
                  <li><Check size={14} /> Up to five core pages</li>
                  <li><Check size={14} /> Mobile-friendly layouts</li>
                  <li><Check size={14} /> Contact and inquiry actions</li>
                </ul>
                <a className="service-cta" href={buildGmailComposeUrl("Service inquiry — Business website", "Business website")}>Request this service <ArrowUpRight size={16} /></a>
              </article>

              <article className="service-card service-card-featured">
                <div className="service-card-top"><span>03 / CUSTOM DEVELOPMENT</span><span className="service-icon"><Workflow size={19} /></span></div>
                <h3>Web app or dashboard</h3>
                <p className="service-description">Purpose-built digital tools for workflows, records, dashboards, accounts, or team collaboration.</p>
                <div className="service-price"><span>STARTING AT</span><strong>₱5,000+</strong></div>
                <ul className="service-includes">
                  <li><Check size={14} /> Features scoped to your workflow</li>
                  <li><Check size={14} /> API, database, or sign-in integration quoted by scope</li>
                  <li><Check size={14} /> Deployment and handover</li>
                </ul>
                <a className="service-cta" href={buildGmailComposeUrl("Service inquiry — Custom web app or dashboard", "Custom web app / dashboard")}>Request this service <ArrowUpRight size={16} /></a>
              </article>

              <article className="service-card">
                <div className="service-card-top"><span>04 / UI + UX</span><span className="service-icon"><Palette size={19} /></span></div>
                <h3>Interface design</h3>
                <p className="service-description">Turn an early idea into a clear user flow and a prototype you can review before development.</p>
                <div className="service-price"><span>STARTING AT</span><strong>₱300+</strong></div>
                <ul className="service-includes">
                  <li><Check size={14} /> User flow and screen structure</li>
                  <li><Check size={14} /> Up to five key screens</li>
                  <li><Check size={14} /> Clickable prototype handoff</li>
                </ul>
                <a className="service-cta" href={buildGmailComposeUrl("Service inquiry — UI/UX design or prototype", "UI/UX design / prototype")}>Request this service <ArrowUpRight size={16} /></a>
              </article>
            </div>

            <div className="service-support-row">
              <div><span className="service-support-label">ONGOING SUPPORT</span><strong>Site updates & maintenance from ₱500/month</strong><p>Small improvements and routine upkeep can be quoted as a monthly arrangement.</p></div>
              <a className="text-link" href={buildGmailComposeUrl("Service inquiry — Website maintenance", "Website maintenance / improvements")}>Ask about maintenance <ArrowUpRight size={16} /></a>
            </div>
            <div className="service-payment-row">
              <div><span className="service-support-label">PAYMENT OPTIONS</span><strong>GCash or PayPal</strong><p>No credit card or debit card is required to start an inquiry. After scope and price are agreed, I'll share payment instructions privately.</p></div>
              <span className="service-payment-badge">PRIVATE PAYMENT DETAILS</span>
            </div>
            <p className="service-pricing-note">Affordable starter prices are for clearly limited scopes: ₱50 covers a simple celebration template with a name and message, not a fully custom animated website. Larger features and revisions are quoted separately so the time and skill involved are still valued. Prices are estimates in PHP; agree on scope before work begins. Domain registration, paid hosting, premium tools, payment-provider fees, and third-party subscriptions are separate unless stated in the quote.</p>
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
                <DesignPreview key={activeDesign.kind} sample={activeDesign} />
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
                <div className="skills-tags"><span>React</span><span>TypeScript</span><span>Vite</span><span>Firebase</span><span>Deployment workflows</span><span>Vercel</span><span>IoT research</span><span>UI systems</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-shell contact-inner">
            <div className="contact-left">
              <div className="eyebrow"><span className="eyebrow-mark" /> LET'S WORK TOGETHER</div>
              <h2>Ready to build<br /><span>something useful?</span></h2>
              <p>Share what you need, your target timeline, and an approximate budget. I'll review the scope and use it to prepare a quote.</p>
              <a className="button button-light" href={buildGmailComposeUrl("Service inquiry — Project quote", "Project quote")} target="_blank" rel="noreferrer">Request a quote <ArrowUpRight size={17} /></a>
            </div>
            <div className="contact-card">
              <div className="contact-card-top"><span>PROJECT INQUIRY</span><span className="contact-pulse"><i /> OPEN</span></div>
              <div className="contact-monogram">K<span>.</span></div>
              <p>Tell me what you need, your timeline, and approximate budget. I'll reply with a proposed scope and quote.</p>
              <a href={buildGmailComposeUrl("Service inquiry — General project", "General project inquiry")} target="_blank" rel="noreferrer">Email me through Gmail <ExternalLink size={15} /></a>
              <div className="contact-card-bottom"><span>GCASH OR PAYPAL</span><ArrowUpRight size={16} /></div>
              <p className="contact-privacy-note">Payment instructions are shared privately after the scope and quote are agreed. Never send a payment before confirming the details.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-icon" aria-hidden="true"><span className="wordmark-k">K</span><i className="wordmark-accent" /></span><span className="wordmark-name">kael builds<span className="wordmark-period">/</span></span></a>
          <span className="footer-note">Built with curiosity, care, and React.</span>
          <div className="footer-links"><a href={buildGmailComposeUrl("Portfolio inquiry", "Portfolio inquiry")} target="_blank" rel="noreferrer">Email me <ArrowUpRight size={14} /></a><a href={facebookShareUrl} target="_blank" rel="noreferrer">Share on Facebook <ExternalLink size={14} /></a><a href="#home">Back to top ↑</a></div>
          <span className="footer-year">© {new Date().getFullYear()} KAEL BUILDS</span>
        </div>
      </footer>
      <Analytics />
    </>
  );
}


export default App;
