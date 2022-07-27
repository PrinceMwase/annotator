import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Token/TokensCell'

const DELETE_TOKEN_MUTATION = gql`
  mutation DeleteTokenMutation($id: Int!) {
    deleteToken(id: $id) {
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

const TokensList = ({ tokens }) => {
  const [deleteToken] = useMutation(DELETE_TOKEN_MUTATION, {
    onCompleted: () => {
      toast.success('Token deleted')
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
    if (confirm('Are you sure you want to delete token ' + id + '?')) {
      deleteToken({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Token</th>
            <th>Index</th>
            <th>Pos</th>
            <th>Head</th>
            <th>Deprel</th>
            <th>Sentence id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr key={token.id}>
              <td>{truncate(token.id)}</td>
              <td>{truncate(token.token)}</td>
              <td>{truncate(token.index)}</td>
              <td>{truncate(token.pos)}</td>
              <td>{truncate(token.head)}</td>
              <td>{truncate(token.deprel)}</td>
              <td>{truncate(token.sentenceId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.token({ id: token.id })}
                    title={'Show token ' + token.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editToken({ id: token.id })}
                    title={'Edit token ' + token.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete token ' + token.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(token.id)}
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

export default TokensList
