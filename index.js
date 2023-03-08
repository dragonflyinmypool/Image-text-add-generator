const express = require('express');
const hbs = require('express-hbs');

const app = express();
app.use(express.static('public'));

app.engine(
  'hbs',
  hbs.express4({
    partialsDir: __dirname + '/views/partials',
  })
);

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Text formater',
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
