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
var color = "red";
var make = "toyota";
var model = "tacoma";
var year = 1994;
//Code Here



////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting( obj ) {
  //Code Here
  
  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}
var firstName = "";
var lastName = "";
var title = "";


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
utah: 0,
california: 0,
texas: 0,
arizona: 0,
};

function totalPopulation(populationObj)
{
var utah = populationObj.utah;
var california = populationObj.california;
var arizona = populationObj.arizona;
var texas = populationObj.texas;
};

////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/
var obj = 
{
carb: "",
fat: "",
protein: ""
}

function ingredients(obj)
{
  var carb = obj.carb();
  var fat = obj.fat();
  var protein = obj.protein();
  var ingredientsArray = [];
  ingredientsArray.push(carb, fat, protein);
}

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
/*<<<<<FINISH ME!
var object = {
first: 0,
second: 0,
thrid: 0
};
var first;
var second;
var third;
function largeNumbers(first, second, third)
{

  return //smallest number
}
//Code Here



////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/
/*<<<<<FINISH ME!
var object = {
  a: [1],
  b: [1,2,3],
  c: [1,2]
  };
  var a;
  var b;
  var c;
function numberGroups(a,b,c)
{
if (arr[a] > arr[b] && arr[a] > arr[c])
{return arr[a]}

else if (arr[b] > arr[a] && arr[b] > arr[c])
{return arr[b]}

else if (arr[c] > arr[a] && arr[c] > arr[b])
{return arr[c]}
}

//Code Here


