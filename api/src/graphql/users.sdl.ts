export const schema = gql`
  type User {
    id: Int!
    phone_number: String!
    email: String!
    name: String
    role: Role!
    profile: Profile
    password: String!
    createdAt: DateTime!
    sentences: [Sentence]!
    modifier: [Sentence]!
  }

  enum Role {
    STEMMER
    VERIFIER
    ANNOTATOR
    INACTIVE
    SUPER
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    phone_number: String!
    email: String!
    name: String
    role: Role!
    password: String!
  }

  input UpdateUserInput {
    phone_number: String
    email: String
    name: String
    role: Role
    password: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
