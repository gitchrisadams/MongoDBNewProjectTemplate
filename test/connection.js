const mongoose = require('mongoose');

// ES6 Promises:
mongoose.Promise = global.Promise;

// Connect to db before tests run.
before(function(done) {
    // Connect to mongodb:
    mongoose.connect('mongodb://localhost/testaroo', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    });

    mongoose.connection
        .once('open', function() {
            console.log('Connection has been made');
            done();
        })
        .on('error', function() {
            console.log('Connection error', error);
        });
});

// Drop the char collection before each test:
beforeEach(function(done) {
    mongoose.connection.collections.mariochars.drop(function() {
        done();
    });
});
