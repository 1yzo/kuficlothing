import React from 'react';

class ContactPage extends React.Component {
    state = {
        name: '',
        email: '',
        message: '',
        error: ''
    }

    onChange = (e) => {
        const value = e.target.value;
        const field = e.target.id;
        const newState = {
            ...this.state
        };
        newState[field] = value;
        this.setState(() => newState);
    }

    onSubmit = () => {
        if (this.state.name && this.state.email && this.state.message) {
            fetch('api/contact', {
                method: 'post',
                body: JSON.stringify({ ...this.state }),
                headers: { 'content-type': 'application/json' }
            });
            this.setState(() => ({
                name: '',
                email: '',
                message: ''
            }));
        } else {
            this.setState(() => ({ error: 'All fields are required' }));
        }
    }
    
    render() {
        return (
            <div className="page page--contact">
                <div className="contact-form">
                    <div className="contact-form__info">
                        <input
                            type="text"
                            value={this.state.name}
                            placeholder="Name"
                            onChange={this.onChange}
                            id="name"
                        />
                        <input
                            type="text"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.onChange}
                            id="email"
                        />
                    </div>
                    <textarea
                        className="contact-form__message"
                        type="text"
                        value={this.state.message}
                        placeholder="Message"
                        onChange={this.onChange}
                        id="message"
                        rows="10"
                        maxLength="1000"
                    />
                    {this.state.error && <div className="error">{this.state.error}</div>}
                    <button className="contact-form__button" onClick={this.onSubmit}>Send</button>
                </div>
            </div>
        );
    }
}

export default ContactPage;