const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: String,
    address: String,
    email: String,
    city: String,
    mobile: String,
    photo: String, // This could be a URL or a path to the image file
    id_Proff: String
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;