interface Person {
    name: string;
    age: number;
    email: string;
}

class Person implements Person{
    name: string;
    age: number;
    email: string;

    constructor(name:string, age:number, email:string){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    sayHello(){
        console.log("Hello " +this.name);
    }
}

const person1: Person = new Person('lui', 22, 'lui.test@gmail.com');
const person2: Person = new Person('rob', 28, 'rob.test@gmail.com');
person1.sayHello();
person2.sayHello();