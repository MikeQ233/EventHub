const mongoose = require('mongoose')

// connect to our database
mongoose.connect('url', { useNewUrlParser: true});
// mongoose.connect('mongodb://localhost:27017/EventHubDB', { useNewUrlParser: true});

module.exports = { mongoose }
