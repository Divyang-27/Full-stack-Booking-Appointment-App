const express = require('express');
const sequelize = require('./utils/database');
const bodyParser = require('body-parser');
const user = require('./controller/user');
const cors = require('cors');
const app = express();
app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.post('/', user.postUser);
app.get('/get-user', user.getUser);
app.delete('/get-user/:id', user.deleteUser);
sequelize
  .sync()
  .then(() => {
    app.listen(4000);
  })
  .catch((err) => console.log(err));
