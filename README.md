# Proyecto – Creación de Página Web para Empresa

---

## Propósito del Sitio
- Dar a conocer los servicios de la empresa.
- Crear un canal de comunicación directa con el dueño mediante botón de WhatsApp.
- Tener presencia en la web.
- Facilitar el registro de ventas a través de un panel de administración.

---

## Requerimientos Funcionales

### Front-end
- Mostrar secciones principales: Inicio, Nosotros, Servicios, Contacto y Ubicación.
- Incluir botón de WhatsApp funcional.
- Mostrar información de los servicios ofrecidos.
- Adaptación de estilos según festividades (Navidad, Halloween, Black Friday, etc.).

### Panel de Administración (CMS)
- Autenticación de usuario administrador (login).
- Seccion Registro de ventas: crear, editar, eliminar y listar ventas (con sus estados pagados en totalidad o parcialmente).
- Exportar ventas en formato **.xml** o **Excel**.
- Solo un rol de usuario: **Administrador**.
- Seccion de gestion de servicios visibles en la pagina web
- Seccion de gestion de contenido visible en la pagina web (Principal y rutas)
- Seccion de gestion de clientes y deudas.

---

## Contenido y Estructura del Sitio
- Inicio
- Nosotros
- Servicios
- Contacto
- Ubicación (con mapa integrado)

---

## Requerimientos No Funcionales

### Diseño y Estilo Visual
- Colores corporativos: **Azul y Negro**.
- Diseño moderno con enfoque fotográfico. Características:
  - Navegación simple e intuitiva.
  - Imagen profesional.
  - Permite mostrar fotos de trabajos reales para generar confianza.

### Seguridad
- Autenticación únicamente para el administrador.
- No habrá registro público de usuarios.
- Inclusión futura de políticas de privacidad y tratamiento de datos (para Google Analytics u otras métricas).

---

## Requerimientos Técnicos

### Arquitectura General
- La aplicación será una **SPA (Single Page Application)** desarrollada con **React**.
- El backend será desarrollado en **ExpressJS**, proporcionando una **API REST**.
- El panel de administración será parte del mismo dominio, ubicado en:  
  **`/admin`**.
- Comunicación Front–Back mediante peticiones **HTTP/HTTPS** con datos en formato JSON.

---

### Front-end
- **Framework:** React Puro (sin Next.js).
- **Enrutamiento:** React Router para manejo de rutas internas.
- **Estilos:** TailwindCSS.
- **Integraciones:**
  - Botón funcional de WhatsApp.
  - Mapa de ubicación mediante **Google Maps Iframe**.
- **Build:** Vite.
- **Diseño responsivo**, orientado a dispositivos móviles.
- **Consumo de API REST** mediante Axios.

---

### Back-end
- **Entorno:** Node.js con ExpressJS.
- **Estilo de API:** REST, consumida por el front-end.
- **ORM:** Prisma
- **Operaciones principales:**
  - Autenticación del administrador.
  - CRUD de ventas (crear, editar, eliminar y listar).
  - Exportación de datos en formato **XML** y **Excel** (XLSX o CSV, esta por evaluarse).
  - Sistema de gestion de servicios visibles en la pagina web
  - Sistema de gestion de contenido visible en la pagina web
  - Sistema de gestion de clientes y deudas.
- **Middleware de seguridad:**
  - Sanitización de inputs.
  - CORS restringido al dominio oficial.
  - Posibilidad de implementar rate limiting.
- **Autenticación:**
  - **JWT** para manejo de sesiones desde el front.
  - **Cookies + sesiones** para la sección administrativa.

---

### Base de Datos
- **Motor:** MySQL.
- **Conexión:** mediante ORM (Prisma, Sequelize, Drizzle) o librería MySQL2 (Esta por evaluarse la tecnologia).
- **Tablas iniciales:**
  - Usuario administrador.
  - Ventas (incluyendo estado pagado parcial / total).
  - Estan por evaluarse tablas futuras.

---

### Infraestructura y Hosting
- El hosting está pendiente de evaluación.
- El servidor debe permitir ejecutar:
  - Aplicación Node.js (ExpressJS)
  - Base de datos MySQL
  - Build estático de React (Como SPA el bundle resultante del build sera servido al cliente en produccion)

---

### Seguridad
- **HTTPS obligatorio** en producción.
- Firmado seguro de tokens JWT.
- Garantizar nula exposición de llaves o secretos en el front-end.
- Protección contra:
  - XSS (sanitización).
  - CSRF (especialmente en vistas con sesiones).
  - Accesos no autorizados a rutas protegidas del backend.
  - Investigar mas posibles exploits.
- Solo un rol disponible: **Administrador**.

---

### Compatibilidad y Performance
- Optimización del bundle del front (tree-shaking, lazy-loading).
- Minificación y compresión en producción.
- Tiempos de carga rápidos en páginas públicas.
- Compatibilidad con navegadores modernos (Chrome, Edge, Firefox, Safari).
- Posibilidad de implementar Pre-Rendering para mejorar el posicionamiento SEO.


--