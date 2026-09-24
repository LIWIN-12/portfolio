import { useState } from 'react';
import { Braces, Cpu, ScanLine } from 'lucide-react';

export default function Portrait() {
  const [failed, setFailed] = useState(false);
  const base = import.meta.env.BASE_URL;
  return <div className="portrait-stage">
    <div className="avatar-splash splash-blue"/><div className="avatar-splash splash-coral"/>
    <div className="portrait-card">
      <div className="portrait-topline"><span><i/> PROFILE.01</span><span>AI / ML ENGINEER</span></div>
      <div className="avatar-image"><img src={failed ? base + 'photo1.jpg' : base + 'liwin-cartoon.png'} onError={()=>setFailed(true)} alt={failed ? 'J.K. Liwin Jose' : 'Cartoon illustration of J.K. Liwin Jose'} fetchPriority="high"/></div>
      <div className="portrait-bottom"><strong>J.K. Liwin Jose</strong><span>Computer vision, RAG, practical AI</span></div>
    </div>
    <div className="floating-tag tag-vision"><ScanLine size={18}/><span>Computer vision</span></div>
    <div className="floating-tag tag-rag"><Cpu size={18}/><span>RAG systems</span></div>
    <div className="portrait-caption"><Braces size={14}/><span>Built with intent, not noise.</span></div>
  </div>;
}


