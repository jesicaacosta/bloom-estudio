// src/components/Portafolio.jsx

function Portafolio() {
  return (
    <section id="portafolio" className="py-20 bg-neutral-50">
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
            <video controls className="w-full rounded-lg">
              <source src="/videos/reel1.mp4" type="video/mp4" />

              Tu navegador no soporta video.
            </video>
            <a
              href="https://www.instagram.com/p/xxxx"
              target="_blank"
              className="block mt-4 text-rose-600 hover:underline"
            >
              Ver en Instagram
            </a>
          </div>


          {/* Proyecto 2 - Otro Reel */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold mb-3">Reel </h3>
            <p className="text-neutral-600 mb-4">
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6bqLzFKTG04?si=cVua3GjM2ZwT4c97" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <a
              href="https://youtu.be/6bqLzFKTG04?si=0kxf08LkIQZUU1yf"
              target="_blank"
              className="block mt-4 text-rose-600 hover:underline"
            >
              Ver en Instagram
            </a>
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
            <h3 className="text-xl font-semibold mb-3">Carrusel Inspirador</h3>
            <p className="text-neutral-600 mb-4">
              Un carrusel de diseño minimalista para Instagram.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <img src="/images/carousel1.png" alt="Slide 1" className="rounded-lg" />
              <img src="/images/carousel2.png" alt="Slide 2" className="rounded-lg" />
            </div>
            <a
              href="https://youtu.be/6bqLzFKTG04?si=0kxf08LkIQZUU1yf"
              target="_blank"
              className="block mt-4 text-rose-600 hover:underline"
            >
              Ver en Youtube
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Portafolio
