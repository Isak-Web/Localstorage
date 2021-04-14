let key=0


let name     = document.getElementbyId('name');
let mail     = document.getElementbyId('mail');
let password = document.getElementbyId('password');






function local(){
    localStorage.setItem('Name', name.value);
    localStorage.setItem('Mail', mail.value);
    localStorage.setItem('Password', password.value);

}




    

