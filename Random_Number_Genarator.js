let displayNumber;
submitButton.onclick = function(){
    let minNumber = document.getElementById("minNumber").value;
    let maxNumber = document.getElementById("maxNumber").value;

    displayNumber = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    document.getElementById("displayNumber").textContent = displayNumber;
}