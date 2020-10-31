function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

//Challenge 1: Your Age in Days
function ageInDays(){
    var bday=new Date(prompt("Enter Birthdate in yyyy/mm/dd format"));
    var now = new Date();
    var diff = now-bday;
    var ans=parseInt(diff/86400000);
    var h2=document.createElement("h2");
    var textAnswer= document.createTextNode("You are "+ ans +" days old!");
    h2.setAttribute('id','ageInDays');
    h2.setAttribute('style','border: 1px solid black; padding: 5px');
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
    };
    return rpsMessage[yourScore];
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
    <img id ='scissors' src='https://st1.latestly.com/wp-content/uploads/2018/08/s-1-380x214.jpg' height=250 width=250 onclick='rpsGame(this)' >";
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


// Challenge 4: change button colors ( what am I doing with my life)

var all_buttons= document.getElementsByTagName("button");
var copyAllButtons=[];
for(let i=0;i<all_buttons.length;++i) copyAllButtons.push(all_buttons[i].classList[1]);


function buttonColorChange(buttonThingy){
    var colorDatabase={
        'red':'btn-danger',
        'green':'btn-success',
        'blue':'btn-primary',
    };
    for(let i=0; i<all_buttons.length;++i){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        if(buttonThingy.value==='random') all_buttons[i].classList.add("btn-"+['primary','secondary','success','danger','warning','info','light','dark'][(Math.floor(Math.random()*100))%8]);
        else if(buttonThingy.value==='reset') all_buttons[i].classList.add(copyAllButtons[i]);
        else all_buttons[i].classList.add(colorDatabase[buttonThingy.value]);
    }
}

// Challenge 5 : Blackjack
let blackjackGame={
    "you":{
        "scoreSpan" : "#your-blackjack-result" ,
        "div" : "#your-box" ,
        "score" : 0
    } ,
    "dealer":{
        "scoreSpan" : "#dealer-blackjack-result" ,
        "div" : "#dealer-box" ,
        "score" : 0
    },
    "cards": ['A','2','3','4','5','6','7','8','9','10','J','Q','K'],
    "wins" : 0,
    "draws": 0,
    "losses": 0,
}

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];
const cards=blackjackGame["cards"];
const hitSound= new Audio('static/sounds/swish.m4a');

function showCard(activePlayer){
    let cardImage=document.createElement('img');
    cardImage.width="100";
    let value=Math.floor(Math.random()*13)+1
    cardImage.src="static/images/"+cards[value-1]+".png";
    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    return value
}



function updateScore(activePlayer,value){
    if(value==1){
        activePlayer["score"] += (activePlayer["score"]+11>21)?1:11;
    }
    else{
        activePlayer["score"] += (value>=10)?10:value;
    }
}

function showScore(activePlayer){
    if(activePlayer["score"]<=21){
        document.querySelector(activePlayer["scoreSpan"]).textContent= activePlayer["score"];
        document.querySelector(activePlayer["scoreSpan"]).style.color="white";
    }
    else{
        document.querySelector(activePlayer["scoreSpan"]).textContent="BUSTED!!";
        document.querySelector(activePlayer["scoreSpan"]).style.color="red";
        if(activePlayer==YOU){
            blackjackGame["losses"]+=1
            document.querySelector("#losses").textContent=blackjackGame["losses"];
            document.querySelector("#blackjack-result").textContent= "You Lost!";
            document.querySelector("#blackjack-result").style.color = "red";
            alert("continue");
            blackjackDeal();
        }
    }
}

function blackjackHit(){
    hitSound.play();
    if(YOU["score"]<=21){
        let value=showCard(YOU);
        updateScore(YOU,value);
    }
    showScore(YOU);
}


async function blackjackStand(){
    while(DEALER["score"]<YOU["score"]){
        hitSound.play();
        let value=showCard(DEALER);
        updateScore(DEALER,value);
        showScore(DEALER);
        await sleep(1000);
    }
    if(DEALER["score"]==YOU["score"]){
        blackjackGame["draws"]+=1;
        document.querySelector("#draws").textContent=blackjackGame["draws"];
        document.querySelector("#blackjack-result").textContent= "You Drew!";
        document.querySelector("#blackjack-result").style.color = "yellow";
    }
    else if(DEALER["score"]>21){
        blackjackGame["wins"]+=1;
        document.querySelector("#wins").textContent=blackjackGame["wins"];
        document.querySelector("#blackjack-result").textContent= "You Won!";
        document.querySelector("#blackjack-result").style.color = "green";
    }
    else{
        blackjackGame["losses"]+=1
        document.querySelector("#losses").textContent=blackjackGame["losses"];
        document.querySelector("#blackjack-result").textContent= "You Lost!";
        document.querySelector("#blackjack-result").style.color = "red";
    }
    alert("continue");
    blackjackDeal();
}

function blackjackDeal(){
    let yourImages= document.querySelector("#your-box").querySelectorAll("img");
    let dealerImages= document.querySelector("#dealer-box").querySelectorAll("img");

    for(let i=0; i<yourImages.length; ++i){
        yourImages[i].remove();
    }
    for(let i=0; i<dealerImages.length; ++i){
        dealerImages[i].remove();
    }
    YOU["score"]=0;
    DEALER["score"]=0;
    showScore(YOU);
    showScore(DEALER);
    
}

document.querySelector("#blackjack-hit-button").addEventListener('click',blackjackHit);
document.querySelector("#blackjack-stand-button").addEventListener('click',blackjackStand);
// document.querySelector("#blackjack-deal-button").addEventListener('click',blackjackDeal);




