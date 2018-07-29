import React from 'react';
import { auth } from '../../firebase/firebase';

class LoginPage extends React.Component {
    state = {
        email: '',
        password: '',
        error: ''
    };
    
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    }

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    }

    onSubmit = (e) => {
        e.preventDefault;
        const { email, password } = this.state; 
        auth.signInWithEmailAndPassword(email, password)
            .catch(({ message }) => this.setState(() => ({ error: message   })));

    }     
    
    render() {
        return (
            <div className="page" style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
                }}>
                <form className="login-form" onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.onEmailChange}
                        placeholder="Email"
                    />
                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                        placeholder="Password"
                    />
                    <button>Login</button>
                </form>
                {this.state.error && <div>{this.state.error}</div>}
            </div>
        );
    }
}

export default LoginPage;