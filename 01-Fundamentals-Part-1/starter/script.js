let js = 'amazing'
if (js === 'amazing') alert('Jss is fun')

console.log(40 + 8 + 23 - 10)

// data type
let firstName = 'van'
console.log(firstName)

let PI = 3.1415

// write your code to be discriptive

let myFirstSchool = 'sTACO'
let mySecondSchool = 'Rebase'

// instead of 
let school1 = 'Staco'
let school2 = 'Rebase'

// primitive data types
// Number
// nUMBERS are always refered to floaing point no matter what all digits are refered to as numbers in js
let PIsecond = 3.1415  //is a Number

// strings
let mySecondSchooll = 'Rebase' //is a string

//Boolean either true or false

let van = true
// undefined 
// null
// symbol
// bigIntcv

// declaring variableas we use let on variables that will change later

let age = 35 // block scope
age = 20 // we mutate 

var cal = 34 //old way oof declaring a variable

const vana = 'girl' //not mutable
// and you can not declare a variable empty like this
// const vane; that is without asigning it to anything

//operators in js

// allows us to transform variables 
// logical operators 
//mathematical operators
const now = 2037
const ageJames = now - 1991
const ageSarah = now - 1888

console.log(now - 1997 > now - 2018) // what happens in term of operator preccidence

console.log(ageJames * 2, ageSarah / 10, 2 ** 3) // "**"" is the exponential sign 2*3 + 2*3 +2*3

// plus operaator concatinating strings you 

const wah = girl
const vane = bride
const wahVane = wah + '' + vane

// plus operaator use to reasign a value 
let v = 1
v += 5

console.log(v)

//  same with multiplication and divisison
v *= 5

console.log(v)

//  comparism operators use to represent boolean values

console.log(ageJames > ageSarah)

//we have >= 0r <= or the === !===

const isFullAge = ageSarah >= 10


// which operators are executed first 

console.log(now - 1997 > now - 2018) // what happens in term of operator preccidence math operators are executed first before the comparison operators 
// operators are executed from rright to left andd left to right
// Math operators are executed from left to right
console.log(25 - 10 - 5)
// asssingments from right to left 
let x, y;
x = y = 25 - 10 - 5 // when js comes here and sees the math operator it starts executing from - operators then 
// since =  operetor starts to evalluating from right  to left y =10, x =10  not x=y and y = 10

console.log(x, y)


// calculating average
const averageAge = ageJames + ageSarah / 2 // division come before mul so it will be executed first

console.log(averageAge) // the resul average will be greater than age to resolve this, we have to addd paranthesis 
const averageAgeResolved = (ageJames + ageSarah) / 2 // the parenthesis is executed before the / sign sso everything inside the paranthesis can be executed

