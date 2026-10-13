import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Code2,
  ExternalLink,
  Github,
  Layers3,
  Menu,
  RadioTower,
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

function App() {
  const [filter, setFilter] = useState<Filter>("All work");
  const [menuOpen, setMenuOpen] = useState(false);

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
            <span className="wordmark-icon">K<span>.</span></span>
            <span>kael builds<span className="wordmark-period">/</span></span>
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
            <a href="#approach" onClick={closeMenu}>Approach <span>02</span></a>
            <a href="#about" onClick={closeMenu}>About <span>03</span></a>
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
            <div className="hero-art-top"><span>FIELD NOTES <span className="muted-slash">/</span> 001</span><span>KAEL BUILDS®</span></div>
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
                    <div className="project-art-wrap">
                      <ProjectArtwork kind={project.visual} />
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
                        {project.repo ? (
                          <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">View source <ArrowUpRight size={16} /></a>
                        ) : (
                          <span className="text-link text-link-pending">Case study in progress <span>↗</span></span>
                        )}
                        <span className="category-label">{project.category}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="work-note"><Sparkles size={15} /><span>Some project visuals are illustrative concepts, not screenshots of a live product. Source links are provided where a public repository is confirmed.</span></div>
            <div className="all-projects-cta"><span>There’s always something new on the workbench.</span><a href="https://github.com/ace866678?tab=repositories" target="_blank" rel="noreferrer">Explore GitHub repositories <ArrowUpRight size={16} /></a></div>
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
                <div className="process-icon"><SearchIcon /></div>
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
          <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-icon">K<span>.</span></span><span>kael builds<span className="wordmark-period">/</span></span></a>
          <span className="footer-note">Built with curiosity, care, and React.</span>
          <div className="footer-links"><a href="https://github.com/ace866678" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="#home">Back to top ↑</a></div>
          <span className="footer-year">© {new Date().getFullYear()} KAEL BUILDS</span>
        </div>
      </footer>
    </>
  );
}

function SearchIcon() {
  return <BookOpen size={19} />;
}

export default App;
