class Person{
    #healthRate
    constructor(fullName,money,sleepMood){
        this.fullName=fullName;
        this.money=money;
        this.sleepMood=sleepMood;
        this.healthRate="tired";
    }
    Sleep=function (hours){if(hours==7) {this.sleepMood="happy";console.log(`Im ${this.sleepMood}`)}
    else if(hours<7) {this.sleepMood="tired";console.log(`Im ${this.sleepMood}`)}
    else if(hours>7) {this.sleepMood="lazy";console.log(`Im ${this.sleepMood}`)};}
    
    Eat=function (meals){if(meals==3) {this.healthRate="100";console.log(`My health rate is ${this.healthRate}`)}
    else if(meals==2) {this.healthRate="75";console.log(`My health rate is ${this.healthRate}`)}
    else if(meals==1) {this.healthRate="50";console.log(`My health rate is ${this.healthRate}`)};}
    
    Buy=function (NofItems) {this.money-=NofItems*10;console.log(`money= is ${this.money}`);}
    get  healthRate() {
        return this.#healthRate
      }
    
      set healthRate (value) {
       
        if (value <= 100 && value >= 0) { this.#healthRate = value
         }else if(value>100){this.#healthRate =100;}else{this.#healthRate=0;} 
        }
    }
class Employee extends Person{
    #salary
    
    #id
    #email
    #workMood
    #isManager
    constructor(fullName,money,sleepMood){
        super(fullName,money,sleepMood)
        this.#id=0
        this.#email=""
        this.#workMood="tired"
        this.#salary="1000"
        this.#isManager=false
        
    }
    

   get salary () {
    if(this.#isManager==false)
     return this.#salary
     else
     return "classified";
   }

   set salary (value) {
     this.#salary = value
     if (value < 1000) this.#salary = 1000
  }
  get id () {
    return this.#id
  }

  set id (value) {
    this.#id = value;
 }
 get workMood () {
    return this.#workMood
  }


  set workMood (value) {
    this.#workMood = value;
 }
 get email () {
    return this.#email
  }

 
  set email (value) {
    this.#email = value;
 }
 get isManager () {
    return this.#isManager
  }

 
  set isManager (value) {
    this.#isManager = value;
 }
 

    

Work(hours){if(hours==8) {this.#workMood="happy";console.log(`Im ${this.#workMood}`)}
    else if(hours>8) {this.#workMood="tired";console.log(`Im ${this.#workMood}`)}
    else if(hours<8) {this.#workMood="lazy";console.log(`Im ${this.#workMood}`)};}


}



class Office{
#name
#employees
constructor(){
    this.#name="";
    this.#employees=new Array();
}
getAllEmployees() {return this.#employees;}
getEmployee(empId){
    for(let i=0;i<this.#employees.length;i++){
    if(this.#employees[i].id==empId){
        
        return this.#employees[i];
    }
}
}
get name () {
    return this.#name
  }

 
  set name (value) {
    this.#name = value;
 }
hire(e) {this.#employees.push(e);} 
fire(empId){
    for(let i=0;i<this.#employees.length;i++){
    if(this.#employees[i].id==empId){this.#employees.splice(i,1);}}
}

}
let o1=new Office();
o1.name=prompt("Enter Office name");
do{
var choice=Number(prompt("Enter your choice\n1.Add\n2.Fire\n3.Get employee by ID\n4.Get all employees\n5.Quit "));
if(choice!=5 && choice!=null){
switch (choice){
case 1:let inp=new Array();
let innp=prompt("Enter full name,money,sleep mood,health rate,id,email,work mood,salary respectively separated by commas");

 inp=innp.split(",");
 let emp=new Employee(inp[0],inp[1],inp[2]);
 mngr=Number(prompt("Is the employee a manager or a normal employee (choose number)?\n1.Manager\n2.Normal"));
if (mngr==1) emp.isManager=true;
else
emp.isManager=false;
 emp.healthRate=inp[3];
 emp.id=inp[4];
 emp.email=inp[5];
 emp.workMood=inp[6];
 emp.salary=inp[7];
 o1.hire(emp);break;
 case 2:let d=prompt("Enter ID of employee");o1.fire(d);break;
 case 3:

 let empId=prompt("Enter ID of employee");
 let tempEmp=o1.getEmployee(empId);
 alert(`
     Name: ${tempEmp.fullName}
     ID: ${tempEmp.id}
     Salary: ${tempEmp.salary}
     Work Mood: ${tempEmp.workMood}
     Email: ${tempEmp.email}
     Manager: ${tempEmp.isManager}
     Health Rate: ${tempEmp.healthRate}
     Sleep Mood: ${tempEmp.sleepMood}
     Money: ${tempEmp.money}`
 );break;
case 4:for(let i=0;i<o1.getAllEmployees().length;i++){
    alert(`
    Name: ${(o1.getAllEmployees())[i].fullName}
    ID:${(o1.getAllEmployees())[i].id}
    Salary: ${(o1.getAllEmployees())[i].salary}
    Work Mood:${(o1.getAllEmployees())[i].workMood}
    Email: ${(o1.getAllEmployees())[i].email}
    Manager: ${(o1.getAllEmployees())[i].isManager}
    Health Rate: ${(o1.getAllEmployees())[i].healthRate}
    Sleep Mood: ${(o1.getAllEmployees())[i].sleepMood}
    Money: ${(o1.getAllEmployees())[i].money}`
)
};break;
 default:alert("Enter a valid number");break;
}}

}while(choice!=5 && choice!=null);







