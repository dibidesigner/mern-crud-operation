const mongoose = require('mongoose');

const dbconnection = mongoose
    .connect('mongodb://localhost:27017/merncrud', {
    })
    .then(() => {
        console.log('Database is Connected');
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });

module.exports = dbconnection;
