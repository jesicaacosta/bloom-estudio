function Servicios() {
  return (
    // Sección con fondo blanco y espacio
    <section id="servicios" className="bg-white py-24 px-6">

      {/* Título de la sección */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ef71a2]  mb-12">
        Nuestros Servicios
      </h2>

      {/* Grid de 3 columnas en desktop, 1 columna en móvil */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">

        {/* Tarjeta 1: Básico */}
        <div className="bg-rose-50 border border-rose-100 rounded-2xl shadow hover:shadow-lg transition p-8 text-left">
          <h3 className="text-xl font-semibold text-[#e4885a] mb-4">Paquete Básico</h3>
          <p className="text-neutral-600 mb-6 ">
            Estrategia simple y diseño de contenido inicial para dar tus primeros pasos en redes.
          </p>
          <p>✔️ 2 Calendarios de contenidos</p>
          <p> ✔️ Edición de 4 reels (1 por semana)</p>
          <p>✔️ Diseño de 4 carouseles (1 por semana) (Incluye copywriting + hashtags)</p>
          <p>✔️ Revisión de métricas quincenal con sugerencias</p>

          <a
            href="#contacto"
            className="inline-block bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition"
          >
            Lo quiero
          </a>
        </div>

        {/* Tarjeta 2: Intermedio */}
        <div className="bg-rose-100 border border-rose-200 rounded-2xl shadow hover:shadow-lg transition p-8 text-left">
          <h3 className="text-xl font-semibold text-[#e4885a] mb-4">Paquete Intermedio</h3>
          <p className="text-neutral-600 mb-6">
            Gestión mensual completa: calendario editorial, copies y diseño estratégico.
          </p>

          <p> ✔️ 2 Calendarios de contenidos</p>
          <p> ✔️ Gestión de comunidad</p>
          <p> ✔️ Edición de 8 reels (2 por semana)</p>
          <p> ✔️ Diseño de 8 carruseles (2 por semana)</p>
          (Incluye copywriting + hashtags)
          <p> ✔️ 2 ideas de historias por día de publicación</p>
          <p> ️✔️ Revisión de métricas quincenal con sugerencias</p>
          <p>✔️Reunión semana por medio</p>
          <p>✔️ Asesoramiento continuo vía WhatsApp.</p>
          <a
            href="#contacto"
            className="inline-block bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition"
          >
            Lo quiero
          </a>
        </div>

        {/* Tarjeta 3: Premium */}
        <div className="bg-rose-200 border border-rose-300 rounded-2xl shadow hover:shadow-lg transition p-8 text-left">
          <h3 className="text-xl font-semibold text-[#e4885a] mb-4">Paquete Premium</h3>
          <p className="text-neutral-600 mb-6">
            Gestión integral + consultoría personalizada para hacer florecer tu marca digital.
          </p>
          <p>✔️ 2 Calendarios de contenidos</p>
          <p>✔️ Gestión de comunidad</p>
          <p>✔️ Edición de 16 reels (4 por semana)</p>
          <p>✔️ Diseño de 1 carrusel (1 por semana)</p>
          <p>✔️ 2 ideas de historias por día de publicación</p>
          <p>✔️ Revisión de métricas quincenal con sugerencias</p>
          <p>✔️Reunión semana por medio</p>
          <p>✔️ Asesoramiento continuo vía WhatsApp.</p>
          <a
            href="#contacto"
            className="inline-block bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition"
          >
            Lo quiero
          </a>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
