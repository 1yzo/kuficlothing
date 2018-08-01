import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';
import { startToggleShippedStatus } from '../../actions/orders';

class OrderCard extends React.Component {
    handleShippingClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        
        const { id } = this.props;
        this.props.toggleShipping(id); 
    }
    
    render() {
        const { id, customerName, image, addressInfo, amount, shipped, date  } = this.props;
        return (
            <Link className="order-card" to={`/admin/order/${id}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div>{customerName}</div>
                    <i className="material-icons" onClick={this.handleShippingClick}>{shipped ? 'undo' : 'local_shipping'}</i>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="order-info">{numeral(amount / 100).format('$0, 0.00')}</div>
                    <div className="order-info">{moment(date).format('MMMM, D YYYY')}</div>
                </div>
            </Link>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    toggleShipping: (id) => dispatch(startToggleShippedStatus(id))
});

export default connect(undefined, mapDispatchToProps)(OrderCard);