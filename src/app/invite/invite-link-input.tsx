import { IconButton, InputField, InputIcon, InputRoot } from '@/components'
import { Copy, Link } from 'lucide-react'
import type { ReactNode } from 'react'

interface InviteLinkInputProps {
  children?: ReactNode
}

export function InviteLinkInput() {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField
        readOnly
        defaultValue={'http://localhost:3000/invite/a87dtasd7hq9dahs'}
      />

      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}
