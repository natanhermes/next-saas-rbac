import { z } from 'zod'

// armazena apenas as informações do projetos são importantes para o permissionamento
export const projectSchema = z.object({
  __typename: z.literal('Project').default('Project'),
  id: z.string(),
  ownerId: z.string(),
})

export type Project = z.infer<typeof projectSchema>
