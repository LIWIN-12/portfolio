import type { JourneyItem, Project, ResearchItem, SkillGroup } from '../types';

const BASE = import.meta.env.BASE_URL;

export const PERSONAL_INFO = {
  name: 'J.K. Liwin Jose',
  shortName: 'Liwin Jose',
  role: 'AI/ML Engineer',
  headline: 'AI/ML Engineer specializing in Computer Vision and practical AI applications.',
  introduction:
    'Artificial Intelligence and Data Science graduate building end-to-end systems for visual detection, prediction, retrieval, and workflow automation.',
  availability: 'Open to entry-level AI/ML, Computer Vision, and Data Science roles',
  email: 'jkliwinjose@gmail.com',
  github: 'https://github.com/LIWIN-12',
  linkedin: 'https://www.linkedin.com/in/jkliwinjose/',
  huggingFace: 'https://huggingface.co/LIWIN-12',
  assistantUrl: 'https://liwin-ai-v1.onrender.com/',
  resumePdf: `${BASE}LIWIN_RESUME_.pdf`,
  profilePhoto: `${BASE}photo1.jpg`,
} as const;

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'smart-focus',
    title: 'Smart Focus',
    eyebrow: 'Student engagement tracking',
    summary:
      'A real-time classroom vision system that combines face recognition, behavior detection, attendance logging, and engagement summaries.',
    problem:
      'Manual attendance and classroom observation are time-consuming and do not provide a consistent view of behavior over a session.',
    contribution:
      'Built the end-to-end Python workflow, joining student identification with behavior labels and CSV-based attendance reporting.',
    approach:
      'An Ultralytics YOLO detector classifies attentive and non-attentive behaviors while face embeddings identify registered students. OpenCV handles the live video pipeline.',
    workflow: ['Camera feed', 'Face matching', 'YOLO behavior detection', 'Attendance + summary CSV'],
    outcome:
      'Produced an educational prototype with live annotations, automated attendance records, and per-session engagement summaries.',
    tech: ['Python', 'Ultralytics YOLO', 'PyTorch', 'OpenCV', 'face_recognition', 'Pandas'],
    visual: 'engagement',
    featured: true,
    repositoryUrl: 'https://github.com/LIWIN-12/Smart-Focus',
  },
  {
    id: 'image-change-detection',
    title: 'Image Change Detector',
    eyebrow: 'Computer vision comparison tool',
    summary:
      'An interactive image-comparison app that identifies structural differences and highlights changed regions for review.',
    problem:
      'Comparing two near-identical images by eye is slow, inconsistent, and makes subtle changes easy to miss.',
    contribution:
      'Implemented the image-processing pipeline and packaged it in a Streamlit interface with adjustable sensitivity and side-by-side results.',
    approach:
      'Images are normalized to matching dimensions, converted for analysis, compared with SSIM, and processed with thresholding and contour detection.',
    workflow: ['Upload image pair', 'Normalize + compare', 'Threshold + contours', 'Annotated difference view'],
    outcome:
      'Delivers an immediate visual difference map and marked regions without claiming a domain-specific accuracy benchmark.',
    tech: ['Python', 'OpenCV', 'scikit-image', 'NumPy', 'Pillow', 'Streamlit'],
    visual: 'difference',
    featured: true,
    repositoryUrl: 'https://github.com/LIWIN-12/Image-Change-Detector',
    liveUrl: 'https://huggingface.co/spaces/LIWIN-12/image-change-detector',
  },
  {
    id: 'wildlife-detection',
    title: 'Wildlife Animal Detection',
    eyebrow: 'Multi-class object detection',
    summary:
      'A YOLO-based pipeline for detecting and classifying animals in images and video for wildlife-monitoring scenarios.',
    problem:
      'Reviewing wildlife footage manually does not scale well when teams need to locate and classify animal appearances across many frames.',
    contribution:
      'Worked across dataset preparation, model training, inference, and result visualization to create the complete detection workflow.',
    approach:
      'Prepared labeled image data, trained an Ultralytics YOLO model, and used OpenCV to run inference and render class-aware detections.',
    workflow: ['Labeled dataset', 'YOLO training', 'Image/video inference', 'Detection visualization'],
    outcome:
      'Created a reusable multi-class detection prototype for images and video streams; no unsupported accuracy figure is presented.',
    tech: ['Python', 'Ultralytics YOLO', 'PyTorch', 'OpenCV', 'Computer Vision'],
    visual: 'wildlife',
    featured: true,
    repositoryUrl: 'https://github.com/LIWIN-12/Animal-Detection-System',
  },
];

