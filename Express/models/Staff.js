const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const staffSchema = new Schema({
    name: String,
    designation: String,
    email: String,
    mobile: String,
    photo: String, // This could be a URL or a path to the image file
    address: String,
    city: String
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;