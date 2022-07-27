import SentenceCell from 'src/components/Sentence/SentenceCell'

type SentencePageProps = {
  id: number
}

const SentencePage = ({ id }: SentencePageProps) => {
  return <SentenceCell id={id} />
}

export default SentencePage
