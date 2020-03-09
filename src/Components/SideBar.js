import React from 'react';
import useValitedForm from 'react-valida-hook'

const initialState = {
    firstName: '',
    lastName: '',
    message: ''
}

const validations = [
    {
        name: 'firstName',
        type: 'Enter your Name',
        stateMap: 'firstName'
    },
    {
        name: 'lastName',
        type: 'Enter you Last Name ',
        stateMap: 'lastName'
    },
    {
        name: 'message',
        type: 'Type message',
        stateMap: 'message'
    }
]

const SideBar = () => {
    const [formData, validation, validateForm, getData] = useValitedForm(initialState, validations)
    const submit = (event) => {
        event.preventDefault()
        const valid = validateForm()
        console.log(getData())
    }
    return (
        <div className="side-bar">
            <div className="side-bar-header">
                <h2>Quisque a justo</h2>
                <p>Quisque a justo efficitur, sagittis felis at, maximus lacus. Sed id tempor mauris. Suspendisse eget ipsum nibh. Nam ornare sodales mi quis ornare. Ut at accumsan felis. Nulla facilisi. </p>
            </div>
            <form className="application-form" noValidate={true} onSubmit={submit}>
                <label>
                    First name
              <input type="text" name="firstName" placeholder="First name" {...formData.firstName.input} />
                </label>
                <div className='errors'>
                    {validation.errors.firstName.join(', ')}
                </div>
                <label>
                    Last name
              <input type="text" name="lastName" placeholder="Last name" {...formData.lastName.input} />
                </label>
                <div className='errors'>
                    {validation.errors.lastName.join(', ')}
                </div>
                <label>
                    Your message
              <textarea name="message" className="textarea" placeholder="Type your message here" {...formData.message.input} />
              <div className='errors'>
                    {validation.errors.message.join(', ')}
                </div>
                </label>
                <button className="btn-submit" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SideBar;