import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'



const TokenForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.token?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="token"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Token
        </Label>
        
          <TextField
            name="token"
            defaultValue={props.token?.token}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="token" className="rw-field-error" />

        <Label
          name="index"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Index
        </Label>
        
          <NumberField
            name="index"
            defaultValue={props.token?.index}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="index" className="rw-field-error" />

        <Label
          name="pos"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pos
        </Label>
        
          <TextField
            name="pos"
            defaultValue={props.token?.pos}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="pos" className="rw-field-error" />

        <Label
          name="head"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Head
        </Label>
        
          <NumberField
            name="head"
            defaultValue={props.token?.head}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="head" className="rw-field-error" />

        <Label
          name="deprel"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deprel
        </Label>
        
          <TextField
            name="deprel"
            defaultValue={props.token?.deprel}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="deprel" className="rw-field-error" />

        <Label
          name="sentenceId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sentence id
        </Label>
        
          <NumberField
            name="sentenceId"
            defaultValue={props.token?.sentenceId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="sentenceId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TokenForm
