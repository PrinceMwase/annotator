import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.SentenceCreateArgs>({
  sentence: {
    one: { data: { sentence: 'String' } },
    two: { data: { sentence: 'String' } },
  },
})

export type StandardScenario = typeof standard
