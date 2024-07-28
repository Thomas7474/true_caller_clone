const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const cors = require('cors');


require('./database');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = 'your_mongodb_connection_string';

app.use(cors());

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/routes/users', userRoutes);



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
