const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });

const transactions = require('./routes/transactions');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

connectDB();

app.use('/api/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log(
    `Server running in ${process.env.NODE_ENV} environment on port ${PORT}`
);
