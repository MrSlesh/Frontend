const BASE_URL = 'https://jsonplaceholder.typicode.com';
const loadUsersBtn = document.getElementById('loadUsersBtn');
fetchUsers();
loadUsersBtn.addEventListener('click', async () => {
    const users = await fetchUsers();
    displayUsers(users)
})
async function fetchUsers() {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        const users = response.json();
        console.log(users);
        return users;
    } catch (error) {
        console.log(`Error fetching users: ${error}`);
    }
}
function displayUsers(users) {
    usersList.innerHTML = '';
    users.forEach(({ name, phone }) => {
        const li = document.createElement('li');
        const phoneFormatted = phone.split(' ')[0];
        li.textContent = name + '   ' + phoneFormatted
        usersList.appendChild(li);
    })
}
// P.S.
let x = 10;
x = 15
x = true; // значение
x = {}; // ссылка на место в памяти, где хранится сущность
const z = {age: 10};
// z = 15
z.age = 15;
console.log(z);
const arr = [1, 2, 3, 4, 5];
arr.length = 0;
console.log(arr); (bearbeitet) 























