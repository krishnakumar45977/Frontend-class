// let h1 = document.getElementById("h1Sample")
// h1.textContent = "Welcome to JS"

username = "Sathish"

let h = document.getElementById("Heading")
h.textContent = `Welcome Back ${username}`


let divContent = document.getElementById("sampleDiv")
let h1C = document.createElement("h1")
h1C.textContent = "Sample Text Content"
divContent.append(h1C)
let para = document.createElement("p")
para.textContent = "This is sample content loading on the JS"
divContent.append(para)



let tab = document.getElementById("SampleTable")
let head = document.createElement("thead")
let tr = document.createElement("tr")
let th = document.createElement("th")
th.textContent = "S.NO"
let th1 = document.createElement("th")
th1.textContent = "Name"
tr.append(th)
tr.append(th1)
head.append(tr)
let tail = document.createElement("tbody")
let tb = document.createElement("tr")
let td = document.createElement("td")
td.textContent = 1
let td1 = document.createElement("td")
td1.textContent = "Vignesh"

tb.append(td)
tb.append(td1)
tail.append(tb)

tab.append(head)
tab.append(tail)


let tab2 = document.getElementById("SampleTableTwo")
tab2.innerHTML = `
<thead>
    <tr>
        <th>S.No</th>
        <th>Name</th>
    </tr>

</thead>
<tbody>
    <tr>
        <td>1</td>
        <td> Sathish </td>
    </tr>
</tbody>

`