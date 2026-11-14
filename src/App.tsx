import type { ReactNode } from 'react';
import { CAPABILITIES, PERSONAL_INFO as person, PROJECTS, STACK, type Project } from './data/portfolioData';

/* ---------- hand-drawn SVG accents (1.5px / 2px stroke, #1A1A1A) ---------- */
const S = { stroke: '#1A1A1A', fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

function Smiley() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10.5" {...S} strokeWidth="1.5" />
      <circle cx="8.6" cy="9.8" r="1" fill="#1A1A1A" />
      <circle cx="15.4" cy="9.8" r="1" fill="#1A1A1A" />
      <path d="M7.8 14.2c1.3 1.8 2.8 2.7 4.2 2.7s2.9-.9 4.2-2.7" {...S} strokeWidth="1.5" />
    </svg>
  );
}

/* looping curved arrow pointing right, toward the hero portrait */
function ArrowLoop() {
  return (
    <svg width="96" height="44" viewBox="0 0 96 44" aria-hidden="true">
      <path d="M4 34 C 14 12, 26 40, 36 26 C 42 17, 48 34, 56 24 C 62 17, 70 16, 78 18" {...S} strokeWidth="1.5" />
      <path d="M71 13 L 80 18 L 72 25" {...S} strokeWidth="1.5" />
    </svg>
  );
}

/* 8-point asterisk */
function Ast() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" aria-hidden="true">
      {[0, 45, 90, 135].map((a) => (
        <line key={a} x1="8" y1="0.8" x2="8" y2="15.2" {...S} strokeWidth="1.5" transform={`rotate(${a} 8 8)`} />
      ))}
    </svg>
  );
}

/* 2px line-art capability icons */
function Icon({ name }: { name: 'nodes' | 'camera' | 'browser' | 'checklist' }) {
  const p = { ...S, strokeWidth: 2 };
  if (name === 'nodes')
    return (
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <rect x="3" y="6" width="24" height="17" rx="2" {...p} />
        <path d="M9 23 L9 29 M9 29 L21 29 M21 23 L21 29" {...p} />
        <circle cx="10" cy="14" r="2" {...p} />
        <circle cx="17" cy="10" r="2" {...p} />
        <circle cx="23" cy="15" r="2" {...p} />
        <path d="M12 13.5 L15 11 M19 11 L21.5 14" {...p} />
      </svg>
    );
  if (name === 'camera')
    return (
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <rect x="3" y="8" width="28" height="19" rx="2" {...p} />
        <circle cx="17" cy="17.5" r="5.5" {...p} />
        <circle cx="17" cy="17.5" r="1.8" fill="#1A1A1A" />
        <path d="M11 8 L13 4.5 L21 4.5 L23 8" {...p} />
      </svg>
    );
  if (name === 'browser')
    return (
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <rect x="3" y="5" width="28" height="24" rx="2" {...p} />
        <path d="M3 11 L31 11" {...p} />
        <circle cx="7" cy="8" r="0.9" fill="#1A1A1A" />
        <circle cx="10.5" cy="8" r="0.9" fill="#1A1A1A" />
        <path d="M7 16 L20 16 M7 20.5 L27 20.5 M7 25 L16 25" {...p} />
      </svg>
    );
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
      <rect x="6" y="4" width="22" height="27" rx="2" {...p} />
      <path d="M12 4 L12 2 L22 2 L22 4" {...p} />
      <path d="M11 12 L13.5 14.5 L18 10" {...p} />
      <path d="M21 13 L25 13" {...p} />
      <path d="M11 21 L13.5 23.5 L18 19" {...p} />
      <path d="M21 22 L25 22" {...p} />
    </svg>
  );
}

/* monochrome geometric code placeholder (workspace photo stand-in) */
function CodePlaceholder() {
  const bars: Array<[number, number, number]> = [
    [4, 8, 26], [4, 12, 38], [4, 16, 20], [8, 16, 40], [8, 20, 30], [12, 20, 44],
    [12, 24, 22], [16, 24, 36], [16, 28, 28], [20, 28, 42], [20, 32, 18], [24, 32, 34],
    [24, 36, 26], [28, 36, 40], [28, 40, 14], [32, 40, 30],
  ];
  return (
    <div className="code-card" role="img" aria-label="Monochrome code placeholder graphic">
      <svg viewBox="0 0 48 46" aria-hidden="true">
        {bars.map(([x, y, w], i) => (
          <rect key={i} x={x} y={y * 0.82 + 2} width={w * 0.6} height="1.6" fill="#1A1A1A" />
        ))}
        <rect x="4" y="2" width="6" height="2.4" fill="#1A1A1A" />
      </svg>
    </div>
  );
}

