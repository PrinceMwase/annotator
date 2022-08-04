export const schema = gql`
  type User {
    id: Int!
    phone_number: String!
    email: String!
    name: String
    roles: Role!
    profile: Profile
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
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
    roles: Role!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  input UpdateUserInput {
    phone_number: String
    email: String
    name: String
    roles: Role
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
