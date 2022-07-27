import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_TOKEN_MUTATION = gql`
  mutation DeleteTokenMutation($id: Int!) {
    deleteToken(id: $id) {
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

const Token = ({ token }) => {
  const [deleteToken] = useMutation(DELETE_TOKEN_MUTATION, {
    onCompleted: () => {
      toast.success('Token deleted')
      navigate(routes.tokens())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete token ' + id + '?')) {
      deleteToken({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Token {token.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{token.id}</td>
            </tr><tr>
              <th>Token</th>
              <td>{token.token}</td>
            </tr><tr>
              <th>Index</th>
              <td>{token.index}</td>
            </tr><tr>
              <th>Pos</th>
              <td>{token.pos}</td>
            </tr><tr>
              <th>Head</th>
              <td>{token.head}</td>
            </tr><tr>
              <th>Deprel</th>
              <td>{token.deprel}</td>
            </tr><tr>
              <th>Sentence id</th>
              <td>{token.sentenceId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editToken({ id: token.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(token.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Token
