// Importa los estilos globales (Tailwind v4 desde index.css)
import './index.css'

// Importa todos los componentes de la web
import Header from './components/Header'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Portafolio from './components/Portafolio'
import Sobre from './components/Sobre'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

// Componente principal que arma la página completa
function App() {
  return (
    // Contenedor principal con tipografía base y color de texto
    <div className="font-sans text-neutral-800">
      
      {/* NAVBAR */}
      <Header />

      {/* HERO (sección principal con CTA) */}
      <Hero />

      {/* SERVICIOS (paquetes/planes) */}
      <Servicios />

      {/* PORTAFOLIO (ejemplos de trabajos) */}
      <Portafolio />

      {/* SOBRE (historia, misión y valores) */}
      <Sobre />

     /* {/* CONTACTO (formulario y links directos) */}
      <Contacto />

      {/* FOOTER (pie de página con derechos y redes) */}
      <Footer />

    </div>
  )
}

export default App
