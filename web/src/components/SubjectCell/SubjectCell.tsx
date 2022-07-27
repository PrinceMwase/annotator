import type { FindSubjectQuery, FindSubjectQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindSubjectQuery {
    subject{
      sentence
      Token{
      token
    }}
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindSubjectQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  subject,
}: CellSuccessProps<FindSubjectQuery, FindSubjectQueryVariables>) => {
  return <div>{JSON.stringify(subject)}</div>
}
