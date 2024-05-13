//getting all the variables
var password = document.getElementById("pwd");
var pass
var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
var lowercase = document.getElementById("lowercase");
var uppercase = document.getElementById("uppercase");
var number = document.getElementById("numbers");
var symbol = document.getElementById("symbols");
var slider = document.getElementById("length-slider");
var display = document.getElementById("display-length");
var generate = document.getElementById("gen");
var copy = document.getElementById("copy");
var length;
var charsize =0;
var stren;
var numbers;
var beforevalue = 0;
list = ["rgb(93, 229, 69)", "rgb(233, 56, 11)","rgb(185, 62, 62)","rgb(81, 5, 5)"];
var result = document.getElementById("text");
var bars = document.querySelectorAll(".scale_bar");
var count = 0;
character = [26,26,10,10];

//checking the checkboxes
function checkboxes(pass){
    for (var i=0;i<pass.length;i++){
        if ((/[a-zA-Z]/).test(pass[i])){
            if (pass[i] === pass[i].toLowerCase()){
                lowercase.disabled = false;
                lowercase.checked = true;
                charsize += character[0];

            }
            else if (pass[i] === pass[i].toUpperCase()){
                uppercase.disabled = false;
                uppercase.checked = true;
                charsize += character[1];

            }
        }
        else if  (pass[i]>='0' && pass[i]<='9'){
            number.disabled = false;
            number.checked = true;
            charsize += character[2];
        }
      
        else if  (pass[i].match(format)){
            symbol.disabled = false;
            symbol.checked = true;
            charsize += character[3];
        }
   
    }
    if (pass === ''){
        checkagain()                // to unckeck all the boxes if i erase the password
    }
}

function checkagain(){
    lowercase.checked = false;
    lowercase.disabled =true;
    uppercase.checked = false;
    uppercase.disabled = true;
    number.checked = false;
    number.disabled = true;
    symbol.checked = false;
    symbol.disabled = true;
    slider.value = '0';
    display.innerHTML = 0;


 
}  

//setting the length of the slider 
function setlength(pass){
    length = pass.length;
    slider.value = length;
    display.innerHTML = length;
}

//to ensure all the checkboxes are checked 
function checkValid(){
    if (lowercase.checked === false || uppercase.checked === false || number.checked === false || symbol.checked ===false){
        return false;
    }
    else{
        return true;
    }
}

//calculating the strength of the password
function calcstrength(pass,charsize){
    const strength = pass.length * Math.log2(charsize);

    if (strength<25){
        return ['Too Weak',1]
    }
    else if (strength>=25 && strength <50){
        return ['Weak',2]
    }
    else if (strength >=50 && strength <75){
        return ['Medium',3];
    }
    else{
        return ['Strong',4];
    }
}

//adding event listeners

password.addEventListener("input",function(){
    pass  = password.value;
    checkboxes(pass); 
    setlength(pass);   //callibg the function to set the value of slider and change the span to the length of the password.
    if (pass === ''){
          checkagain();}//calling the function to decheck and displaty length as 0 once the user erases the password.
    stren = calcstrength(pass,charsize);
    result.innerHTML = stren[0];
    numbers = stren[1];
  
     colorbar(number,pass);
    


})

generate.addEventListener("click",function(){                //generate password button 
    var bool = checkValid();
    if (bool === false){
        alert("All the conditions should be satisfied");
    }
    else{
        alert("Your password has been generated and sent to your registered email id . Please click on the link sent to confirm!")
        password.value = "";
        display.innerHTML = 0;
        slider.value = 0;
        result.innerHTML = "";
        checkagain();
    }
   
})

copy.addEventListener("click",function(){
    if (password.value === ""){
        alert("No value to copy")
    }
    else{
        alert("Copied" );
        navigator.clipboard.writeText(password.value);
    }
})

