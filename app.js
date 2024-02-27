const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); 

app.get('/', (req, res) => {
  res.send('Hello, Docker!');
});


app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/public/form.html');
});


app.post('/submit-form', (req, res) => {
console.log(req.body)
  const name = req.body.name || 'Guest';
  res.send(`<h2>Hello, ${name}! Now, you can Build, Ship, and Run.</h2>`);
});


app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`<h2>User ID: ${userId}</h2>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
