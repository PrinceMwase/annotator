import type { CountMyStemmedSubjectsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'


export const QUERY = gql`
  query FindCountMyStemmedSubjects {
    countMyStemmedSubjects {
      _all
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ countMyStemmedSubjects }: CellSuccessProps<FindCountMyStemmedSubjects>) => {
  return <span>{countMyStemmedSubjects._all}</span>
}