export const ADDITIONAL_PROJECTS: Project[] = [
  {
    id: 'student-performance',
    title: 'Student Performance Prediction',
    eyebrow: 'Machine learning application',
    summary:
      'A Streamlit app that predicts pass/fail outcomes from academic and demographic inputs using a Random Forest classifier.',
    problem: 'Educators need a consistent way to explore factors associated with student outcomes.',
    contribution: 'Built the data-processing, model-inference, input-validation, and prediction-logging flow.',
    approach: 'Tabular features are validated and passed to a scikit-learn classifier through an interactive Streamlit UI.',
    workflow: ['Form inputs', 'Validation', 'Random Forest inference', 'Prediction log'],
    outcome: 'Provides an approachable interface for testing individual student scenarios and saving predictions for later review.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Streamlit'],
    visual: 'prediction',
    repositoryUrl: 'https://github.com/LIWIN-12/Student-Performance-Prediction-App',
  },
  {
    id: 'face-attendance',
    title: 'Face Recognition & Attendance',
    eyebrow: 'Real-time vision automation',
    summary:
      'A webcam-based system that identifies registered individuals and records attendance to a structured CSV file.',
    problem: 'Manual attendance capture is repetitive and can interrupt a session.',
    contribution: 'Connected face encoding, real-time recognition, identity labeling, and CSV attendance storage.',
    approach: 'Known-face embeddings are compared against webcam frames, then recognized identities are logged once per session.',
    workflow: ['Registered faces', 'Webcam frames', 'Embedding match', 'Attendance.csv'],
    outcome: 'Automates the basic recognition-to-record workflow as a local computer-vision prototype.',
    tech: ['Python', 'OpenCV', 'face_recognition', 'NumPy', 'Pandas'],
    visual: 'attendance',
  },
  {
    id: 'telegram-tracker',
    title: 'Telegram Response Tracker',
    eyebrow: 'API workflow automation',
    summary:
      'A Telegram bot workflow that captures responses and writes structured records into Google Sheets.',
    problem: 'Collecting conversational responses manually creates repetitive copy-and-paste work and inconsistent records.',
    contribution: 'Connected bot commands, authentication, response handling, and Google Sheets updates.',
    approach: 'The Telegram Bot API receives user input, Python validates it, and the Google Sheets API updates the target worksheet.',
    workflow: ['Telegram message', 'Bot handler', 'Validation', 'Google Sheets row'],
    outcome: 'Created an automated message-to-spreadsheet pipeline and resolved authentication and data-update issues.',
    tech: ['Python', 'python-telegram-bot', 'Telegram Bot API', 'Google Sheets API', 'Google Cloud'],
    visual: 'automation',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    eyebrow: 'Responsive frontend',
    summary:
      'This recruiter-focused portfolio, built as a responsive single-page React application and deployed through GitHub Pages.',
    problem: 'Technical projects need concise, accessible presentation that communicates decisions without relying on fabricated results.',
    contribution: 'Structured the content, reusable components, responsive layouts, semantic markup, and deployment configuration.',
    approach: 'Typed project data drives React components, Tailwind handles the design system, and Vite produces the static site.',
    workflow: ['Typed content', 'React components', 'Vite build', 'GitHub Pages'],
    outcome: 'Provides one consistent place to review projects, research, skills, and contact information across device sizes.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GitHub Pages'],
    visual: 'portfolio',
    repositoryUrl: 'https://github.com/LIWIN-12/portfolio',
  },
];

