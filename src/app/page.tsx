import Head from 'next/head';
import Navbar from '../components/Navbar';
import CursosCard from '../components/CursosCard';
import cursos from '../data/cursos';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* ✅ SEO Mejorado */}
      <Head>
        <title>Cursos Gratis con Certificado 2025 - Capacitación Online</title>
        <meta
          name="description"
          content="Accede a cursos gratuitos con certificación oficial en 2025. Aprende nuevas habilidades y mejora tu futuro profesional."
        />
        <meta
          name="keywords"
          content="cursos gratis, certificación, capacitación online, cursos 2025, educación gratuita"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Cursos Gratis con Certificado 2025 - Capacitación Online" />
        <meta
          property="og:description"
          content="Accede a cursos gratuitos con certificación oficial en 2025. Aprende nuevas habilidades y mejora tu futuro profesional."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tudominio.com" />
        <meta property="og:image" content="https://tudominio.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cursos Gratis con Certificado 2025 - Capacitación Online" />
        <meta
          name="twitter:description"
          content="Accede a cursos gratuitos con certificación oficial en 2025. Aprende nuevas habilidades y mejora tu futuro profesional."
        />
        <meta name="twitter:image" content="https://tudominio.com/og-image.jpg" />
      </Head>

      <Navbar />
      <main className="container mx-auto p-6 mt-20"> {/* Agregado mt-20 para margen superior */}
        {/* Encabezado moderno */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            🚀 Cursos 2025 Gratuitos con Certificación
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Aprende nuevas habilidades con nuestros cursos gratuitos y obtén una certificación oficial que impulsará tu carrera profesional.
          </p>
        </div>

        {/* Contenedor de cursos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursos.map(curso => (
            <CursosCard
              key={curso.id}
              {...curso}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
