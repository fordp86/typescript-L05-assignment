"use strict";
class Employee {
    constructor(employeeName, employeeTitle, employeeDpartment, employeePay) {
        this.name = employeeName;
        this.title = employeeTitle;
        this.department = employeeDpartment;
        this.salary = employeePay;
    }
    printSalary() {
        console.log(`$${this.salary}`);
    }
    printDetails(salary = this.salary) {
        console.log(`${this.name} is a ${this.title} in the ${this.department} department with a salary of ${salary}.`);
    }
}
class Manager extends Employee {
    constructor(managerName, managerTitle, managerDepartment, managerSalary, sizeofTeam) {
        super(managerName, managerTitle, managerDepartment, managerSalary);
        this.managerBonus = 1500;
        this.teamSize = sizeofTeam;
    }
    printSalary() {
        console.log(`$${this.salary + this.managerBonus}`);
    }
    printDetails(salary = this.salary + this.managerBonus) {
        super.printDetails(salary);
        console.log(`${this.name} manages ${this.teamSize} employees.`);
    }
}
let newEmployee = new Employee("John", "Ninja", "Karate", 100000);
newEmployee.printSalary();
newEmployee.printDetails();
let newManager = new Manager("Steve", "Sailer", "Pirate", 200000, 3);
newManager.printSalary();
newManager.printDetails();
