import React from 'react';
import { connect } from 'react-redux';

class OrderInfoPage extends React.Component {
    render() {
        return (
            <div className="page">
                Viewing {`this.props.order.id`}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    order: state.orders.find((order) => order.id === props.match.params.orderId)
});

export default connect(mapStateToProps)(OrderInfoPage);