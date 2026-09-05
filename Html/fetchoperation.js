let fetchUsers = [];

async function fetchUserData() {
    const response = await fetch("https://dummyjson.com/users")
    const user = await response.json()
    console.log("api call response is", user.users)
    fetchUsers = user.users;
    console.log(fetchUsers)
    getUserDetails(fetchUsers)
}

async function getUserDetails(user) {

    const rows = user.map(u => {

        return `
        <tr>
            <td>${u.id}</td>
            <td>${u.firstName}</td>
            <td>${u.lastName}</td>
            <td>${u.phone}</td>
            <td>${u.email}</td>
            <td>
<button class="btn btn-primary" onclick=editUser(${u.id})>Edit</button>
<button class="btn btn-primary" onclick=deleteUser(${u.id}) >Delete</button>

            </td>
        </tr>
        `
    }).join("");

    document.getElementById("tableBody").innerHTML = rows;
}

function closeModel() {
    document.getElementById("editmodal").style.display = "none"
}

function deleteUser(id) {
    fetch(`https://dummyjson.com/users/
        ${id}`, {
        method: "DELETE"
    }).then(response => {
        return response.json();
    }).then(data => console.log(data));


}

async function deleteUserNew(id) {
    const response = await fetch(`https://dummyjson.com/users/${id}`, {
        method: "DELETE"
    });

    const data = await response.json();
    console.log(data);
}

function toggleMenu(id) {
    document.querySelectorAll(".dropdown").forEach(menu => { menu.style.display = "none" })

    const selectedMenu = document.getElementById(`menu-${id}`)
    selectedMenu.style.display = "block"
}

function editUser(id) {
    console.log(id);
    console.log(fetchUsers);
    const selectedUser = fetchUsers.find(user => {
        return user.id == id;
    })

    console.log(selectedUser);

    document.getElementById("userId").value = selectedUser.id;
    document.getElementById("firstName").value = selectedUser.firstName;
    document.getElementById("lastName").value = selectedUser.lastName;
    document.getElementById("phone").value = selectedUser.phone;
    document.getElementById("EmailId").value = selectedUser.email;

    document.getElementById("editmodal").style.display = "block";

}

function CloseModal() {
    document.getElementById("editmodal").style.display = "none";
}

document.getElementById("userIdSearch").addEventListener("input", filterUsers);
document.getElementById("firstNameSearch").addEventListener("input", filterUsers);
document.getElementById("lastNameSearch").addEventListener("input", filterUsers);
document.getElementById("phoneSearch").addEventListener("input", filterUsers);
document.getElementById("EmailSearch").addEventListener("input", filterUsers);

function filterUsers() {
    const id = document.getElementById("userIdSearch").value;
    const firstName = document.getElementById("firstNameSearch").value.toLowerCase();
    const lastName = document.getElementById("lastNameSearch").value.toLowerCase();
    const phone = document.getElementById("phoneSearch").value.toLowerCase();
    const email = document.getElementById("EmailSearch").value.toLowerCase();

    const filteredUsers = fetchUsers.filter(user => {

        return (
            // user.id.includes(id)&&
            user.firstName.toLowerCase().includes(firstName) &&
            user.lastName.toLowerCase().includes(lastName) &&
            user.phone.toLowerCase().includes(phone) &&
            user.email.toLowerCase().includes(email)
        );
    });
    getUserDetails(filteredUsers)
}


const editForm = document.getElementById("editForm");
editForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(editForm);
    const result = Object.fromEntries(formData.entries());

    const userID = formData.get("userId");

    const updateUser = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        phone: formData.get("phone"),
        email: formData.get("EmailId")
    };

    console.log(result);

    fetch(`https://dummyjson.com/users/${userID}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateUser)
    })
    document.getElementById("editmodal").style.display = "none";
})

function editOperation(event) {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(event.target);
    const result = Object.fromEntries(formData.entries());
    console.log(result);
    fetch(`https://dummyjson.com/users/${result.userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(result)
    })
    document.getElementById("editmodal").style.display = "none";

}

fetchUserData()
