const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/partyapp'));

app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname, '/dist/partyapp/index.html'));
});

app.listen(process.env.PORT || 8080, ()=>{
  console.log('Server started');
})
