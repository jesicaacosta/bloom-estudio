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
    <div className="font-sans text-neutral-800 bg-[#e0e2f1]">

      {/* NAVBAR */}
      <Header />

      {/* HERO (sección principal con CTA) */}
      <Hero />
      
      {/* PORTAFOLIO (ejemplos de trabajos) */}
      <Portafolio />

      {/* SERVICIOS (paquetes/planes) */}
      <Servicios />

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
