const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const User = require('./models/User'); // Import the User model
// Middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json()); // for parsing application/json // for parsing application/x-www-form-urlencoded

app.post('/register', async (req, res) => {
    console.log(req.body);  // This will show what data is received

    const { name, email, password } = req.body;
    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.json({ success: true, message: 'User created successfully!' });
    } catch (error) {
        console.error(error);  // This will log the error to the console
        res.status(500).json({ success: false, message: error.message });
    }
});
// Admin protal Login
// Import necessary modules
const bcrypt = require('bcryptjs');

// Assuming you have a model for Admin, if not, you need to create one similar to the User model
const Admin = require('./models/Admin');

// Route to handle admin login
app.post('/admin/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email: email });
        if (admin && bcrypt.compareSync(password, admin.password)) {
            // Passwords match
            res.redirect('/table.html'); // Redirect to table.html if login is successful
        } else {
            // Authentication failed
            res.status(401).send('Invalid admin credentials');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// Existing code for server and MongoDB connection...

const Customer = require('./models/Customer');
const Staff = require('./models/Staff');
const Accounts = require('./models/Accounts');
const MeterReading = require('./models/MeterReading');
const Payment = require('./models/Payment');
const staff = require('./models/Staff');
const mongoose = require('mongoose');

// Replace 'your_database_url' with your actual MongoDB connection string
const mongoDB = 'mongodb://localhost:27017';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
    
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB successfully!");
});

const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});

// Create a model based on the schema
const SomeModel = mongoose.model('SomeModel', SomeModelSchema);


// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/customers', async (req, res) => {
    try {
        const customers = await Customer.find({});
        res.json(customers);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});