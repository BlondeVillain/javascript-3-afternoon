////////// PROBLEM 1 //////////
var employees = [
  {
    "firstName": "Von",
    "lastName": "Budibent",
    "email": "vbudibent0@163.com",
    "department": "Sales"
  },
  {
    "firstName": "Catherina",
    "lastName": "Swalowe",
    "email": "cswalowe1@example.com",
    "department": "Engineering"
  },
  {
    "firstName": "Theo",
    "lastName": "Trill",
    "email": "ttrill2@sina.com.cn",
    "department": "Services"
  },
  {
    "firstName": "Elsy",
    "lastName": "McCrorie",
    "email": "emccrorie3@netscape.com",
    "department": "Legal"
  },
  {
    "firstName": "Lorie",
    "lastName": "Handsheart",
    "email": "lhandsheart4@fotki.com",
    "department": "Research and Development"
  }
];
function employeeUpdater()
{
  for(n=0; employees.length<n; n++)
  {if(employees[n].firstName == "Theo"){employees.splice(n,1)}
  else if(employees[n].firstName == "Lorie"){employees[n].department == "HR"}
  return employees;
}
////////// PROBLEM 2 //////////
var workplaceAccidents = [12, 56, 44, 3, 29, 56, 56, 3, 7, 12];
function removeDuplicates()
{
  let newArr = [];
  for(var i=0; i<workplaceAccidents.length; i++)
  {
    if(!newArr.includes(workplaceAccidents[i]))

      newArr.push(workplaceAccidents[i]);
  }
  return newArr;
}
////////// PROBLEM 3 //////////
var cat = {
  name: 'Fluffy',
  catFriends: [
    {
      name: 'Grumpy',
      activities: ['be grumpy', 'eat food']
    }, 
    {
      name: 'Lazy Bones',
      activities: ['sleep', 'pre-sleep naps']
    }
  ]
}
var grumpyActivity = cat.catFriends[0].activities[1]
var fluffy2ndFriend  = cat.catFriends[1].name
////////// PROBLEM 4 //////////
var myCar = {
  make: 'Toyota',
  model: 'Corolla',
  year: 1992,
  accidents: [
    {
      date: '3/15/93',
      damage: '$5,000',
      atFaultForAccident: true
    },
    {
      date: '7/4/98',
      damage: '$2,200',
      atFaultForAccident: true
    },
    {
      date: '6/22/99',
      damage: '$7,900',
      atFaultForAccident: true
    }
  ]
}
////////// PROBLEM 5 //////////
var numsArr = [ [1, 2, 3, 4], [5, 6], [7, 8, 9, 10, 11]];
/*
  Above is an array of arrays. Use two for loops.
    1. Write a function called 'looper'. 
    2. 'looper' should loop over the arrays.
    3.  If the number is odd, replace it with 'odd'.
        If the number is even, replace it with 'even'.
    4. Return the modified numsArr.
*/

