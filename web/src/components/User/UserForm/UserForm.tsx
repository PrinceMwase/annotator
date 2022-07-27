import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  Submit,
} from '@redwoodjs/forms'



const UserForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.user?.id)
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
          name="phone_number"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone number
        </Label>
        
          <TextField
            name="phone_number"
            defaultValue={props.user?.phone_number}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="phone_number" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        
          <TextField
            name="email"
            defaultValue={props.user?.email}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        
          <TextField
            name="name"
            defaultValue={props.user?.name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="role"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Role
        </Label>
        
          
          
        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-0"
            name="role"
            defaultValue="STEMMER"
            defaultChecked={props.user?.role?.includes('STEMMER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Stemmer
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-1"
            name="role"
            defaultValue="VERIFIER"
            defaultChecked={props.user?.role?.includes('VERIFIER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Verifier
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-2"
            name="role"
            defaultValue="ANNOTATOR"
            defaultChecked={props.user?.role?.includes('ANNOTATOR')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Annotator
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-3"
            name="role"
            defaultValue="INACTIVE"
            defaultChecked={props.user?.role?.includes('INACTIVE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Inactive
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="user-role-4"
            name="role"
            defaultValue="SUPER"
            defaultChecked={props.user?.role?.includes('SUPER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Super
          </div>
        </div>
          
        

        <FieldError name="role" className="rw-field-error" />

        <Label
          name="password"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Password
        </Label>
        
          <TextField
            name="password"
            defaultValue={props.user?.password}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="password" className="rw-field-error" />

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

export default UserForm
