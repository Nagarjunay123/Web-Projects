let body=document.querySelector("body");
let form=document.querySelector("form");
let img=document.createElement("img");
form.addEventListener("submit",(e) => {
    e.preventDefault();    
    let inputvalue=document.querySelector("input").value;
    if(inputvalue==""){
        alert("Please select enter your url");
    }
    else{
    let qr=`https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${inputvalue}`
    img.setAttribute("src",qr)
    body.appendChild(img);
    }    
})
