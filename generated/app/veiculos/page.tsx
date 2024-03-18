
  import { prisma } from '@/lib/prisma';
  import { deleteveiculo } from '@/actions/veiculo';
  import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';

  export default async function veiculosListPage() {
    const veiculos = await prisma.veiculo.findMany();

    const breadcrumbs = [
      { name: 'Dashboard', href: '/' },
      { name: 'veiculos', href: '#' }
    ]

    return (
      <>
        <Breadcrumbs elements={breadcrumbs} className="my-2" />

        <header className="flex justify-between mb-4">
          <Heading>All veiculos</Heading>
          <Button
            as="a"
            href="/veiculos/create"
            className="font-medium"
          >
           New veiculo
          </Button>
        </header>

        <section className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Placa
      </th><th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Motorista
      </th><th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Latitude
      </th><th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Longitude
      </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {veiculos.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center text-gray-500 py-4">
                    No veiculos found
                  </td>
                </tr>
              )}

              {veiculos.map((veiculo) => (
                <tr key={veiculo.id}>
                  <td className="px-4 py-2 text-gray-700">
          {veiculo.placa}
        </td>
        <td className="px-4 py-2 text-gray-700">
          {veiculo.motorista}
        </td>
        <td className="px-4 py-2 text-gray-700">
          {veiculo.latitude}
        </td>
        <td className="px-4 py-2 text-gray-700">
          {veiculo.longitude}
        </td>
        
                  <td className="px-4 py-2">
                    <div className="flex gap-x-1 h-full justify-center">
                      <Button
                        as="a"
                        href={`/veiculos/${veiculo.id}`}
                        variant="ghost"
                        size="sm"
                        className="font-medium"
                      >
                        Show
                      </Button>
                      <Button
                        as="a"
                        href={`/veiculos/${veiculo.id}/edit`}
                        variant="ghost"
                        size="sm"
                        className="font-medium"
                      >
                        Edit
                      </Button>
                      <form action={deleteveiculo} className="inline-block">
                        <input type="hidden" name="id" value={veiculo.id} />
                        <Button
                          type="submit"
                          variant="ghost"
                          size="sm"
                          className="font-medium text-red-600 hover:bg-red-100 disabled:bg-red-100"
                        >
                          Delete
                        </Button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </>
    )
  }
  