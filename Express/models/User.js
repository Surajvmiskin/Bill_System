const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    bill_no: String,
    Start_date: String,
    Due_date: String,
    Total_Amount: String,
    email: { type: String, required: false, unique: true },  // Make email optional
    password: String,
    bill_paid: { type: Boolean, default: false }  // Added field for bill payment status
});
userSchema.index({ email: 1 });
const User = mongoose.model('User', userSchema);

module.exports = User;