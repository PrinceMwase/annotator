import type { FindSubjectQuery, FindSubjectQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Subject from 'src/components/Subject/Subject'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'

export const QUERY = gql`
  query FindSubjectQuery {
    subject {
      id
      sentence
      progress
      Token {
        id
        token
        index
        pos
      }
    }
  }
`
const UPDATESENTENCE = gql`
  mutation UPDATESENTENCE($id: Int!, $input: UpdateSentenceInput!) {
    updateSentence(id: $id, input: $input) {
      id
    }
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
  const [updateSentence, { loading, error }] = useMutation(UPDATESENTENCE, {
    onCompleted: () => {
      toast.success('sentence is on stemming')
    },
    refetchQueries: [{ query: QUERY }],
  })

  const { isAuthenticated, currentUser, logOut } = useAuth()

  if (isAuthenticated && subject.progress !== 'STEMMING' && !loading) {
    updateSentence({
      variables : {
        id: subject.id,
        input: {
          progress: "STEMMING",
          modifierId: currentUser.id
        }
      }
    })
    console.log("subject")
  }
  return <Subject subject={subject} />
}
