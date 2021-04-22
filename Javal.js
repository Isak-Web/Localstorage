/*create global vairable*/
/*creatw for loop*/
/*json*/
/*getitem*/



/*
let name = document.getElementbyId('name');
let mail = document.getElementbyId('mail');
let password = document.getElementbyId('password');



function local(){
    localStorage.setItem('Name', name.value);
    localStorage.setItem('Mail', mail.value);
    

}

console.log(JSON.parse)
*/


let name = document.getElementbyId('name');
let mail = document.getElementbyId('mail');


if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("mail", "Smith");
    // Retrieve
    document.getElementById("name").innerHTML = localStorage.getItem("mail");
  } else if(storage){
    localStorage.getItem("name","mail");
  }
  
  else {
    document.getElementById("name").innerHTML = "Sorry, your browser does not support Web Storage...";
  }