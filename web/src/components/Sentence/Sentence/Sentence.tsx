import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_SENTENCE_MUTATION = gql`
  mutation DeleteSentenceMutation($id: Int!) {
    deleteSentence(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Sentence = ({ sentence }) => {
  const [deleteSentence] = useMutation(DELETE_SENTENCE_MUTATION, {
    onCompleted: () => {
      toast.success('Sentence deleted')
      navigate(routes.sentences())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete sentence ' + id + '?')) {
      deleteSentence({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Sentence {sentence.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{sentence.id}</td>
            </tr><tr>
              <th>Sentence</th>
              <td>{sentence.sentence}</td>
            </tr><tr>
              <th>Source</th>
              <td>{sentence.source}</td>
            </tr><tr>
              <th>Progress</th>
              <td>{formatEnum(sentence.progress)}</td>
            </tr><tr>
              <th>Uploader id</th>
              <td>{sentence.uploaderID}</td>
            </tr><tr>
              <th>Modifier id</th>
              <td>{sentence.modifierId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSentence({ id: sentence.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(sentence.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Sentence
