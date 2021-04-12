const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT | 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening on ${port}`)
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewURLParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
});

const companiesRouter = require('./routes/companies');
const employeesRouter = require('./routes/employees');

app.use('/companies', companiesRouter);
app.use('/employees', employeesRouter);