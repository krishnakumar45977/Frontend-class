numbers = [10,20,30,40,50,60]

// for(let i = 0;i<numbers.length; i++){
//     console.log(numbers[i]);
// }

for (const num of numbers){
    if (num === 20){
        console.log("number Exist")
        // break
        continue
    }
    console.log(num)
}

let detail = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "city": "Gwenborough"
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
  }

let updatedDetail = {
    ...detail, address:{
        ...detail.address, city:"Chennai"
    }
}

console.log("updated nested json", updatedDetail)
// detail.name = "Sathish"

// console.log(detail.address.geo.lat)

let details = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
}

console.log(details["name"])
for (let key in details){
    console.log(key, details[key])
}

details.mobileNumber = 12123123;
console.log(details)


let newDetails = {}
newDetails.id = details.id
newDetails.name = "Vignesh"
newDetails.username = details.username
newDetails.email = details.email

console.log("New copied details are", newDetails)

let operation = {
    ...details, name:"Vignesh"
}

console.log("spread Operation result", operation)