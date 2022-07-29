import type {
  QueryResolvers,
  MutationResolvers,
  TokenResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const tokens: QueryResolvers['tokens'] = () => {
  return db.token.findMany()
}

export const token: QueryResolvers['token'] = ({ id }) => {
  return db.token.findUnique({
    where: { id },
  })
}

export const createToken: MutationResolvers['createToken'] = ({ input }) => {
  return db.token.create({
    data: input,
  })
}

export const updateToken: MutationResolvers['updateToken'] = ({
  id,
  input,
}) => {
  return db.token.update({
    data: input,
    where: { id },
  })
}

export const deleteToken: MutationResolvers['deleteToken'] = ({ id }) => {
  return db.token.delete({
    where: { id },
  })
}

export const Token: TokenResolvers = {
  sentence: (_obj, { root }) =>
    db.token.findUnique({ where: { id: root.id } }).sentence(),
}