//? A Normal Function
function addOne (numOne, numTwo) {

}

//! A Constructor Function (ES5 - the old way)
// The difference : We have to make the first character of the function's name to uppercase.
function Person (name, age, city, hobby) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.hobby = hobby;
    this.addOne = function(){
        return ++this.age
    }
}

const person1 = new Person("Bob", 34, "Essen", "Gardening")

console.log(person1);

//! Class (ES6 - the new way)
class Person1 {
    constructor(name, age, city, hobby){
    this.name = name;
    this.age = age;
    this.city = city;
    this.hobby = hobby;
    }
    addOne() {
      return ++this.age
     }
}


const person2 = new Person1("Thomas", 45 ,"Berlin", "fishing")
console.log(person2);