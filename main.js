"use strict"
let circle1=document.querySelector(".circle1");
let circle2=document.querySelector(".circle2");
let circle3=document.querySelector(".circle3");
let circle4=document.querySelector(".circle4");
  let  i=0,j=0,k=0,u=0;
    
let set1=setInterval(()=>{
    circle1.innerHTML=i+"+";
    i++
    if(i==20)
clearInterval(set1)
},100);
let set2=setInterval(()=>{
    circle2.innerHTML=j+"+";
    j+=50;
    if(j>52912)
clearInterval(set2)
},);
let set3=setInterval(()=>{
    circle3.innerHTML=k+"+";
    k+=10;
    if(k>1233)
clearInterval(set3)
},1);
let set4=setInterval(()=>{
    circle4.innerHTML=u+"+";
    u+=10;
    if(u>3342)
clearInterval(set4)
},20);
// --------------------------------------------------------------

let option=document.getElementById("op1");
option.addEventListener("click",()=>{
    document.getElementById("option").style.display="block";
    option.style.color="blue";
     document.getElementById("option2").style.display="none";
     option2.style.color="black";
     document.getElementById("option3").style.display="none";
     option3.style.color="black";
     document.getElementById("option4").style.display="none";
     option4.style.color="black";
     document.getElementById("option5").style.display="none";
     option5.style.color="black";
      
     
})
let option2=document.getElementById("op2");
option2.addEventListener("click",()=>{
    document.getElementById("option").style.display="none";
    option.style.color="black";
     document.getElementById("option2").style.display="block";
     option2.style.color="blue";
     document.getElementById("option3").style.display="none";
     option3.style.color="black";
     document.getElementById("option4").style.display="none";
     option4.style.color="black";
     document.getElementById("option5").style.display="none";
     option5.style.color="black";
      
     
})
let option3=document.getElementById("op3");
option3.addEventListener("click",()=>{
    document.getElementById("option").style.display="none";
    option.style.color="black";
     document.getElementById("option2").style.display="none";
     option2.style.color="black";
     document.getElementById("option3").style.display="block";
     option3.style.color="blue";
     document.getElementById("option4").style.display="none";
     option4.style.color="black";
     document.getElementById("option5").style.display="none";
     option5.style.color="black";
      
     
})
 let option4=document.getElementById("op4");
option4.addEventListener("click",()=>{
    document.getElementById("option").style.display="none";
    option.style.color="black";
     document.getElementById("option2").style.display="none";
     option2.style.color="black";
     document.getElementById("option3").style.display="none";
     option3.style.color="black";
     document.getElementById("option4").style.display="block";
     option4.style.color="blue";
     document.getElementById("option5").style.display="none";
     option5.style.color="black";
      
     
})
let option5=document.getElementById("op5");
option5.addEventListener("click",()=>{
    document.getElementById("option").style.display="none";
    option.style.color="black";
     document.getElementById("option2").style.display="none";
     option2.style.color="black";
     document.getElementById("option3").style.display="none";
     option3.style.color="black";
     document.getElementById("option4").style.display="none";
     option4.style.color="black";
     document.getElementById("option5").style.display="block";
     option5.style.color="blue";
      
     
})