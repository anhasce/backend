import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Բարև խնձոր');
});

app.listen(port, err => {
  if (err) {
    return console.log(err);
  }
  return console.log(`Server is listening on ${port}`);
})
