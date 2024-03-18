
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { Heading } from '@/components/ui/Heading';

  export default async function veiculoPage({ params }: { params: { id: string } }) {
    const veiculo = await prisma.veiculo.findUnique({
      where: { id: params.id }
    });
    
    if (!veiculo) {
      return (
    <>
      <header>
        <Heading>veiculo not found</Heading>
      </header>
      <footer>
        <Link href="/veiculos">
          Return to veiculos list
        </Link>
      </footer>
    </>
  )
    }

    return (
      <>
        <header className="mt-2 mb-4">
          <Heading>veiculo #{veiculo.id.substring(0,6)}...</Heading>
        </header>

        <section className="relative overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8 max-w-xl mb-4">
          <span
            className="absolute inset-x-0 bottom-0 h-21 bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600"
          ></span>
          <p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Placa:</strong> {veiculo.placa}</p><p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Motorista:</strong> {veiculo.motorista}</p><p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Latitude:</strong> {veiculo.latitude}</p><p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Longitude:</strong> {veiculo.longitude}</p>
        </section>

        <footer>
          <Link
            href="/veiculos"
            className="underline text-gray-500"
          >
            Return to veiculos list
          </Link>
        </footer>
      </>
    )
  }
  