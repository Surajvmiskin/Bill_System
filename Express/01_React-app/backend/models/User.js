const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: String
});
userSchema.index({ email: 1 });
const User = mongoose.model('User', userSchema);

module.exports = User;