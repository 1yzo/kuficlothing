const mongoose = require('mongoose');
const env = require('./secrets');

mongoose.Promise = global.Promise;

const mongoUri = `mongodb://${env.user}:${env.password}@${env.link}`;

const connect = () => {
    return mongoose.connect(mongoUri);
}

module.exports = {
    connect,
    mongoose
};