const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const h1 = document.getElementById("h1");
let count = 0;
decrease.onclick = function(){
    count--;
    document.getElementById("h1").textContent = count;
}
reset.onclick = function(){
    count=0;
    document.getElementById("h1").textContent = count;
}
increase.onclick = function(){
    count++;
    document.getElementById("h1").textContent = count;
}