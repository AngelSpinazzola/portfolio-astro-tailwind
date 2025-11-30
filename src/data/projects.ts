import novaTech from "../assets/images/novatech.png";
import panaderia from "../assets/images/panaderia.jpg";
import apinetjwt from "../assets/images/endpoinds-api-jwt.png";
import sanguis from "../assets/images/sanguis.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: Array<{
    name: string;
  }>;
  gradient: string;
  label: string;
  demoUrl?: string;
  githubUrl?: string;
  image?: ImageMetadata;
  featured?: boolean;
  year?: number;
  icon?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NOVATECH Hardware Store",
    description:
      "E-commerce full-stack para venta de hardware, con catálogo avanzado, carrito, gestión de órdenes, administración completa, autenticación con Google y JWT+Bcrypt.",
    tags: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "JWT" },
      { name: ".NET 9 Web API REST" },
      { name: "Entity Framework" },
      { name: "PostgreSQL" },
    ],
    gradient: "from-blue-500 to-indigo-600",
    label: "E-commerce App",
    demoUrl: "https://novatech-store.vercel.app/",
    githubUrl: "https://github.com/AngelSpinazzola/hardware-store-backend-api",
    image: novaTech,
    featured: true,
    year: 2024,
  },
  {
    id: 2,
    title: "La Porteña",
    description:
      "E-commerce de panadería desarrollado con React.js como proyecto del curso de Talento Tech. Implementa conceptos como hooks, context API, providers y gestión de estado global.",
    tags: [
      { name: "React" },
      { name: "JavaScript" }, // o TypeScript si lo usaste
      { name: "CSS" }, // o el framework que hayas usado
    ],
    gradient: "from-green-400 to-blue-500",
    label: "E-commerce", // Cambié de "Task Manager" a algo más apropiado
    demoUrl: "https://panaderia-ecommerce.vercel.app/",
    githubUrl: "https://github.com/AngelSpinazzola/panaderia-ecommerce",
    image: panaderia,
    featured: false,
    year: 2023,
  },
  {
    id: 3,
    title: "API Auth + JWT",
    description:
      "API RESTful para autenticación de usuarios con JWT, contraseñas hasheadas mediante ASP.NET Identity, gestión de roles y documentación interactiva con Swagger.",
    tags: [
      { name: ".NET 8 Web API REST" },
      { name: "SQL Server" },
      { name: "JWT" },
      { name: "Entity Framework" },
    ],
    gradient: "from-blue-600 via-purple-600 to-indigo-800",
    label: "Backend API",
    githubUrl: "https://github.com/AngelSpinazzola/JwtAuthApi",
    image: apinetjwt,
    featured: false,
    year: 2025,
  },
  {
    id: 4,
    title: "Sanguis",
    description:
      "App web con sistema de donación de sangre desarrollada con ASP.NET Web Forms (.NET Framework 4.8) y SQL Server como proyecto universitario. Incluye administración de datos, autenticación de usuarios y funcionalidades CRUD completas con arquitectura en capas.",
    tags: [
      { name: "ASP.NET Web Forms" },
      { name: "SQL Server" },
      { name: "JavaScript" },
      { name: "CSS" },
    ],
    gradient: "from-red-500 via-red-600 to-red-800", // Colores que van con "Sanguis"
    label: "Web Application",
    githubUrl: "https://github.com/AngelSpinazzola/TPC-Equipo-8",
    image: sanguis, // Tu variable de imagen
    featured: false, // o true si quieres destacarlo
    year: 2023, // Ajusta según corresponda
  },
];