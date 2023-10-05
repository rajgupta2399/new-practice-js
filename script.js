console.log("hello js")

// Basics of Programming in JavaScript

// ● Hello world program
console.log("hello world")

// ● Declare variable using var
// ● More about variable
// declaring variable by using var to store the data its known as primitive data type..store the string numbers etc.

var sagar = "hello sagar"
console.log(sagar)


// ● Let
// let is also used for declaring variables to store the value and it is block scope variable 

let raj = "hello raj"
console.log(raj)

// ● Const
// const is also used for declaring variable but you cannot change the variable value..

const pi = 3.14;
// pi = 5;       //  Assignment to constant variable.
console.log(pi)

// ● String Indexing
const stringIndexing = "abcdefghijklmnopqrstuvwxyz"
console.log(stringIndexing[10]) // k


// ● Useful string methods
// splice method
const splice = stringIndexing.slice(0,5)
console.log(splice)

// uppercase
console.log(splice.toUpperCase())
console.log(splice.toLowerCase())


// ● Template Strings
console.log(`${sagar} and the pi value is ${pi}`)

// ● Null, undefined, BigInt, typeof
// null is primitive datatype but in real world its known as object data type
const nullDataType = null;
console.log(typeof nullDataType); // object 

// undefined
// when u declare the variable without assigning its value known as underfined
let fname1;
console.log(fname1)  // undefined

// BigInt
// variable has its own number limit when you assign the big integer value use bigint
console.log(BigInt(7))   // 7n

// type of : used to check the type of data-type
const array = [1,2,3,4,5]
console.log(typeof array);

// ● Booleans and Comparison Operator
// booleans : True or False
// comparison operator :-
// == check the value inside variables
// === check the value and the data-type

const a = 5;
const b = 5;
// primitive data type 
console.log(a===b); // true 

const a1 = [5];
const b1 = [5];
// refrence data type
console.log(a1===b1); // false


// ● Truthy and Falsy Values
// truthy values  :- true , 1 , 'abc etc
// falsy values :- false, 0, null, undefined

// ● If else statement
const name1 = "sagar"
const age = 25;
if(name1[0] === "s" && age<18){
    console.log("your name is start with s")
}else{
    console.log("your name not start with s ")
}


// ● && || operator
const name2 = "Sudhanshu"

if(name2[0] === "s" || name2[0]==="S"){
    console.log("your name is start with s")
}
else{
    console.log("name not is starting with s")
}


// ● Nested if else
// ● If elseif else
if(name2[0] ==="s"){
    console.log("your name is starting with small s")
    if(age<18){
        console.log("your age above 18")
    }
    else{
        console.log("your agge is not above 18")
    }
}
else if (name2[0]==="S"){
    console.log("name is starting with capital S")
    if(age<18){
        console.log("your age above 18")
    }
    else{
        console.log("your age is not above 18")
    }
}
else{
    console.log("name is not starting with S")
}


// ● Switch statement
const weekday = 4;
switch(weekday){
    case 0:{
        console.log("invalid weekday")
    }
    case 1:{
        console.log("sunday")
        break;
    }
    case 2:{
        console.log("monday")
        break;
    }
    case 3:{
        console.log("tuesday")
        break;
    }
    case 5:{
        console.log("thursday")
        break;
    }
    case 6:{
        console.log("friday")
        break;
    }
    case 7:{
        console.log("staurday")
        break;
    }
    case 4:{
        console.log("wednesday")
        break;
    }
    default:{
        console.log("invalid..!!")
    }
}


// ● While loop
// ● While loop examples
console.log("while loop")
num = 10
let i =0;
while(i<=num){
    console.log(i)
    i++
}

// ● For loop
console.log("for loop")
for(let i=0;i<=num;i++){
    console.log(i)
}

// ● For loop examples
const arrays = [25,6,7,89,99]    
let maxNum = arrays[0];
for(let j=0; j<=arrays.length; j++){
    if(arrays[j]>maxNum)
    maxNum = arrays[j]
}
console.log(maxNum);


// ● Break and continue keyword
console.log("break and continue keyword")
const findString = [24,56,4,"56",89,8,9]
for(let i=0; i<findString.length;i++){
    if(typeof findString[i] ===  "string"){
        console.log("there is a string ")
        continue;
    }
    else{
        console.log(findString[i]);
    }
}


// Arrays in JavaScript

// ● Intro to arrays
// array is a refrence data type..which can store different primitive data-types in array and it is object 
const introArray  = [1,2,3,4,5]

// ● Push pop shift unshift
// push : add the Element inside the array from the last
introArray.push(10)
console.log(introArray)

