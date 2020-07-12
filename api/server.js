const express = require('express');
const configureRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use('/api', configureRoutes);

const PORT = process.env.PORT || 5000;

let server = app.listen(PORT, () => console.log(`Server sarted on port ${PORT}`));

const stop = () => server.close();

module.exports = server;
module.exports.stop = stop;
