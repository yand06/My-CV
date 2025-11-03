import MyPhoto from "../assets/MyPhoto.jpg";

export interface WorkExperience {
  title: string;
  company?: string;
  date: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  date: string;
  school: string;
  details: string[];
}

export interface CVData {
  name: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    github: string;
  };
  photo: string;
  summary: string;
  workExperience: WorkExperience[];
  education: Education[];
  additionalInfo: {
    skills: string;
    languages: string;
    tools: string;
  };
}

// Gunakan 'photo: MyPhoto,' langsung (tanpa kurung kurawal atau variabel tambahan)
export const cvData: CVData = {
  name: "Supriyandi La Awe",
  contact: {
    phone: "+62 821 9806 9466",
    email: "supriyandilaawe@gmail.com",
    location: "Depok, Indonesia",
    github: "github.com/yand06",
  },
  photo: MyPhoto,
  summary:
    "Motivated and detail-oriented Informatics Engineering student with strong experience in Java programming, MySQL, PostgreSQL database management, and desktop application development. Skilled in Object-Oriented Programming (OOP), Java Swing, and currently expanding expertise in Spring Boot and Full-Stack Development. Demonstrates adaptability and quick learning in new technologies, supported by hands-on experience from academic projects and organizational activities. Fluent in English for daily communication, with a passion for building efficient, user-friendly software solutions.",
  workExperience: [
    {
      title: "Java Desktop Application Developer (Freelance/Project-Based)",
      date: "Jan 2023 - Present",
      achievements: [
        "Student Report Management System with Decision Tree & SAW method.",
        "Inventory Management Application using SAW method for PT Garasi Creasindo Indonesia.",
        "Coffee Shop Ordering & Transaction System for Kedai Kopi ABC.",
        "Mini Clinic Management Application.",
      ],
    },
    {
      title: "IT Developer Intern (KKP)",
      company: "PT Garasi Creasindo Indonesia",
      date: "Juni 2024 - Dec 2024",
      achievements: [
        "Designed and developed an Inventory Management Application using Java Desktop and MySQL.",
        "Implemented Simple Additive Weighting (SAW) method.",
        "Applied Object-Oriented Programming (OOP) principles.",
        "Collaborated with the company team to gather requirements.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Informatics Engineering",
      date: "Sep 2021 - August 2025",
      school: "Universitas Indraprasta PGRI – Jakarta, Indonesia",
      details: [
        "Relevant Coursework: Object-Oriented Programming (Java), Database Systems (MySQL), Software Engineering, Data Mining, Computer Graphics.",
        "Key Projects: Developed multiple Java Desktop applications, including a Student Report Management System and an Inventory Management Application using Decision Tree and SAW methods.",
      ],
    },
  ],
  additionalInfo: {
    skills:
      "Java Programming, Object-Oriented Programming (OOP), Java Swing, MySQL, PostgreSQL, Spring Boot, Full-Stack Development, Decision Tree Algorithm, Simple Additive Weighting (SAW) Method, Software Engineering, Data Mining.",
    languages: "Indonesian (Native), English (Fluent for daily communication).",
    tools:
      "NetBeans IDE, IntelliJ IDEA, Git, GitHub, MySQL Workbench, PostgreSQL, Java Desktop Development.",
  },
};
