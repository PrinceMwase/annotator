import { useState } from 'react'

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

const Subject = ({ subject }: Props) => {

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

    setbreaks([word.slice(0, limit), word.slice(limit)])
  }

  const tokenClicked = (event: { target: any }) => {
    setbreaks([])
    setPos(event.target.dataset.pos)
    const raw_token = event.target.innerText
    event.target.classList.add('text-lg')
    setToken(event.target)

    const word_index = event.target.id

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
          <div className="flex w-full tooltip tooltip-open tooltip-bottom  " data-tip="use the slider to slice token">

            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
              {breaks.length > 0 ? breaks[0] : "nothing to show"}

            </div>
            <div className="divider divider-horizontal">and</div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            {breaks.length > 0 ? breaks[1] : "nothing to show"}
            </div>
          </div>

          {/* sumbit token */}

          <button className="btn btn-active btn-accent my-20">Button</button>

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
