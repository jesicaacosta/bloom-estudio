function Footer() {
  return (
    // Fondo rosa oscuro con texto claro
    <footer className="bg-rose-700 text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        
        {/* Nombre de la marca */}
        <h3 className="text-lg font-semibold">Bloom Estudio 🌸</h3>
        
        {/* Derechos reservados */}
        <p className="text-sm text-rose-100">
          © {new Date().getFullYear()} Bloom Estudio. Todos los derechos reservados.
        </p>

        {/* Redes sociales */}
        <div className="flex gap-6">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-200 transition"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-200 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
