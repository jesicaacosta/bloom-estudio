function Hero() {
  return (
    // Sección con fondo rosa claro y padding vertical amplio
    <section className="bg-rose-50 text-center py-32 px-6" id="hero">
      
      {/* Título principal */}
      <h1 className="text-4xl md:text-6xl font-bold text-rose-700 mb-6">
        En Bloom hacemos que tu marca florezca en digital 🌸
      </h1>

      {/* Subtítulo descriptivo */}
      <p className="text-lg text-bloom-lila mb-8 max-w-2xl mx-auto">
        Te ayudamos a organizar, diseñar y hacer crecer tu presencia en redes sociales
        con claridad, creatividad y estrategia.
      </p>

      {/* Botón CTA */}
      <a
        href="#contacto"
        className="inline-block bg-rose-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-rose-700 transition"
      >
        Quiero que mi marca florezca
      </a>
    </section>
  );
}

export default Hero;
