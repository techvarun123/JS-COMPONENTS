let fileinp =document.querySelector("#fileinp");
let fileinp2 = document.querySelector("#fileinp2");
let btn =  document.querySelector("#btn");
let btn2 =  document.querySelector("#btn2");

btn.addEventListener("click",function(){
        fileinp.click();
        
})
btn2.addEventListener("click",function(){
        fileinp2.click();
        
})


fileinp.addEventListener("change",function(desc){
    btn.textContent =desc.target.files[0].name
    btn2.style.display = "block"; 
     
})
fileinp2.addEventListener("change",function(desc){
    btn2.textContent =desc.target.files[0].name
     
})



