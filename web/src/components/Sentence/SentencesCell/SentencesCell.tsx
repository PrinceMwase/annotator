import type { FindSentences } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Sentences from 'src/components/Sentence/Sentences'

export const QUERY = gql`
  query FindSentences {
    sentences {
      id
      sentence
      source
      progress
      uploaderID
      modifierId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No sentences yet. '}
      <Link
        to={routes.newSentence()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ sentences }: CellSuccessProps<FindSentences>) => {
  return <Sentences sentences={sentences} />
}
