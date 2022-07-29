export const schema = gql`
  type Sentence {
    id: Int!
    sentence: String!
    source: String
    progress: PROGRESS!
    uploader: User
    modifier: User
    uploaderID: Int
    modifierId: Int
    Token: [Token]!
  }

  enum PROGRESS {
    VERIFIED
    PENDING_VERIFICATION
    ANNOTATED
    STEMMING
    STEMMED
    RAW
  }

  type Query {
    sentences: [Sentence!]! @requireAuth
    subject: Sentence @requireAuth
    sentence(id: Int!): Sentence @requireAuth
  }

  input CreateSentenceInput {
    sentence: String!
    source: String
    progress: PROGRESS!
    uploaderID: Int
    modifierId: Int
  }

  input UpdateSentenceInput {
    sentence: String
    source: String
    progress: PROGRESS
    uploaderID: Int
    modifierId: Int
  }

  type Mutation {
    createSentence(input: CreateSentenceInput!): Sentence! @requireAuth
    updateSentence(id: Int!, input: UpdateSentenceInput!): Sentence!
      @requireAuth
    deleteSentence(id: Int!): Sentence! @requireAuth
  }
`
