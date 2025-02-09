import Navbar from '@/components/Navbar';
import CursosCard from '@/components/CursosCard';
import cursos from '@/data/cursos';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';

type Params = {
  organizer: string;
};

// 🔹 Genera rutas estáticas para cada organizador
export async function generateStaticParams() {
  const organizers = [...new Set(cursos.map(curso => curso.organizador))];
  return organizers.map(org => ({ organizer: org }));
}

// 🔹 Página de cursos por organizador
export default function OrganizerPage({ params }: { params: Params }) {
  const { organizer } = params;
  const cursosOrganizador = cursos.filter(curso => curso.organizador === organizer);

  if (!organizer || cursosOrganizador.length === 0) {
    return notFound(); // 🔥 Muestra 404 si no hay cursos
  }

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6">
        {/* Encabezado llamativo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-700">
            📚 Cursos de {organizer}
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Explora los cursos impartidos por <span className="font-semibold">{organizer}</span> y mejora tus habilidades.
          </p>
        </div>

        {/* Contenedor de cursos */}
        {cursosOrganizador.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursosOrganizador.map(curso => (
              <CursosCard key={curso.id} {...curso} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg mt-6">
            ❌ No hay cursos disponibles en este momento.
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
