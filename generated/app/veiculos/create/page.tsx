
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { createveiculo } from '@/actions/veiculo';
  import { Input } from '@/components/ui/Input';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';
  
  
  export default async function veiculoCreatePage() {
    
    return (
      <>
        <header className="mb-4">
          <Heading>Create veiculo</Heading>
        </header>
        <form action={createveiculo} className="px-2 max-w-xl">
          <div>
    <Input
      type="text"
      label="Placa"
      name="placa"
      className="mb-2"
      
      
      required
      
    />
  </div><div>
    <Input
      type="text"
      label="Motorista"
      name="motorista"
      className="mb-2"
      
      
      
      
    />
  </div><div>
    <Input
      type="text"
      label="Latitude"
      name="latitude"
      className="mb-2"
      
      
      
      
    />
  </div><div>
    <Input
      type="text"
      label="Longitude"
      name="longitude"
      className="mb-2"
      
      
      
      
    />
  </div>

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
              Create
            </Button>
          </footer>
        </form>
      </>
    )
  }
  