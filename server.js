const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/styles.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(__dirname + '/public/styles.css');
});

app.get('/bestjoke.html', (req, res) => {
  res.sendFile(__dirname + '/public/bestjoke.html');
});
app.get('/api/Excuse/:number', (req, res) => {
  const number = req.params.number;
  const fact = generateExcuse(number);

  res.json({ fact });
});

function generateExcuse(number) {
 
  const excuses =["I was abducted by aliens and lost track of time.",
    "My pet goldfish had a mental breakdown, and I had to console it.",
    "I got stuck in my onesie and needed assistance to get out of it.",
    "I fell into a black hole but managed to escape just in time for class.",
    "A unicorn tried to steal my backpack, and I had to chase it away.",
    "I accidentally joined a parade and couldn't break free until it was over.",
    "My bed and I were having a heated argument, and I had to resolve our differences.",
    "I was teaching my dog to dance, and he needed an extra lesson.",
    "I was practicing my Jedi mind tricks, and it took longer than I expected.",
    "I was caught in a heated debate with a squirrel, and it got personal.",
    "I discovered a portal to another dimension and had to explore it briefly.",
    "I was conducting important research on the gravitational pull of snooze buttons.",
    "I had to attend a top-secret meeting of the Llama Liberation League.",
    "I was training for the International Hide-and-Seek Championship.",
    "I got trapped in the elevator with a group of singing nuns.",
    "I accidentally superglued my hand to my desk and had to wait for it to dry.",
    "I was busy convincing a vending machine to accept my counterfeit monopoly money.",
    "I was playing hide and seek with my shadow, and it took a while to find it.",
    "I had a staring contest with a wall, and the wall won.",
    "I was on my way to class when I accidentally bumped into a group of tourists who mistook me for a famous celebrity and insisted on taking selfies with me. It took a while to convince them I was just a student."
  ];
  if(number > 0 && number < excuses.length+1){
  return `For the number ${number}, here's the excuse: ${excuses[number-1]}`
  }else{
    return `There is no excuse for this number`
  }
  
}

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
