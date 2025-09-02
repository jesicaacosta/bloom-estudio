
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ...el resto de tu código...
// 
// src/components/Portafolio.jsx

function Portafolio() {
  return (
    <section id="portafolio" className="py-20 bg-[#e0e2f1]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ef71a2]  mb-12">
          Portafolio de Proyectos 🌸
        </h2>

        {/* GRID de proyectos */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Proyecto 1 - Reel */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-3">Reel Creativo</h3>
            <p className="text-neutral-600 mb-4">
              Un reel dinámico para Instagram mostrando tips de bienestar.
            </p>
            {/* video subido local (ejemplo reel.mp4 en /public/videos/) */}
            <video controls className="w-full rounded-lg h-90 object-contain">
              <source src="public/ROMA.mp4" type="video/mp4" />
              Tu navegador no soporta video.
            </video>
          </div>



          {/* Proyecto 3 - Video de YouTube */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-3">Video en YouTube</h3>
            <p className="text-neutral-600 mb-4">
              Video del tipo entrevista para Youtube.
            </p>
            <div className="aspect-video w-full rounded-lg overflow-hidden">

              <iframe width="560" height="315" src="https://www.youtube.com/embed/276VducwhMo?si=mD4Fs-VD6d42UkXT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <a
              href="https://youtube.com/watch?v=VIDEO_ID"
              target="_blank"
              className="block mt-4 text-rose-600 hover:underline"
            >
              Ver en YouTube
            </a>
          </div>

{/* Proyecto 4 - Carousel */}
<div className="bg-white rounded-2xl shadow p-6">
  <h3 className="text-xl font-semibold mb-3">Carrusel para Instagram </h3>
  <p className="text-neutral-600 mb-4">
    Un carrusel con información valiosa para la comunidad de Instagram. Utilizando un tema de la actualidad para hacer una demostración.
  </p>
  {/* Configuración del carrusel usando react-slick */}
  <Slider
    dots={true}           /* Muestra los puntos de navegación debajo del carrusel */
    infinite={true}       /* Permite que el carrusel sea infinito */
    speed={500}           /* Velocidad de la animación de transición entre slides */
    slidesToShow={1}      /* Número de slides visibles al mismo tiempo */
    slidesToScroll={1}    /* Número de slides que avanza el carrusel por cada interacción */
    className="rounded-lg h-90" /* Aplica bordes redondeados y altura fija */
  >
    <img src="public/carousel/1.png" alt="Slide 1" className="rounded-lg h-90 w-full object-contain" />
    <img src="public/carousel/2.png" alt="Slide 2" className="rounded-lg h-90 w-full object-contain" />
    <img src="public/carousel/3.png" alt="Slide 3" className="rounded-lg h-90 w-full object-contain" />
    <img src="public/carousel/4.png" alt="Slide 4" className="rounded-lg h-90 w-full object-contain" />
    <img src="public/carousel/5.png" alt="Slide 5" className="rounded-lg h-90 w-full object-contain" />
    <img src="public/carousel/6.png" alt="Slide 6" className="rounded-lg h-90 w-full object-contain" />
  </Slider>
  <a
    href="https://www.instagram.com/p/DNWjWm7uEEE/?img_index=1"
    target="_blank"
    className="block mt-4 text-rose-600 hover:underline"
  >
    Ver en Instagram
  </a>
</div>

        </div> {/* Fin GRID proyectos */}
      </div> {/* Fin contenedor */}
    </section >
  )
}

export default Portafolio
