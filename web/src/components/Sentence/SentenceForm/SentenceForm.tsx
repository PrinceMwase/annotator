import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'



const SentenceForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.sentence?.id)
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
          name="sentence"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sentence
        </Label>
        
          <TextField
            name="sentence"
            defaultValue={props.sentence?.sentence}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="sentence" className="rw-field-error" />

        <Label
          name="source"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Source
        </Label>
        
          <TextField
            name="source"
            defaultValue={props.sentence?.source}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="source" className="rw-field-error" />

        <Label
          name="progress"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Progress
        </Label>
        
          
          
        <div className="rw-check-radio-items">
          <RadioField
            id="sentence-progress-0"
            name="progress"
            defaultValue="VERIFIED"
            defaultChecked={props.sentence?.progress?.includes('VERIFIED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Verified
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="sentence-progress-1"
            name="progress"
            defaultValue="PENDING_VERIFICATION"
            defaultChecked={props.sentence?.progress?.includes('PENDING_VERIFICATION')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Pending Verification
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="sentence-progress-2"
            name="progress"
            defaultValue="ANNOTATED"
            defaultChecked={props.sentence?.progress?.includes('ANNOTATED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Annotated
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="sentence-progress-3"
            name="progress"
            defaultValue="STEMMING"
            defaultChecked={props.sentence?.progress?.includes('STEMMING')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Stemming
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="sentence-progress-4"
            name="progress"
            defaultValue="STEMMED"
            defaultChecked={props.sentence?.progress?.includes('STEMMED')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Stemmed
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="sentence-progress-5"
            name="progress"
            defaultValue="RAW"
            defaultChecked={props.sentence?.progress?.includes('RAW')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Raw
          </div>
        </div>
          
        

        <FieldError name="progress" className="rw-field-error" />

        <Label
          name="uploaderID"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Uploader id
        </Label>
        
          <NumberField
            name="uploaderID"
            defaultValue={props.sentence?.uploaderID}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="uploaderID" className="rw-field-error" />

        <Label
          name="modifierId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Modifier id
        </Label>
        
          <NumberField
            name="modifierId"
            defaultValue={props.sentence?.modifierId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="modifierId" className="rw-field-error" />

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

export default SentenceForm
