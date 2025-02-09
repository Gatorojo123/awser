import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';
import Navbar from '@/components/Navbar';
import cursos from '@/data/cursos';
import Footer from '@/components/Footer';

type PageProps = {
  params: { slug: string };
};

export default function CursoPage({ params }: PageProps) {
  const curso = cursos.find((c) => c.slug === params.slug);

  const cursosRecientes = useMemo(() =>
    cursos.filter((c) => c.slug !== curso?.slug).slice(0, 3),
    [curso?.slug]
  );

  if (!curso) {
    return (
      <>
        <Navbar />
        <main className="p-6 text-center mt-20"> {/* Añadido mt-20 para dejar espacio */}
          <h1 className="text-3xl font-bold text-red-500">Curso no encontrado ❌</h1>
          <p className="mt-2 text-gray-600">Vuelve al <Link href="/" className="text-blue-500 hover:underline">inicio</Link>.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{curso.titulo} - Curso Gratis con Certificado</title>
        <meta name="description" content={`${curso.titulo}: ${curso.introduccion}. Curso gratuito con certificación organizada por ${curso.organizador}.`} />
        <meta name="keywords" content={`curso gratis, ${curso.titulo}, educación, aprendizaje, certificación`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={curso.titulo} />
        <meta property="og:description" content={curso.introduccion} />
        <meta property="og:image" content={curso.imagen} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://tusitio.com/courses/${curso.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={curso.titulo} />
        <meta name="twitter:description" content={curso.introduccion} />
        <meta name="twitter:image" content={curso.imagen} />
      </Head>

      <Navbar />

      <main className="container mx-auto p-6 mt-20"> {/* Añadido mt-20 para dejar espacio */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* Sección principal */}
          <section className="md:col-span-3 bg-white p-10 rounded-xl shadow-lg space-y-10 border border-gray-200">
            {/* Encabezado con título e introducción */}
            <Image 
              src={curso.imagen} 
              alt={curso.titulo} 
              width={600} 
              height={400} 
              className="mx-auto rounded-lg shadow-md"
              loading="lazy" // Esto puede ayudar a la carga eficiente de la imagen
            />
            <header className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-blue-800">{curso.titulo}</h1>
              <p className="text-gray-600 text-lg">{curso.introduccion}</p>
            </header>

            {/* Contenido del curso */}
            <div className="border-t pt-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Contenido del curso</h2>
              <p className="text-gray-600 text-lg">{curso.introduccion}</p>
              <div className="contenido-curso" dangerouslySetInnerHTML={{ __html: curso.contenidoHtml }} />
            </div>
          </section>

          {/* Cursos recientes */}
          <aside className="md:col-span-1 border-l pl-4 space-y-4">
            <h2 className="text-xl font-semibold">🎓 Cursos Recientes</h2>
            <div className="space-y-4">
              {cursosRecientes.map((c) => (
                <Link key={c.id} href={`/courses/${c.slug}`} className="block">
                  <div className="p-2 border rounded-lg shadow-sm hover:shadow-md transition">
                    <Image 
                      src={c.imagen} 
                      alt={c.titulo} 
                      width={300} 
                      height={200} 
                      className="w-full rounded-md"
                      loading="lazy"
                    />
                    <p className="mt-2 text-center font-semibold">{c.titulo}</p>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return cursos.map((curso) => ({
    slug: curso.slug,
  }));
}