/* ---------- shared bits ---------- */
function External({ href, children }: { href: string; children: string }) {
  return (
    <a className="ulink" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function SectionHead({ children }: { children: ReactNode }) {
  return (
    <div className="section-head">
      <span className="box">{children}</span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project">
      <h3>
        <Ast />
        <span>{project.title}</span>
      </h3>
      <p>{project.summary}</p>
      <div className="project-links">
        {project.liveUrl && <External href={project.liveUrl}>[LIVE DEMO]</External>}
        {project.codeUrl && <External href={project.codeUrl}>[GITHUB CODE]</External>}
      </div>
    </article>
  );
}

/* ---------- page ---------- */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <main id="main" className="wrap">

        {/* SECTION 1 — HERO */}
        <section className="hero" id="home">
          <div>
            <p className="hero-label">
              {person.roleLine1}
              <br />
              {person.roleLine2}
            </p>
            <p className="hero-tagline">{person.tagline}</p>
          </div>
          <div className="hero-stage">
            <img
              className="hero-portrait"
              src={person.profilePhoto}
              alt="Portrait of J. K. Liwin Jose"
              fetchPriority="high"
            />
            <span className="hero-box-name box">
              <Smiley />
              {person.firstName}
            </span>
            <span className="hero-box-surname box">{person.lastName}</span>
            <span className="hero-arrow"><ArrowLoop /></span>
          </div>
        </section>

        {/* SECTION 2 — MY WORK / ABOUT & EXPERIENCE */}
        <section id="work">
          <div className="work-grid">
            <CodePlaceholder />
            <div>
              <span className="work-head box">
                MY WORK
                <Smiley />
              </span>
              <p className="bio">
                B.Tech graduate in Artificial Intelligence and Data Science (Karunya Institute of
                Technology and Sciences, 2021–2025) who builds and ships Python and LLM projects
                independently: a deployed RAG assistant (FastAPI, Gemini, ChromaDB) with prompt
                engineering, JSON/REST API integration, and multi-model fallback, plus
                custom-trained YOLOv11 models, computer-vision apps, and Streamlit tools.
              </p>
              <div className="exp-grid">
                <article className="exp-item">
                  <h3>
                    <Ast />
                    <span>SOFTWARE ANALYST — BONIFON TECHNOLOGIES</span>
                  </h3>
                  <p className="exp-date">(Jun 2026 – Present)</p>
                  <p className="exp-body">
                    Manual web-app testing &amp; defect reporting; building an internal Python +
                    YOLO + AWS Rekognition face-recognition attendance system integrated into Ruby
                    on Rails.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — CORE SKILLS & SERVICES */}
        <section id="services">
          <SectionHead>CORE SKILLS &amp; SERVICES</SectionHead>
          <div className="caps">
            {CAPABILITIES.map((c) => (
              <article className="cap" key={c.title}>
                <span className="cap-icon"><Icon name={c.icon} /></span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 4 — FEATURED PROJECTS */}
        <section id="projects">
          <SectionHead>FEATURED PROJECTS</SectionHead>
          <div className="projects">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>

        {/* SECTION 5 — TECH STACK STRIP */}
        <section id="stack">
          <div className="stack">
            {STACK.map((s) => (
              <div className="stack-row" key={s.label}>
                <b>{s.label}:</b>
                <span>{s.items}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6 — CONNECT WITH ME / FOOTER */}
        <section className="connect" id="connect">
          <span className="connect-box box">CONNECT WITH ME</span>
          <div className="connect-links">
            <div className="connect-row">
              <span className="label">Location</span>
              <span className="plain">{person.location}</span>
            </div>
            <div className="connect-row">
              <span className="label">Email</span>
              <a className="ulink" href={person.emailHref}>{person.email}</a>
            </div>
            <div className="connect-row">
              <span className="label">Phone</span>
              <a className="ulink" href={person.phoneHref}>{person.phone}</a>
            </div>
            <div className="connect-row">
              <span className="label">GitHub</span>
              <a className="ulink" href={person.github} target="_blank" rel="noopener noreferrer">{person.githubLabel}</a>
            </div>
            <div className="connect-row">
              <span className="label">LinkedIn</span>
              <a className="ulink" href={person.linkedin} target="_blank" rel="noopener noreferrer">{person.linkedinLabel}</a>
            </div>
            <div className="connect-row">
              <span className="label">Hugging Face</span>
              <a className="ulink" href={person.huggingFace} target="_blank" rel="noopener noreferrer">{person.huggingFaceLabel}</a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
