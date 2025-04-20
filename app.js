const express = require('express');
const bodyParser = require('body-parser');
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/calculator', calculatorRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});