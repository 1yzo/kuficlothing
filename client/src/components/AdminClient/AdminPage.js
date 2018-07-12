import React from 'react';
import { connect } from 'react-redux';
import { toggleAdmin } from '../../actions/config';
import '../../styles/adminPage.css';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

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
                <ProductForm />
                <ProductList />
            </div>
        );
    }
}

export default connect()(AdminPage);