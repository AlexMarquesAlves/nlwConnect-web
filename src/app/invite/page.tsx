import Image from 'next/image'
import logo from '../../assets/logo.svg'

export default function InvitePage() {
  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="DevStage Logotipo" width={108.5} height={30} />

        <div className="space-y-2">
          <h1>Inscrição confirmada!</h1>
          <p>Para entrar no evento, acesse o link enviado para o seu e-mail.</p>
        </div>
      </div>
    </div>
  )
}
