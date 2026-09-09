try {
    let user = null;
    console.log(user.name);
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log("Something went wrong")
    let s = document.getElementById("Sample")
    s.textContent = "Something went wrong"
} finally {
    console.log("Finally block executed")
}
console.log("Working");

// function withdraw(amount) {
//     if (amount <= 0) {
//         throw new Error("Amount must be greater than 100")
//     }
//     console.log("withdraw successful");
// }
function withdraw(amount) {
    try {
        if (amount <= 0) {
            throw new Error("Amount must be greater than 100")
        }
        console.log("withdraw successful");
    } catch (error) {
        console.log(error.name)
        console.log(error.message)
        console.log("Something went wrong")
        let s = document.getElementById("Sample")
        s.textContent = "Amount must be greater than 100"
    }
}

withdraw(-100);

console.log("Start");

setTimeout(() => {
    console.log("Time completed")
}, 3000)