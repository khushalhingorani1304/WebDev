// * Functions in JS *

// let a = 5;
// let b = 3;

// let k = add(a,b);

// let l = add(8,5);

// function add(a,b){
//     const sum = a+b;
//    // console.log(sum);
//     return sum;
// }

// console.log(k," ",l);


//! Function Expression (Only in javascript)
//^ -> A function expression is very similar to and has almost the same syntax as a function declaration. The main difference between a function expression and a function declaration is the function name, which can be ommited in fuction expressions to create anonymus functions

// const square = function(num){
//     return num*num;
// }

// console.log(square);
// console.log(square(4));




//! Nested Functions

// function sumSquare(a,b){
//     function square(num){
//         return num*num;
//     }

//     return square(a)+square(b);
// }


// console.log(sumSquare(2,9));



//! Advanced Function Concepts

//^ --> (1) Arrow Functions

// const greet  = () => {
//     console.log("Hello world");
// }



// const square = (num) => num*num;

// const greetings = () => console.log("Hello world 2.0");



// greet();
// greetings();
// console.log(square(5));



//^ --> (2) CallBack Functions - A call back is Function passed as an argument to another function

// const calculate = (a,b,operation) => {
//     return operation(a,b);
// } 

// const add = (a,b) => a+b;
// const subtract = (a,b) => a-b;
// const multiply = (a,b) => a*b;
// const divide = (a,b) => a/b;

// console.log(calculate(5,2,multiply))


// & Arrays have some inbuilt function which is called By CallBack method;
// & Eg :-
      

//& (1)--------------> FIND (there exist a find function which checks for every value of array we just have to pass a function of what we want)

//& similarly there are othr functions like findIndex,forEach and many more;



// let x = [4,5,6,28,1,-4,-3,-1];

// const firstNeg = (num) => {
//     return num<0;
// }

// console.log(x.find(firstNeg));
// console.log(x.findIndex(firstNeg));


// const access = (num) => {
//     console.log("array num", num);
// }

// x.forEach(access);



//^ -->(3) CallBack Hell

// function getCheese(CallBack){
//     setTimeout(() => {
//         const cheese = "Cheese";
//         console.log("here i got",cheese);
//         CallBack(cheese);
//     },2000);
// }


// function getDough(cheese,CallBack){
//     setTimeout(() => {
//         const dough = cheese + "Dough";
//         console.log("here i got",dough);
//         CallBack(dough);
//     },2000);
// }


// function getPizza(dough,CallBack){
//     setTimeout(() => {
//         const pizza = dough + "Pizza";
//         console.log("here i got",pizza);
//         CallBack(pizza);
//     },2000);
// }


// getCheese((cheese) => {
//     getDough(cheese,(dough) =>{
//         getPizza(dough,(pizza)=>{
//             console.log("I got my Pizza");
//         })
//     })
// })


// Its Ugly As fuck to remove this callBack hell we use promises in Javascript

// Basically setTimeout function does not allow to return anything thats why we used callBack method; 