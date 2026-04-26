import novaTech from "../assets/images/novatech-mockup.png";
import panaderia from "../assets/images/panaderia-mockup.png";
import apinetjwt from "../assets/images/endpoinds-api-jwt.png";
import sanguis from "../assets/images/sanguis.png";
import camano from "../assets/images/camano-constructora.png";
import zeroweb from "../assets/images/zeroweb-mockup.png";

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
  mobileImage?: ImageMetadata;
  featured?: boolean;
  year?: number;
  icon?: string;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "NovaTech",
    description:
      'E-commerce full-stack de hardware para PC, con catálogo de filtros avanzados, carrito persistente, checkout <span class="text-zinc-900 dark:text-white font-medium">(MercadoPago y Transferencias)</span>, seguimiento de órdenes y autenticación con <span class="text-zinc-900 dark:text-white font-medium">JWT + Google OAuth.</span> Incluye panel admin con dashboard analítico, gestión de productos y ordenes. Desarrollado con <span class="text-zinc-900 dark:text-white font-medium">React + TypeScript</span> y <span class="text-zinc-900 dark:text-white font-medium">ASP.NET Core + PostgreSQL</span>, aplicando <span class="text-zinc-900 dark:text-white font-medium">Clean Architecture</span>, validaciones y despliegue en <span class="text-zinc-900 dark:text-white font-medium">Docker (Railway + Vercel).</span>',
    tags: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: ".NET 9 Web API REST" },
      { name: "Entity Framework" },
      { name: "PostgreSQL" },
    ],
    gradient: "from-blue-500 to-indigo-600",
    label: "E-commerce",
    demoUrl: "https://novatech-store.vercel.app/",
    githubUrl: "https://github.com/AngelSpinazzola/hardware-store-backend-api",
    image: novaTech,
    featured: true,
    year: 2024,
  },
  {
    id: 1,
    title: "Camaño Hidrogas",
    description:
      'Landing page para una empresa de plomería e hidrogas, orientada al <span class="text-zinc-900 dark:text-white font-medium">SEO local</span> con schema.org, sitemap y Open Graph. Diseño <span class="text-zinc-900 dark:text-white font-medium">mobile-first</span> con carrusel de reseñas, desarrollada con <span class="text-zinc-900 dark:text-white font-medium">Astro + Tailwind CSS</span>.',
    tags: [{ name: "Astro" }, { name: "Tailwind CSS" }],
    gradient: "from-cyan-500 to-teal-700",
    label: "Landing Page",
    demoUrl: "https://camano-hidrogas-landing.vercel.app/", 
    githubUrl: "https://github.com/AngelSpinazzola/camano-hidrogas-landing",
    image: camano, 
    featured: false,
    year: 2025,
  },
  {
    id: 2,
    title: "Zeroweb",
    description:
      'Agencia web para pymes y emprendedores. Diseño, desarrollo y estrategia digital en un solo lugar. Desde landings, sitios institucionales y e-commerce, cada proyecto esta pensado para <span class="text-zinc-900 dark:text-white font-medium">convertir visitas en clientes.</span> Desarrollada con <span class="text-zinc-900 dark:text-white font-medium">Astro + Tailwind CSS',
    tags: [
      { name: "Astro" },
      { name: "Tailwind CSS" },
      { name: "CSS" }
    ],
    gradient: "from-lime-400 to-green-600",
    label: "Emprendimiento",
    demoUrl: "https://zeroweb-chi.vercel.app/",
    image: zeroweb,
    featured: true,
    year: 2025,
  },
  {
    id: 3,
    title: "La Porteña",
    description:
      'E-commerce de panadería con catálogo de productos, carrito y checkout. Desarrollado con <span class="text-zinc-900 dark:text-white font-medium">React.js</span>, aplicando hooks, <span class="text-zinc-900 dark:text-white font-medium">Context API</span> y gestión de estado global.',
    tags: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "CSS" }, 
    ],
    gradient: "from-green-400 to-blue-500",
    label: "E-commerce",
    demoUrl: "https://panaderia-ecommerce.vercel.app/",
    githubUrl: "https://github.com/AngelSpinazzola/panaderia-ecommerce",
    image: panaderia,
    featured: false,
    year: 2023,
  },
  {
    id: 4,
    title: "API Auth + JWT",
    description:
      "API RESTful para autenticación de usuarios con JWT, contraseñas hasheadas mediante ASP.NET Identity, gestión de roles y documentación interactiva con Swagger.",
    tags: [{ name: ".NET 8 Web API REST" }, { name: "SQL Server" }],
    gradient: "from-blue-600 via-purple-600 to-indigo-800",
    label: "Backend API REST",
    githubUrl: "https://github.com/AngelSpinazzola/JwtAuthApi",
    image: apinetjwt,
    featured: false,
    year: 2025,
  },
  {
    id: 5,
    title: "Sanguis",
    description:
      "App web con sistema de donación de sangre desarrollada con ASP.NET Web Forms (.NET Framework 4.8) y SQL Server como proyecto universitario. Incluye administración de datos, autenticación de usuarios y funcionalidades CRUD completas con arquitectura en capas.",
    tags: [{ name: "ASP.NET Web Forms" }, { name: "SQL Server" }, { name: "JavaScript" }, { name: "CSS" }],
    gradient: "from-red-500 via-red-600 to-red-800", 
    label: "Web Application",
    githubUrl: "https://github.com/AngelSpinazzola/TPC-Equipo-8",
    image: sanguis, 
    featured: false, 
    year: 2023,
  },
];
