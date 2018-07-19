import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';
import database from '../firebase/firebase';
import { editProductStock } from '../actions/products';
import { clearItems } from '../actions/cart';


class PaymentCheckout extends React.Component {
    onToken = (token, args) => {

        const addressInfo = {
            ...args
        }
        // Save order info, then update stats, then update stock
        fetch('/api/charge', {
            method: 'POST',
            body: JSON.stringify({
                token: 'tok_visa',
                amount: this.props.amount,
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((res) => {
                const { amount, id: stripeChargeId } = res;
                database.ref('orders').push({
                    stripeChargeId,
                    amount,
                    name: addressInfo.billing_name,
                    addressInfo,
                    cart: this.props.cart.map(({ image, ...rest }) => ({
                        ...rest
                    })),
                    shipped: false
                }).then(() => {
                    for (let item of this.props.cart) {
                        database.ref(`stats/${item.id}/${item.size}`).transaction((current) => {
                            if (current === null) {
                                return {
                                    sales: item.count,
                                    revenue: item.price * item.count
                                }
                            } else {
                                return {
                                    sales: current.sales + item.count,
                                    revenue: current.revenue + (item.price * item.count)
                                }
                            }
                        }).then(() => {
                            database.ref(`products/${item.id}/stock/${item.size}`).transaction((size) => {
                                return size - (item.count);
                            }, (error, committed, snapshot) => {
                                this.props.dispatch(editProductStock(item.id, item.size, snapshot.val()));
                                this.props.dispatch(clearItems());
                                this.props.history.push('/');
                            });
                        })
                    }
                });
            });
    }
    
    render() {
        return (
            <StripeCheckout
                image="/images/logo.PNG"
                name="Kufi Clothing"
                token={this.onToken}
                stripeKey="pk_test_vJEhl58miVhQqAnf7nT9eyRy"
                amount={this.props.amount}
                shippingAddress
                billingAddress={true}
            >
                { this.props.children }
            </StripeCheckout>
        );
    }
}

export default withRouter(connect()(PaymentCheckout));