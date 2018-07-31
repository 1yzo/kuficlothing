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


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'kufi.clothing.co@gmail.com',
        pass: secrets.emailPass || process.env.EMAIL_PASS
    }
});

router.post('/email', (req, res) => {
    const { customerName, orderId } = req.body;

    const mailOptions = {
        from: 'kufi.clothing.co@gmail.com',
        to: 'kufi.clothing.co@gmail.com',
        subject: `New Kufi Clothing order from ${customerName}`,
        text: `View order - kuficlothing.herokuapp.com/#/admin/order/${orderId}`
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

router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    transporter.sendMail({
        from: email,
        to: 'kufi.clothing.co@gmail.com',
        subject: `Kufi Clothing Message From ${name}`,
        text: message + '\n - from ' + email
    }, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            res.json(info.message);
        }
    });
});

module.exports = router;