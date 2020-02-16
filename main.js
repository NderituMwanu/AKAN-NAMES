function getDay(name){
 var year=(document.getElementById("year").value);
    var CC=parseInt(year.slice(0,1));
    var YY= parseInt(year.slice(2,3));
    var MM = parseInt(document.getElementById("month").value);
    var DD =parseInt(document.getElementById("date").value);

    if (year === ""|| year < 1 || month === "" ||month < 1 ||month > 12 || date ==="" || date < 1|| date > 31)
    {
        alert("check your data and try again");
    } else{
        var day= Math.floor((((CC/4) -2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD ) % 7);
        return day
        }
    
}

function getGender(){
    var radio = document.getElementsByName("gender");
    for (var i = 0; i < radio.length; i++){
        if (radio[i].checked){
            var gender = radio[i].value;
            return gender;
        }
    }
}

function getName() {
var dayname=["SUNDAY","MONDAY","TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
var female= [ "AKOUSA", "ADWOA", "ABENAA", "AKUA", "YAA", "AFUA", "AMA"];
var male= ["KWASI", "KWADWO", "KWABENA", "KWAKU", "YAW", "KOFI", "KWAME"];

if (getGender()==="male"){
    alert("your Akan Name depending on the day you were born is " + male[getDay(name)] + "! since you were born on a " + dayname[getDay(name)]);
}
else if (getGender()==="female"){
    alert("your Akan Name depending on the day you were born is " + female[getDay(name)] + "! since you were born on a " + dayname[getDay(name)]);
}
else{
    alert("please re-enter your data and try again")
}
}
