let fetchUsers= [];
async function fetchUsersData(){
async function getUserDetails(){
    const response = await fetch("https://dummyjson.com/users")
    const user = await response.json()
    console.log("api call response is", user.users)
    fetchUsers = user.users;
    console.log(fetchUsers)
    getUserDetails(fetchUsers)
}
async function getUserDetails(users){
    
}
    const rows = users.map(u=>`
        <tr>
            <td> 
                ${u.id}
            </td>
            <td> 
                ${u.firstName}
            </td>
            <td>
                ${u.lastName}
            </td>
            <td>
                ${u.phone}
            </td>
            <td>
                ${u.email}
            </td>
            <div class = "dot-btn" onclick = "toggleMenu(${u.id})>
            :</button>
            <div class = "dropdown" id = "menu-${user.id}>
               <button onclick="editUser(${user.id})">Edit</button>
               <button onclick="deleteUser(${user.id})
        </tr>
         `).join("");

        document.getElementById("tableBody").innerHTML = rows;
}
document.getElementById("userIdSearch").addEventListener("input", filterUsers);
document.getElementById("firstName").addEventListener("input", filterUsers);
document.getElementById("lastName").addEventListener("input", filterUsers);
document.getElementById("phoneSearch").addEventListener("input", filterUsers);
document.getElementById("EmailSearch").addEventListener("input", filterUsers);

function filterUsers(){
    const id = document.getElementById("userIdSeaarch").ariaValueMax;
    const firstName = document.getElementById("firstNameSearch").value.toLowerCase();
    const lastName = document.getElementById("lastNameSearch").value.toLowerCase();
    const phone = document.getElementById("phone").value.toLowerCase();
    const email = document.getElementById("EmailSearch").value.toLowerCase();
    
    const filteredUsers = fetchUsers.filer(user=>{
        
        return(
            // user.id.includes(id)&&
            user.firstName.toLowerCase().includes(firstName)&&
            user.lastName.toLowerCase().includes(lastName)&&
            user.phone.toLowerCase().includes(phone)&&
            user.email.toLowerCase().includes(email)
        );
    });
    getUserDetails(filteredUsers)
}
fetchUsersData()