// src/data/technologies.ts
import csharpIcon from "../assets/tech-icons/csharp-original.svg";
import dotnetIcon from "../assets/tech-icons/dotnet-logo.svg";
import reactIcon from "../assets/tech-icons/react-original.svg";
import typescriptIcon from "../assets/tech-icons/typescript-original.svg";
import tailwindIcon from "../assets/tech-icons/tailwindcss-original.svg";
import bootstrapIcon from "../assets/tech-icons/bootstrap-original.svg";
import javascriptIcon from "../assets/tech-icons/javascript-original.svg";
import css3Icon from "../assets/tech-icons/css3-original.svg";
import html5Icon from "../assets/tech-icons/html5-original.svg";
import mysqlIcon from "../assets/tech-icons/mysql-original.svg";
import postgresqlIcon from "../assets/tech-icons/postgresql-original.svg";
import sqlserverIcon from "../assets/tech-icons/microsoftsqlserver-plain.svg";
import dockerIcon from "../assets/tech-icons/docker-original.svg";
import gitIcon from "../assets/tech-icons/git-original.svg";

export interface Technology {
  name: string;
  icon: any;
}

export const technologies: Technology[] = [
  { name: "C#", icon: csharpIcon },
  { name: ".NET", icon: dotnetIcon },
  { name: "React", icon: reactIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Bootstrap", icon: bootstrapIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "CSS", icon: css3Icon },
  { name: "HTML", icon: html5Icon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "SQL Server", icon: sqlserverIcon },
  { name: "Docker", icon: dockerIcon },
  { name: "Git", icon: gitIcon },
];