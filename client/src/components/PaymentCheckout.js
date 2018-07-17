import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import database from '../firebase/firebase';

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
                        database.ref(`stats/${item.name}`).transaction((product) => {
                            if (product === null) {
                                return {
                                    ...product,
                                    sales: item.count,
                                    revenue: item.price * item.count
                                }
                            } else {
                                return {
                                    ...product,
                                    sales: product.sales + item.count,
                                    revenue: product.revenue + (item.price * item.count)
                                }
                            }
                        }).then(() => {
                            database.ref(`products/${item.id}/stock/${item.size}`).transaction((size) => {
                                return size - (item.count);
                            });
                        });;
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

export default PaymentCheckout;