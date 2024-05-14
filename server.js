const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const nunjucks = require('nunjucks');

app.use(cors());
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.set('view engine', 'njk');

app.get('/', (req, res) => {
    res.render('index');
});
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
