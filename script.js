var allproducts=document.querySelectorAll(".deve p")
var content=document.querySelector("#content")
var btn=document.querySelector("#btn1")
var last=document.querySelector("#last")
var totalprice = 0

allproducts.forEach(function(item){
item.onclick = function(){
    totalprice += +(item.getAttribute("price"))
    content.innerHTML+=item.textContent + "+"

    if(content.innerHTML !="") {
        btn.style.display="block"
    }
}

})
btn.onclick = function(){
last.innerHTML=(totalprice)
}