function Contacto() {
  return (
    // Fondo blanco con padding
    <section id="contacto" className="bg-white py-24 px-6">
      
      {/* Contenedor central */}
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#ef71a2] mb-6">
          Contacto
        </h2>





        




        {/* Links de contacto directo */}
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 hover:underline"
          >
            WhatsApp
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 hover:underline"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
