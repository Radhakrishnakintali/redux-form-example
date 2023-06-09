import { reduxForm, Field } from 'redux-form';
import renderField from './renderField'

let SignInForm = props => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit} className="form">
        <div className="field">
            <div className="control">
            <Field name="firstName" component={renderField} type="text" label="First Name"/>
            </div>
        </div>
    
        <div className="field">
            <div className="control">
            <Field name="lastName" component={renderField} type="text" label="Last Name"/>
            </div>
        </div>
    
        <div className="field">
            <div className="control">
            <Field name="email" component={renderField} type="email" label="Email Address"/>
            </div>
        </div>
    
        <div className="field">
            <div className="control">
            <Field name="age" component={renderField} type="number" label="Age"/>
            </div>
        </div>
    
        <div className="field">
            <div className="control">
            <label className="label">Proficiency</label>
            <div className="select">
                <Field className="input" name="proficiency" component="select">
                <option />
                <option value="beginner">Beginner Dev</option>
                <option value="intermediate">Intermediate Dev</option>
                <option value="expert">Expert Dev</option>
                </Field>
            </div>
            </div>
        </div>
    
        <div className="field">
            <div className="control">
            <label className="label">Gender</label>
            <label className="radio">
                <Field name="gender" component="input" type="radio" value="male" />
                {' '}
                Male
            </label>
            <label className="radio">
                <Field name="gender" component="input" type="radio" value="female" />
                {' '}
                Female
            </label>
            </div>
        </div>
    
        <div className="field">
            <div className="control">
            <label className="checkbox">
                <Field name="saveDetails" id="saveDetails" component="input" type="checkbox"/>
                Save Details
            </label>
            </div>
        </div>
    
        <div className="field">
            <div className="control">
            <label className="label">Message</label>
            <Field className="textarea" name="message" component="textarea" />
            </div>
        </div>
    
        <div className="field">
            <div className="control">
            <button className="button is-link">Submit</button>
            </div>
        </div>
    </form>;
  };
  
  const validate = val => {
    const errors = {};
    if (!val.firstName) {
      console.log('First Name is required');
      errors.firstName = 'Required';
    }
    if (!val.lastName) {
      console.log('Last Name is required');
      errors.lastName = 'Required';
    }
    if (!val.email) {
      console.log('email is required');
      errors.email = 'Required';
    } else if (!/^.+@.+$/i.test(val.email)) {
      console.log('email is invalid');
      errors.email = 'Invalid email address';
    }
    if (!val.age) {
      errors.age = 'Required'
    } else if (isNaN(Number(val.age))) {
      errors.age = 'Must be a number'
    } else if (Number(val.age) < 18) {
      errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors;
  };
  
  export default SignInForm = reduxForm({
    form: 'signIn',
    validate,
  })(SignInForm);