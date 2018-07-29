import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import numeral from 'numeral';

class OrderInfoPage extends React.Component {
    state = { totalPrice: 0 }

    formatName = (name) => {
        const arr = name.split(' ');
        const size = arr.slice(arr.length - 1)[0];
        let sizeLetter = size.slice(0, 1);
        sizeLetter = sizeLetter === 'x' ? 'XL' : sizeLetter.toUpperCase();
        const subName = name.replace(size, '');
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>{subName}</div>
                <div style={{ marginTop: '1rem', color: 'rgba(158, 147, 147, 0.801)' }}>{sizeLetter}</div>
            </div>
        );
    }
    
    render() {
        const { addressInfo , cart} = this.props.order;
        return (
            <div className="page order-page">
                <div className="address-box">
                    <div>{this.props.order.customerName}</div>
                    <div>{addressInfo.billing_address_line1}</div>
                    <div>{`${addressInfo.shipping_address_city}, ${addressInfo.billing_address_state} ${addressInfo.billing_address_zip}`}</div>
                    <div>{addressInfo.shipping_address_country}</div>
                </div>
                <div className="cart-list">
                    {cart.map((item, i) => {
                        return (
                            <div key={i} className="cart-list__item">
                                <img 
                                    className="image-preview"
                                    src={this.props.products.find((product) => product.id === item.id).image}
                                    alt={item.name}
                                />
                                <div>{this.formatName(item.name)}</div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div>{item.count} @ {numeral(item.price / 100).format('$0, 0.00')}</div>
                                    <div
                                        style={{ alignSelf: 'end', marginTop: '1rem', color: 'rgba(158, 147, 147, 0.801)' }}
                                    >
                                        {numeral((item.count *  item.price) / 100).format('$0, 0.00')}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="cart-total-container">
                        <div className="label-container">
                            <div className="sub-label">Subtotal</div>
                            <div>{numeral(cart.reduce((acc, curr) => acc + (curr.price * curr.count), 0) / 100).format('$0, 0.00')}</div>
                        </div>
                        <div className="label-container">
                            <div className="sub-label">Shipping</div>
                            <div>{numeral((this.props.order.amount - cart.reduce((acc, curr) => acc + (curr.price * curr.count), 0)) / 100).format('0$, 0.00')}</div>
                        </div>
                        <div className="label-container">
                            <div className="sub-label">Total</div> 
                            <div>{numeral(this.props.order.amount / 100).format('$0, 0.00')}</div>
                        </div>
                    </div>
                    <a 
                        className="stripe-button" 
                        href={`https://dashboard.stripe.com/payments/${this.props.order.stripeChargeId}`}
                        target="_blank"
                    >
                        View in Stripe
                    </a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    order: state.orders.find((order) => order.id === props.match.params.orderId),
    products: state.products
});

export default withRouter(connect(mapStateToProps)(OrderInfoPage));