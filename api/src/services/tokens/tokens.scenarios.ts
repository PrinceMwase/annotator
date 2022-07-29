import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TokenCreateArgs>({
  token: {
    one: {
      data: {
        token: 'String',
        index: 1068690,
        sentence: { create: { sentence: 'String' } },
      },
    },
    two: {
      data: {
        token: 'String',
        index: 7716932,
        sentence: { create: { sentence: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
