import React from 'react';
import { connect } from 'react-redux';

class ShoppingCart extends React.Component {
    componentDidMount = () => {
        // const json = localStorage.getItem('cart');
        // const json = JSON.parse(json);
    }
    
    render() {
        return (
            <div className="page">
                {this.props.items.map((item) => <div>{item.name}</div>)}
            </div>
        );
    }
};


const mapStateToProps = (state) => ({
    items: state.cart
});

export default connect(mapStateToProps)(ShoppingCart);