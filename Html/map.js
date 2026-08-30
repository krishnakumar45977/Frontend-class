const employees = [
    {name: "Vignesh", salary: "50000"},
    {name: "Rahul", salary: "60000"},
    {name: "Arun", salary: "70000"}
]

const html = employees.map(emp => {
    return `
        <div>
            <h2>${emp.name}</h2>
            <p>${emp.salary}</p>
        </div>
    `
})

console.log(html)

document.getElementById("sample").innerHTML = html.join("");