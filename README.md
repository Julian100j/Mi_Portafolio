# Portafolio profesional de Julian Andres Ceballos Eraso

Portafolio web para presentar mi perfil como estudiante de Ingeniería de Sistemas, mis proyectos académicos y personales, habilidades técnicas, actividad pública de GitHub, formación y certificados.

## Tecnologías

- React 19 y Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React
- API pública de GitHub sin token

## Contenido

- Perfil profesional y áreas de interés
- Habilidades organizadas por categorías
- Cinco proyectos de desarrollo web, backend e inteligencia artificial
- Actividad y repositorios públicos de GitHub
- Formación académica y participación en investigación
- Certificados en PDF
- Formulario de contacto mediante el cliente de correo del visitante
- CV descargable en PDF

## Instalación

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

También puede utilizarse pnpm:

```bash
pnpm install
pnpm dev
```

## Verificación

```bash
npm run lint
npm run build
npm run preview
```

## Estructura

```text
src/
├── components/   # Componentes reutilizables
├── data/         # Perfil, proyectos, habilidades y trayectoria
├── hooks/        # Tema e integración con GitHub
├── sections/     # Secciones principales del portafolio
├── styles/       # Sistema visual y diseño responsive
├── App.jsx
└── main.jsx
```

Los certificados y el CV se encuentran dentro de `public/`. La información principal se administra desde los archivos de `src/data/`.

## Despliegue

El proyecto está preparado para desplegarse en Vercel. El framework es Vite y la carpeta de salida de producción es `dist`.

## Seguridad

- No se incluyen tokens ni credenciales privadas.
- Los archivos de entorno están ignorados por Git.
- La integración utiliza únicamente la API pública de GitHub.
- El formulario de contacto abre el cliente de correo del visitante y no almacena información.

## Autor

Julian Andres Ceballos Eraso

- GitHub: [Julian100j](https://github.com/Julian100j)
- LinkedIn: [julian-andres-ceballos-eraso](https://www.linkedin.com/in/julian-andres-ceballos-eraso/)