export const AI_ASSISTANT_PROJECT: Project = {
  id: 'ai-assistant',
  title: 'Personal AI Assistant / RAG System',
  eyebrow: 'Retrieval-augmented question answering',
  summary:
    'A personal AI assistant that retrieves relevant information from indexed documents before generating a natural-language answer.',
  problem:
    'A conventional portfolio is static; visitors cannot quickly ask focused questions about projects, skills, or background.',
  contribution:
    'Built the document indexing, retrieval, API, and question-answering flow around personal portfolio information.',
  approach:
    'Documents are chunked and embedded into a vector store. A query retrieves relevant context, which is passed to an LLM through a FastAPI service.',
  workflow: ['Portfolio documents', 'Chunk + embed', 'Vector retrieval', 'Context + LLM', 'Answer'],
  outcome:
    'Offers a live, conversational way to explore portfolio information while keeping retrieval as a visible part of the architecture.',
  tech: ['Python', 'RAG', 'LLMs', 'Embeddings', 'Vector Database', 'Hugging Face', 'FastAPI'],
  visual: 'assistant',
  repositoryUrl: 'https://github.com/LIWIN-12/liwai',
  liveUrl: 'https://liwin-ai-v1.onrender.com/',
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages & data',
    description: 'Programming and analysis foundations used across the project portfolio.',
    skills: ['Python', 'Java', 'SQL', 'NumPy', 'Pandas'],
  },
  {
    category: 'Machine learning',
    description: 'Building, preparing, and serving applied machine-learning workflows.',
    skills: ['Machine Learning', 'Deep Learning', 'Feature Engineering', 'scikit-learn', 'PyTorch', 'Model Deployment'],
  },
  {
    category: 'Computer vision',
    description: 'The primary specialization across detection, recognition, and image comparison projects.',
    skills: ['Ultralytics YOLO', 'OpenCV', 'Object Detection', 'Face Recognition', 'Image Processing', 'Data Labeling'],
  },
  {
    category: 'Generative AI',
    description: 'Retrieval and language-model tooling used for the personal AI assistant.',
    skills: ['RAG', 'LLMs', 'Embeddings', 'Vector Databases', 'Prompt Engineering', 'Hugging Face'],
  },
  {
    category: 'Applications & APIs',
    description: 'Interfaces and integrations used to turn models into usable applications.',
    skills: ['Streamlit', 'FastAPI', 'REST APIs', 'JSON', 'Git', 'GitHub', 'Docker'],
  },
  {
    category: 'Cloud & analytics',
    description: 'Supporting platforms and tools listed in the supplied technical profile.',
    skills: ['Google Cloud Platform', 'Azure ML', 'Power BI', 'Excel'],
  },
];

export const RESEARCH_ITEM: ResearchItem = {
  title: 'Smart Focus: A Deep Learning-based Student Engagement Tracking System',
  venue: '6th International Conference on Inventive Research in Computing Applications (ICIRCA 2025)',
  date: 'Presented 25-27 June 2025',
  status: 'Conference presentation',
  summary:
    'Presented work on combining face recognition and YOLO-based behavior detection for classroom attendance and engagement tracking. The available certificate verifies the presentation; this portfolio does not claim publication or indexing status.',
  evidenceUrl: `${BASE}Conference.png`,
  topics: ['Computer Vision', 'YOLO', 'Face Recognition', 'Education Technology'],
};

export const JOURNEY_ITEMS: JourneyItem[] = [
  {
    title: 'Applied AI/ML project experience',
    organization: 'Independent and academic projects',
    period: 'Project portfolio',
    kind: 'project',
    description:
      'Hands-on work across computer vision, machine learning, retrieval-augmented generation, and API automation.',
    highlights: [
      'Built project workflows from data preparation and model integration through interactive application interfaces.',
      'Worked with real-time video, tabular prediction, document retrieval, and third-party API integrations.',
      'Documented source code and shared selected projects publicly on GitHub.',
    ],
  },
  {
    title: 'B.Tech - Artificial Intelligence & Data Science',
    organization: 'Karunya Institute of Technology and Sciences',
    period: '2021 - 2025',
    kind: 'education',
    description:
      'Undergraduate foundation in artificial intelligence and data science, followed by applied project work in machine learning and computer vision.',
    highlights: [
      'Developed Smart Focus as a classroom engagement and attendance prototype.',
      'Presented the Smart Focus paper at ICIRCA 2025.',
    ],
  },
];
