
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    billNo: { type: Schema.Types.ObjectId, ref: 'MeterReading' },
    balance: Number,
    amount: Number,
    transaction_ID: String,
    payment_Date: Date
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;