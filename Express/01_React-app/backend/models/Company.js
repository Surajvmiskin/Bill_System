const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: String,
    address: String,
    email: String,
    city: String
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;