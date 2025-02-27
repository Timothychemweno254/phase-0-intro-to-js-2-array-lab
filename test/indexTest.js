const assert = require('assert'); // Import assert module
const { cats, destructivelyAddCat, addCat } = require('../index.js'); // Import functions

describe('Array functions', function() {
  
  beforeEach(function () {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
  });

  describe('destructivelyAddCat', function() {
    it('adds a cat to the end of the array', function() {
      destructivelyAddCat('Luna');
      assert.deepEqual(cats, ["Milo", "Otis", "Garfield", "Luna"]); // Test that the array is modified
    });
  });

  describe('addCat', function() {
    it('returns a new array with a cat added to the end', function() {
      const newCats = addCat('Luna');
      assert.deepEqual(newCats, ["Milo", "Otis", "Garfield", "Luna"]); // Test the returned array
      assert.deepEqual(cats, ["Milo", "Otis", "Garfield"]); // Ensure original array is unchanged
    });
  });

  // Additional tests can go here...
});
