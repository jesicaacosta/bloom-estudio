function Sobre() {
  return (
    // Fondo suave para diferenciar la sección
    <section id="sobre" className="bg-rose-50 py-24 px-6">
      
      {/* Contenedor central con ancho máximo */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Columna de texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-rose-700 mb-6">
            Sobre Bloom Estudio
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-4">
            Bloom Estudio nace con la misión de ayudar a mujeres emprendedoras, 
            coaches, psicólogas y profesionales del bienestar a 
            <span className="font-semibold text-rose-600"> florecer en el mundo digital</span>.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4">
            Creemos en la claridad, la autenticidad y la creatividad como pilares para 
            construir marcas digitales que transmitan confianza y atraigan a las 
            clientas correctas.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            Nuestro enfoque combina <span className="font-semibold">estrategia + estética + cercanía</span>, 
            logrando que cada marca tenga una presencia digital que refleje su esencia única.
          </p>
        </div>

        {/* Columna de imagen / ilustración */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/400x400/ffe4e6/333333?text=Bloom+Estudio"
            alt="Bloom Estudio"
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
