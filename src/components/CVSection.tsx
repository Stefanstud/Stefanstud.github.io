import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import LogoBadge from "./LogoBadge";
import ProjectCard from "./ProjectCard";
import PublicationCard from "./PublicationCard";
import LazyImage from "./LazyImage";

const CVSection = () => {
  const logoMap: Record<string, string> = {
    "École Polytechnique Fédérale de Lausanne": "/logos/universities/epfl.png",
    "Stanford": "/logos/universities/stanford.png",
    "Yale University": "/logos/universities/yale.svg",
    "T.H. Chan School of Public Health, Harvard University": "/logos/universities/harvard.png",
    "Nestlé Research": "/logos/companies/nestle.png",
    "DLAB": "/logos/organizations/dlab.svg",
    "dlab @ EPFL": "/logos/organizations/dlab.svg",
    "Netcetera": "/logos/companies/netcetera.png",
    "Emteq Labs": "/logos/companies/emteq.png",
    "Jožef Stefan Institute": "/logos/organizations/ijs.png",
    "TechSpark Academy": "/logos/companies/techspark.png",
    "Ss. Cyril and Methodius University": "/logos/universities/ukim.png",
    "Freelancer": "/logos/companies/freelancer.png",
    "UKIM": "/logos/universities/ukim.png",
    "Hasso Plattner Institute": "/logos/universities/hpi.png",
    "IEEE": "/logos/organizations/ieee.png",
    "IEEE Signal Processing Society": "/logos/organizations/isps.png",
    "Ministry of Education, North Macedonia": "/icons/placeholder.svg",
    "AICrowd": "/logos/universities/epfl.png",
    "FEEIT": "/logos/universities/feeit.png",
    "ACL": "/logos/organizations/acl.png",
  };

  const urlMap: Record<string, string> = {
    "École Polytechnique Fédérale de Lausanne": "https://www.epfl.ch",
    "Stanford": "https://www.stanford.edu",
    "Yale University": "https://www.yale.edu",
    "T.H. Chan School of Public Health, Harvard University": "https://www.hsph.harvard.edu",
    "Nestlé Research": "https://www.nestle.com",
    "DLAB": "https://dlab.epfl.ch",
    "dlab @ EPFL": "https://dlab.epfl.ch",
    "Netcetera": "https://www.netcetera.com",
    "Emteq Labs": "https://emteqlabs.com",
    "Jožef Stefan Institute": "https://www.ijs.si",
    "TechSpark Academy": "https://techsparkacademy.ch/",
    "Ss. Cyril and Methodius University": "https://www.ukim.edu.mk",
    "Freelancer": "",
    "UKIM": "https://www.ukim.edu.mk",
    "Hasso Plattner Institute": "https://hpi.de",
    "IEEE": "https://2023.ieeeicassp.org/",
    "IEEE Signal Processing Society": "https://signalprocessingsociety.org",
    "Ministry of Education, North Macedonia": "https://mon.gov.mk",
    "AICrowd": "https://www.aicrowd.com",
    "FEEIT": "https://feit.ukim.edu.mk",
    "ACL": "https://2025.aclweb.org/",
  };

  const tooltipMap: Record<string, string> = {
    "École Polytechnique Fédérale de Lausanne": "École Polytechnique Fédérale de Lausanne, Switzerland",
    "Stanford": "Stanford University, California, USA",
    "Yale University": "Yale University, New Haven, Connecticut, USA",
    "T.H. Chan School of Public Health, Harvard University": "T.H. Chan School of Public Health, Harvard University, Boston, Massachusetts, USA",
    "Nestlé Research": "Nestlé Research, Lausanne, Switzerland",
    "DLAB": "Data Science Laboratory, EPFL, Switzerland",
    "dlab @ EPFL": "Data Science Laboratory, EPFL, Switzerland",
    "Netcetera": "Netcetera, Skopje, North Macedonia",
    "Emteq Labs": "Emteq Labs, Skopje, North Macedonia",
    "Jožef Stefan Institute": "Jožef Stefan Institute, Ljubljana, Slovenia",
    "TechSpark Academy": "TechSpark Academy, Zuoz, Switzerland",
    "Ss. Cyril and Methodius University": "Ss. Cyril and Methodius University, Skopje, North Macedonia",
    "Freelancer": "Freelance Work",
    "UKIM": "Ss. Cyril and Methodius University, Skopje, North Macedonia",
    "Hasso Plattner Institute": "Hasso Plattner Institute, Potsdam, Germany",
    "IEEE": "Institute of Electrical and Electronics Engineers - ICASSP",
    "IEEE Signal Processing Society": "IEEE Signal Processing Society",
    "Ministry of Education, North Macedonia": "Ministry of Education and Science, North Macedonia",
    "AICrowd": "AICrowd - EPFL AI Competition Platform",
    "FEEIT": "Faculty of Electrical Engineering and Information Technologies, UKIM",
    "ACL": "Association for Computational Linguistics, Vienna, Austria",
  };

  // Placeholder logo if not found
  const placeholderLogo = "https://via.placeholder.com/32x32?text=Logo";

  const experiences = [
    {
      title: "Research Assistant",
      organization: "dlab @ EPFL",
      period: "Aug 2025 - present",
      location: "Lausanne, Switzerland",
      description: "Currently working at the intersection between natural language processing and computational social science.",
      collaborations: ["dlab @ EPFL"]
    },
    {
      title: "Data Science Intern",
      organization: "Nestlé Research",
      period: "Feb 2025 - Aug 2025",
      location: "Lausanne, Switzerland",
      description: "Successfully completed two independent thesis-level projects:\n• Synthesize, then Rectify: a framework for simulating valid human survey responses with LLMs and statistical inference \n• Dietary data mining: auto-prompt optimized LLMs for extraction of nutrition information from messy documents ",
      collaborations: ["Nestlé Research"]
    },
    {
      title: "Student Teaching Assistant",
      organization: "École Polytechnique Fédérale de Lausanne",
      period: "Sep 2024 - Jan 2025",
      location: "Lausanne, Switzerland",
      description: "Supported instruction and grading in a 600+ student graduate course (CS-401: Applied Data Analysis).",
      collaborations: ["École Polytechnique Fédérale de Lausanne"]
    },
    {
      title: "Robotics Tutor",
      organization: "TechSpark Academy",
      period: "Jul 2024 - Aug 2024",
      location: "Zuoz, Switzerland",
      description: "Taught students to build and program autonomous robots using Arduino kits.",
      collaborations: ["TechSpark Academy"]
    },
    {
      title: "Machine Learning Engineer Intern",
      organization: "Netcetera",
      period: "Apr 2023 - Jul 2023",
      location: "Skopje, North Macedonia",
      description: "Integrated knowledge graphs into a BERT-based search engine, enabling hybrid retrieval that combined semantic and graph querying.",
      collaborations: ["Netcetera"]
    },
    {
      title: "Machine Learning Engineer",
      organization: "Freelancer",
      period: "Jan 2023 - Apr 2023",
      location: "Skopje, North Macedonia",
      description: "Developed a deep learning model for AFib detection, improving diagnostic accuracy compared to the client's existing system.",
      collaborations: ["Freelancer"]
    },
    {
      title: "Machine Learning Engineer Intern",
      organization: "Emteq Labs",
      period: "Sep 2022 - Dec 2022",
      location: "Skopje, North Macedonia",
      description: "IMU- and video-based ML models for human activity recognition (HAR), investigating semi-automated dataset labeling approaches.",
      collaborations: ["Emteq Labs"]
    },
    {
      title: "Machine Learning Research Intern",
      organization: "Jožef Stefan Institute",
      period: "Apr 2022 - Sep 2022",
      location: "Ljubljana, Slovenia",
      description: "Improved predictions of quality of life for heart failure patients by personalizing a gradient-boosted model at the user level.",
      collaborations: ["Jožef Stefan Institute"]
    }
  ];

  const projects = [
    {
      title: "Cold-Start Mitigation in Matrix Factorization Recommenders",
      description: "Personalized matrix factorization model with a log-scaled interpolation function to estimate user bias based on activity level. This approach allowed us to infer prior rating tendencies for users with little to no interaction history.",
      period: "Jan 2025",
      collaborations: ["EPFL"],
      keywords: ["Recommender Systems", "Matrix Factorization", "Collaborative and Content Filtering"],
      githubLink: "https://github.com/Stefanstud/book-recommender-systems",
      reportLink: "/projects/pdfs/matrix_factorization.pdf",
      image: "/projects/images/matrix_factorization.png"
    },
    {
      title: "Teaching with φ-3PO: An AI-Tutor System for Enhanced Learning",
      description: "Built a custom AI tutor by fine-tuning a large language model with human feedback (DPO) from EPFL exam data. Our model surpasses GPT-4 performance on STEM exam questions.",
      period: "Jun 2024",
      collaborations: ["EPFL"],
      keywords: ["LLM", "Reinforcement Learning from Human Feedback (RLHF)", "RAG"],
      githubLink: "https://github.com/Stefanstud/Phi-3PO",
      reportLink: "/projects/pdfs/phi_3po.pdf",
      huggingfaceLink: "https://huggingface.co/StefanKrsteski/Phi-3-mini-4k-instruct-DPO-EPFL",
      image: "/projects/images/3po.png"
    },
    {
      title: "EcoRoutes: The Real Cost of Travel",
      description: "Interactive web application that enables users to compare CO₂ emissions across different transportation modes and routes between European cities, promoting data-driven sustainable travel decisions.",
      period: "Jun 2024",
      collaborations: ["EPFL"],
      keywords: ["Sustainability", "Carbon Footprint", "Data Visualization", "Transportation"],
      websiteLink: "https://com-480-data-visualization.github.io/com-480-project-ecoroutes/home",
      githubLink: "https://github.com/Stefanstud/EcoRoutes",
      reportLink: "/projects/pdfs/ecoroutes.pdf",
      image: "/projects/images/ecoroutes.png"
    },
    {
      title: "Satellite Image Road Segmentation",
      description: "A computer vision pipeline using deep transfer learning and morphological operations to accurately segment roadways from satellite imagery.",
      period: "Jan 2024",
      collaborations: ["EPFL"],
      keywords: ["Computer Vision", "Transfer Learning", "Satellite Images", "Atrous Convolution"],
      githubLink: "https://github.com/Stefanstud/road-segmentation",
      reportLink: "/projects/pdfs/road_segmentation.pdf",
      image: "/projects/images/road_segmentation.png"
    },
    {
      title: "Deep Learning in Ophthalmology: A Study on Diabetic Retinopathy Detection",
      description: "What can machine learning do for diabetic retinopathy in retinal fundus images? We design a custom Siamese architecture that uses information from both eyes to improve diagnostic predictions.",
      period: "Dec 2023",
      collaborations: ["EPFL"],
      keywords: ["Computer Vision", "Transfer Learning", "Siamese Networks", "Vision Transformers"],
      githubLink: "https://github.com/Stefanstud/diabetic-retinopathy-detection",
      reportLink: "/projects/pdfs/diabetic.pdf",
      image: "/projects/images/diabetic.png"
    },
    {
      title: "Graph Neural Networks for Chemical Mutagenicity Prediction",
      description: "From-scratch implementation of graph neural networks for chemical mutagenicity prediction. GNN architectures range from basic GCNs to attention-based ones.",
      period: "Dec 2023",
      collaborations: ["EPFL"],
      keywords: ["Graph convolutional networks", "Attention-based convolution", "Chemoinformatics"],
      githubLink: "https://github.com/Stefanstud/GNN-graph-classification",
      reportLink: "/projects/pdfs/gnn.pdf",
      image: "/projects/images/gnn.png"
    },
    {
      title: "Money Mov(i)es",
      description: "What makes a movie successful? This project explores that question through exploratory data analysis. For more info, please visit the data story webpage linked below.",
      period: "Dec 2023",
      collaborations: ["EPFL"],
      keywords: ["Exploratory Data Analysis", "Statistics", "Finance", "Movies"],
      websiteLink: "https://epfl-ada.github.io/ada-2023-project-fivefrenchspeakingpeoplenocap/",
      githubLink: "https://github.com/Stefanstud/movies-analysis",
      image: "/projects/images/movies_analysis.jpg"
    },
  ];


  const publications = [
    {
      title: "Towards Open Foundation Language Model and Corpus for Macedonian: A Low-Resource Language",
      authors: ["S. Krsteski", "M. Tashkovska", "B. Sazdov", "H. Gjoreski", "B. Gerazov"],
      venue: "ACL: SlavicNLP2025",
      year: "2025",
      collaborations: ["EPFL", "UKIM"],
      authorInstitutions: {
        "S. Krsteski": "EPFL",
        "M. Tashkovska": "EPFL",
        "B. Sazdov": "UKIM",
        "H. Gjoreski": "UKIM",
        "B. Gerazov": "UKIM"
      },
      githubLink: "https://github.com/LVSTCK",
      link: "https://arxiv.org/pdf/2506.09560",
      reportLink: "https://arxiv.org/pdf/2506.09560",
      huggingfaceLink: "https://huggingface.co/LVSTCK",
      websiteLink: "https://www.lvstck.org/",
      isFirstAuthor: true,
      isBestPaper: true
    },
    {
      title: "MMORE: Massive Multimodal Open RAG & Extraction",
      authors: ["A. Sallinen", "S. Krsteski", "P. Teiletche", "A. Marc-Antoine", "B. Lecoeur", "M. Zhang", "F. Nemo", "D. Kalajdzic", "M. Meyer", "Mary-Anne Hartley"],
      venue: "ICML: CODEML2025",
      year: "2025",
      collaborations: ["EPFL", "Yale University", "T.H. Chan School of Public Health, Harvard University"],
      authorInstitutions: {
        "A. Sallinen": "EPFL",
        "S. Krsteski": "EPFL",
        "P. Teiletche": "EPFL",
        "A. Marc-Antoine": "EPFL",
        "B. Lecoeur": "EPFL",
        "M. Zhang": "EPFL",
        "F. Nemo": "EPFL",
        "D. Kalajdzic": "EPFL",
        "M. Meyer": "EPFL",
        "Mary-Anne Hartley": ["EPFL", "Yale University", "T.H. Chan School of Public Health, Harvard University"]
      },
      githubLink: "https://github.com/swiss-ai/mmore",
      link: "https://openreview.net/forum?id=6j1HjfIdKn",
      reportLink: "https://openreview.net/forum?id=6j1HjfIdKn",
      isFirstAuthor: true
    },
    {
      title: "Predictive models for health-related quality of life built on two telemonitoring datasets",
      authors: ["*S. Krsteski", "*M. Tashkovska", "E. Kizhevska", "J. Valič", "H. Gjoreski", "M. Luštrek"],
      venue: "Public Library of Science (PLOS ONE) Journal",
      year: "2024",
      collaborations: ["Jožef Stefan Institute", "UKIM"],
      authorInstitutions: {
        "*S. Krsteski": ["Jožef Stefan Institute", "UKIM"],
        "*M. Tashkovska": ["Jožef Stefan Institute", "UKIM"],
        "E. Kizhevska": "Jožef Stefan Institute",
        "J. Valič": "Jožef Stefan Institute",
        "H. Gjoreski": "UKIM",
        "M. Luštrek": "Jožef Stefan Institute"
      },
      githubLink: "",
      link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0313815",
      reportLink: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0313815",
      isFirstAuthor: true,
      isSharedFirst: true
    },
    {
      title: "A System for Differentiation of Schizophrenia and Bipolar Disorder based on rsfMRI",
      authors: ["D. Janeva", "S. Krsteski", "M. Tashkovska", "N. Jovanovski", "T. Kartalov", "D. Taskovski", "Z. Ivanovski", "B. Gerazov"],
      venue: "International Conference on Systems, Signals and Image Processing (IWSSIP) 2023",
      year: "2023",
      collaborations: ["UKIM"],
      authorInstitutions: {
        "D. Janeva": "UKIM",
        "S. Krsteski": "UKIM",
        "M. Tashkovska": "UKIM",
        "N. Jovanovski": "UKIM",
        "T. Kartalov": "UKIM",
        "D. Taskovski": "UKIM",
        "Z. Ivanovski": "UKIM",
        "B. Gerazov": "UKIM"
      },
      githubLink: "",
      link: "https://ieeexplore.ieee.org/abstract/document/10180306/",
      reportLink: "https://ieeexplore.ieee.org/abstract/document/10180306/",
      isFirstAuthor: false
    },
    {
      title: "Prediction of Hospital Readmission using Federated Learning",
      authors: ["B. Sazdov", "M. Tashkovska", "S. Krsteski", "B. Jovanovski", "S. Kalabakov", "V. Rakovic", "D. Denkovski", "H. Gjoreski"],
      venue: "International Conference on Systems, Signals and Image Processing (IWSSIP) 2023",
      year: "2023",
      collaborations: ["UKIM", "Hasso Plattner Institute"],
      authorInstitutions: {
        "B. Sazdov": "UKIM",
        "M. Tashkovska": "UKIM",
        "S. Krsteski": "UKIM",
        "B. Jovanovski": "UKIM",
        "S. Kalabakov": "Hasso Plattner Institute",
        "V. Rakovic": "UKIM",
        "D. Denkovski": "UKIM",
        "H. Gjoreski": "UKIM"
      },
      githubLink: "",
      link: "https://ieeexplore.ieee.org/abstract/document/10180282",
      reportLink: "https://ieeexplore.ieee.org/abstract/document/10180282",
      isFirstAuthor: false
    },
    {
      title: "Intrusion Detection with Supervised and Unsupervised Learning using PyCaret over CICIDS 2017 dataset",
      authors: ["S. Krsteski", "M. Tashkovska", "B. Sazdov", "L. Radojichikj", "A. Cholakoska", "D. Efnusheva"],
      venue: "Springer Nature: CSOC 2023. Artificial Intelligence Application in Networks and Systems",
      year: "2023",
      collaborations: ["UKIM"],
      authorInstitutions: {
        "S. Krsteski": "UKIM",
        "M. Tashkovska": "UKIM",
        "B. Sazdov": "UKIM",
        "L. Radojichikj": "UKIM",
        "A. Cholakoska": "UKIM",
        "D. Efnusheva": "UKIM"
      },
      githubLink: "",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-35314-7_12",
      reportLink: "https://link.springer.com/chapter/10.1007/978-3-031-35314-7_12",
      isFirstAuthor: true
    }
  ];

  const awards = [
    {
      title: "Best Paper Award",
      organization: "ACL",
      year: "2025",
      period: "2025",
      description: "Best Paper Award at the ACL Workshop on Slavic Natural Language Processing (SlavicNLP) 2025 in Vienna."
    },
    {
      title: "Signal Processing Scholarship",
      organization: "IEEE Signal Processing Society",
      year: "2025",
      period: "2023-2025",
      description: "Awarded for excellence in signal processing research and academic achievements"
    },
    {
      title: "ICASSP Signal Processing Cup Grand Prize",
      organization: "IEEE",
      year: "2024",
      period: "2024",
      description: "1st place among 50 teams at the International Conference on Acoustics, Speech, and Signal Processing (ICASSP) - the world's premier conference for signal processing research ($5,000 prize)"
    },
    {
      title: "ML Road Segmentation Challenge Winner",
      organization: "AICrowd",
      year: "2024",
      period: "2024",
      description: "1st place out of 58 teams in road segmentation challenge as part of the ML course"
    },
    {
      title: "Best Student Award",
      organization: "FEEIT",
      year: "2023",
      period: "2023",
      description: "2nd place in BSc Electrical & Computer Engineering program - graduated with distinction from Faculty of Electrical Engineering and Information Technologies (FEEIT), UKIM"
    },
    {
      title: "Hackathon Winner",
      organization: "Hasso Plattner Institute",
      year: "2023",
      period: "2023",
      description: "1st place in the federated learning challenge"
    },
    {
      title: "Academic Excellence Scholarship",
      organization: "UKIM",
      year: "2023",
      period: "2019-2023",
      description: "Scholarship for outstanding academic performance throughout undergraduate studies - Ministry of Education, North Macedonia"
    }
  ];

  return (
    <section className="mb-12">
      <div className="space-y-6">
        {/* Education Section */}
        <Card id="education" className="paper-section border-none px-6 py-8">
          <div>
            <div className="flex items-center gap-3 mb-6 -ml-1">
              <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
              <h2 className="text-3xl font-bold font-academic text-foreground">
                Education
              </h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-2 border-muted-foreground pl-4" style={{ marginLeft: '-1px' }}>
                <div className="bg-card rounded-lg p-4 shadow-sm border border-border/40 hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1">
                    <h4 className="text-xl font-semibold font-academic text-foreground">
                      MSc in Data Science
                    </h4>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-base text-muted-foreground mb-1 sm:justify-end">
                        <Calendar className="w-4 h-4" />
                        2023 - 2025
                      </div>
                      <p className="text-base text-muted-foreground font-academic m-0">
                        Lausanne, Switzerland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-2" style={{ marginTop: '-4px' }}>
                    <a
                      href={urlMap["École Polytechnique Fédérale de Lausanne"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={tooltipMap["École Polytechnique Fédérale de Lausanne"]}
                    >
                      <LazyImage
                        src="/logos/universities/epfl.png"
                        alt="EPFL logo"
                        className="w-20 h-20 object-contain flex-shrink-0 cursor-pointer"
                      />
                    </a>
                    <div>
                      <a
                        href={urlMap["École Polytechnique Fédérale de Lausanne"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-academic text-foreground hover:text-primary transition-colors"
                      >
                        École Polytechnique Fédérale de Lausanne
                      </a>
                      <p className="text-sm font-academic text-muted-foreground">
                        GPA: 5.68/6.00 - Top 10% · 120 ECTS
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 mb-3">
                    <p className="text-base font-academic text-foreground">
                      EPFL is one of the world's top technical universities, ranked #11 globally and #3 in Europe
                      for Data Science and Artificial Intelligence at the time of my studies (QS).                    </p>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm font-academic text-muted-foreground mb-2">Relevant coursework:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm">
                      {[
                        "Machine Learning",
                        "Modern Natural Language Processing",
                        "Applied Data Analysis",
                        "Deep Learning in Biomedicine",
                        "Data Visualization",
                        "Machine Learning for Predictive Maintenance",
                        "Systems for Data Management and Data Science",
                        "Distributed Information Systems"
                      ].map((course, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-muted-foreground rounded-full flex-shrink-0"></div>
                          <span className="font-academic text-foreground">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-muted-foreground pl-4" style={{ marginLeft: '-1px' }}>
                <div className="bg-card rounded-lg p-4 shadow-sm border border-border/40 hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1">
                    <h4 className="text-xl font-semibold font-academic text-foreground">
                      BSc Electrical & Computer Engineering
                    </h4>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-base text-muted-foreground mb-1 sm:justify-end">
                        <Calendar className="w-4 h-4" />
                        2019 - 2023
                      </div>
                      <p className="text-base text-muted-foreground font-academic m-0">
                        Skopje, North Macedonia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <a
                      href={urlMap["Ss. Cyril and Methodius University"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={tooltipMap["Ss. Cyril and Methodius University"]}
                    >
                      <LazyImage
                        src="/logos/universities/ukim.png"
                        alt="UKIM logo"
                        className="w-20 h-20 object-contain flex-shrink-0 cursor-pointer"
                      />
                    </a>
                    <div>
                      <a
                        href={urlMap["Ss. Cyril and Methodius University"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-academic text-foreground hover:text-primary transition-colors"
                      >
                        Ss. Cyril and Methodius University
                      </a>
                      <p className="text-sm font-academic text-muted-foreground">
                        GPA: 9.66/10.00 - with distinction (2nd in class) · 243 ECTS
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 mb-3">
                    <p className="text-base font-academic text-foreground">
                      Began studies in sustainable energy at the Faculty of Electrical Engineering and Information Technologies (FEEIT), then transitioned to the Computer Engineering track after discovering a strong interest in this domain.                    </p>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm font-academic text-muted-foreground mb-2">Relevant coursework:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 text-sm">
                      {[
                        "Mathematics I/II/III",
                        "Discrete Mathematics",
                        "Convex Optimization",
                        "Numerical Methods",
                        "Statistics",
                        "Physics I/II",
                        "Algorithms and Programming",
                        "Operating Systems",
                        "Distributed Systems",
                        "Computer Networks",
                        "Database Systems",
                        "High Performance Computing",
                        "Control Systems",
                        "Intelligent Agents",
                        "Information Systems and Big Data"
                      ].map((course, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-muted-foreground rounded-full flex-shrink-0"></div>
                          <span className="font-academic text-foreground">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        {/* Experience Section */}
        <Card id="experience" className="paper-section border-none px-6 py-8">
          <div>
            <div className="flex items-center gap-3 mb-6 -ml-1">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <h2 className="text-3xl font-bold font-academic text-foreground">
                Experience
              </h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary pl-4" style={{ marginLeft: '-1px' }}>
                  <div className="bg-card rounded-lg p-4 shadow-sm border border-border/40 hover:shadow-md transition-shadow duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:gap-4">
                      <div className="flex items-center gap-3 flex-1">
                        <h4 className="text-xl font-semibold font-academic text-foreground">
                          {exp.title}
                        </h4>
                        <span className="text-muted-foreground">@</span>
                        {index === 1 ? (
                          // Special handling for Nestlé + DLAB collaboration
                          <div className="flex items-center gap-2">
                            <a
                              href={urlMap["Nestlé Research"]}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={tooltipMap["Nestlé Research"]}
                            >
                              <LazyImage
                                src={logoMap["Nestlé Research"] || placeholderLogo}
                                alt="Nestlé Research logo"
                                className="w-10 h-10 object-contain flex-shrink-0 cursor-pointer"
                              />
                            </a>
                            <span className="text-muted-foreground text-sm">&</span>
                            <a
                              href={urlMap["DLAB"]}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={tooltipMap["DLAB"]}
                            >
                              <LazyImage
                                src={logoMap["DLAB"] || placeholderLogo}
                                alt="DLAB logo"
                                className="w-10 h-10 object-contain flex-shrink-0 cursor-pointer"
                              />
                            </a>
                            <div className="text-lg font-academic">
                              <a
                                href={urlMap["Nestlé Research"]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground hover:text-primary transition-colors"
                                title={tooltipMap["Nestlé Research"]}
                              >
                                Nestlé Research
                              </a>
                              <span className="text-foreground"> + </span>
                              <a
                                href={urlMap["dlab @ EPFL"]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground hover:text-primary transition-colors"
                                title={tooltipMap["dlab @ EPFL"]}
                              >
                                dlab @ EPFL
                              </a>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <a
                              href={urlMap[exp.organization]}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={tooltipMap[exp.organization] || exp.organization}
                            >
                              <LazyImage
                                src={logoMap[exp.organization] || placeholderLogo}
                                alt={`${exp.organization} logo`}
                                className="w-10 h-10 object-contain flex-shrink-0 cursor-pointer"
                              />
                            </a>
                            <a
                              href={urlMap[exp.organization]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-lg font-academic text-foreground hover:text-primary transition-colors"
                              title={tooltipMap[exp.organization] || exp.organization}
                            >
                              {exp.organization}
                            </a>
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-base text-muted-foreground mb-1 sm:justify-end">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <p className="text-base text-muted-foreground font-academic m-0">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="text-base font-academic whitespace-pre-line">
                        {exp.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Publications Section */}
        <Card id="publications" className="paper-section border-none px-6 py-8">
          <div>
            <div className="flex items-center gap-3 mb-6 -ml-1">
              <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
              <h2 className="text-3xl font-bold font-academic text-foreground">
                Publications
              </h2>
            </div>
            <div className="space-y-8">
              {(() => {
                // Group publications by year
                const publicationsByYear = publications.reduce((acc, pub) => {
                  if (!acc[pub.year]) {
                    acc[pub.year] = [];
                  }
                  acc[pub.year].push(pub);
                  return acc;
                }, {} as Record<string, typeof publications>);

                // Sort years in descending order
                const sortedYears = Object.keys(publicationsByYear).sort((a, b) => parseInt(b) - parseInt(a));

                return sortedYears.map((year, yearIndex) => (
                  <div key={year}>
                    {/* Year Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1 h-px bg-border"></div>
                      <div className="px-4">
                        <div className="flex items-center gap-2 text-lg font-semibold font-academic text-foreground">
                          <Calendar className="w-5 h-5" />
                          {year}
                        </div>
                      </div>
                      <div className="flex-1 h-px bg-border"></div>
                    </div>

                    {/* Publications for this year */}
                    <div className="space-y-6">
                      {publicationsByYear[year].map((pub, index) => (
                        <PublicationCard
                          key={`${year}-${index}`}
                          title={pub.title}
                          authors={pub.authors}
                          venue={pub.venue}
                          year={pub.year}
                          collaborations={pub.collaborations}
                          authorInstitutions={pub.authorInstitutions}
                          link={pub.link}
                          githubLink={pub.githubLink}
                          reportLink={pub.reportLink}
                          huggingfaceLink={pub.huggingfaceLink}
                          websiteLink={pub.websiteLink}
                          index={index}
                          isFirstAuthor={pub.isFirstAuthor}
                          isSharedFirst={pub.isSharedFirst}
                          isBestPaper={pub.isBestPaper}
                        />
                      ))}
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        </Card>

        {/* Projects Section */}
        <Card id="projects" className="paper-section border-none px-6 py-8">
          <div>
            <div className="flex items-center gap-3 mb-6 -ml-1">
              <div className="w-2 h-2 bg-accent-green rounded-full"></div>
              <h2 className="text-3xl font-bold font-academic text-foreground">
                Projects
              </h2>
            </div>

            <div className="mb-8">
              <p className="text-base font-academic text-muted-foreground leading-relaxed">
                Some of the selected projects that I think are pretty interesting but in any case I like experimenting a lot so more projects can be found on my{" "}
                <a
                  href="https://github.com/Stefanstud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors underline font-medium"
                >
                  GitHub
                </a>.
              </p>
            </div>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  period={project.period}
                  collaborations={project.collaborations}
                  keywords={project.keywords}
                  githubLink={project.githubLink}
                  reportLink={project.reportLink}
                  websiteLink={project.websiteLink}
                  huggingfaceLink={project.huggingfaceLink}
                  image={project.image}
                  index={index}
                />
              ))}
            </div>
          </div>
        </Card>

        {/* Awards Section */}
        <Card id="awards" className="paper-section border-none px-6 py-8">
          <div>
            <div className="flex items-center gap-3 mb-6 -ml-1">
              <div className="w-2 h-2 bg-accent-orange rounded-full"></div>
              <h2 className="text-3xl font-bold font-academic text-foreground">
                Awards and Competitions
              </h2>
            </div>
            <div className="space-y-8">
              {(() => {
                // Group awards by year
                const awardsByYear = awards.reduce((acc, award) => {
                  if (!acc[award.year]) {
                    acc[award.year] = [];
                  }
                  acc[award.year].push(award);
                  return acc;
                }, {} as Record<string, typeof awards>);

                // Sort years in descending order
                const sortedYears = Object.keys(awardsByYear).sort((a, b) => parseInt(b) - parseInt(a));

                return sortedYears.map((year, yearIndex) => (
                  <div key={year}>
                    {/* Year Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1 h-px bg-border"></div>
                      <div className="px-4">
                        <div className="flex items-center gap-2 text-lg font-semibold font-academic text-foreground">
                          <Calendar className="w-5 h-5" />
                          {year}
                        </div>
                      </div>
                      <div className="flex-1 h-px bg-border"></div>
                    </div>

                    {/* Awards for this year */}
                    <div className="space-y-6">
                      {awardsByYear[year].map((award, index) => (
                        <div key={`${year}-${index}`} className="border-l-2 border-accent-orange pl-4" style={{ marginLeft: '-1px' }}>
                          <div className="bg-card rounded-lg p-4 shadow-sm border border-border/40 hover:shadow-md transition-shadow duration-200">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:gap-4">
                              <div className="flex items-center gap-3 flex-1">
                                <h4 className="text-lg font-semibold font-academic text-foreground">
                                  {award.title}
                                </h4>
                                <span className="text-muted-foreground">@</span>
                                <a
                                  href={urlMap[award.organization]}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title={tooltipMap[award.organization] || award.organization}
                                >
                                  <LazyImage
                                    src={logoMap[award.organization] || placeholderLogo}
                                    alt={`${award.organization} logo`}
                                    className="w-10 h-10 object-contain cursor-pointer"
                                  />
                                </a>
                                <span className="text-lg font-academic text-foreground">
                                  {award.organization}
                                </span>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center gap-2 text-base text-muted-foreground mb-1 sm:justify-end">
                                  <Calendar className="w-4 h-4" />
                                  {award.period}
                                </div>
                              </div>
                            </div>

                            <p className="text-base font-academic text-muted-foreground leading-relaxed">
                              {award.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CVSection;