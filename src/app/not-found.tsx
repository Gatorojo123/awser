import Link from 'next/link';
import Footer from '@/components/Footer'; // Importar el componente Footer

export default function NotFoundPage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        <h1 className="text-5xl font-bold text-red-600">404</h1>
        <p className="text-xl mt-4">Lo sentimos, la página que buscas no existe.</p>
        <Link href="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Volver al inicio
        </Link>
      </main>
      <Footer /> 
    </>
  );
}
