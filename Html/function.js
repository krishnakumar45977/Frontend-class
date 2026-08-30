// function addoperation(){
//     console.log("Function working");
// }
// addoperation()
// funtion addoperation(a,b){
//     console.log("Function working")
// }
// // addoperation(5, 10)
// function addoperation(a,b){
//     console.log("Function working")
//     return a+b
// }

// let result = addoperation(5, 10)
// if(result%2==0){
//     console.log("Even number")
// }
let number = 1 
function incrementOperation(){
    number += 1
    let head= document.getElementById("counting")
    head.textContent = number
}
function decrease(){
    number -= 1
    let head= document.getElementById("counting")
    head.textContent = number
}