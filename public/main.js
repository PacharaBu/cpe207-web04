const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit); // call function onSubmit if event submit has occoured
function onSubmit(e) {
    e.preventDefault(); // make page not refresh (idk how to use it)
if(nameInput.value === '' || emailInput.value === '' || messageInput.value === ''){
    //msg.classList.add('error');
    //msg.innerHTML = 'Pls enter all fields'
    alert("Pls enter all fields");
}
else{
    console.log(nameInput.value + ' ' + emailInput.value + ' ' + messageInput.value);
    const li = document.createElement('li');
    const text = document.createTextNode(`${nameInput.value}:${emailInput.value}:${messageInput.value}`);
    li.appendChild(text);
    li.id ="1" ;
    console.log(li);
    userList.appendChild(li);
    nameInput.value = '' ;
    emailInput.value = '' ;
    messageInput.value = '';
    //create delete button after click it
    const del = document.createElement('button');
    del.style.textDecoration = 'none';
    del.innerHTML = 'Remove this contact';
    del.id="2";
    //assign a function for it when clicked
    del.onclick = function() { deleteButton()}; 
    userList.appendChild(del);
}
function deleteButton() {
    document.getElementById("1").remove(); //remove data
    document.getElementById("2").remove(); // remove del button
    }
}
