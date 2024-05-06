const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');
const Customer = require('./models/Customer'); // Ensure you have imported the Customer model

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// Assuming User and Customer are Mongoose models
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/E-billing')
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));
