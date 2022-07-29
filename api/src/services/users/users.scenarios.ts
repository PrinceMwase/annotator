import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        phone_number: 'String2502187',
        email: 'String7932036',
        password: 'String',
      },
    },
    two: {
      data: {
        phone_number: 'String6878206',
        email: 'String9506060',
        password: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
