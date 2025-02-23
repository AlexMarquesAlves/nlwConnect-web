'use client'

import { Button, InputField, InputIcon, InputRoot } from '@/components'
import { ArrowRight, Mail, User } from 'lucide-react'
import type { ReactNode } from 'react'
import { useForm } from 'react-hook-form'

interface SubscriptionFormProps {
  children?: ReactNode
}

export function SubscriptionForm() {
  const { register, handleSubmit } = useForm()
  function onSubscribe(data: unknown) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField
            type="text"
            placeholder="Nome completo"
            {...register('name')}
          />
        </InputRoot>

        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField
            type="email"
            placeholder="Seu e-mail"
            {...register('email')}
          />
        </InputRoot>
      </div>
      <Button>
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}
