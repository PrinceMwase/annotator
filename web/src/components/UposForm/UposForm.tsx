import {
  Form,
  NumberField,
  Submit,
  FieldError,
  SubmitHandler,
  SelectField,
} from '@redwoodjs/forms'

interface PROPS {
  id: number
  pos: string
  tags: string[]
}

const UposForm = (props: PROPS) => {
  return (
    <>
      <Form>
        <NumberField name="id" readOnly hidden value={props.id} />
        <SelectField
          name="pos"
          className="select select-accent w-full max-w-xs"
        >
          <option disabled defaultValue={props.pos}>
            {props.pos}
          </option>
          {props.tags.length > 0 ? (
            props.tags.map((x) => <option value={x} key={x} disabled={x===props.pos}>{x}</option>)
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
