import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { email: 'String6133363' } },
    two: { data: { email: 'String8358533' } },
  },
})

export type StandardScenario = typeof standard
