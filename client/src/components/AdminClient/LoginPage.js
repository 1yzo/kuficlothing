import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase';
import {  startLogin } from '../../actions/config';

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
            .then((res) => { 
                this.props.dispatch(startLogin(res.user.uid))
                    .then(() => this.props.history.push('/admin/dashboard'));
            })
            .catch(({ message }) => this.setState(() => ({ error: message   })));

    }     

    componentDidMount() {
        const currentUser = auth.currentUser;
        if (currentUser) {
            this.props.history.push('/admin/dashboard');
        }
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

export default connect()(LoginPage);