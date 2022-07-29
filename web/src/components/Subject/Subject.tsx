interface Token {
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
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{subject.sentence}</p>
          <div className="card-actions justify-end">
            {subject.Token.map((token) => (
              <div className="badge badge-outline">{token.token}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subject
