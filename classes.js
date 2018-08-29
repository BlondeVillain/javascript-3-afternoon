////////// PROBLEM 1 //////////
class Employee{
  constructor(first_name, last_name, email, age){
    this.first_name = first_name, 
    this.last_name = last_name,
    this.email = email,
    this.age = age
  }
  makeWidget(){return this.first_name + " " + this.last_name + " " + "Widget"}
}
var employee = new Employee("Boss", "Man", "bossman@gmail.com");
////////// PROBLEM 2 //////////
class Manager extends Employee{
  constructor(first_name, last_name, email, age)
  {
    super()
    this.first_name = first_name, 
    this.last_name = last_name,
    this.email = email,
    this.age = age,
    this.reports = []
  }
  hire(employee){this.reports.push(employee);}
  fire(index){this.reports.splice(index, 1);}
}
////////// PROBLEM 3 //////////
class ProgressiveManager extends Employee{
  constructor(first_name, last_name, email, age, reports, title, bonus)
  {
    super()
    this.first_name = first_name 
    this.last_name = last_name
    this.email = email
    this.age = age
    this.reports = []
    this.title = 'Not a manager'
    this.bonus = 0
    this.employeeChanges = 0;
  }
 
  makeWidget(){return this.first_name + this.last_name + "Widget"}

  fire(employee){
  
  this.reports.splice(this.reports.indexOf(employee), 1);
  this.employeeChanges++;
  this.bonus += 100;
  this.checkTitle()
  console.log("Your fired.")}
  
  hire(employee){
  
  this.reports.push(employee)
  this.employeeChanges++;
  this.checkTitle()
  console.log("You are a great guy, a really great guy. Lets get this guy a job.")}
  
  bonus(employeeFiring){
  
  if (employeeFiring == null)
  {return 0}
  console.log("I'm going to get a bonus and its going to be YUGE!")}
  
  title(result){
  
    if (result == null)
  {return 'Not a manager'}
  console.log("I would be the best manager. No manager would be better than me.")}
  
  checkTitle(){
  switch (true){
    case (this.employeeChanges == 0):
    this.title = "Not a manager";
    break;

      case (this.employeeChanges >= 1 && this.employeeChanges <= 3):
      this.title = "Barely Manager";
      break;

        case (this.employeeChanges >= 4 && this.employeeChanges <= 10):
        this.title = "Mostly Manager";
        break;

         case (this.employeeChanges >= 11 && this.employeeChanges <= 50):
         this.title = "Manager";
         break;

        case (this.employeeChanges >= 51 && this.employeeChanges <= 100):
        this.title = "Manager Plus";
        break;

      case (this.employeeChanges > 101):
      this.title = "Bestest Manager";
      break;
    }
  }
}

////////// PROBLEM 4 - Black Diamond //////////

/*
  Widget Co has a factory that makes widgets.
  Factories have Machines.
  Make a Machine class that takes in no parameters
  A Machine has the following properties:
    - widgets_made_count - default 0
    - wear_and_tear_count - default 0
    - needs_reboot - default false
  
*/
class Machine{
    constructor()
{   this.widgets_made_count = 0,
    this.wear_and_tear_count = 0,
    this.needs_reboot = false
}
makeWidgets(number){
  widgets_made_count += number;
}
fixMachine(){needs_reboot = true}
reboot()
{
  return finishrebot()
  {
    return "Reboot Complete"
  }
  wear_and_tear_count - 10;
  needs_reboot = false;
}
}
  /*A Machine has the following methods:
    - makeWidgets
        - This function takes in a number and increases widgets_made_count by that amount
        - It also increases wear_and_tear_count by 1 for every 50
    - fixMachine
        - This function sets needs_reboot to true
    - reboot
        - This function returns a function that is called when the machine is done rebooting
        - It should set decrease wear_and_tear_count by 10, and set needs_reboot to false
  bonus(employeeFiring)*/


