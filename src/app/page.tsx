import { ArrowRight } from 'lucide-react'
import { Button } from './components'

export default function Home() {
  return (
    <main>
      <div className='text-white'>Hello world!</div>

      <Button>
        Enviar
        <ArrowRight />
      </Button>
    </main>
  )
}
