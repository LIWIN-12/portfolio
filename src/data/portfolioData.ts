import { Project, SkillCategory, ResearchPaper, ExperienceItem } from '../types';

const BASE = import.meta.env.BASE_URL;

export const PERSONAL_INFO = {
  name: "J.K. Liwin Jose",
  role: "AI & Data Science Engineer",
  focus: "Computer Vision & ML Systems",
  headline: "Computer Vision & Deep Learning Engineer",
  subheadline: "B.Tech graduate in Artificial Intelligence and Data Science with hands-on experience building custom YOLO detectors, real-time perception pipelines, and production software systems.",
  location: "Kanniyakumari, Tamil Nadu, India",
  email: "jkliwinjose@gmail.com",
  github: "https://github.com/LIWIN-12",
  linkedin: "https://www.linkedin.com/in/jkliwinjose/",
  resumePdf: `${BASE}LIWIN_RESUME_.pdf`,
  profilePhoto: `${BASE}photo1.jpg`,
  education: {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Karunya Institute of Technology and Sciences",
    period: "2021 - 2025",
    location: "Coimbatore, India"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "smart-focus",
    title: "Smart Focus: Student Engagement Tracking System",
    subtitle: "Deep Learning-Based Automated Classroom Perception",
    featured: true,
    category: "vision",
    icon: "Eye",
    metrics: [
      { label: "Efficiency Gain", value: "95%" },
      { label: "Pipeline", value: "Real-Time" },
      { label: "Model", value: "Custom YOLOv11" },
    ],
    problem: "Manual classroom monitoring and attendance logging is labor-intensive, error-prone, and provides no continuous objective insights into real-time student engagement or attention dynamics.",
    solution: "Engineered an end-to-end computer vision architecture integrating custom-trained YOLOv11 behavioral detection with face recognition for automated attendance verification and real-time engagement scoring.",
    architecture: "Video Stream Ingestion -> Frame Preprocessing -> YOLOv11 Behavioral Detector -> Face Recognition Embedding Matching -> Stream Analytics Pipeline",
    impact: "Presented at ICIRCA 2025 (IEEE Xplore compliant) demonstrating real-time behavioral classification and automated engagement metric extraction.",
    techStack: ["Python", "YOLOv11", "OpenCV", "PyTorch", "Face Recognition", "Deep Learning"],
    githubUrl: "https://github.com/LIWIN-12"
  },
  {
    id: "wildlife-detection",
    title: "Wildlife Animal Detection System",
    subtitle: "Multi-Class Real-Time Perception Pipeline",
    featured: false,
    category: "vision",
    icon: "Scan",
    problem: "Automated wildlife surveillance demands reliable multi-class animal identification in complex outdoor lighting conditions with minimal latency.",
    solution: "Architected a computer vision pipeline with custom dataset annotation, data augmentation, YOLO model fine-tuning, and a lightweight interactive monitoring dashboard.",
    architecture: "Stream Capture -> Augmentation & Normalization -> Multi-Class YOLO Inference -> Streamlit Interface",
    impact: "Delivered accurate multi-class animal tracking for automated wildlife conservation and perimeter monitoring.",
    techStack: ["Python", "YOLO", "OpenCV", "Deep Learning", "NumPy", "Streamlit"],
    githubUrl: "https://github.com/LIWIN-12"
  },
  {
    id: "image-change-detection",
    title: "Interactive Image Change Detection",
    subtitle: "Quality Inspection & Difference Highlighting Tool",
    featured: false,
    category: "app",
    icon: "Layers",
    problem: "Manual visual inspection between reference blueprints and manufactured parts is slow and susceptible to human oversight.",
    solution: "Built a precision OpenCV contour analysis engine with structural thresholding and interactive bounding box visualization for rapid discrepancy identification.",
    architecture: "Image Alignment -> Structural Difference Calculation -> Threshold Contouring -> Interactive Bounding Box Renderer",
    impact: "Eliminated inspection bottlenecks with instantaneous visual diff overlays and automated delta metric reports.",
    techStack: ["Python", "OpenCV", "Streamlit", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/LIWIN-12"
  }
];

export const SKILL_GROUPS = [
  {
    category: "Programming & Languages",
    skills: ["Python (Async, Multiprocessing)", "Java (OOP, Backend)", "C++", "JavaScript / TypeScript", "SQL (PostgreSQL, MySQL)"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["PyTorch Framework", "Scikit-Learn", "Model Optimization & Pruning", "Feature Engineering", "Ensemble Methods"]
  },
  {
    category: "Computer Vision",
    skills: ["YOLO (Ultralytics / YOLOv11)", "OpenCV Engine", "Object Detection & Tracking", "Face Recognition", "Contour & Difference Analysis", "Image Segmentation"]
  },
  {
    category: "Web & Software Testing",
    skills: ["React & Modern Frontend", "FastAPI / REST APIs", "Software Testing & QA", "Playwright & PyTest Automation", "Vite & Tailwind CSS"]
  },
  {
    category: "Databases & Cloud",
    skills: ["PostgreSQL & MySQL", "Vector Stores (ChromaDB)", "Google Cloud Platform (GCP)", "Docker & Containerization", "Git & CI/CD Workflows"]
  },
  {
    category: "Tools & Analytics",
    skills: ["NumPy & Pandas", "Streamlit App Engineering", "Power BI Dashboards", "Linux Environment", "Jupyter Notebooks"]
  }
];

export const RESEARCH_PAPER: ResearchPaper = {
  id: "smart-focus-ieee",
  title: "Smart Focus: A Deep Learning-Based Student Engagement Tracking System",
  conference: "6th International Conference on Inventive Research in Computing Applications (ICIRCA 2025)",
  location: "RVS College of Engineering and Technology, Coimbatore, India",
  year: "2025",
  badge: "IEEE Xplore Compliant",
  image: `${BASE}Conference.png`,
  summary: "Presents an automated deep learning framework for student engagement tracking using real-time YOLO behavioral analysis and face recognition. Evaluates perception accuracy across varying classroom conditions and provides verifiable metrics for educational technology applications.",
  tags: ["Computer Vision", "YOLOv11", "Face Recognition", "Deep Learning", "EdTech", "IEEE ICIRCA 2025"]
};

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "exp-nexential",
    role: "Web Development Intern",
    company: "Nexential Solutions Private Ltd",
    period: "2024",
    type: "internship",
    highlights: [
      "Engineered and shipped responsive web interfaces, handling requirements analysis, component structuring, and frontend-backend API integration.",
      "Diagnosed and resolved UI/UX bottlenecks and performance slowdowns using structured debugging and code profiling.",
      "Collaborated with product designers to implement pixel-accurate interactive components with robust error boundaries.",
      "Assisted in maintaining automated testing pipelines and developer workflows to ensure continuous code stability."
    ],
    skills: ["Web Engineering", "API Integration", "JavaScript/TypeScript", "UI/UX Debugging", "Agile"]
  },
  {
    id: "exp-education",
    role: "B.Tech in Artificial Intelligence & Data Science",
    company: "Karunya Institute of Technology and Sciences",
    period: "2021 - 2025",
    type: "education",
    highlights: [
      "Graduated with core focus on Computer Vision, Deep Learning, Machine Learning Algorithms, and Distributed Data Systems.",
      "Authored and presented original computer vision research at an IEEE-indexed international conference (ICIRCA 2025).",
      "Developed open-source projects encompassing YOLO detection pipelines, OpenCV inspection tools, and full-stack machine learning applications."
    ],
    skills: ["Computer Vision", "PyTorch", "Deep Learning", "Data Structures", "Statistical Modeling"]
  }
];
