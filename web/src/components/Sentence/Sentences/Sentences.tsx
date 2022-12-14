import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Sentence/SentencesCell'

const DELETE_SENTENCE_MUTATION = gql`
  mutation DeleteSentenceMutation($id: Int!) {
    deleteSentence(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const SentencesList = ({ sentences }) => {
  const [deleteSentence] = useMutation(DELETE_SENTENCE_MUTATION, {
    onCompleted: () => {
      toast.success('Sentence deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete sentence ' + id + '?')) {
      deleteSentence({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Sentence</th>
            <th>Source</th>
            <th>Progress</th>
            <th>Uploader id</th>
            <th>Modifier id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {sentences.map((sentence) => (
            <tr key={sentence.id}>
              <td>{truncate(sentence.id)}</td>
              <td>{truncate(sentence.sentence)}</td>
              <td>{truncate(sentence.source)}</td>
              <td>{formatEnum(sentence.progress)}</td>
              <td>{truncate(sentence.uploaderID)}</td>
              <td>{truncate(sentence.modifierId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.sentence({ id: sentence.id })}
                    title={'Show sentence ' + sentence.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSentence({ id: sentence.id })}
                    title={'Edit sentence ' + sentence.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete sentence ' + sentence.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(sentence.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SentencesList
