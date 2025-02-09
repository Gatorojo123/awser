"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CursosCard from "@/components/CursosCard";
import cursos from "@/data/cursos";
import Footer from "@/components/Footer";

// Definir el tipo Curso
type Curso = {
  id: string;
  titulo: string;
  introduccion: string;
  slug: string;
  imagen: string;
  organizador: string;
  certificacion: boolean;
  fechaPublicacion: string;
  expiracion: string;
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.trim().toLowerCase() || "";
  const [filteredCursos, setFilteredCursos] = useState<Curso[]>([]);

  useEffect(() => {
    setFilteredCursos(
      query
        ? cursos.filter((curso) => curso.titulo.toLowerCase().includes(query))
        : []
    );
  }, [query]);

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Resultados de búsqueda</h1>

        {query === "" ? (
          <div className="text-center text-gray-600 text-lg mt-10">
            <p>🔍 Escribe algo para buscar cursos.</p>
          </div>
        ) : filteredCursos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredCursos.map((curso) => (
              <CursosCard key={curso.id} {...curso} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 text-lg mt-10">
            <p>❌ No se encontraron cursos.</p>
            <p className="text-sm text-gray-500 mt-2">
              Prueba con otras palabras clave.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
