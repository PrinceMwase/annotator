export const schema = gql`
  type Token {
    id: Int!
    token: String!
    index: Int!
    pos: String
    head: Int
    deprel: String
    sentence: Sentence!
    sentenceId: Int!
  }

  type Query {
    tokens: [Token!]! @requireAuth
    token(id: Int!): Token @requireAuth
  }

  input CreateTokenInput {
    token: String!
    index: Int!
    pos: String
    head: Int
    deprel: String
    sentenceId: Int!
  }

  input UpdateTokenInput {
    token: String
    index: Int
    pos: String
    head: Int
    deprel: String
    sentenceId: Int
  }

  type Mutation {
    createToken(input: CreateTokenInput!): Token! @requireAuth
    updateToken(id: Int!, input: UpdateTokenInput!): Token! @requireAuth
    deleteToken(id: Int!): Token! @requireAuth
  }
`
