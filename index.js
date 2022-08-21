'use strict'

class Person {
    constructor(firstName,lastName, age, birthDayDate){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.birthDayDate = new Date(birthDayDate);
    }
    celebrate(){
        return `Happy Birthday, ${this.firstName}! let’s celebrate`
    }
}
class Employee extends Person{
    #salary = 0;
    constructor(firstName,lastName, age, birthDayDate,jobPosition, salary){
        super(firstName,lastName, age, birthDayDate)
        this.jobPosition = jobPosition;
        this.#salary = salary;
    }
    getYearSalary (){
        const CONTRACT_TERM = 12;
        return CONTRACT_TERM*this.#salary
    }
    celebrate(){
        const CURRENT_YEAR = new Date().getFullYear();
        const thisYearBirthday = new Date(this.birthDayDate).setFullYear(CURRENT_YEAR);
        if  (isWeekend(thisYearBirthday)) {
            return super.celebrate();
        }
        return  'Happy Birthday, but I need to work'
    }
}

let isWeekend = (dateStr)=>{
    let date = new Date(dateStr);
    if (isNaN(+date)) {
        console.error('Error: invalid date');
        return
    }
    return (date.getDay() ===0 || date.getDay()===6)
}

let unemployedPerson = new Person('Marty','McFly',30,'1989-06-12');
let employedPerson = new Employee('Marty','McFly',30,'1989-06-12','talented skateboarder',200);
console.log(unemployedPerson.celebrate());
console.log(employedPerson.celebrate());
console.log(employedPerson.getYearSalary());
