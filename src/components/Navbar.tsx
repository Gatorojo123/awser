"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 bg-gray-900/80 backdrop-blur-md text-white fixed w-full top-0 z-50 border-b border-gray-700/40 shadow-lg shadow-blue-900/20 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="hover:scale-110 transition-transform duration-300 flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} className="cursor-pointer" />
        <span className="text-xl font-semibold hidden md:block">Cursos 2025</span>
      </Link>

      {/* Menú Desktop */}
      <ul className="hidden md:flex space-x-6 text-lg">
        {[{ href: "/", label: "Inicio" }, { href: "/organizers/MTPE", label: "MTPE" }, { href: "/organizers/MINJUS", label: "Minjus" }].map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="text-gray-300 hover:text-white transition-colors duration-300">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Buscador */}
      <form onSubmit={(e) => e.preventDefault()} className="relative hidden md:block" role="search">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar cursos..."
          className="pl-4 pr-12 py-2 bg-gray-800/60 rounded-full border border-gray-700/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 w-72 transition-all duration-300"
        />
        <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-all">
          🔍
        </button>
      </form>

      {/* Botón Menú Móvil */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg bg-gray-700/40 hover:bg-gray-600/50 transition-all">
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Menú Móvil */}
      <div>
  {/* Fondo oscuro detrás del menú */}
  {menuOpen && (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
      onClick={() => setMenuOpen(false)}
    />
  )}

  {/* Menú lateral */}
  <div
    className={`fixed top-0 left-0 h-screen w-3/4 md:w-1/3 bg-gray-900 p-6 shadow-lg transform transition-transform duration-300 z-50 ${
      menuOpen ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    {/* Botón de cierre */}
    <button
      onClick={() => setMenuOpen(false)}
      className="absolute top-4 right-4 text-white text-3xl"
      aria-label="Cerrar menú"
    >
      ✖
    </button>

    {/* Enlaces de navegación */}
    <nav className="mt-10 space-y-6">
      {[
        { href: "/", label: "Inicio" },
        { href: "/organizers/MTPE", label: "MTPE" },
        { href: "/organizers/MINJUS", label: "Minjus" },
      ].map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="block text-gray-300 hover:text-white text-xl"
          onClick={() => setMenuOpen(false)}
        >
          {label}
        </Link>
      ))}
    </nav>
  </div>
</div>



    </nav>
  );
}
