
  'use server';
  import { redirect } from "next/navigation";
  import { revalidatePath } from "next/cache";
  import { prisma } from "@/lib/prisma";

  export async function createveiculo(formData: FormData) {
    const data = {
      placa: formData.get('placa') as string,
motorista: formData.get('motorista') as string,
latitude: formData.get('latitude') as string,
longitude: formData.get('longitude') as string,

    }
    
    const veiculo = await prisma.veiculo.create({ data });

    if (veiculo) {
      redirect(`/veiculos/${veiculo.id}`)
    }
  }

  export async function editveiculo(formData: FormData) {
    const id = formData.get('id') as string
    try {
      const data = {
        placa: formData.get('placa') as string,
motorista: formData.get('motorista') as string,
latitude: formData.get('latitude') as string,
longitude: formData.get('longitude') as string,

      }
      
      await prisma.veiculo.update({
        where: { id },
        data,
      })
    } catch (error) {
      console.error('[EDIT ACTION ERROR:', error)
      return { message: error }
    }

    redirect(`/veiculos/${id}`)
  }

  export async function deleteveiculo (formData: FormData) {
    const id = formData.get('id') as string;
    try {
      await prisma.veiculo.delete({
        where: { id },
      });
    } catch (error) {
      console.error('DELETE ACTION ERROR:', error);
      return { message: 'Unable to delete veiculo' };
    }

    revalidatePath(`/veiculos`)
  }
  