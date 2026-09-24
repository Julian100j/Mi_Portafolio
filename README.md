# Portafolio profesional — Ingeniería de Sistemas

Portafolio web responsive para presentar perfil, habilidades, proyectos, actividad pública de GitHub, trayectoria, certificados y medios de contacto. El contenido personal está centralizado como placeholders para evitar publicar información inventada o sensible.

## Tecnologías

- React 19 y Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React
- API pública de GitHub (sin token)

## Instalación y ejecución

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

Para verificar la versión de producción:

```bash
npm run build
npm run preview
```

## Personalización

1. Reemplaza los datos principales en `src/data/profile.js`.
2. Agrega URLs reales en `src/data/projects.js`.
3. Actualiza formación, experiencia y certificados en sus respectivos archivos dentro de `src/data/`.
4. Para mostrar un certificado, copia su PDF dentro de `public/certificados/` y escribe su ruta pública en `pdfUrl`. Ejemplo: `pdfUrl: '/certificados/excel-2016.pdf'`.
5. Copia el CV como `public/TU_CV.pdf` o cambia `cvPath`.
6. Integra el formulario con Formspree, EmailJS o un backend propio en `src/sections/Contact.jsx`.
7. Actualiza los metadatos de `index.html` antes del despliegue.

Los valores que empiezan por `TU_` son placeholders intencionales.

## Estructura

```text
src/
├── components/   # Componentes reutilizables
├── data/         # Contenido editable
├── hooks/        # Tema e integración con GitHub
├── sections/     # Secciones principales del portafolio
├── styles/       # Sistema visual y responsive
├── App.jsx
└── main.jsx
```

## Capturas

La vista puede revisarse localmente con `npm run dev`. Agrega aquí capturas finales después de sustituir los placeholders por información real para que el README no muestre datos ficticios.

## Despliegue en Vercel

Importa el repositorio en Vercel. El framework se detecta como Vite y la salida de producción es `dist`. No se requieren variables de entorno para la integración pública de GitHub.

## Seguridad

- No se incluyen tokens ni credenciales.
- `.env` está ignorado por Git.
- Los parámetros usados en la consulta pública de GitHub se codifican antes de construir la URL.
- El formulario valida los datos en el navegador y no realiza envíos hasta configurar un proveedor.

## Autor

`TU_NOMBRE` — reemplaza este valor y los enlaces sociales antes de publicar.

## Licencia

Este proyecto puede distribuirse bajo la licencia MIT. Añade un archivo `LICENSE` si decides publicarlo con esa licencia.
