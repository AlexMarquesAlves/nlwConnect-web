import { ArrowRight, Copy } from 'lucide-react'
import { Button, IconButton, Input } from './components'

export default function Home() {
  return (
    <main>
      <Button type='submit'>
        Enviar <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <Input type='email' placeholder='Digite seu e-mail' />
        <Input type='email' placeholder='Digite seu e-mail' error />
      </div>
    </main>
  )
}
