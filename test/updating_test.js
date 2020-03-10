const assert = require('assert');
const MarioChar = require('../models/mariochar'); // Import Model

// done is used to tell mocha we are done w/ the test and ready to move on.
describe('Updating Records', function() {
    var char;

    // Create data in db first:
    this.beforeEach(function(done) {
        char = new MarioChar({
            name: 'Mario',
            weight: 50
        });

        char.save().then(function() {
            done();
        });
    });

    it('Updates one record in the database', function(done) {
        MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' }).then(
            function() {
                MarioChar.findOne({ _id: char._id }).then(function(result) {
                    assert(result.name === 'Luigi');
                    done();
                });
            }
        );
    });
    // $inc is a mongo feature for incrementing, weight: 1 is what we increment
    // by such as 1, 10, or -1 to subtract.
    it('Increments the weight by 1', function(done) {
        MarioChar.updateOne({}, { $inc: { weight: 1 } }).then(function() {
            MarioChar.findOne({ name: 'Mario' }).then(function(record) {
                assert(record.weight === 51);
                done();
            });
        });
    });
});
