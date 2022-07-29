import {
  sentences,
  sentence,
  createSentence,
  updateSentence,
  deleteSentence,
} from './sentences'
import type { StandardScenario } from './sentences.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('sentences', () => {
  scenario('returns all sentences', async (scenario: StandardScenario) => {
    const result = await sentences()

    expect(result.length).toEqual(Object.keys(scenario.sentence).length)
  })

  scenario('returns a single sentence', async (scenario: StandardScenario) => {
    const result = await sentence({ id: scenario.sentence.one.id })

    expect(result).toEqual(scenario.sentence.one)
  })

  scenario('creates a sentence', async () => {
    const result = await createSentence({
      input: { sentence: 'String' },
    })

    expect(result.sentence).toEqual('String')
  })

  scenario('updates a sentence', async (scenario: StandardScenario) => {
    const original = await sentence({ id: scenario.sentence.one.id })
    const result = await updateSentence({
      id: original.id,
      input: { sentence: 'String2' },
    })

    expect(result.sentence).toEqual('String2')
  })

  scenario('deletes a sentence', async (scenario: StandardScenario) => {
    const original = await deleteSentence({ id: scenario.sentence.one.id })
    const result = await sentence({ id: original.id })

    expect(result).toEqual(null)
  })
})
