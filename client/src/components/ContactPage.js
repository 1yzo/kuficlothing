import React from 'react';

class ContactPage extends React.Component {
    state = {
        name: '',
        email: '',
        message: ''
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
                    <button className="contact-form__button" onClick={this.onSubmit}>Submit</button>
                </div>
            </div>
        );
    }
}

export default ContactPage;