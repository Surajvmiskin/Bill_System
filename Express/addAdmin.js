const mongoose = require('mongoose');
const Admin = require('./models/Admin'); // Adjust the path as necessary

// MongoDB URL
const mongoDB = 'mongodb://localhost:27017/E-billing';
// Change yourDatabaseName to your actual database name

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

async function addAdmin() {
    try {
        const newAdmin = new Admin({
            name: 'Suraj',
            email: 'surajvmiskin@gmail.com',
            password: '123456'
        });

        await newAdmin.save();
        console.log('Admin added successfully!');
    } catch (error) {
        console.error('Failed to add admin:', error);
    } finally {
        mongoose.disconnect();
    }
}

addAdmin();