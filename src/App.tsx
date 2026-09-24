import { useEffect, useState, type ReactNode } from 'react';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Layers, Menu, ScanLine, Sparkles, X } from 'lucide-react';
import { PERSONAL_INFO as person, FEATURED_PROJECTS, AI_ASSISTANT_PROJECT, ADDITIONAL_PROJECTS, SKILL_GROUPS, RESEARCH_ITEM as research, JOURNEY_ITEMS } from './data/portfolioData';
import type { Project } from './types';
import Portrait from './Portrait';

const links = [['Work', '#work'], ['Toolkit', '#practice'], ['Notes', '#lab'], ['About', '#about'], ['Contact', '#contact']];
const projects = [FEATURED_PROJECTS[0], FEATURED_PROJECTS[2], FEATURED_PROJECTS[1], AI_ASSISTANT_PROJECT];

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: .55 }}>{children}</motion.div>;
}
function External({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={15}/></a>;
}
function SystemVisual({ project }: { project: Project }) {
  const isVision = project.visual === 'engagement' || project.visual === 'wildlife';
  const isCompare = project.visual === 'difference';
  return <div className={'system-visual visual-' + project.visual} aria-label={project.title + ' system diagram'}>
    <div className="visual-bar"><span>{project.eyebrow.toUpperCase()}</span><span>01</span></div>
    {isVision && <div className="vision-graphic">
      <div className="camera-frame"><span className="frame-corner a"/><span className="frame-corner b"/><span className="frame-corner c"/><span className="frame-corner d"/>
        <div className={project.visual === 'wildlife' ? 'detector-shape animal' : 'detector-shape person'}><i/><i/><i/></div>
        <div className="detection-box"><small>{project.visual === 'wildlife' ? 'OBJECT DETECTED' : 'FOCUS / ACTIVE'}</small></div>
      </div>
      <div className="vision-readout"><span>INPUT STREAM</span><span>MODEL INFERENCE</span><span>ANNOTATED OUTPUT</span></div>
    </div>}
    {isCompare && <div className="compare-graphic"><div className="compare-card"><span>BEFORE</span><b/></div><div className="compare-arrow">+</div><div className="compare-card changed"><span>AFTER</span><b/></div><div className="compare-result"><span>DIFF</span><i/><i/><i/></div></div>}
    {!isVision && !isCompare && <div className="rag-graphic"><div className="doc-stack"><i/><i/><i/></div><div className="node-flow"><span/><i/><span/><i/><span/></div><div className="answer-card"><b>ANSWER</b><i/><i/></div></div>}
    <div className="visual-footer"><span>INPUT</span><span>PROCESS</span><span>OUTPUT</span></div>
  </div>;
}
function CaseStudy({ project, index }: { project: Project; index: number }) {
  return <Reveal className={'case-study ' + (index % 2 ? 'reverse' : '')}>
    <div className="case-art"><SystemVisual project={project}/><ol className="workflow" aria-label={project.title + ' workflow'}>{project.workflow.map((step, i) => <li key={step}><span>0{i + 1}</span>{step}</li>)}</ol></div>
    <div className="case-copy"><p className="eyebrow">PROJECT 0{index + 1} / {project.eyebrow}</p><h3>{project.title}</h3><p className="case-summary">{project.summary}</p><div className="case-detail"><div><h4>Problem</h4><p>{project.problem}</p></div><div><h4>Approach</h4><p>{project.approach}</p></div></div><div className="chips">{project.tech.map(t => <span key={t}>{t}</span>)}</div><p className="outcome"><span>What it delivers</span>{project.outcome}</p><div className="project-links">{project.repositoryUrl && <External href={project.repositoryUrl}>View source</External>}{project.liveUrl && <External href={project.liveUrl}>Live app</External>}</div></div>
  </Reveal>;
}
export default function App() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', close); return () => document.removeEventListener('keydown', close);
  }, []);
  return <MotionConfig reducedMotion="user">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><a className="wordmark" href="#home" aria-label="Liwin Jose home">LJ<span>_</span></a><nav aria-label="Main navigation" className={open ? 'nav open' : 'nav'} id="main-nav">{links.map(([label, url]) => <a href={url} key={url} onClick={() => setOpen(false)}>{label}</a>)}</nav><a className="nav-resume" href={person.resumePdf} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={14}/></a><button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></header>
    <main id="main">
      <section className="hero wrap" id="home"><div className="hero-copy"><p className="availability"><span/> Available for AI/ML opportunities</p><p className="hero-kicker">Hello, I am Liwin.</p><h1>I make AI feel<br/><em>clear, useful,</em> and<br/>human.</h1><p className="hero-intro">{person.introduction}</p><div className="hero-actions"><a className="button" href="#work">See my work <ArrowUpRight size={17}/></a><External href={person.github} className="text-button"><Github size={17}/>GitHub</External></div><div className="hero-stack"><span>CORE STACK</span>{['Python', 'OpenCV', 'PyTorch', 'FastAPI'].map(t => <span className="stack-chip" key={t}>{t}</span>)}</div></div><Portrait/><div className="hero-foot"><span>COMPUTER VISION / RAG / APPLIED ML</span><a href="#work">Scroll to projects <ArrowDown size={14}/></a></div></section>
      <section className="practice section wrap" id="practice"><Reveal><div className="section-heading"><div><p className="eyebrow">01 / TOOLKIT</p><h2>Skills that move<br/><em>from notebook to product.</em></h2></div><p>I use practical tools to connect models, data, interfaces, and real-world workflows.</p></div><div className="capabilities">{[{title:'Vision',icon:ScanLine,copy:'Images, video, detection, and processing.',skills:SKILL_GROUPS[2].skills.slice(0,3)},{title:'Machine learning',icon:Sparkles,copy:'Training and inference for useful predictions.',skills:SKILL_GROUPS[1].skills.slice(0,3)},{title:'Retrieval',icon:Layers,copy:'Context-aware answers from documents.',skills:SKILL_GROUPS[3].skills.slice(0,3)},{title:'Delivery',icon:ArrowUpRight,copy:'APIs and apps people can actually use.',skills:SKILL_GROUPS[4].skills.slice(0,3)}].map((c,i)=><article className="capability" key={c.title}><div className="cap-top"><c.icon size={22}/><span>0{i+1}</span></div><h3>{c.title}</h3><p>{c.copy}</p><small>{c.skills.join(' / ')}</small></article>)}</div></Reveal></section>
      <section className="work section wrap" id="work"><Reveal className="work-heading"><div><p className="eyebrow">02 / SELECTED WORK</p><h2>Small systems.<br/><em>Serious thinking.</em></h2></div><p>Four practical projects spanning vision, comparison, and retrieval.</p></Reveal>{projects.map((p,i)=><CaseStudy key={p.id} project={p} index={i}/>)}</section>
      <section className="archive section"><div className="wrap"><Reveal><div className="work-heading"><div><p className="eyebrow">03 / MORE BUILDS</p><h2>Other problems<br/><em>I have worked on.</em></h2></div><External href={person.github}>All repositories</External></div><div className="archive-grid">{ADDITIONAL_PROJECTS.map((p,i)=><article key={p.id}><div className="archive-index"><span>0{i+5}</span><span>{p.eyebrow}</span></div><h3>{p.title}</h3><p>{p.summary}</p><div className="archive-flow">{p.workflow.map((step,j)=><span key={step}>{j > 0 && ' -> '}{step}</span>)}</div>{p.repositoryUrl ? <External href={p.repositoryUrl}>View source</External> : <span className="source-note">Source not linked</span>}</article>)}</div></Reveal></div></section>
      <section className="lab section wrap" id="lab"><Reveal className="lab-layout"><div><p className="eyebrow">04 / LAB NOTES</p><h2>Learning in public.<br/><em>Building with purpose.</em></h2><p className="muted">A conference presentation and the process behind the work.</p><div className="conference-note"><span>ICIRCA 2025</span><span>Conference presentation</span></div></div><article className="research"><p className="eyebrow">{research.status}</p><h3>{research.title}</h3><p>{research.summary}</p><p className="venue">{research.venue}<br/>{research.date}</p><div className="chips">{research.topics.map(t=><span key={t}>{t}</span>)}</div><External href={research.evidenceUrl}>View certificate</External></article></Reveal></section>
      <section className="about section wrap" id="about"><Reveal className="about-layout"><div><p className="eyebrow">05 / ABOUT ME</p><h2>Curious by default.<br/><em>Practical by choice.</em></h2><div className="portrait-row"><img src={person.profilePhoto} alt="J.K. Liwin Jose" loading="lazy"/><p>{person.introduction}<br/><br/>My focus is building thoughtful, useful AI applications with clear workflows.</p></div></div><div className="timeline">{JOURNEY_ITEMS.map(j=><article key={j.title}><p className="eyebrow">{j.period}</p><h3>{j.title}</h3><p className="organization">{j.organization}</p><p>{j.description}</p><ul>{j.highlights.map(h=><li key={h}>{h}</li>)}</ul></article>)}</div></Reveal></section>
      <section className="contact" id="contact"><div className="wrap"><Reveal><p className="eyebrow">06 / CONTACT</p><h2>Want to build something<br/><em>useful together?</em></h2><a className="contact-email" href={'mailto:'+person.email}>{person.email}<ArrowUpRight/></a><div className="contact-bottom"><p>Open to entry-level AI/ML, computer vision, and data science roles.</p><div><External href={person.github}>GitHub</External><External href={person.linkedin}>LinkedIn</External></div></div></Reveal></div></section>
    </main><footer className="wrap"><span>Copyright {new Date().getFullYear()} J.K. Liwin Jose</span><a href="#home">Back to top</a></footer>
  </MotionConfig>;
}