// pop : remove the element from the last 
const pop = introArray.pop()
console.log(pop)
console.log(introArray)

// shift : remove the element fromt the first
const shift = introArray.shift()
console.log(shift)
console.log(introArray)

// unsshift : add the new Element from the first
introArray.unshift(100);
console.log(introArray)


// ● Primitive vs reference data types

// primitive datatype : both varible store in the different heap memory in the computer one variable change doeznt change the other value 
// called primitive datatype

let z = "sagar"
let y = z
console.log(`name is ${z}`)
console.log(`name is ${y}`)

z= "raj"
console.log(`name is ${z}`)
console.log(`name is ${y}`)

// refrence data-type
// reference data types store the value in the heap of computer and its own address.....its canit channge while changing the value...example ------- arrays,object etc..

const z1 = [1,2,3,4,5]
const y1 = z1
console.log(`array is ${z1}`)
console.log(`array is ${y1}`)


z1.push(6,7,8,9,10)
console.log(`array is ${z1}`)
console.log(`array is ${y1}`)


// ● Clone array & spread operator
const person = ["sagar",'raj','akshat','priyanshu']
const person1 = [...person]
console.log(person)


// ● For loop
for(let i=0; i<person1.length; i++){
    console.log(person1[i])
}


// ● While loop in array
let k = 0;
while(k<person1.length){
    console.log(person1[k])
    k++
}

// ● For of loop
for(let m of z1){
    console.log(m)
}

// ● Array destructuring

const [firstName,lastName,...otherName] = person
console.log(firstName)
console.log(lastName)
console.log(otherName)


// Objects in JavaScript
// ● Intro to objects
// obj in js we can store the key value pairs inside {}
const Person = {
    firstName1 : "mukesh",
    lastName : "yadav",
    age : 22,
    "Home Address" : "bihar"
}

// ● Dot vs Bracket Notation
console.log(Person.firstName)
console.log(Person["Home Address"])

// ● Iterate objects
// run a loop in obj not for loop

for(obj in Person){
    console.log(Person[obj])
}

// ● Computed properties

const computed = {}

let key = "key1"
let key1 = "key2"

let value = "value1"
let value1 = "value2"

computed[key] = value
computed[key1] = value1

console.log(computed)


// ● Spread operator in objects
// ● Object Destructuring

const {firstName1,...otherDetails} = Person
console.log(firstName1)
console.log(otherDetails)


// ● Objects inside Array
const objinArray = [
    {fName : "sagar",age : 25},
    {fName1 : "raj",age1 : 18},
    {fName2 : "priyanshu",age2: 19}
]




for(let obj of objinArray){
    console.log(obj)
}


// ● Nested Destructuring
console.log(" ● Nested Destructuring")
const [user1,user2,user3] = objinArray
console.log(user1)
console.log(user2)
console.log(user3)


// access array inside object
console.log(objinArray[0].fName,objinArray[1].age1)

// Functions in JavaScript
// assign the task to the function and then call the function according to required situation

// ● Function declaration
// ● Function declarations are hoisted
// this is called the function declartion

let Name = "mukesh kumar yadav"
function callName(){
    console.log('function declaration')
    console.log(`hello ${Name}`)
}
callName()

// ● Function Expression
let Age = function(){
    console.log('function expression')
    console.log(`hello ${Name}`)
}
Age()

// ● Arrow Functions

const arrowFunction = (()=>{
    console.log(`hello ${Name} and the age is ${age}` )
})

arrowFunction()

// ● Function inside function
function firstFunc(){
    console.log(`hello ${name1}`)

    function secondFunc(){
        console.log(`hello ${name2} and the age is ${age}`)
    }

    secondFunc()
}
firstFunc()


// ● Lexical Scope
// when the variable declare outside the function we can access the variable the inside the function and the another function inside the first function also excess that variable because it dont have same name variable

let add = "Bawana, Pooth Khurd"
let newSecAdd = "Madhya Pradesh"
function thirdFunc(){
    let add = "Rohini Sec-20, Kirari"
    console.log(add)
    // console.log(newAdd)

    function fourthFunc(){
        console.log("inside lexcial scope")
        let newAdd = "Noida"
        console.log(add)
        console.log(newAdd)
        console.log(newSecAdd)

        function fifthFunc(){
            console.log("inside lexical scope 2")
            let newSecAdd = "MP"
            console.log(newAdd)

            function sixthFunc(){
                console.log("inside lexical scope 3")
                console.log(newSecAdd)


            }
            sixthFunc()
        }

        fifthFunc()

    }
    fourthFunc()
}

