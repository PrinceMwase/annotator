import type { FindTokens } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Tokens from 'src/components/Token/Tokens'

export const QUERY = gql`
  query FindTokens {
    tokens {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No tokens yet. '}
      <Link
        to={routes.newToken()}
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

export const Success = ({ tokens }: CellSuccessProps<FindTokens>) => {
  return <Tokens tokens={tokens} />
}
