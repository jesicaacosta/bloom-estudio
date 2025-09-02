function Servicios() {
  return (
    <section id="servicios" className="bg-white py-24 px-6">
      
      {/* ---- TÍTULO PRINCIPAL ---- */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ef71a2] mb-12">
        🌸 Nuestros Servicios
      </h2>

      {/* ---- INTRODUCCIÓN ---- */}
      <p className="max-w-3xl mx-auto text-center text-neutral-600 mb-16">
        En Bloom te ofrecemos soporte digital freelance: desde 💻 programación y diseño, 
        hasta 🛒 gestión y mantenimiento de tus herramientas digitales. 
        Nos adaptamos a lo que tu proyecto necesita para crecer 🌱 sin complicaciones.
      </p>

      {/* ---- PROGRAMACIÓN Y DISEÑO ---- */}
      <div className="max-w-5xl mx-auto mb-20">
        <h3 className="text-2xl font-bold text-center text-[#ef71a2] mb-4">
          💻 Programación y diseño digital
        </h3>
        <p className="text-center text-neutral-600 mb-12">
          Ideal si necesitás presencia online sólida y profesional. 
          Creamos landings simples, hacemos ajustes en tu web y diseñamos 
          piezas visuales básicas 📐 para acompañar la comunicación de tu marca.
        </p>

        <div className="bg-rose-50 border border-rose-100 rounded-2xl shadow p-8 hover:shadow-lg transition flex flex-col items-start max-w-xl mx-auto">
          <ul className="space-y-2 text-neutral-700">
            <li>✔️ Landings rápidas y simples</li>
            <li>✔️ Ajustes y optimización web</li>
            <li>✔️ Diseño gráfico básico para piezas de comunicación</li>
          </ul>
        </div>
      </div>

      {/* ---- SOPORTE DIGITAL ---- */}
      <div className="max-w-5xl mx-auto mb-20">
        <h3 className="text-2xl font-bold text-center text-[#ef71a2] mb-4">
          🛒 Soporte digital para emprendedores
        </h3>
        <p className="text-center text-neutral-600 mb-12">
          Pensado para quienes venden online y necesitan ayuda constante. 
          Mantenemos tus tiendas al día, subimos productos 📦, optimizamos catálogos 
          y editamos materiales simples 🎨 para tus redes.
        </p>

        <div className="bg-rose-50 border border-rose-100 rounded-2xl shadow p-8 hover:shadow-lg transition flex flex-col items-start max-w-xl mx-auto">
          <ul className="space-y-2 text-neutral-700">
            <li>✔️ Mantenimiento de Tienda Nube y Mercado Libre</li>
            <li>✔️ Subida de productos y optimización de catálogos</li>
            <li>✔️ Edición simple de imágenes y videos para redes</li>
          </ul>
        </div>
      </div>

      {/* ---- PAQUETES PARA REDES ---- */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-center text-[#ef71a2] mb-4">
          📲 Paquetes para redes sociales
        </h3>
        <p className="text-center text-neutral-600 mb-12">
          Diseñados para potenciar tu presencia en Instagram, Facebook y TikTok. 
          Incluyen calendario de publicaciones 🗓️, reels 🎬, carruseles y análisis de métricas 📊 
          para que no tengas que preocuparte por la gestión diaria de tus redes.
        </p>

        {/* Grid con 3 paquetes */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Paquete Básico */}
          <div className="bg-rose-50 border border-rose-100 rounded-2xl shadow hover:shadow-lg transition p-8 text-left flex flex-col">
            <h4 className="text-xl font-semibold text-[#e4885a] mb-2">🌱 Paquete Básico</h4>
            <p className="text-lg font-bold text-[#ef71a2] mb-4">$ Precio</p>
            <p className="text-neutral-600 mb-6">
              Estrategia simple y diseño de contenido inicial para dar tus primeros pasos en redes.
            </p>
            <ul className="space-y-2 text-neutral-700 mb-6">
              <li>✔️ 2 Calendarios de contenidos</li>
              <li>✔️ Edición de 4 reels (1 por semana)</li>
              <li>✔️ Diseño de 4 carouseles (1 por semana) (Incluye copywriting + hashtags)</li>
              <li>✔️ Revisión de métricas quincenal con sugerencias</li>
            </ul>
            <a
              href="#contacto"
              className="mt-auto inline-block bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition"
            >
              Lo quiero
            </a>
          </div>

          {/* Paquete Intermedio */}
          <div className="bg-rose-100 border border-rose-200 rounded-2xl shadow hover:shadow-lg transition p-8 text-left flex flex-col">
            <h4 className="text-xl font-semibold text-[#e4885a] mb-2">🌿 Paquete Intermedio</h4>
            <p className="text-lg font-bold text-[#ef71a2] mb-4">$ Precio</p>
            <p className="text-neutral-600 mb-6">
              Gestión mensual completa: calendario editorial, copies y diseño estratégico.
            </p>
            <ul className="space-y-2 text-neutral-700 mb-6">
              <li>✔️ 2 Calendarios de contenidos</li>
              <li>✔️ Gestión de comunidad</li>
              <li>✔️ Edición de 8 reels (2 por semana)</li>
              <li>✔️ Diseño de 8 carruseles (2 por semana) (Incluye copywriting + hashtags)</li>
              <li>✔️ 2 ideas de historias por día de publicación</li>
              <li>✔️ Revisión de métricas quincenal con sugerencias</li>
              <li>✔️ Reunión semana por medio</li>
              <li>✔️ Asesoramiento continuo vía WhatsApp</li>
            </ul>
            <a
              href="#contacto"
              className="mt-auto inline-block bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition"
            >
              Lo quiero
            </a>
          </div>

          {/* Paquete Premium */}
          <div className="bg-rose-200 border border-rose-300 rounded-2xl shadow hover:shadow-lg transition p-8 text-left flex flex-col">
            <h4 className="text-xl font-semibold text-[#e4885a] mb-2">🌸 Paquete Premium</h4>
            <p className="text-lg font-bold text-[#ef71a2] mb-4">$ Precio</p>
            <p className="text-neutral-600 mb-6">
              Gestión integral + consultoría personalizada para hacer florecer tu marca digital.
            </p>
            <ul className="space-y-2 text-neutral-700 mb-6">
              <li>✔️ 2 Calendarios de contenidos</li>
              <li>✔️ Gestión de comunidad</li>
              <li>✔️ Edición de 16 reels (4 por semana)</li>
              <li>✔️ Diseño de 1 carrusel (1 por semana)</li>
              <li>✔️ 2 ideas de historias por día de publicación</li>
              <li>✔️ Revisión de métricas quincenal con sugerencias</li>
              <li>✔️ Reunión semana por medio</li>
              <li>✔️ Asesoramiento continuo vía WhatsApp</li>
            </ul>
            <a
              href="#contacto"
              className="mt-auto inline-block bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition"
            >
              Lo quiero
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
