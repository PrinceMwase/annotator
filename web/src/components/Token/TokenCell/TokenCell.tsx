import type { FindTokenById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Token from 'src/components/Token/Token'

export const QUERY = gql`
  query FindTokenById($id: Int!) {
    token: token(id: $id) {
      id
      token
      index
      pos
      head
      deprel
      sentenceId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Token not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ token }: CellSuccessProps<FindTokenById>) => {
  return <Token token={token} />
}
