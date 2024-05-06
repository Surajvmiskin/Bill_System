const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tariffSchema = new Schema({
    status: String,
    user_Type: String,
    effect_Date: Date,
    unit_price: Number
});

const Tariff = mongoose.model('Tariff', tariffSchema);

module.exports = Tariff;