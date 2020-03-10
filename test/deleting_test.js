const assert = require('assert');
const MarioChar = require('../models/mariochar'); // Import Model

// done is used to tell mocha we are done w/ the test and ready to move on.
describe('Deleting Records', function() {
    var char;

    // Create data in db first:
    this.beforeEach(function(done) {
        char = new MarioChar({
            name: 'Mario'
        });

        char.save().then(function() {
            done();
        });
    });

    it('Delete one record from the database', function(done) {
        MarioChar.findOneAndRemove({
            name: 'Mario'
        }).then(function() {
            MarioChar.findOne({
                name: 'Mario'
            }).then(function(result) {
                assert(result === null);
                done();
            });
        });
    });
});
