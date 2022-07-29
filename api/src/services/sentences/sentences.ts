import type {
  QueryResolvers,
  MutationResolvers,
  SentenceResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const sentences: QueryResolvers['sentences'] = () => {
  return db.sentence.findMany()
}

export const sentence: QueryResolvers['sentence'] = ({ id }) => {
  return db.sentence.findUnique({
    where: { id },
  })
}
export const subject = () => {
  return db.sentence.findFirst({
    where: {
       OR:[
        {
          progress: "STEMMING",
          modifierId:2
        },
        {
          progress: "RAW"
        }
       ]
      },
  })

}

export const createSentence: MutationResolvers['createSentence'] = ({
  input,
}) => {
  return db.sentence.create({
    data: input,
  })
}

export const updateSentence: MutationResolvers['updateSentence'] = ({
  id,
  input,
}) => {
  return db.sentence.update({
    data: input,
    where: { id },
  })
}

export const deleteSentence: MutationResolvers['deleteSentence'] = ({ id }) => {
  return db.sentence.delete({
    where: { id },
  })
}

export const Sentence: SentenceResolvers = {
  uploader: (_obj, { root }) =>
    db.sentence.findUnique({ where: { id: root.id } }).uploader(),
  modifier: (_obj, { root }) =>
    db.sentence.findUnique({ where: { id: root.id } }).modifier(),
  Token: (_obj, { root }) =>
    db.sentence.findUnique({ where: { id: root.id } }).Token(),
}
