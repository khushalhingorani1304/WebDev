


//^ Event Handlers (Html Element mai declare karke yaha funtion banega)

// function myFunction(){
//     console.log("I was Clicked!");
// }


// const mouseOver = () => console.log("Mouse was over me!");


// const mouseMove = () => console.log("mouse was moving!");


// const keyDown = () => console.log("Key Down");
// const keyPress = () => console.log("Key press");
// const keyUp = () => console.log("Key Up");





//^ Event Listeners (Html mai kuch nhi hoga saara kaam js mai hoga)

const box1 = document.getElementById("box-1");

box1.addEventListener("click", () =>{console.log("I was Clicked! AAAh");});

box1.addEventListener("click", () =>{console.log("I was Clicked Again!");});





const box2 = document.getElementById("box-2");

box2.addEventListener("click", (e) =>{console.log("Event Object", e);});





const box3 = document.getElementById("box-3");

box3.addEventListener("mouseover", (e) =>{console.log("Event Object", e.clientX, e.clientY);});




const nameInput = document.getElementById("nameInput");

nameInput.addEventListener("keydown",(e) => {console.log("Key pressed",e.key);});

nameInput.addEventListener("focus",() => {console.log("Focused!");});
