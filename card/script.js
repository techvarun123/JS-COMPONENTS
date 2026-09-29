let namee = document.querySelector("#name")
let inputname = document.querySelector("#username");
inputname.addEventListener("input",function(event){
  namee.textContent=event.target.value
})

let role = document.querySelector("#role")
let cardrole= document.querySelector("#cardrole");
role.addEventListener("input",function(event){
  cardrole.textContent=event.target.value;
})

let gender = document.querySelectorAll('input[name="gender"]');
let cardgender = document.querySelector("#cardgender");

gender.forEach(function(radio) {
  radio.addEventListener("change", function(event) {
    cardgender.textContent = event.target.value;
  });
});

let phone = document.querySelector("#phoneno")
let cardphone= document.querySelector("#cardphone");
phone.addEventListener("input",function(event){
cardphone.textContent=event.target.value;
});

    


let email = document.querySelector("#email")
let cardemail= document.querySelector("#cardemail");
email.addEventListener("input",function(event){
cardemail.textContent=event.target.value;
});

let add = document.querySelector("#add")
let cardadd= document.querySelector("#cardaddress");
add.addEventListener("input",function(event){
cardadd.textContent=event.target.value;

});
let fileinp =document.querySelector("#fileinp");
let fileinp2 = document.querySelector("#fileinp2");
let btn =  document.querySelector("#btn");
let btn2 =  document.querySelector("#btn2");

btn.addEventListener("click",function(){
        fileinp.click();     
})
fileinp.addEventListener("change",function(desc){
  const selectedFile = desc.target.files[0];
  btn.textContent = selectedFile.name;
  const profileImage = document.querySelector("#img img");
  profileImage.src = URL.createObjectURL(selectedFile);
})

let card = document.querySelector("#card");
let form = document.querySelector("form");
let submitbtn =document.querySelector("#submit");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  form.querySelectorAll("input, textarea, button").forEach(function (field) {
  field.disabled = true;
}); 
  card.style.display = "flex";
});

// we use for each to take input and output tocard 

// let form = document.querySelector("form");

// let inputs = [
//     document.querySelector("#username"),
//     document.querySelector("#userRole"),
//     document.querySelector("#phoneno"),
//     document.querySelector("#email"),
//     document.querySelector("#address")
// ];

// let cards = [
//     document.querySelector("#name"),
//     document.querySelector("#cardrole"),
//     document.querySelector("#cardphone"),
//     document.querySelector("#cardemail"),
//     document.querySelector("#cardaddress")
// ];

// form.addEventListener("submit", function(event) {

//     event.preventDefault();

//     inputs.forEach(function(input, index) {

//         cards[index].textContent = input.value;

//     });
//     card.style.display = "flex";
// });



