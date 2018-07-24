import React from 'react';
import numeral from 'numeral';
import moment from 'moment';

class OrderCard extends React.Component {
    render() {
        const { customerName, image, addressInfo, amount, shipped, date  } = this.props;
        return (
            <div className="order-card">
                <div>{customerName}</div>
                <div>{numeral(amount).format('$0, 0.00')}</div>
                {shipped ? <div>Shipped</div> : <div>Unshipped</div>}
                <div>{moment(date).format('MMMM, D YYYY')}</div>
            </div>
        );
    }
}

export default OrderCard;