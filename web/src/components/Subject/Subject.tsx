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
  const [thisToken, setToken] = React.useState()

  const [pos, setPos] = useState()
  const [sentence, setSentence] = React.useState(subject.sentence)
  const [rightword, setRight] = React.useState('')
  const [leftword, setLeft] = React.useState('')
  const [word, setWord] = React.useState('')

  /**
   * handle clicked token
   * @param event
   */
  const tokenClicked = (event: { target: any }) => {
    setPos(event.target.dataset.pos)
    const raw_token = event.target.innerText
    event.target.classList.add('text-lg')
    setToken(event.target)

    const word_index = event.target.id

    let right_words = sentence.slice(word_index)

    const left_words = sentence.slice(0, word_index)

    const word_length = raw_token.length

    let word = right_words.slice(0, word_length)
    right_words = right_words.slice(word_length)

    setLeft(left_words)
    setRight(right_words)
    setWord(word)

    if (thisToken) {
      if (thisToken !== event.target) {
        thisToken.classList.remove('text-lg')
      }
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
        </div>
      </div>
    </div>
  )
}

export default Subject
