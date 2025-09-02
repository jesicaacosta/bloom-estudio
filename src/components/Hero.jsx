function Hero() {
  return (
    // Sección con fondo rosa claro y padding vertical amplio
    <section className="bg-rose-50 text-center py-40 px-6 " id="hero">
      
      {/* Título principal */}
      <h1 className="text-4xl md:text-4xl font-bold text-[#6c5c87]  mb-6 top-10">
        Bloom hace que tu marca florezca 🌸
      </h1>

      {/* Subtítulo descriptivo */}
      <p className="text-lg text-[#2e2e2e] mb-8 max-w-2xl mx-auto te">
        Te ayudo a organizar, diseñar y hacer crecer tu presencia en redes sociales
        con claridad, creatividad y estrategia.
      </p>

      {/* Botón CTA */}
      <a
        href="#contacto"
        className="inline-block bg-[#bc8aa0] text-white px-8 py-3 rounded-full shadow-lg hover:bg-rose-700 transition"
      >
        Quiero que mi marca florezca
      </a>
    </section>
  );
}

export default Hero;
