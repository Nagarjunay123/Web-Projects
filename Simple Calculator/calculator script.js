let first=document.getElementById("first");
let second=document.getElementById("second");
let select=document.getElementById("select");
let btn=document.getElementById("btn");
let res=document.getElementById("res");
let color = document.getElementById("color");
let body = document.querySelector("body");
let marquee= document.getElementById("marq");

color.addEventListener("change",()=>{
    body.style.backgroundColor=color.value;
    marquee.style.color="white"
});

let add = (a,b)=>a+b;
let sub = (a,b)=>a-b;
let mul = (a,b)=>a*b;
let div = (a,b)=>a/b;

btn.addEventListener("click",()=>{
    if(first.value=="" || second.value==""){
        alert("Please Enter values");
    }
    else{
    let num1=Number.parseInt(first.value);
    let num2=Number.parseInt(second.value);
            
    switch(select.value){
        case "add":
            res.innerHTML=`Result : ${add(num1,num2)}`;
            break;
        case "sub":
            res.innerHTML=`Result : ${sub(num1,num2)}`;
            break;
        case "mul":
            res.innerHTML=`Result : ${mul(num1,num2)}`;
            break;
        case "div":
            res.innerHTML=`Result : ${div(num1,num2)}`;
            break;
        }
    }
});
