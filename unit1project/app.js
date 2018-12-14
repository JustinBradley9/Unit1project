console.log("Hello darkness my old friend")
// alert("Player 1! Choose your name!")

function basic() {
    var x = document.getElementById("textstuff").value;
    document.getElementById("player1name").innerHTML = x;
    document.getElementById("textstuff").style.display = "none";
    document.getElementById("nameem1").style.display = "none";
    alert("Player 2! Choose your name!")

}
function basic2() {
    var x = document.getElementById("textstuff").value;
    var y = document.getElementById("textstuff2").value;
    document.getElementById("player2name").innerHTML = y;
    document.getElementById("textstuff2").style.display = "none";
    document.getElementById("nameem2").style.display = "none";
    alert( x + " ! Make The first move")
}

var Quest = new Array(10);  //this sets up an array for all of the answers that are given
// var rip = () =>{
//     document.getElementById("demon").style.marginLeft = "0px";
// }


var getstartedfred =() => {
// alert("function getstartedfred started");
// this function gives each of the answers 0 points so if someone doesn't answer a question
// the whole thing will continue to work
  for(var i=0; i<10; i++) { Quest[i]=0; }
}

var total =() => {
// alert("function total started");
// this function adds the number of points each answer is worth together
  score=0;
  for (var i=0; i<10; i++) { score=score+Quest[i]; }
  analyzer(score);
}
housename = new Array();{
housename[0] = "Ravenclaw, You seek knowledge and hope to find the answers to all your questions. Whether for yourself or to assist others";

housename[1] = "HufflePuff, Cute and Fluffy to most, but those that wrong you know a Badger's rage is worse than a Lion or Snake "; 

housename[2] = "Gryffindor, A Lion care's not for a sheep's opinion and tries his hardest with every hunt. And you are a Lion";

housename[3] = "Slytherin, Follow the snake's path. Whether you Rule or Or are Alone. You will stand at the Apex";

housename[4] = "Either a Ravenlaw testing the test, A Gryffindor testing Authority, A Slytherin who doesn't wished to be tested, or a HufflePuff who made a mistake. Take a look at all the houses so that you may see which resonates most with you";
}
 


var analyzer = (score) => {
// this function uses the total calculated score to figure out which personality type they are
if (score == 0){ housenamePtr = 0;}
else if (score == 1) { housenamePtr = 1; }
  else if (score == 2) { housenamePtr = 2; }
    else if(score == 3)  { housenamePtr = 3; } 
          else { housenamePtr = 4; }
  myDisplay(housename[housenamePtr])
}

var  myDisplay = (housename) => {
//This function will open a new window and show the results calculated
//issue and solution found. must be set exactly equal to in order to just revel parts i wish it to
  if(housenamePtr===4){
    alert(housename);
    document.getElementById("openModalc1r1").style.display = "none"
    document.getElementById("c1r1").style.display = "none"
  }
  if(housenamePtr===0){
    alert(housename);
    document.getElementById("eagle2").style.display = "block"
  }
  if(housenamePtr===1){
    alert(housename);
    document.getElementById("badger2").style.display = "block"
  }
  if(housenamePtr===2){
    alert(housename);
    document.getElementById("lion2").style.display = "block"
  }
  if(housenamePtr===3){
    alert(housename);
    document.getElementById("snake2").style.display = "block"
  }
}

var saver =(q, points) => {
// this function puts the points that each answer is worth into the array
  q=q-1;
  Quest[q]=points
}