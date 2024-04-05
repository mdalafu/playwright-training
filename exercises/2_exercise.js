var Person = /** @class */ (function () {
    function Person(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello " + this.name);
    };
    return Person;
}());
var person1 = new Person('lui', 22, 'lui.test@gmail.com');
var person2 = new Person('rob', 28, 'rob.test@gmail.com');
person1.sayHello();
person2.sayHello();
