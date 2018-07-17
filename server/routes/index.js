const express = require('express');
const router = express.Router();
let secrets = '';

if (process.env.NODE_ENV !== 'production') {
    secrets = require('../../secrets');
}

const stripe = require('stripe')(secrets.serverKey || process.env.STRIPE_TEST_KEY);

router.post('/charge', (req, res, next) => {
    const { amount, token, description } = req.body;
    const charge = stripe.charges.create({
        amount,
        currency: 'usd',
        source: token,
        description
    }, (err, charge) => res.json(charge));
});

module.exports = router;