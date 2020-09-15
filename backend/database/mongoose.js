// Will configure out db and return our mongoose objects

// const mongoose = require('mongoose')

// mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://127.0.0.1:27017/test-app', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
//         .then(() => console.log('Database Connected'))
//         .catch((error) => console.log(error))

// module.exports = mongoose


const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://35.236.55.29:27017/test-app', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        .then(() => console.log('Database Connected'))
        .catch((error) => console.log(error))

module.exports = mongoose