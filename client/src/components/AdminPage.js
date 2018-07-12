import React from 'react';
import { connect } from 'react-redux';
import { toggleAdmin } from '../actions/config';

class AdminPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(toggleAdmin(true));
    }

    componentWillUnmount() {
        this.props.dispatch(toggleAdmin(false));
    }
    
    render() {
        return (
            <div>
                Keep track of if ADminPage is being rendered to hide Header
            </div>
        );
    }
}

export default connect()(AdminPage);