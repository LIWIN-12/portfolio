export const PERSONAL_INFO = {
  firstName: 'J. K. LIWIN',
  lastName: 'JOSE',
  roleLine1: 'AI & DATA SCIENCE ENGINEER',
  roleLine2: 'PYTHON / LLM / COMPUTER VISION',
  tagline:
    'B.Tech AI & Data Science graduate building and shipping Python and LLM systems — RAG assistants, YOLO computer vision, and QA-tested web apps.',
  location: 'KANYAKUMARI, TAMIL NADU, INDIA',
  email: 'jkliwinjose@gmail.com',
  emailHref: 'mailto:jkliwinjose@gmail.com',
  phone: '+91 7904378125',
  phoneHref: 'tel:+917904378125',
  github: 'https://github.com',
  githubLabel: '://GITHUB.COM',
  linkedin: 'https://linkedin.com',
  linkedinLabel: '://LINKEDIN.COM',
  huggingFace: 'https://huggingface.co',
  huggingFaceLabel: 'HUGGINGFACE.CO/LIWIN-12',
  profilePhoto: `${import.meta.env.BASE_URL}photo2.jpeg`,
} as const;

export interface Project {
  title: string;
  summary: string;
  liveUrl?: string;
  codeUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'LIWIN AI — DEPLOYED RAG ASSISTANT',
    summary:
      'RAG assistant answering recruiter questions from a resume markdown knowledge base using FastAPI, ChromaDB, gemini-embedding-001, and multi-model fallback (Gemini / Groq / Llama) with conversational memory.',
    liveUrl: 'https://duckdns.org',
    codeUrl: 'https://github.com',
  },
  {
    title: 'SMART FOCUS — CLASSROOM ENGAGEMENT (YOLOV11)',
    summary:
      'Custom-trained YOLOv11 model tracking classroom engagement combined with face-recognition attendance, trained with Ultralytics YOLO, PyTorch, and CUDA/GPU.',
    codeUrl: 'https://github.com',
  },
  {
    title: 'WILDLIFE ANIMAL DETECTION SYSTEM',
    summary:
      'Computer-vision app detecting wildlife in images and video using YOLO object detection and OpenCV.',
    codeUrl: 'https://github.com',
  },
  {
    title: 'FACE RECOGNITION & AUTOMATED ATTENDANCE',
    summary:
      'Personal Python + CUDA/GPU attendance system using InsightFace to detect, recognize, and log faces automatically.',
  },
  {
    title: 'IMAGE COMPARISON & CHANGE DETECTION',
    summary:
      'OpenCV tool comparing two images to highlight changed regions for visual inspection and monitoring.',
    codeUrl: 'https://github.com',
  },
  {
    title: 'STUDENT PERFORMANCE PREDICTION',
    summary:
      'Scikit-learn ML prediction model served as an interactive Streamlit web app.',
    codeUrl: 'https://github.com',
  },
  {
    title: 'FUELTRACK — ANDROID FUEL-TRACKING APP',
    summary:
      'Android application for tracking vehicle fuel usage and expenses with a backend hosted on Render.',
  },
];

export const CAPABILITIES = [
  {
    icon: 'nodes',
    title: 'LLM & RAG SYSTEMS',
    copy: 'Deployed FastAPI + ChromaDB + Gemini/Groq/Llama assistants with prompt engineering, embeddings, and conversational memory.',
  },
  {
    icon: 'camera',
    title: 'COMPUTER VISION & YOLO',
    copy: 'Custom-trained Ultralytics YOLOv11, PyTorch, OpenCV, InsightFace, and AWS Rekognition detection & attendance pipelines.',
  },
  {
    icon: 'browser',
    title: 'ML & WEB APPS',
    copy: 'End-to-end Python, Scikit-learn, Streamlit, FastAPI, and REST/JSON API tools with CUDA/GPU acceleration.',
  },
  {
    icon: 'checklist',
    title: 'QA & SOFTWARE TESTING',
    copy: 'Structured manual web-application testing, defect documentation, and workflow automation.',
  },
] as const;

export const STACK = [
  { label: 'Languages', items: 'Python, SQL, Java, JavaScript' },
  {
    label: 'AI/ML/CV',
    items: 'PyTorch, Ultralytics YOLO, OpenCV, Scikit-learn, NumPy, Pandas, OCR',
  },
  {
    label: 'LLM/GenAI',
    items: 'RAG, Prompt Engineering, Embeddings, ChromaDB, Gemini API, Groq, Hugging Face',
  },
  {
    label: 'Web/Cloud/Tools',
    items: 'FastAPI, REST APIs, JSON, Streamlit, React + Tailwind, Git, Docker, CUDA/GPU, Power BI, AWS Rekognition, Azure ML',
  },
] as const;
