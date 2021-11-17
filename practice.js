// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;
  _.each(numbers, function(element) {
    if (element % 5 === 0) {
      count++;
    }
  });

  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var output = _.filter(fruits, function(element) {
    return element === targetFruit;
  });
  return output;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var output = _.filter(fruits, function(element) {
    return element[0] === letter;
  });
  return output;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var output = _.filter(desserts, function(element) {
    return element.type === 'cookie';
  });
  return output;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var sum = _.reduce(products, function(memo, element) {
    return memo + Number.parseFloat(element.price.slice(1));
  }, 0);
  return sum;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var output = {};
  output = _.reduce(desserts, function(memo, element) {
    current = element.type;
    output[current] = (output[current] || 0) + 1;
    return output;
  }, 0);
  return output;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var ninetiesMovies = [];
  var output = _.reduce(movies, function (memo, movie) {
    var madeInThe90s = movie.releaseYear >= 1990 && movie.releaseYear < 2000;
    if (madeInThe90s) {
      ninetiesMovies.push(movie.title);
    }
  }, []);
  return ninetiesMovies;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var bool = _.reduce(movies, function(memo, movie) {
    if (movie.runtime <= timeLimit) {
      memo = true;
    }
    return memo;
  }, false);
  return bool;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var upperFruits = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
  return upperFruits;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var updated = desserts.slice();
  _.map(updated, function(item) {
    var ingredients = item.ingredients;
    item.glutenFree = (ingredients.indexOf('flour') === -1);
  });
  return updated;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {

};
