import { useState } from 'react'
import { toast } from '@redwoodjs/web/toast'
import {
  Form,
  FormError,
  Label,
  TextField,
  TextAreaField,
  NumberField,
  Submit,
  FieldError,
  SubmitHandler,
} from '@redwoodjs/forms'
import { QUERY as SubjectQuery } from 'src/components/SubjectCell'
import { useMutation } from '@redwoodjs/web'

interface Token {
  id: React.Key
  token: String
  pos?: String
  index: Number
}

const UPOS = {
  ADJ: 'adjective',
  ADP: 'adposition',
  ADV: 'adverb',
  AUX: 'auxiliary',
  CCONJ: 'coordinating conjunction',
  DET: 'determiner',
  INTJ: 'interjection',
  NOUN: 'noun',
  NUM: 'numeral',
  PART: 'particle',
  PRON: 'pronoun',
  PROPN: 'proper noun',
  PUNCT: 'punctuation',
  SCONJ: 'subordinating conjunction',
  SYM: 'symbol',
  VERB: 'verb',
  X: 'other',
}

interface Props {
  subject: { sentence: String; Token: Token[] }
}

const CREATE = gql`
  mutation CREATE($input: CreateTokenInput!) {
    createToken(input: $input) {
      token
      pos
      sentence {
        id
      }
    }
  }
`

const UPDATE = gql`
  mutation UPDATE($id: Int!, $input: UpdateTokenInput!){
    updateToken(id: $id, input: $input) {
      token
      pos
      sentence {
        id
      }
    }
  }
`

interface CreateValues {
  token: string
  index: number
  sentenceId: string
}

interface UpdateValues {
  token: string
}

const Subject = ({ subject }: Props) => {
  const [newIndex, setnewIndex] = useState(0)

  const [createToken, { loading, error }] = useMutation(CREATE, {
    onCompleted: () => {
      toast.success('branched a new token')

      // run if no error in branching
      if(!error)
      updateToken(
        {
          variables: {
            id: thisToken ? parseInt( thisToken.dataset.key) : 0,
            input: {
              token: breaks.length > 0 ? breaks[0] : ''
            }
          }
        }
      )

    },
  })
  const [updateToken] = useMutation(UPDATE, {
    onCompleted: () => {
      toast.success('updated token')
    },
    refetchQueries: [{query:SubjectQuery}]
  })

  const onSubmit: SubmitHandler<CreateValues> = (input) => {
    if(!loading)
    createToken({
      variables: {
        input: {
          token: breaks.length > 0 ? breaks[1] : '',
          index: newIndex,
          sentenceId: subject.id,
          pos: pos || ''
        },
      },
    })

    // get the id


  }

  const [breaks, setbreaks] = useState([])

  // store parts of speech
  const [tags, setTags] = useState([])

  // The current Word Token
  const [thisToken, setToken] = React.useState()

  // The current part of speech of the token
  const [pos, setPos] = useState()

  // store the subject
  const [sentence, setSentence] = React.useState(subject.sentence)

  // store the right part of the sentence whene sliced
  const [rightword, setRight] = React.useState('')

  // store the left part of the sentence when sliced
  const [leftword, setLeft] = React.useState('')

  // store the word
  const [word, setWord] = React.useState('')

  const [wordLength, setwordLength] = useState(0)

  /**
   * handle clicked token
   * @param event
   */

  const limiterClicked = (event: { target: { value: any } }) => {
    const limit = event.target.value
    const left = word.slice(0, limit)
    setbreaks([left, word.slice(limit)])

    if (thisToken) {
      setnewIndex(left.length + parseInt(thisToken.id))
    }
  }

  const tokenClicked = (event: { target: any }) => {
    setbreaks([])
    setPos(event.target.dataset.pos)
    const raw_token = event.target.innerText
    event.target.classList.add('text-lg')
    setToken(event.target)


    const word_index = event.target.id
    setnewIndex(word_index)
    let right_words = sentence.slice(word_index)

    const left_words = sentence.slice(0, word_index)

    const word_length = raw_token.length
    setwordLength(word_length)

    let word = right_words.slice(0, word_length)
    right_words = right_words.slice(word_length)

    setLeft(left_words)
    setRight(right_words)
    setWord(word)

    // make the selected token standout
    if (thisToken) {
      if (thisToken !== event.target) {
        thisToken.classList.remove('text-lg')
      }
    }

    // set the parts of speech tags
    if (tags.length === 0) {
      let getTags = []
      Object.entries(UPOS).forEach(([key, value]) => {
        getTags.push(key)
      })

      setTags(getTags)
    }
  }

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div>
            {thisToken ? '' : sentence}
            <span>{leftword}</span>
            <span className="text-purple-600 dark:text-yellow-400 mx-2 indicator">
              {word}
              <span className="indicator-item badge badge-primary">
                {pos || ''}
              </span>
            </span>
            <span>{rightword}</span>
          </div>
          <div className="card-actions justify-end">
            {subject.Token.map((token) => (
              <div
                data-pos={token.pos}
                className="badge badge-outline cursor-pointer "
                onClick={tokenClicked}
                key={token.id}
                data-key={token.id}
                id={token.index.toString()}
              >
                {token.token}
              </div>
            ))}
          </div>

          {/* Break Word */}
          <input
            type="range"
            min="0"
            max={wordLength + 1}
            className="range range-accent range-xs"
            step="1"
            onChange={limiterClicked}
          />
          {/* <div className="w-full flex justify-between text-xs px-2">

          </div> */}

          {/* Show Broken words */}
          <div
            className="flex w-full tooltip tooltip-open tooltip-bottom  "
            data-tip="use the slider to slice token"
          >
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
              {breaks.length > 0 ? breaks[0] : 'nothing to show'}
            </div>
            <div className="divider divider-horizontal">and</div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
              {breaks.length > 0 ? breaks[1] : 'nothing to show'}
            </div>
          </div>

          {/* sumbit token */}

          <Form className="my-20" onSubmit={onSubmit}>
            <FormError error={error} />
            <NumberField name="index" readOnly hidden value={newIndex} />
            <NumberField name="sentenceId" hidden readOnly value={subject.id} />
            <TextField
hidden
              name="token"
              readOnly
              value={breaks.length > 0 ? breaks[1] : ''}
            />
            <FieldError name="token" className="error-message" />
            <br />
            <Submit className="btn btn-outline btn-accent" disabled={breaks.length > 0 && breaks[0].length > 0 && breaks[1].length > 0? false : true} >break Token</Submit>
          </Form>

          {/* Universal parts of speech */}
          <ul className="list-none py-10">
            {tags.length > 0 ? (
              tags.map((x) => (
                <li
                  className={
                    pos === x ? 'text-purple-700' : 'dark:text-yellow-400'
                  }
                  key={x}
                >
                  {' '}
                  {x}{' '}
                </li>
              ))
            ) : (
              <li>empty</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Subject
