
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { editveiculo } from '@/actions/veiculo';
  import { Input } from '@/components/ui/Input';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';
  

  export default async function veiculoEditPage({ params }: { params: { id: string } }) {
    const veiculo = await prisma.veiculo.findUnique({
      where: { id: params.id },
      
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
        <header className="mb-4">
          <Heading>Edit veiculo</Heading>
        </header>
        <form action={editveiculo} className="px-2 max-w-xl">
          <div>
    <Input
      type="text"
      label="Placa"
      name="placa"
      className="mb-2"
      
      defaultValue={veiculo.placa}
      required
      
    />
  </div><div>
    <Input
      type="text"
      label="Motorista"
      name="motorista"
      className="mb-2"
      
      defaultValue={veiculo.motorista}
      
      
    />
  </div><div>
    <Input
      type="text"
      label="Latitude"
      name="latitude"
      className="mb-2"
      
      defaultValue={veiculo.latitude}
      
      
    />
  </div><div>
    <Input
      type="text"
      label="Longitude"
      name="longitude"
      className="mb-2"
      
      defaultValue={veiculo.longitude}
      
      
    />
  </div>

          <input type="hidden" name="id" value={veiculo.id} />

          <footer className="flex items-center justify-between mt-2">
            <Link
              href="/veiculos"
              className="underline text-gray-500"
            >
              Return to veiculos list
            </Link>
  
            <Button
              type="submit"
            >
              Update
            </Button>
          </footer>
        </form>
      </>
    )
  }
  