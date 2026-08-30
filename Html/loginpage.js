let user = "Krishna@gmail.com"
let password = "3578"

let Userdetails = [{
    userName: "krishna@gmail.com",
    password: "3578"
},
{
    userName: "jeevan@gmail.com",
    password: "3578"
}]

function login(){
    event.preventDefault()
    let userName = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    console.log(userName)
    console.log(pass)

    if(userName === user && pass === password){
        console.log("login succesful")
    }
}

let result;
function loginNew(event){
    event.preventDefault()
    console.log(event)
    let data = new FormData(event.target)
    result = Object.fromEntries(data.entries())
    console.log(result)

    // f(result.Email === user && result.password === passwordN){
    //     console.log("login succesful")i
    let output = UserDetails.filter(user => user.userName === result.Email 
        && user.password === result.password)
    let findoutput = Userdetails.find(u=> u.userName === result.Email && u.password === result.password)
    console.log(output)
    // if (output.length > 0){
    if (findoutput.length> undefined){
        console.log("Login Successfull")
        // window.location.replace("navigation.html")
    }else{
        let h = document.getElementById("message")
        h.textContent = "Login Failed"
    }

}

console.log(result)

const form = document.getElementById("userForm");

// form.addEventListener("submit", function(event){
//     event.preventDefault()

//     const formData = new FormData(event.target)
//     let result = Object.fromEntries(formData.entries())
//     console.log(result)

// })

let number = [20,23,22,24,26,25]
let filtered = []
for (let num of number){
    if(num === 25){
        filtered.push(num)
        console.log(num)
    }
}

let resultN = number.filter(n => n>= 21);

console.log(filtered)
console.log(resultN)

if (resultN.length > 0){
    console.log("Filter elements present")
}else{
    console.log("No Values found")
}
let userData = Userdetails.map(user => user.userName)
console.log("The usernames are", userData)

const employees = [ 
    {name:"Vignesh", salary: "50000"},
    {name: "Rahul", salary: "60000"},
    {name: "Arun", salary: "70000"}
]

const updatedSalary = employees.map(employee => {
    return{
        ...employee, salary: employee.salary *1.10
}
})

console.log(updatedSalary)
const updatedSalaryN = employees.map(emp => emp.salary*1.10)
console.log(updatedSalaryN)



let names = ["Arun","Bala","Aravind"]
let names1 = names.map(n => n.toUpperCase());
console.log(names1 )

// function sample(n){
//     return n.toUpperCase()
// }
// console.log(names1)

let students = [{
    name: "Krishna",
    mark: 75
},
{
    name: "Jeevan",
    mark: 48
},
{
    name: "Kaviyan",
    mark: 75
}]

let passStatus = students.map(s=>({
    ...s, status: s.mark>=50 ? "PASS" : "FAIL"
}));

console.log(passStatus)