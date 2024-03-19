let hours=document.getElementById("hours");
let mins=document.getElementById("mins");
let secs=document.getElementById("secs");

let time=()=>{
    let dates = new Date();
    hours.innerHTML=(dates.getHours()<10? "0":"")+dates.getHours();
    mins.innerHTML=(dates.getMinutes()<10? "0":"")+dates.getMinutes();
    secs.innerHTML=(dates.getSeconds()<10? "0":"")+dates.getSeconds();
}
setInterval(time,1000);