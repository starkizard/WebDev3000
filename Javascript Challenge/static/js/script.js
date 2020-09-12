//Challenge 1: Your Age in Days
function ageInDays(){
    var bday=new Date(prompt("Enter Birthdate in yyyy/mm/dd format"));
    var now = new Date();
    var diff = now-bday;
    var ans=parseInt(diff/86400000);
    var h1=document.createElement("h1");
    var textAnswer= document.createTextNode("You are "+ ans +" days old!");
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById("ageInDays").remove();
}
