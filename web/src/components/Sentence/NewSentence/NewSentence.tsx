import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SentenceForm from 'src/components/Sentence/SentenceForm'

const CREATE_SENTENCE_MUTATION = gql`
  mutation CreateSentenceMutation($input: CreateSentenceInput!) {
    createSentence(input: $input) {
      id
    }
  }
`

const NewSentence = () => {
  const [createSentence, { loading, error }] = useMutation(CREATE_SENTENCE_MUTATION, {
    onCompleted: () => {
      toast.success('Sentence created')
      navigate(routes.sentences())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { modifierId: parseInt(input.modifierId), })
    createSentence({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Sentence</h2>
      </header>
      <div className="rw-segment-main">
        <SentenceForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSentence
