import { defineAbilityFor, projectSchema } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER', id: 'user-id' })

const project = projectSchema.parse({ id: 'project-id', ownerId: 'user2-id' })

console.log(ability.can('get', 'Billing'))
console.log(ability.can('create', 'Invite'))
console.log(ability.can('delete', 'Project')) // true, pois usuario pode deletar algum projeto
console.log(ability.can('delete', project)) // especificando o projeto -> false, pois usuario nao pode deletar este projeto(ownerId diferente do dele)
