import EditSentenceCell from 'src/components/Sentence/EditSentenceCell'

type SentencePageProps = {
  id: number
}

const EditSentencePage = ({ id }: SentencePageProps) => {
  return <EditSentenceCell id={id} />
}

export default EditSentencePage
