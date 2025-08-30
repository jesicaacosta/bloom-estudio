function Portafolio() {
  return (
    // Sección con fondo neutro claro
    <section id="portafolio" className="bg-neutral-50 py-24 px-6">
      
      {/* Título de la sección */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-700 mb-12">
        Portafolio
      </h2>

      {/* Grid de imágenes */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        
        {/* Imagen 1 */}
        <div className="overflow-hidden rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="https://via.placeholder.com/600x400/ffd6d6/333333?text=Proyecto+1"
            alt="Proyecto 1"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Imagen 2 */}
        <div className="overflow-hidden rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="https://via.placeholder.com/600x400/ffe4e6/333333?text=Proyecto+2"
            alt="Proyecto 2"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Imagen 3 */}
        <div className="overflow-hidden rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="https://via.placeholder.com/600x400/fecdd3/333333?text=Proyecto+3"
            alt="Proyecto 3"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Imagen 4 */}
        <div className="overflow-hidden rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="https://via.placeholder.com/600x400/fda4af/333333?text=Proyecto+4"
            alt="Proyecto 4"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Imagen 5 */}
        <div className="overflow-hidden rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="https://via.placeholder.com/600x400/f9a8d4/333333?text=Proyecto+5"
            alt="Proyecto 5"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Imagen 6 */}
        <div className="overflow-hidden rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="https://via.placeholder.com/600x400/fbcfe8/333333?text=Proyecto+6"
            alt="Proyecto 6"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Portafolio;
