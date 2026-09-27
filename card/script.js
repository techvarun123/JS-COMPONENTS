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
let card = document.querySelector("#card")
let submitbtn =document.querySelector("#submit");
submitbtn.addEventListener("click", function (event) {
  event.preventDefault();
  card.style.display = "flex";
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