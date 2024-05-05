const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const User = require('./models/User');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());
app.post('/register', async (req, res) => {
    console.log(req.body);

    const { name, email, password } = req.body;
    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.json({ success: true, message: 'User created successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
});

const bcrypt = require('bcryptjs');

const Admin = require('./models/Admin');

// Route to handle admin login
app.post('/admin/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email: email });
        if (admin && bcrypt.compareSync(password, admin.password)) {
            res.redirect('/table.html');
        } else {
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

mongoose.connect('mongodb://localhost:27017/Electricity', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
}).then(() => {
    console.log('MongoDB connected to E-billing database successfully');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
});

const SomeModel = mongoose.model('SomeModel', SomeModelSchema);


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