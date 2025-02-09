import Link from 'next/link';
import Image from 'next/image';

type Curso = {
  id: string;
  titulo: string;
  introduccion: string;
  imagen: string;
  slug: string;
  certificacion: boolean;
  expiracion: string;
  organizador: string;
};

export default function CursosCard({
  titulo,
  introduccion,
  imagen,
  slug,
  certificacion,
  expiracion,
}: Curso) {
  const disponible = !expiracion || Date.parse(expiracion) > Date.now();

  return (
    <Link href={`/courses/${slug}`} passHref>
      <div className="group block overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 bg-white dark:bg-gray-900">
        <div className="relative w-full h-52 overflow-hidden rounded-t-2xl">
          <Image
            src={imagen}
            alt={titulo}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 transition-all">{titulo}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{introduccion}</p>
          <div className="flex items-center justify-between text-sm font-semibold">
            <p className={`px-3 py-1 rounded-full text-white ${disponible ? 'bg-green-500' : 'bg-red-500'}`}>
              {disponible ? '✅ Disponible' : '❌ No disponible'}
            </p>
            {certificacion && (
              <div className="flex items-center bg-yellow-400 text-gray-900 px-3 py-1 rounded-full">
                <span className="mr-1">🏅</span> Certificación
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}