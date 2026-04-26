// src/data/techIcons.ts
import reactIcon from "../assets/tech-icons/react-original.svg";
import typescriptIcon from "../assets/tech-icons/typescript-original.svg";
import javascriptIcon from "../assets/tech-icons/javascript-original.svg";
import css3Icon from "../assets/tech-icons/css3-original.svg";
import tailwindIcon from "../assets/tech-icons/tailwindcss-original.svg";
import dotnetIcon from "../assets/tech-icons/dotnet-logo.svg";
import sqlserverIcon from "../assets/tech-icons/microsoftsqlserver-plain.svg";
import postgresqlIcon from "../assets/tech-icons/postgresql-original.svg";
import jwtIcon from "../assets/icons/jsonwebtokens.svg";
import astroIcon from "../assets/tech-icons/astro-original.svg";

export const techIcons: Record<string, any> = {
  React: reactIcon,
  TypeScript: typescriptIcon,
  JavaScript: javascriptIcon,
  CSS: css3Icon,
  Tailwind: tailwindIcon,
  "Tailwind CSS": tailwindIcon,
  Astro: astroIcon,
  ".NET 8 Web API REST": dotnetIcon,
  ".NET 9 Web API REST": dotnetIcon,
  "ASP.NET Web Forms": dotnetIcon,
  "Entity Framework": sqlserverIcon,
  "SQL Server": sqlserverIcon,
  PostgreSQL: postgresqlIcon,
  JWT: jwtIcon,
};