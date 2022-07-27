import type { EditTokenById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TokenForm from 'src/components/Token/TokenForm'

export const QUERY = gql`
  query EditTokenById($id: Int!) {
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
const UPDATE_TOKEN_MUTATION = gql`
  mutation UpdateTokenMutation($id: Int!, $input: UpdateTokenInput!) {
    updateToken(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ token }: CellSuccessProps<EditTokenById>) => {
  const [updateToken, { loading, error }] = useMutation(UPDATE_TOKEN_MUTATION, {
    onCompleted: () => {
      toast.success('Token updated')
      navigate(routes.tokens())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { sentenceId: parseInt(input.sentenceId), })
    updateToken({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Token {token.id}</h2>
      </header>
      <div className="rw-segment-main">
        <TokenForm token={token} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
