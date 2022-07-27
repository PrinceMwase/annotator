import type { FindSentenceById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Sentence from 'src/components/Sentence/Sentence'

export const QUERY = gql`
  query FindSentenceById($id: Int!) {
    sentence: sentence(id: $id) {
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

export const Empty = () => <div>Sentence not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ sentence }: CellSuccessProps<FindSentenceById>) => {
  return <Sentence sentence={sentence} />
}
