import type { FindSubjectQuery, FindSubjectQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Subject from 'src/components/Subject/Subject'

export const QUERY = gql`
  query FindSubjectQuery {
    subject{
      sentence
      Token{
      token
      index
      pos

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
  return <Subject subject={subject}/>
}
