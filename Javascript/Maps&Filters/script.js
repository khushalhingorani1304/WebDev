//^ Filter  

// let students = [
//     {id : "001", name : "A", sports : "Crciket"},
//     {id : "002", name : "B", sports : "Basketball"},
//     {id : "003", name : "C", sports : "Crciket"},
//     {id : "004", name : "D", sports : "Basketball"},
//     {id : "005", name : "E", sports : "Hockey"}
// ]


// let newArray = students.filter((currValue) =>{
//     if(currValue.id % 2 == 0) return false;
//     else return true;
// })


// console.log(newArray);




//^ Map


let students = [
    {id : "001", name : "A", sports : "Crciket"},
    {id : "002", name : "B", sports : "Basketball"},
    {id : "003", name : "C", sports : "Crciket"},
    {id : "004", name : "D", sports : "Basketball"},
    {id : "005", name : "E", sports : "Hockey"}
]


// let newArray = students.map((currValue) =>{
//     return currValue.name;
// })



let newArray = students.map((currValue) =>{
    return `<li>${currValue.name}</li>`;
})


const div = document.getElementById("container");

div.innerHTML = `<ul>${newArray.join('')}</ul>`;


console.log(newArray);

