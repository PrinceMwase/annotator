import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ProfileCreateArgs>({
  profile: {
    one: {
      data: {
        bio: 'String',
        user: {
          create: {
            phone_number: 'String2476171',
            email: 'String7289175',
            password: 'String',
          },
        },
      },
    },
    two: {
      data: {
        bio: 'String',
        user: {
          create: {
            phone_number: 'String2494548',
            email: 'String2270981',
            password: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
