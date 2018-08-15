/*
  Once you complete a problem, refresh ./destructuring.html in your browser 
  and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from
   the object carDetails into new variables. 
*/
let {color, make, model, year}  = carDetails;
console.log(carDetails)
//Code Here



////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/
var problemTwoObj={
  firstName: "Betty",
  lastName: "JavaScript",
  title: "Queen"
}


function greeting(problemTwoObj) {
var {firstName, lastName, title} = problemTwoObj;
// Do not edit the code below.
return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}


console.log(greeting(problemTwoObj));



////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

var populationObj = 
{
utah: 1,
california: 2,
texas: 3,
arizona: 5,
};

function totalPopulation(populationObj){
let {utah,california,arizona,texas} = populationObj
sum = utah + california + texas + arizona;
return sum;
}
console.log(totalPopulation(populationObj))

////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/
var problemFourObj = 
{
carb: "death",
fat: "testoerone",
protein: "muscle"
}
function ingredients(problemFourObj)
{
let {carb,fat,protein} = problemFourObj
newarr = [];
newarr.push(problemFourObj.carb,problemFourObj.fat,problemFourObj.protein);
return newarr;
}

console.log(ingredients(problemFourObj));
//Code Here



////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter 
  instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/

var object = {
first: 1,
second: 2,
third: 3
};
var {first, second, third}  = object;

function largeNumbers(object)
{ smallest = Math.min(first, second, third);
  return smallest;
}
console.log(largeNumbers(object));
//Code Here



////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/

// Jasmine test failing depite proper output:

  // it('should return the correct value', function () {
  //   expect(numberGroups({a:[1, 2, 3], b:[1], c:[1, 2, 3, 4, 5]})).toEqual([ 1, 2, 3, 4, 5 ]);
  //   expect(numberGroups({a:[1, 2, 3], b:[1, 2, 3, 4], c:[1, 2, 3]})).toEqual([ 1, 2, 3, 4 ]); var {a, b, c}  = object;

  // TEST 1

 var object = {
  a:[1, 2, 3],
   b:[1],
   c:[1, 2, 3, 4, 5]
   };

  // TEST 2:

  // var object = {
//     a:[1, 2, 3],
//     b:[1, 2, 3, 4],
//     c:[1, 2, 3]
//     };
  
 function numberGroups(object)
{
  let longest = Math.max(a.length, b.length, c.length);
if (a.length == longest){
  return a;
  }
else if (b.length == longest){
  return b;
  }
else if (c.length == longest){
  return c;
  }
}
console.log(numberGroups(object))