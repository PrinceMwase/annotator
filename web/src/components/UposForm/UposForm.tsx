import {
  Form,
  NumberField,
  Submit,
  FieldError,
  SubmitHandler,
  SelectField,
  FormError
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { QUERY as SubjectQuery } from 'src/components/SubjectCell'

interface PROPS {
  id: string
  pos: string
  tags: string[]
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

const UPDATE = gql`
  mutation UPDATE($id: Int!, $input: UpdateTokenInput!){
    updateToken(id: $id, input: $input) {
      sentence {
        id
      }
    }
  }
`
interface updateValues{
  id: number,
  pos: string
}

const UposForm = (props: PROPS) => {

  // update Part of speech
 const [updateToken, {loading, error}] =  useMutation(UPDATE, {
  onCompleted: ( ) => {
    toast.success('assigned POS')
  },
  refetchQueries: [{query:SubjectQuery}]
 })

  // submit event handler
  const onSubmit: SubmitHandler<updateValues> = (input) => {


    if(!loading)
    updateToken( {
      variables : {
        id: parseInt(props.id),
        input: {
          pos: input.pos
        }
      }
    })
  }


  return (
    <>
      <Form onSubmit={onSubmit}>
      <FormError error={error} />
        <NumberField name="id" hidden value={props.id} />
        <SelectField
          name="pos"
          className="select select-accent w-full max-w-xs"
        >
          <option disabled defaultValue={props.pos}>
            {props.pos}
          </option>
          {props.tags.length > 0 ? (
            props.tags.map((x) => <option value={x} key={x} disabled={x===props.pos}>{UPOS[x]}</option>)
          ) : (
            <option>Empty</option>
          )}

        </SelectField>
        <Submit className="btn btn-outline btn-accent my-1 w-full max-w-xs">
            assign POS
          </Submit>
      </Form>
    </>
  )
}

export default UposForm
