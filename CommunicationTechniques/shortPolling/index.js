const express = require('express');
const app = express();

// let currentLuckyNumber = `Current lottery winner number is ${Math.floor(Math.random()*10)}`;


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

/**
 *  Suppose every 5s we need winner for lottery
 */
app.get('/getWinnerNumber', (req, res) => {
  res.send({
    currentLuckyNumber :  `Current lottery winner number is ${Math.floor(Math.random()*10)}`
  });
});

const port = process.env.PORT || 5011;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});