# Agentes IA - Landing Page

Landing page moderna y profesional para **Agentes IA**, una empresa especializada en desarrollo de software, aplicaciones móviles y sistemas de inteligencia artificial que automatizan procesos empresariales.

## 🚀 Características

- **Diseño Moderno**: Interfaz con efectos glassmorphism, gradientes animados y animaciones fluidas
- **Totalmente Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- **Alto Rendimiento**: Construido con Vite para tiempos de carga ultrarrápidos
- **Animaciones Suaves**: Implementadas con Framer Motion para una experiencia de usuario excepcional
- **Formulario de Contacto**: Integración directa con WhatsApp para comunicación inmediata
- **SEO Ready**: Estructura preparada para optimización de motores de búsqueda

## 🛠️ Stack Tecnológico

### Frontend Core
- **React 18.3.1** - Biblioteca de UI
- **TypeScript 5.8.3** - Tipado estático
- **Vite 5.4.19** - Build tool y dev server
- **React Router DOM 6.30.1** - Enrutamiento

### UI & Estilos
- **Tailwind CSS 3.4.17** - Framework de utilidades CSS
- **shadcn/ui** - Componentes UI basados en Radix UI
- **Framer Motion 12.24.12** - Animaciones
- **Lucide React** - Iconos

### Estado & Datos
- **TanStack Query 5.83.0** - Gestión de estado del servidor
- **React Hook Form 7.61.1** - Manejo de formularios
- **Zod 3.25.76** - Validación de esquemas

## 📦 Instalación

### Requisitos Previos

- Node.js 18+ (recomendado usar [nvm](https://github.com/nvm-sh/nvm))
- npm o yarn

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone <YOUR_GIT_URL>
cd agentes-ia-launchpad

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:8080`

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo en puerto 8080

# Build
npm run build        # Crea un build de producción optimizado
npm run build:dev    # Crea un build en modo desarrollo

# Calidad de Código
npm run lint         # Ejecuta ESLint para verificar el código

# Preview
npm run preview      # Previsualiza el build de producción
```

## 📁 Estructura del Proyecto

```
agentes-ia-launchpad/
├── public/                 # Archivos estáticos
│   ├── logo.png
│   └── favicon.ico
├── src/
│   ├── components/         # Componentes de la aplicación
│   │   ├── Header.tsx      # Navegación principal
│   │   ├── Hero.tsx        # Sección hero
│   │   ├── Services.tsx    # Servicios ofrecidos
│   │   ├── Approach.tsx    # Metodología de trabajo
│   │   ├── Contact.tsx     # Formulario de contacto
│   │   ├── Footer.tsx      # Pie de página
│   │   └── ui/             # Componentes shadcn/ui
│   ├── pages/              # Páginas de la aplicación
│   │   ├── Index.tsx       # Página principal
│   │   └── NotFound.tsx    # Página 404
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilidades y helpers
│   ├── assets/             # Recursos (imágenes, etc.)
│   ├── App.tsx             # Componente raíz
│   ├── main.tsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── vite.config.ts          # Configuración de Vite
├── tailwind.config.ts      # Configuración de Tailwind
├── tsconfig.json           # Configuración de TypeScript
└── package.json            # Dependencias y scripts
```

## 🎨 Secciones de la Landing Page

1. **Header** - Navegación fija con menú responsive
2. **Hero** - Sección principal con CTA y efectos visuales
3. **Services** - Grid de servicios ofrecidos:
   - Desarrollo de Apps (Android, iOS, Web)
   - Chatbots con IA (GPT-4, WhatsApp, Telegram)
   - Análisis de Datos (Dashboards, BI, Reportes)
   - Automatización de Procesos (Ventas, Marketing, Delivery)
4. **Approach** - Metodología de trabajo y caso de éxito
5. **Contact** - Formulario de contacto e información
6. **Footer** - Información adicional y enlaces

## 🎯 Características de Diseño

- **Tema Oscuro**: Paleta de colores con fondo oscuro (#0D0F14)
- **Gradientes**: Efectos de gradiente en botones y textos
- **Glassmorphism**: Efectos de vidrio esmerilado en tarjetas
- **Animaciones**: Transiciones suaves al hacer scroll
- **Efectos Glow**: Resplandor en botones y elementos interactivos

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: Adaptación para tablets y desktop
- **Menú Hamburguesa**: Navegación colapsable en móviles
- **Grid Adaptativo**: Layouts que se ajustan al tamaño de pantalla

## 🔧 Configuración

### Variables de Entorno

Actualmente no se requieren variables de entorno, pero puedes agregar un archivo `.env` si necesitas configurar:

```env
VITE_API_URL=your_api_url
VITE_WHATSAPP_NUMBER=5930983246317
```

### Personalización

- **Colores**: Edita las variables CSS en `src/index.css`
- **Contenido**: Modifica los componentes en `src/components/`
- **Estilos**: Ajusta `tailwind.config.ts` para personalizar el tema

## 📞 Información de Contacto

- **Email**: agentes.ia.agentes@gmail.com
- **Teléfono**: +593 0983246317 (Ecuador)
- **WhatsApp**: [Chatea con nosotros](https://wa.me/5930983246317)

## 🚀 Despliegue

### Build de Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Despliegue en GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

#### Configuración Inicial (Solo la primera vez)

1. Ve a la configuración de tu repositorio en GitHub
2. Navega a **Settings** → **Pages**
3. En **Source**, selecciona **GitHub Actions**
4. El workflow se ejecutará automáticamente en cada push a la rama `main`

#### URL del Sitio

Una vez desplegado, tu sitio estará disponible en:
```
https://jopcast-hue.github.io/agentes-ia/
```

#### Despliegue Manual

Si necesitas desplegar manualmente:

```bash
# 1. Build del proyecto
npm run build

# 2. El workflow de GitHub Actions se ejecutará automáticamente
# o puedes ejecutarlo manualmente desde la pestaña "Actions" en GitHub
```

#### Workflow Automático

El proyecto incluye un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que:
- Se ejecuta automáticamente en cada push a `main`
- Construye el proyecto
- Despliega automáticamente a GitHub Pages

### Otras Opciones de Despliegue

- **Vercel**: Conecta tu repositorio y despliega automáticamente
- **Netlify**: Arrastra la carpeta `dist/` o conecta el repo
- **Lovable**: Si usas Lovable, puedes publicar desde la plataforma

## 🛡️ Seguridad

- Validación de formularios con React Hook Form y Zod
- Sanitización de inputs en el formulario de contacto
- Uso de HTTPS en producción (recomendado)

## 📝 Licencia

Todos los derechos reservados © 2025 Agentes IA

## 🤝 Contribuciones

Este es un proyecto privado. Para sugerencias o mejoras, contacta al equipo de desarrollo.

## 📚 Recursos Adicionales

- [Documentación de React](https://react.dev/)
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

**Desarrollado con ❤️ por Agentes IA**
