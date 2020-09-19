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

//Challenge 2: Cat Generator
function generateCat(){
    var image= document.createElement('img');
    var div= document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image);
    console.log("cat generated");
}

//Challenge 3: Rock, Paper and Scissors
function decideWinner(humanChoice,botChoice){
    var rpsDatabase={
        'rock':{'rock':0.5 ,'paper':0 , "scissors":1 },
        'paper':{'rock':1 ,'paper':0.5 , "scissors":0 },
        'scissors':{'rock':0 ,'paper':1 , "scissors":0.5 }
    };
    return rpsDatabase[humanChoice][botChoice];
}

function finalMessage(yourScore){
    var rpsMessage={
        0:{'message':'You Lost!',"color":"red" },
        0.5:{'message':'You Tied! ',"color":"yellow" },
        1:{'message':'You Won!',"color":"green" }
    }
    return rpsMessage[yourScore]
}

function rpsFrontEnd(humanChoice,botChoice,fmessage){
    var humanImage=document.getElementById(humanChoice);
    var botImage=document.getElementById(botChoice);

    //removing all images
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanDiv=document.createElement("div");
    var botDiv=document.createElement("div");
    var messageDiv=document.createElement("div");
    
    humanDiv.innerHTML="<img src='"+humanImage.src+"' height=250 width=250 style='box-shadow: 0px 10px 50px rgba( 37, 50 , 233 , 1 );' >";
    messageDiv.innerHTML="<h2 style='color : "+ fmessage["color"] + "; font-size: 60px; padding: 30px ; '> " + fmessage["message"] + " </h2> ";
    botDiv.innerHTML="<img src='"+botImage.src+"' height=250 width=250 style='box-shadow: 0px 10px 50px rgba( 243 , 38 , 24 , 1 );' >";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

function rpsReset(){
    var node=document.getElementById('flex-box-rps-div');

    node.innerHTML=" <img id ='rock' src='https://purepng.com/public/uploads/large/dwayne-johnson-the-rock-hbz.png' height=250 width=250 onclick='rpsGame(this)'> \
    <img id ='paper' src='https://img.favpng.com/12/5/10/towel-kitchen-paper-tissue-paper-toilet-paper-png-favpng-Uz6vWCeWVm4YGpf4VdjX7AADz.jpg' height=250 width=250 onclick='rpsGame(this)'> \
    <img id ='scissors' src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still10-preview-1522353855.jpg?crop=1.00xw:0.752xh;0,0.0625xh&resize=640:*' height=250 width=250 onclick='rpsGame(this)' >";
    console.log("resetting");
}
function rpsGame(yourChoice){
    var humanChoice, botChoice,results;
    humanChoice=yourChoice.id;
    botChoice= ["rock","paper","scissors"][(Math.floor(Math.random()*10))%3];
    results=decideWinner(humanChoice,botChoice);
    console.log("computer: ", botChoice);
    message=finalMessage(results);
    console.log(message);
    rpsFrontEnd(humanChoice,botChoice,message);

}

