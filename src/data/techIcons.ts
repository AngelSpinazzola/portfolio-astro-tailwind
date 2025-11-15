// src/data/techIcons.ts
import reactIcon from "../assets/icons/react.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import css3Icon from "../assets/icons/css3.svg";
import tailwindIcon from "../assets/icons/tailwindcss.svg";
import dotnetIcon from "../assets/icons/dotnet.svg";
import sqlserverIcon from "../assets/icons/microsoftsqlserver.svg";
import postgresqlIcon from "../assets/icons/postgresql.svg";
import jwtIcon from "../assets/icons/jsonwebtokens.svg";

export const techIcons: Record<string, any> = {
  React: reactIcon,
  TypeScript: typescriptIcon,
  JavaScript: javascriptIcon,
  CSS: css3Icon,
  Tailwind: tailwindIcon,
  ".NET 8 Web API REST": dotnetIcon,
  ".NET 9 Web API REST": dotnetIcon,
  "ASP.NET Web Forms": dotnetIcon,
  "Entity Framework": sqlserverIcon,
  "SQL Server": sqlserverIcon,
  PostgreSQL: postgresqlIcon,
  JWT: jwtIcon,
};