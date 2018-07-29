const express = require('express');
const router = express.Router();
let secrets = '';
if (process.env.NODE_ENV !== 'production') {
    secrets = require('../../secrets');
}
const stripe = require('stripe')(secrets.serverKey || process.env.STRIPE_TEST_KEY);
const nodemailer = require('nodemailer');

router.post('/charge', (req, res, next) => {
    const { amount, token, description } = req.body;
    const charge = stripe.charges.create({
        amount,
        currency: 'usd',
        source: token,
        description
    }, (err, charge) => res.json(charge));
});


router.post('/email', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'spritz900@gmail.com',
            pass: 'Osman97009700'
        }
    });
    const mailOptions = {
        from: 'spritz900@gmail.com',
        to: 'iyzo.saab@gmail.com',
        subject: `New Kufi Clothing order from ${req.body.customerName}`,
        text: 'View on dashboard - kuficlothing.herokuapp.com/#/admin/orders'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.json({ hello: 'something went wrong' });
        } else {
            res.json(info.response);
        }
    });
});

module.exports = router;