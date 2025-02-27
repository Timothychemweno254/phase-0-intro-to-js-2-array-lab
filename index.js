let cats = ["Milo", "Otis", "Garfield"];

// Destructive function - modifies the original array
function destructivelyAddCat(name) {
  cats.push(name); // This modifies the original cats array directly
}

// Non-destructive function - does not modify the original array
function addCat(name) {
  return cats.concat(name); // Returns a new array with the added cat
}

// Export the functions for use in the tests
module.exports = { cats, destructivelyAddCat, addCat };
