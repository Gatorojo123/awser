export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-4 shadow-md mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">© {new Date().getFullYear()} Todos los derechos reservados.</p>

        {/* Redes sociales */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-400 transition duration-300">Facebook</a>
          <a href="#" className="hover:text-sky-400 transition duration-300">Twitter</a>
          <a href="#" className="hover:text-pink-400 transition duration-300">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
