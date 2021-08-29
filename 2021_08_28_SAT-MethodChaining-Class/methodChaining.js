const people = [
	{
		name: "John",
		age: 31,
		city: "Berlin",
		hobby: ["soccer", "swimming", "cycling"],
	},
	{
		name: "Christina",
		age: 36,
		city: "Hannover",
		hobby: ["swimming", "gardening", "squash"],
	},
	{
		name: "Robin",
		age: 26,
		city: "Duisburg",
		hobby: ["sawing", "squash", "soccer"],
	},
	{
		name: "Anna",
		age: 21,
		city: "Berlin",
		hobby: ["Badminton", "cycling", "swimming"],
	},
	{
		name: "Leon",
		age: 41,
		city: "Berlin",
		hobby: ["soccer", "gardening", "cycling"],
	},
];

// console.log(people[0].name);
// console.log(people[4].name);
// console.log(people[people.length-1].name);

//? For Loop

const forLoop = (array) => {
    let resultArray = [];
    for(let i =0;i<array.length; i++) {
        resultArray.push(array[i].name)
    }
    return resultArray
}
// console.log(forLoop(people));

//? while loop

const whileLoop = (array) => {
    let resultArray = [];
    let counter = 0;
    while(counter < array.length) {
        resultArray.push(array[counter].name);
        counter++;
    }
    return resultArray
}
// console.log(whileLoop(people));

//? do-while loop

const doWhileLoop = (array) => {
    let resultArray = [];
    let counter = 0;
    do {
        resultArray.push(array[counter].name);
        counter=counter+1;
        // counter+=1
        // counter++
    }while(counter<=array.length-1);
    return resultArray;
}
// console.log(doWhileLoop(people));

//? for ... of (for arrays)

const forOf = (array) => {
    const resultArray = [];
    for (const element of array) {
        resultArray.push(element.name);
    }
    return resultArray;
}
// console.log(forOf(people));

//? forEach method

const forEach = (array) => {
    const resultArray = [];
    array.forEach((el)=> {
       return resultArray.push(el.name);
    })
    return resultArray;
}
console.log(forEach(people));

//? map method
const map = (array) => {
   return array.map((el)=>{
        return el.name
    })
}
console.log(map(people));

const map1 = people.map((el) => el.name)
console.log(map1);

//? filter method

const filter1 = people.filter((el)=> el.name.length>=5 )
console.log(filter1);


const getNamesInCity = people.filter((el)=> el.city === "Berlin").map((el)=>el.name
)
// [{},{},{}].
console.log(getNamesInCity);


const getNamesIncludeGardening = people.filter((el)=> el.hobby.includes("gardening")).map((el)=>el.name)
console.log(getNamesIncludeGardening);


{
    const getNamesIncludeGardening = people.filter(({hobby})=> hobby.includes("gardening")).map(({name})=>name)
console.log(getNamesIncludeGardening);
}

const sortedGetNamesInCity = people.filter((el)=> el.city === "Berlin").map((el)=>el.name).sort()
console.log(sortedGetNamesInCity);

const numbers = ["Banana","Apple","Orange","Pear"]
const sortedNumbers = numbers.sort((a,b)=> b.localeCompare(a))
console.log(sortedNumbers);