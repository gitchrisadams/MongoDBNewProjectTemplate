const assert = require('assert');
const MarioChar = require('../models/mariochar'); // Import Model

// done is used to tell mocha we are done w/ the test and ready to move on.
describe('Saving Records', function() {
    it('Saves a record to the database', function(done) {
        var char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function() {
            assert(char.isNew === false);
            done();
        });
    });
});
