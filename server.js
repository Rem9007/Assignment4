const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('public'));
// Middleware for parsing request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Replace this with your Knex configuration
const knexConfig = require('./Knexfile')[process.env.NODE_ENV || 'development'];

// Initialize Knex with the database configuration
const knex = require('knex')(knexConfig);
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.post('/CreateEndpoint', (req, res) => {
  const { number,roadname,city } = req.body;
  console.log("2");
  knex('adresstable')
    .insert({ number,roadname,city })
    .then(() => {
      res.json({ success: true });
    })
    .catch((error) => {
      console.error('Error creating user:', error);
      res.status(500).json({ success: false });
    });
});

app.post('/SelectEndpoint', (req, res) => {
  const {city} = req.body;
  console.log("3");
  knex('adresstable')
    .select()
    .where({city:city})
    .then((result) => {
      console.log(result)
      res.json(result);
    })
    .catch((error) => {
      console.error('Error creating user:', error);
      res.status(500).json({ success: false });
    });
});


app.post('/DeleteEndpoint', (req, res) => {
  const {id} = req.body;
  console.log("4");
  knex('adresstable')
    .where({adress_id:id})
    .del()
    .then(() => {
      res.json({ success: true });
    })
    .catch((error) => {
      console.error('Error creating user:', error);
      res.status(500).json({ success: false });
    });
});



app.post('/UpdateEndpoint', (req, res) => {
  const {id,element} = req.body;
  console.log("5");
  knex('adresstable')
    .where({adress_id:id})
    .update({number : element})
    .then(() => {
      res.json({ success: true });
    })
    .catch((error) => {
      console.error('Error creating user:', error);
      res.status(500).json({ success: false });
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