thirdFunc()


// ● Block Scope Vs Function Scope
// block scope element are let and const --- inside the function {}


// function scope elements are var outside the function


var graduation = "BCA"

function seventhFunc(){
    let education = "12th pass"
    console.log(education)
}

seventhFunc()

function eightFunc(){
    // console.log(education)
    console.log(graduation)
}

eightFunc()


// ● Default Parameters
function ninthFunc(q,w=0){
    console.log("default parameter")
    console.log(q+w)
}

ninthFunc(5,8) // NaN-- not a number

// ● Rest Parameters

function tenthFunc(p,o,...restParmeter){
    console.log("rest parameter")
    console.log(p+o)
    console.log(restParmeter)
}
tenthFunc(456,654,1,2,4,5,6,6,7)

// PARAMETER DESTRUCTURING 
// IS USED TO DESTRUTURE THE PARAMETER DURINNG OBJECT CASE EXAMPLE JUST LIKE DESTRUCTURE THE OBJECT..LIKE 

const priyanshu = {
    userName : "raj",
    userAge : 25,
    userAddress : "Rohini"
}

function parameterDestructuring({userName,userAddress}){
    console.log(userName)
    console.log(userAddress)
}

parameterDestructuring(priyanshu)



// ● Very brief intro to callback functions(covered in great detail
const eleventhFunc = ((callback)=>{
    console.log("hello")
    callback(10,10)
})
function twelvethFunc(u,v){
    console.log(u+v)
}

eleventhFunc(twelvethFunc)

// ● Functions returning Functions
// in js one function return only one function 

let mn = 90
let nm = 80
const thirteenthFunc = ((mn,nm)=>{
    console.log(mn/nm)

    function fourteenthFunc(mn,nm){
        console.log(mn*nm)
    }
    return fourteenthFunc(mn,nm)
})

thirteenthFunc(mn,nm)


// Very Important Array Methods

// ● Foreach method
// it is run and works like loop in array

const foreachArray  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const newforeach = foreachArray.forEach((number,index)=>{
    console.log( `the number is ${number} and the index is ${index}`)
})

// ● Map method
// it iterate the array and create the new array and return something

const mapArray = foreachArray.map((number,index)=>{
    return `the number is ${number} square of  the array number is ${number*number} and the index  is ${index} `
})
console.log(mapArray)

const addmapArray = foreachArray.map((number)=>{
    return number+number
})

console.log(addmapArray)

// ● Filter

const filterArray = foreachArray.filter((number)=>{
    if(number%2==0){
        const evenNum = number*2
        console.log(evenNum)
        // return evenNum
    }
    else if(number%2!==0){
        const oddNum = number*1
        console.log(oddNum)
    }
})


// ● Reduce
const cara = [
    {prodcutID:1,prodcutName:"monitor",prodcutPrice : 45000},
    {prodcutID:2,prodcutName:"mobile",prodcutPrice : 75000},
    {prodcutID:3,prodcutName:"fridge",prodcutPrice : 120000},
    {prodcutID:5,prodcutName:"monitor",prodcutPrice : 300000},
    {prodcutID:5,prodcutName:"monitor",prodcutPrice : 40000},
]

const amazon = cara.reduce((total,current)=>{
    return total + current.prodcutPrice
},0)

console.log(amazon) 

// ● Sort
const sortArray = cara.sort((a,b)=>{
    return a.prodcutPrice-b.prodcutPrice
})

console.log(sortArray)

// ● Find
const findArray = cara.find((name)=>{
    if(name.prodcutName==="monitor" && name.prodcutID===5 && name.prodcutPrice<=40000){
        console.log(name)
    }
})


// ● Every
// ● Some
// ● Fill method
// ● Splice method



// More useful things
// ● Iterables
// ● Sets
// ● Maps
// ● Object.assign
// ● Optional chaining



// Object Oriented JavaScript / Prototypal
// Inheritance
// ● Methods
// ● This keyword, Window object
// ● Call , apply and bind method
// ● Some warnings
// ● This inside arrow functions
// ● Short syntax for methods
// ● Factory functions & discuss some memory related problems
// ● First solution to that problem
// ● Why that solution isn’t that great
// ● What is __proto__ , [[prototype]]
// ● What is prototype
// ● Use prototype
// ● New keyword
// ● Constructor function with new keyword
// ● More discussion about proto and prototype
// ● Class keyword
// ● Example using class keyword
// ● Super keyword
// ● Method overriding
// ● Getters and setters
// ● Static methods and properties