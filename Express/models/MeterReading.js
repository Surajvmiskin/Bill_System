
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const meterReadingSchema = new Schema({
    bill_no: String,
    present_Reading: Number,
    meter_reading: Number,
    reading_Date: Date,
    consumption: Number,
    bill_Amount: Number,
    billing_Period: String,
    account: { type: Schema.Types.ObjectId, ref: 'Accounts' }
});

const MeterReading = mongoose.model('MeterReading', meterReadingSchema);

module.exports = MeterReading;

