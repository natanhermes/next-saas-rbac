import { z } from 'zod'

// armazena apenas as informações das organizações são importantes para o permissionamento
export const organizationSchema = z.object({
  __typename: z.literal('Organization').default('Organization'),
  id: z.string(),
  ownerId: z.string(),
})

export type Organization = z.infer<typeof organizationSchema>
