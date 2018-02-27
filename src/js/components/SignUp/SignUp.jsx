import React from 'react';
import { createUser, updateSignUp } from '../../actions/signup';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.validateAndSubmit = this.validateAndSubmit.bind(this);
        this.updateForm = this.updateForm.bind(this);
    }

    validateAndSubmit(e) {
        //don't do any silly redirects
        e.preventDefault();

        //data accessible from store
        //need to connect it to figure out exactly where this is
        let firstName, lastName, username, email, password;

        if (!firstName.match(/^[a-z]+$/i) || !lastName.match(/^[a-z]+$/i)) {
            console.log('name validation failed');
            return false;
        }
        //literally black magic
        if (!email.match(/^[^@]+@[^\.]+(\.[a-z0-9]+)*\.[a-z]+/i)) {
            console.log('email validation failed');
            return false;
        }

        if (password.length < 8) {
            console.log('password validation failed');
            return false;
        }
        //need to figure this out
        if (!isAvailable(username)) {
            console.log('username is already taken');
            return false;
        }

        //if all of those pass, go ahead and create a new user
        this.props.dispatch(createUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password,
        }))

    }

    updateForm(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.props.dispatch(updateSignUp({ name: name, value: value }));
    }

    render() {
        return (
            <div>
                <form>

                    <input type='text' onChange={this.updateForm} name='first-name' placeholder='First Name' />
                    <input type='text' onChange={this.updateForm} name='last-name' placeholder='Last Name' />
                    <input type='text' onChange={this.updateForm} name='username' placeholder='Username' />
                    <input type='text' onChange={this.updateForm} name='email' placeholder='Email' />
                    <input type='password' onChange={this.updateForm} name='password' placeholder='Password' />

                    <button type='submit' onClick={this.validateAndSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUp;