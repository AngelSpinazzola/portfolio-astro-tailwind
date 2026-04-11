// src/data/technologies.ts
import csharpIcon from "../assets/tech-icons/csharp-original.svg";
import dotnetIcon from "../assets/tech-icons/dotnet-logo.svg";
import reactIcon from "../assets/tech-icons/react-original.svg";
import typescriptIcon from "../assets/tech-icons/typescript-original.svg";
import tailwindIcon from "../assets/tech-icons/tailwindcss-original.svg";
import bootstrapIcon from "../assets/tech-icons/bootstrap-original.svg";
import javascriptIcon from "../assets/tech-icons/javascript-original.svg";
import css3Icon from "../assets/tech-icons/css3-original.svg";
import astroIcon from "../assets/tech-icons/astro-original.svg";
import mysqlIcon from "../assets/tech-icons/mysql-original.svg";
import postgresqlIcon from "../assets/tech-icons/postgresql-original.svg";
import sqlserverIcon from "../assets/tech-icons/microsoftsqlserver-plain.svg";
import dockerIcon from "../assets/tech-icons/docker-original.svg";
import gitIcon from "../assets/tech-icons/github.svg";

export type TechCategory = "Backend" | "Frontend" | "DevOps & Tools";

export interface Technology {
  name: string;
  icon: any;
  category: TechCategory;
}

export const technologies: Technology[] = [
  { name: "C#",         icon: csharpIcon,     category: "Backend" },
  { name: ".NET",       icon: dotnetIcon,      category: "Backend" },
  { name: "MySQL",      icon: mysqlIcon,       category: "Backend" },
  { name: "PostgreSQL", icon: postgresqlIcon,  category: "Backend" },
  { name: "SQL Server", icon: sqlserverIcon,   category: "Backend" },

  { name: "React",       icon: reactIcon,      category: "Frontend" },
  { name: "TypeScript",  icon: typescriptIcon, category: "Frontend" },
  { name: "JavaScript",  icon: javascriptIcon, category: "Frontend" },
  { name: "Tailwind CSS",icon: tailwindIcon,   category: "Frontend" },
  { name: "Bootstrap",   icon: bootstrapIcon,  category: "Frontend" },
  { name: "CSS",         icon: css3Icon,       category: "Frontend" },
  { name: "Astro",       icon: astroIcon,      category: "Frontend" },

  { name: "Docker", icon: dockerIcon, category: "DevOps & Tools" },
  { name: "GitHub", icon: gitIcon,    category: "DevOps & Tools" },
];

export const techCategories: TechCategory[] = ["Backend", "Frontend", "DevOps & Tools"];
