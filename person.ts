class Person{
    name: string;
    age: number;

    constructor(personName: string, personAge: number){
        this.name = personName;
        this.age = personAge;
    }

    tellMyName(){
        return "I am " + this.name;
    }

    tellMyAge(){
        return "and I am " + this.age+" years old";
    }   
    
}

let person1: Person = new Person ("John", 40);
let person2: Person = new Person ("Mary", 35);


console.log(person1.tellMyName(), person1.tellMyAge());
console.log(person2.tellMyName(), person2.tellMyAge());