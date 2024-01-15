var convert = document.querySelector(".registerForm");
convert.onsubmit = function(e){
    e.preventDefault();
    var value = e.target.elements["amount"].value;
    var option = e.target.elements["exchange"].value;
    var result = document.querySelector(".result");
    if (option == 1){
        value *= 0.27;
        result.textContent = value;
    }else
    if (option == 2){
        value *= 0.19;
        result.textContent = value;
    }else
    if (option == 3){
        value *= 1;
        result.textContent = value;
    }
}  

