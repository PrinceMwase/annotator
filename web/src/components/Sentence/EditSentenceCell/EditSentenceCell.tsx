import type { EditSentenceById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SentenceForm from 'src/components/Sentence/SentenceForm'

export const QUERY = gql`
  query EditSentenceById($id: Int!) {
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
const UPDATE_SENTENCE_MUTATION = gql`
  mutation UpdateSentenceMutation($id: Int!, $input: UpdateSentenceInput!) {
    updateSentence(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ sentence }: CellSuccessProps<EditSentenceById>) => {
  const [updateSentence, { loading, error }] = useMutation(UPDATE_SENTENCE_MUTATION, {
    onCompleted: () => {
      toast.success('Sentence updated')
      navigate(routes.sentences())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { modifierId: parseInt(input.modifierId), })
    updateSentence({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Sentence {sentence.id}</h2>
      </header>
      <div className="rw-segment-main">
        <SentenceForm sentence={sentence} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
