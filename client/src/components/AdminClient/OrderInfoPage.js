import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class OrderInfoPage extends React.Component {
    onBackClick = () => {
        this.props.setSelectedOrderId(undefined);
    }

    componentWillUnmount = () => {
        this.props.setSelectedOrderId(undefined);
    }
    
    render() {
        return (
            <div className="page order-page">
                <i className="material-icons back-button" onClick={this.onBackClick}>arrow_back</i>
                <div>{this.props.order.customerName}</div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    order: state.orders.find((order) => order.id === props.id)
});

export default withRouter(connect(mapStateToProps)(OrderInfoPage));