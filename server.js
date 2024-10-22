const express = require('express');
const bodyParser = require('body-parser');
const transactionsRouter = require('./routes/transactions');
require('./db/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/transactions', transactionsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
