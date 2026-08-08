export type ProjectScreenshot = {
  src: string;
  label: string;
};

export type Project = {
  name: string;
  status?: "Beta / Client Review" | "Currently Developing";
  description: string;
  detail: string;
  technologies: string[];
  features: string[];
  futureAssets: ("Screenshots" | "Architecture" | "GitHub" | "Live demo")[];
  screenshots?: ProjectScreenshot[];
};

export const skills = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    label: "Frameworks & UI",
    items: ["Django", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Data & Tools",
    items: ["MySQL", "PostgreSQL", "Prisma", "Git", "GitHub", "Excel"],
  },
];

export const projects: Project[] = [
  {
    name: "Lobal Chess Academy Management System",
    status: "Beta / Client Review",
    description:
      "A full-stack academy management system currently in beta/client review, covering student management, attendance, payments, receipts, reports, dashboard and settings.",
    detail:
      "Built around the day-to-day operational needs of an academy, with database-driven business logic and a focused administrative experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    features: [
      "Student management",
      "Attendance tracking",
      "Payments and receipt generation",
      "Reports and dashboard",
      "Fee-reminder workflow",
      "Authentication and settings",
    ],
    futureAssets: ["Screenshots", "Architecture", "GitHub", "Live demo"],
    screenshots: [
      { src: "/projects/lobal-chess-academy/login.png", label: "Login" },
      { src: "/projects/lobal-chess-academy/dashboard.png", label: "Dashboard" },
      { src: "/projects/lobal-chess-academy/students.png", label: "Students" },
      { src: "/projects/lobal-chess-academy/batches.png", label: "Batches" },
      { src: "/projects/lobal-chess-academy/attendance.png", label: "Attendance" },
      { src: "/projects/lobal-chess-academy/payments.png", label: "Payments" },
      { src: "/projects/lobal-chess-academy/reports.png", label: "Reports" },
      { src: "/projects/lobal-chess-academy/settings.png", label: "Settings" },
    ],
  },
  {
    name: "BrewFlow POS / Business Management System",
    status: "Currently Developing",
    description:
      "A production-oriented POS and business management application designed around shop-based operations.",
    detail:
      "The shop is the root entity, with billing, inventory, expenses, customers, suppliers, analytics, and reports organized around each shop's business data.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    features: [
      "Billing",
      "Inventory",
      "Expenses",
      "Customers and suppliers",
      "Dashboard analytics",
      "Reports",
    ],
    futureAssets: ["Screenshots", "Architecture", "GitHub", "Live demo"],
  },
  {
    name: "Movie Management Web Application",
    description:
      "A web-based Movie Management System built with Python and Django for managing movie records.",
    detail:
      "A Django and MySQL application centered on authenticated CRUD workflows, using the Django ORM for data access.",
    technologies: ["Python", "Django", "MySQL", "HTML", "CSS"],
    features: [
      "User authentication",
      "Add and view movies",
      "Edit and delete movies",
      "Django ORM",
      "MySQL integration",
      "CRUD operations",
    ],
    futureAssets: ["Screenshots", "Architecture", "GitHub", "Live demo"],
  },
];

export const education = [
  {
    qualification: "M.Sc. Computer Science",
    institution: "Muthayammal Memorial College of Arts & Science",
    score: "70%",
  },
  {
    qualification: "B.Sc. Computer Science",
    institution: "Muthayammal Memorial College of Arts & Science",
    score: "71%",
  },
  {
    qualification: "12th",
    institution: "Govt Hr Sec School, R. Pudupalayam",
    score: "62%",
  },
  {
    qualification: "10th",
    institution: "Govt Hr Sec School, R. Pudupalayam",
    score: "59%",
  },
];
