import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import moment from 'moment';
import { startToggleShippedStatus } from '../../actions/orders';

class OrderCard extends React.Component {
    handleShippingClick = () => {
        const { id } = this.props;
        this.props.toggleShipping(id); 
    }
    
    render() {
        const { id, customerName, image, addressInfo, amount, shipped, date  } = this.props;
        return (
            <div className="order-card">
                <div>{customerName}</div>
                <div>{numeral(amount).format('$0, 0.00')}</div>
                <div onClick={this.handleShippingClick}>{shipped ? 'shipped' : 'unshipped'}</div>
                <div>{moment(date).format('MMMM, D YYYY')}</div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    toggleShipping: (id) => dispatch(startToggleShippedStatus(id))
});

export default connect(undefined, mapDispatchToProps)(OrderCard);