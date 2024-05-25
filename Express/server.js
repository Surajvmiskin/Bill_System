const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');
const Admin = require('./models/Admin');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Admin Portal Auth
app.post('/admin/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Login attempt:', { email, password }); // Log the input for debugging

        const admin = await Admin.findOne({ email });
        console.log('Admin found:', admin); // Check what is found

        if (!admin) {
            console.log('No admin found for email:', email);
            return res.status(404).send({ success: false, adminExists: false, message: 'Admin not found' });
        }
        if (password !== admin.password) {
            console.log('Password mismatch for admin:', email);
            return res.status(401).send({ success: false, adminExists: true, message: 'Invalid credentials' });
        }
        console.log('Admin login successful:', email);
        res.send({ success: true, adminExists: true, message: 'Logged in successfully' });
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).send({ message: 'Server error', error: error.toString() });
    }
});


// User data retrieval
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find({}, 'name bill_no Start_date Due_date Total_Amount email bill_paid').exec();
        res.json(users);
    } catch (error) {
        console.error('Failed to fetch users:', error);
        res.status(500).send('Error fetching user data');
    }
});
app.post('/api/users', async (req, res) => {
    const { name, bill_no, Start_date, Billing_date, Due_date, Total_Amount, email, password, bill_paid } = req.body;
    if (!email) {
        return res.status(400).send({ message: 'Email is required' });
    }
    try {
        const newUser = new User({ name, bill_no, Start_date, Billing_date, Due_date, Total_Amount, email, password, bill_paid });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).send({ message: 'Duplicate email', error: error.message });
        }
        console.error('Error adding new user:', error);
        res.status(500).send({ message: 'Failed to add new user', error: error.message });
    }
});
app.put('/api/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, bill_no, Start_date, Billing_date, Due_date, Total_Amount, bill_paid } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { name, bill_no, Start_date, Billing_date, Due_date, Total_Amount, bill_paid }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Failed to update user', error: error.message });
    }
});



// login api
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send({ success: false, userExists: false, message: 'User not found' });
        }
        if (password !== user.password) {
            return res.status(401).send({ success: false, userExists: true, message: 'Invalid credentials' });
        }
        // User exists and password matches
        res.send({ success: true, userExists: true, message: 'Logged in successfully' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send({ message: 'Server error' });
    }
});

// Payment API
app.get('/api/get-remaining-amount/:billNo/:email', async (req, res) => {
    try {
        const { billNo, email } = req.params;
        const user = await User.findOne({ bill_no: billNo, email: email }, 'Total_Amount');
        if (!user) {
            res.status(404).json({ message: 'No record found for the provided bill number and email' });
            return;
        }
        res.json({ amount: user.Total_Amount });
    } catch (error) {
        console.error('Error fetching remaining amount:', error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
});

app.post('/api/pay-bill', async (req, res) => {
    try {
        const { billNo, email } = req.body;
        const user = await User.findOneAndUpdate(
            { bill_no: billNo, email: email },
            { bill_paid: true },
            { new: true }
        );
        if (!user) {
            res.status(404).json({ message: 'No record found for the provided bill number and email' });
            return;
        }
        res.json({ message: 'Bill paid successfully', user });
    } catch (error) {
        console.error('Error updating bill paid status:', error);
        res.status(500).json({ message: 'Server error', error: error.toString() });
    }
});





const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Assuming User and Customer are Mongoose models
const mongoose = require('mongoose');
console.log('Connecting to MongoDB at:', 'mongodb://localhost:27017/E-billing');
console.log('Connecting to MongoDB at:', 'mongodb://localhost:27017/E-billing');
// mongoose.connect('mongodb+srv://Suraj:123@cluster0.uuxn554.mongodb.net/E-billing')
mongoose.connect('mongodb://localhost:27017/E-billing')
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));