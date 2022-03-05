player1_name = localStorage.getItem('player1_name');
player2_name = localStorage.getItem('player2_name');

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_Question").innerHTML = "Question turn -" + player1_name;
document.getElementById("player_Answer").innerHTML = "Answer turn -" + player2_name;

function send()  {
num1 = document.getElementById("Number1").value ; 
num2 = document.getElementById("Number2").value ;
actans = parseInt(num1)*parseInt(num2);
 console.log(actans);
 quesno = "<h4>"+num1+"X"+num2+"</h4>"
 inputbox = "<br>Answer:<input type='text' id='ibox'>";
 button = "<br><br><button class='btn btn-info'  onclick='check()'>Check</button>";
 row = quesno+inputbox+button;
 document.getElementById("output").innerHTML = row;
 document.getElementById("Number1").value = "" ;
 document.getElementById("Number2").value = "" ;
}