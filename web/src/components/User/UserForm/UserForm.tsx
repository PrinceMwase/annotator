import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  RadioField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'


const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}


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
          name="roles"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Roles
        </Label>
        
          
          
        <div className="rw-check-radio-items">
          <RadioField
            id="user-roles-0"
            name="roles"
            defaultValue="STEMMER"
            defaultChecked={props.user?.roles?.includes('STEMMER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Stemmer
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="user-roles-1"
            name="roles"
            defaultValue="VERIFIER"
            defaultChecked={props.user?.roles?.includes('VERIFIER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Verifier
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="user-roles-2"
            name="roles"
            defaultValue="ANNOTATOR"
            defaultChecked={props.user?.roles?.includes('ANNOTATOR')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Annotator
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="user-roles-3"
            name="roles"
            defaultValue="INACTIVE"
            defaultChecked={props.user?.roles?.includes('INACTIVE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Inactive
          </div>
        </div>
          
        <div className="rw-check-radio-items">
          <RadioField
            id="user-roles-4"
            name="roles"
            defaultValue="SUPER"
            defaultChecked={props.user?.roles?.includes('SUPER')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>
            Super
          </div>
        </div>
          
        

        <FieldError name="roles" className="rw-field-error" />

        <Label
          name="hashedPassword"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Hashed password
        </Label>
        
          <TextField
            name="hashedPassword"
            defaultValue={props.user?.hashedPassword}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="hashedPassword" className="rw-field-error" />

        <Label
          name="salt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Salt
        </Label>
        
          <TextField
            name="salt"
            defaultValue={props.user?.salt}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="salt" className="rw-field-error" />

        <Label
          name="resetToken"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reset token
        </Label>
        
          <TextField
            name="resetToken"
            defaultValue={props.user?.resetToken}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="resetToken" className="rw-field-error" />

        <Label
          name="resetTokenExpiresAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reset token expires at
        </Label>
        
          <DatetimeLocalField
            name="resetTokenExpiresAt"
            defaultValue={formatDatetime(props.user?.resetTokenExpiresAt)}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="resetTokenExpiresAt" className="rw-field-error" />

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
