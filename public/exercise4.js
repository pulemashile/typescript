"use strict";
class exercise4 {
    constructor(name, age, socialSecurityNumber) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
let person = new exercise4("lerato", 21, "pee");
console.log(person.getName());
