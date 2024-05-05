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
    console.log('Request Body:', req.body);
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        console.log('User:', user);

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        if (password !== user.password) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }

        const customer = await Customer.findOne({ email });
        console.log('Customer:', customer);
        if (customer) {
            res.send({ success: true, redirectUrl: '/payment-gateway.html' });
        } else {
            res.send({ success: true, message: 'Logged in successfully, but not as a customer' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send({ message: 'Server error' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));