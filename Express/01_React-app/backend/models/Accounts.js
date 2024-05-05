const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountsSchema = new Schema({
    meter_no: String,
    initialMeterReading: Number,
    premise_Address: String,
    loadKW: Number,
    type: String,
    registration_Date: Date,
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' }
});
const Accounts = mongoose.model('Accounts', accountsSchema);


module.exports = Accounts;