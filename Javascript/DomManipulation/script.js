//*Accessing the Elements

// const myBody = document.body;

// myBody.style.backgroundColor = "red";





// const box2 = document.getElementById('box-2');

// box2.style.backgroundColor = 'blue';





// const divs = document.getElementsByTagName("div");

// // console.log(divs);




// const boxes = document.getElementsByClassName("box");

// // console.log(boxes);


// const random = document.querySelector('.container .random')
// console.log(random);



//* Modifying HTML

//^ Inner Html

// document.getElementById("box-1").innerHTML = "boxOne";
// document.getElementById("box-1").innerHTML = "<h1>boxOne</h1>";
const boxOne = document.getElementById("box-1");
boxOne.innerHTML = "BoxOne";







//^ Attributes(src style etc)

const boxTwo = document.getElementById("box-2");

boxTwo.style.backgroundColor = "red";
// boxTwo.style.width = "200px";






//^ Class

//! add

// const box3 = document.getElementById("box-3");
// box3.classList.add("round-border");


const boxes = document.getElementsByClassName("box");

for(let i = 0;i<boxes.length;i++){
    boxes[i].classList.add("round-border");
}


//! remove

for(let i = 0;i<boxes.length;i++){
    boxes[i].classList.remove("round-border");
}



//! toggle
//& Agar class hogi to remove ho jayegi , agar nhi hogi to add ho jayegi








//^ Creating and appending Element in HTMl

const newPara = document.createElement('p');
newPara.innerHTML = "This is brand new";

const container = document.getElementById("container");

container.appendChild(newPara);





const newheading = document.createElement("h1");
newheading.innerHTML = "Heading-2";

const mainBody = document.body;

mainBody.appendChild(newheading);