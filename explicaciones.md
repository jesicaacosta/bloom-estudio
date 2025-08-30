## 📂 Carpeta raíz (`bloom-estudio/`)

* **`package.json`**
  * Guarda las dependencias (`react`, `vite`, `tailwindcss`, etc.).
  * Define scripts como `npm run dev`.
    👉 Cada vez que instalás algo con `npm install`, se registra acá.

* **`package-lock.json`**
  🔒 Similar a `package.json` pero más técnico.
  * Guarda versiones exactas de todas las dependencias para que tu proyecto funcione igual en cualquier máquina.

* **`vite.config.js`**
  ⚙️ Configuración de Vite (el bundler).
  * Casi no lo tocamos al inicio.
  * Sirve para agregar plugins o cambiar cómo compila tu proyecto.

* **`index.html`**
  📄 El archivo **HTML base** de tu app.
  * Es el único HTML que existe (en React no hacemos mil HTML, sino componentes JSX).
  * Tiene un `<div id="root"></div>` → ahí React “inyecta” tu aplicación.

---

## 📂 `src/` (tu código principal)

* **`main.jsx`**
  🚀 Es el “punto de entrada” de tu app.
  * React arranca acá.
  * Renderiza `<App />` dentro del `<div id="root">` de `index.html`.
  * Importa los estilos globales (`index.css`) y puede importar más (ej: `App.css`).

* **`App.jsx`**
  🎬 Es tu **componente raíz**.
  * Desde acá “cuelgan” todos los demás componentes.
  * Normalmente contiene la estructura principal de tu web (Header, Hero, Footer, etc.).
  * Podés importar `App.css` acá si necesitás estilos específicos.

* **`App.css`**
  🎨 Archivo de **estilos específicos para App.jsx**.
  * En React, no se aplica solo: hay que importarlo en `App.jsx`.
  * Se suele usar menos cuando tenés Tailwind (porque Tailwind ya trae utilidades).

* **`index.css`**
  🎨 Archivo de **estilos globales**.

  * En tu caso sirve para importar **Tailwind** (`@import "tailwindcss";`).
  * Afecta a toda la app porque se importa en `main.jsx`.
  * Se recomienda dejar aquí solo Tailwind + resets generales.

---

## 📂 `src/components/` (tus bloques reutilizables)

* **`Header.jsx`**
  Encabezado con logo + menú de navegación.
* **`Hero.jsx`**
  Sección principal con mensaje fuerte (“En Bloom hacemos que tu marca florezca 🌸”).
* **`Servicios.jsx`**
  Muestra los servicios o paquetes que ofrecés.
* **`Portafolio.jsx`**
  Galería de trabajos o mockups.
* **`Sobre.jsx`**
  Info sobre vos o tu estudio.
* **`Contacto.jsx`**
  Formulario de contacto o links a WhatsApp/Instagram.
* **`Footer.jsx`**
  Pie de página con info legal o redes sociales.

👉 Cada uno de estos `.jsx` es un **componente React**: una “pieza de LEGO” que se compone en `App.jsx`.

---

## 📂 `src/assets/`

* **`react.svg`**
  Solo es una imagen de ejemplo (puede borrarse o reemplazarse).
  Acá van las imágenes, logos, íconos, etc.

---

## 📂 `public/`

* Archivos estáticos que no pasan por la compilación de Vite.
* Ejemplo: si ponés una imagen en `public/logo.png`, podés usarla en tu HTML con `/logo.png`.

---

## ✅ Resumen simple

* **`index.html`** → el HTML base donde se monta React.
* **`main.jsx`** → arranca React y carga estilos globales.
* **`App.jsx`** → el componente raíz (donde ponés Header, Hero, Footer…).
* **`App.css`** → estilos específicos de `App.jsx` (se importa a mano).
* **`index.css`** → estilos globales + Tailwind (se importa en `main.jsx`).
* **`components/`** → tus bloques de la web (Header, Footer, etc.).
* **`assets/`** → imágenes y recursos.

---

🌸 Pregunta para saber cómo ayudarte mejor:
¿Querés que te arme un **diagrama visual estilo mapa** de cómo se conectan estos archivos (quién importa a quién), así lo ves claro de un vistazo?

















function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Encabezado */}
      <Header />

      {/* Sección principal con mensaje fuerte */}
      <Hero />

      {/* Sección de servicios / paquetes */}
      <Servicios />

      {/* Portafolio / Ejemplos de trabajo */}
      <Portafolio />

      {/* Sobre mí o sobre Bloom */}
      <Sobre />

      {/* Contacto */}
      <Contacto />

      {/* Footer */}
      <Footer />
    </div>
  )
}





App.css eliminado:#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {

  color: #888;
}







## Formulario 
/*
        <p className="text-neutral-600 mb-12">
          Agendá una llamada gratuita de 15 minutos o escribinos directamente.
        </p>

        { Formulario }
        <form className="grid gap-6 text-left">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full p-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="w-full p-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <textarea
            rows="5"
            placeholder="Tu mensaje"
            className="w-full p-4 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          ></textarea>
          
          <button
            type="submit"
            className="bg-rose-600 text-white py-3 px-6 rounded-full shadow hover:bg-rose-700 transition"
          >
            Enviar mensaje
         </button>
        </form> 