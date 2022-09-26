class Person{
    name: string;
    age: number;

    constructor(PersonName:string, PersonAge:number){
        this.name = PersonName;
        this.age =PersonAge;
    }
    tellMyName(){
        return "I am " + this.name;
    }
    tellMyAge(){
        return "and I am " + this.age+" years old";
    }   
    
}
let person1: Person;
let person2: Person;
person1 = new Person ("John", 40);
person2 = new Person ("Mary", 35);

console.log(person1.tellMyName(), person1.tellMyAge());
console.log(person2.tellMyName(), person2.tellMyAge());