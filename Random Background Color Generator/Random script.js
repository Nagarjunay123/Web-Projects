let body=document.querySelector("body")
let btn=document.querySelector("button")
let h1=document.querySelector("h1")
h1.textContent="rgb(255,255,255)"
btn.addEventListener("click",()=>{
    let colors=generate();
    h1.innerHTML=colors;
    body.style.backgroundColor=colors
});
let generate=()=>{
    let red=Math.trunc(Math.random()*255)
    let green=Math.trunc(Math.random()*255)
    let blue=Math.trunc(Math.random()*255)
    return `rgb(${red},${green},${blue})`
}