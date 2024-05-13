day = document.getElementById("day");
month = document.getElementById("month");
year = document.getElementById("year");
button = document.querySelector("#btn");
error = document.querySelector(".error");
error1 = document.querySelector(".error1");
error2 = document.querySelector(".error2");

//button.addEventListener("click",handleclick);

day.addEventListener("input",handleday);
month.addEventListener("input",handlemonth);
year.addEventListener("input",handleyear);

button.addEventListener("click",calculate);
const date = new Date(); 

let yearvalue= date.getFullYear(); 
let monthvalue = date.getMonth() +1;
let dayvalue = date.getDate();
let day1;
let day2 ;
let day3;

function handleday(){

    if (parseInt(day.value)>31){
        error.style.visibility = "visible";
    }
    else{
        error.style.visibility = "hidden";
    }

}
function handlemonth(){
   if ( parseInt(month.value) >12){
    error1.style.visibility ="visible";
   }
   else{
    error1.style.visibility = "hidden";
}

}
function handleyear(){
    if(  parseInt(year.value)>yearvalue){
        error2.style.visibility ="visible";
    }
    else if (parseInt(year.value)===yearvalue && monthvalue < parseInt(month.value)){
        alert("please ensure the details are correct!");
    }
    else{                                                                        //current = dayvalue,monthvalue
        error2.style.visibility = "hidden";
    }

}

function calculate(){
    if (day.value === ''||month.value === ''||year.value === ''){
        alert("Fields cannot be empty")
    }
    else{
        if (parseInt(month.value) === monthvalue && parseInt(day.value)=== dayvalue){
             day1 = yearvalue - parseInt(year.value);
            console.log(day1);
            document.querySelector("h1.y").innerHTML = day1+" years";
            document.querySelector("h1.m").innerHTML = 0+" months";
            document.querySelector("h1.d").innerHTML = 0+" days";
        }
        else if ( monthvalue > parseInt(month.value)){
            day1 = (yearvalue) - parseInt(year.value);
            day2 = (monthvalue) - (parseInt(month.value));
            if (dayvalue > parseInt(day.value)){
                day3 = dayvalue - parseInt(day.value);
            }
            else if (dayvalue === parseInt(day.value)){

                day3 = 0;
            }
            else{
                for (var i = parseInt(month.value);i<monthvalue;i++){
                    if (i==9 || i===4 || i===6 || i===11){
                        day3 = (30-parseInt(day.value)+dayvalue);
                    }
                    else if (i===2){
                        if (yearvalue % 4===0){
                            day3 = (29-parseInt(day.value)+dayvalue);
                        }
                        else{
                            day3 = (28-parseInt(day.value)+dayvalue);
                        }
                       
                    }
                    else{
                        day3 = (31-parseInt(day.value)+dayvalue);
                    }

                }


            }
            document.querySelector("h1.y").innerHTML = day1+" years";
            document.querySelector("h1.m").innerHTML = day2+" months";
            document.querySelector("h1.d").innerHTML = day3+" days";
           
        }
        else if (monthvalue < parseInt(month.value)){
            day1 = yearvalue - parseInt(year.value) - 1;
            if (dayvalue === parseInt(day.value)){
                day2 = monthvalue - parseInt(month.value);
                day3 = 0;
            }
            else if (dayvalue < parseInt(day.value)){
                day2 = 12- (parseInt(month.value) -monthvalue +1)
                day3 = dayvalue + parseInt(day.value);
            }
            else{
                day2 = 12- (parseInt(month.value) -monthvalue)
                day3 = dayvalue - parseInt(day.value);
            }
            document.querySelector("h1.y").innerHTML = day1+" years";
            document.querySelector("h1.m").innerHTML = day2+" months";
            document.querySelector("h1.d").innerHTML = day3+" days";
        }

    }

}    