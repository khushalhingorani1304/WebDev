// function getCheese(){
//     setTimeout(()=>{
//         const cheese = "Cheese";
//         return cheese;
//     },2000)
// }



//* as setTimeout does not allow to return anything and if we use callback method for same it will create callback Hell problem to resolve that problem we use "Promises"!!!


// * To make promise object we use Promise construstor!!!

//^ Example 1:

// const ticket = new Promise(function(resolve,reject){
//     const isBoarded = false;

//     if(isBoarded){
//         resolve("You are in the Flight!");
//     }else{
//         reject("Your flight has been canceled!")
//     }
// });


// ticket.then((data)=>{
//     console.log("Woohoo",data);
// }).catch((data)=>{
//     console.log("Oh No",data);
// }).finally(()=>{
//     console.log("I will always be executed!")
// })





//^ Example 2 (lets replicate example of pizza used in callback hell case):

function getCheese(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cheese = "🧀";
            resolve(cheese);
        },2000)
    })
}

function makeDough(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dough = cheese + "🫓";
            resolve(dough);
            // reject("Bad Cheese");
        },2000)
    })
}

function bakePizza(dough){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pizza = dough + "🍕";
            resolve(pizza);
        },2000)
    })
}



async function orderPizza(){
    const cheese = await getCheese();
    console.log("Here is the cheese :",cheese);
    const dough = await makeDough(cheese);
    console.log("Here is the dough :",dough);
    const pizza = await bakePizza(dough);
    console.log("Here is the pizza :",pizza);
}


orderPizza();


// getCheese().then((cheese)=>{
//     console.log("Here is the cheese :",cheese);
//     return makeDough(cheese)
// }).then((dough)=>{
//     console.log("Here is the dough :",dough);
//     return bakePizza(dough);
// }).then((pizza)=>{
//     console.log("Here is the pizza :",pizza);
// }).catch((data)=>{
//     console.log("Error Occured!",data)
// })