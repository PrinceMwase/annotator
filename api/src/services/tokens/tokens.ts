import type {
  QueryResolvers,
  MutationResolvers,
  TokenResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { validate } from '@redwoodjs/api'
import { requireAuth } from 'src/lib/auth'
import { updateSentence } from 'src/services/sentences/sentences'

export const tokens: QueryResolvers['tokens'] = () => {
  return db.token.findMany(
    {orderBy: {
      index: 'asc',
    }}
  )
}

export const token: QueryResolvers['token'] = ({ id }) => {
  return db.token.findUnique({
    where: { id },
  })
}

export const createToken: MutationResolvers['createToken'] = ({ input }) => {

  requireAuth({roles: 'STEMMER' })

  validate(input.token , 'token', {
    length: {
      min:1,
      message: "please use the slider to adjust"
    }
  })

  return db.token.create({
    data: input,
  })
}

export const updateToken: MutationResolvers['updateToken'] = ({
  id,
  input,
}) => {



  requireAuth({roles: 'STEMMER' })

  if(input.token )
  validate(input.token , 'token', {
    length: {
      min:1,
      message: "please use the slider to adjust"
    }
  })



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
