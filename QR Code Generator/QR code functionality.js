let body=document.querySelector("body");
let form=document.querySelector("form");
let refresh=document.getElementById("refresh");

form.addEventListener("submit",(e) => {
    e.preventDefault();    
    let inputvalue=document.querySelector("input").value;
    if(inputvalue==""){
        alert("Please select enter your url");
    }
    else{
    let qr=`https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${inputvalue}`
    let img=document.createElement("img");
    img.setAttribute("src",qr)
    body.appendChild(img);
    let gen=document.getElementById("button");
    gen.style.visibility="hidden";
    refresh.style.visibility="visible"
    }
    
})
refresh.addEventListener("click",()=>{
    location.reload()
})
