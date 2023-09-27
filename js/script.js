
var AllProducts = document.querySelectorAll(".btn1, .btn2, .btn3, .btn4, .btn5, .btn6, .btn7, .btn8")
var divProducts = document.getElementById("purchases")
var btnPrice = document.getElementById("btn_price")
var totalPrice = 0

AllProducts.forEach(function(item){
    item.onclick = function(){
        divProducts.innerHTML += item.getAttribute("name") + " , "

        totalPrice += +(item.getAttribute("price"))

                    /* <br/> */

        divProducts.style.border = "1px solid black";
        divProducts.style.lineHeight = "50px";
        divProducts.style.borderRadius = "15px";

        if(divProducts.innerHTML != ""){
            btnPrice.style.display = "inline";
            btnPrice.style.height = "80px";
            btnPrice.style.width = "250px";
            btnPrice.style.margin = "auto";
            btnPrice.style.margin = "30px 0px";
            btnPrice.style.marginLeft = "650px";
            btnPrice.style.fontSize = "25";
            btnPrice.style.borderRadius = "30px";
        }
    }
})

btnPrice.onclick = function(){
    total_Price.innerHTML = totalPrice + "$"
}