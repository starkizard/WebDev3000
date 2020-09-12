//Challenge 1: Your Age in Days
function ageInDays(){
    var bday=new Date(prompt("Enter Birthdate in yyyy/mm/dd format"));
    var now = new Date();
    var diff = now-bday;
    var ans=parseInt(diff/86400000);
    var h2=document.createElement("h2");
    var textAnswer= document.createTextNode("You are "+ ans +" days old!");
    h2.setAttribute('id','ageInDays');
    h2.setAttribute('style','border: 1px solid black; padding: 5px')
    h2.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h2);
}

function reset(){
    document.getElementById("ageInDays").remove();
}
