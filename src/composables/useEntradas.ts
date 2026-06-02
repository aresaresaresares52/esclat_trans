import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { initialReservas, initialDevoluciones, type EntradaItem } from '@/data/data'

export function useEntradas() {
  const router = useRouter()

  const reservas = ref<EntradaItem[]>(JSON.parse(JSON.stringify(initialReservas)))
  const devoluciones = ref<EntradaItem[]>(JSON.parse(JSON.stringify(initialDevoluciones)))

  const increment = (item: EntradaItem) => {
    if (item.count >= 4) {
      toast.error('Máximo 4 entradas por usuario')
    } else {
      item.count++
    }
  }

  const decrement = (item: EntradaItem) => {
    if (item.count > 1) {
      item.count--
    }
  }

  const handleReserva = (item: EntradaItem) => {
    const routeData = router.resolve({
      name: 'entradas-pasarela',
      query: {
        tipo: 'compra',
        nombre: item.name,
        cantidad: item.count
      }
    })
    window.open(routeData.href, '_blank')
  }

  const handleDevolucion = (item: EntradaItem) => {
    const routeData = router.resolve({
      name: 'entradas-pasarela',
      query: {
        tipo: 'devolucion',
        nombre: item.name,
        cantidad: item.count
      }
    })
    window.open(routeData.href, '_blank')
  }

  return {
    reservas,
    devoluciones,
    increment,
    decrement,
    handleReserva,
    handleDevolucion
  }
}
