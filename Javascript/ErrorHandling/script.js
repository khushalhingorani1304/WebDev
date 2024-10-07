
// try {
//     console.log(age);
// } catch (e) {
//     console.log(e.name);
//     console.log(e.message);
// }

// const a = 24;
// console.log("Important", a);



try{
    const res = prompt("Are you a robot?");
    if(res=="Y"){
        throw new Error("Robot Found");
    }
}catch(e){
    console.log(e);
}finally{
    console.log("Maa ki chut");
    
}