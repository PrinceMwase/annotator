import { tokens, token, createToken, updateToken, deleteToken } from './tokens'
import type { StandardScenario } from './tokens.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tokens', () => {
  scenario('returns all tokens', async (scenario: StandardScenario) => {
    const result = await tokens()

    expect(result.length).toEqual(Object.keys(scenario.token).length)
  })

  scenario('returns a single token', async (scenario: StandardScenario) => {
    const result = await token({ id: scenario.token.one.id })

    expect(result).toEqual(scenario.token.one)
  })

  scenario('creates a token', async (scenario: StandardScenario) => {
    const result = await createToken({
      input: {
        token: 'String',
        index: 5284800,
        sentenceId: scenario.token.two.sentenceId,
      },
    })

    expect(result.token).toEqual('String')
    expect(result.index).toEqual(5284800)
    expect(result.sentenceId).toEqual(scenario.token.two.sentenceId)
  })

  scenario('updates a token', async (scenario: StandardScenario) => {
    const original = await token({ id: scenario.token.one.id })
    const result = await updateToken({
      id: original.id,
      input: { token: 'String2' },
    })

    expect(result.token).toEqual('String2')
  })

  scenario('deletes a token', async (scenario: StandardScenario) => {
    const original = await deleteToken({ id: scenario.token.one.id })
    const result = await token({ id: original.id })

    expect(result).toEqual(null)
  })
})
