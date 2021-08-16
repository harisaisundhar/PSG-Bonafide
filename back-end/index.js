
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
	  res.status(200).send('Hello! Welcome to Bonafide API!')
})

app.listen(4000, () => {
	  console.log(`Node app listening at http://localhost:4000`);
});