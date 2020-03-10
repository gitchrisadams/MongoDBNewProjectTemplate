const assert = require('assert');
const MarioChar = require('../models/mariochar'); // Import Model

// done is used to tell mocha we are done w/ the test and ready to move on.
describe('Finding Records', function() {
    var char;

    // Create data in db first:
    this.beforeEach(function(done) {
        char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function() {
            assert(char.isNew === false);
            done();
        });
    });

    it('Finds one record from the database', function(done) {
        MarioChar.findOne({
            name: 'Mario'
        }).then(function(result) {
            done();
        });
    });

    // Find using the char._id that is created above.
    // Mongo automatically creates an id when we use
    // new MarioChar({name: 'Mario'})
    it('Finds one record by id', function(done) {
        MarioChar.findOne({
            _id: char._id
        }).then(function(result) {
            assert(result._id.toString() === char._id.toString());
            done();
        });
    });
});
