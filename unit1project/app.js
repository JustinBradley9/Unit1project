console.log("Hello darkness my old friend")
// alert("Player 1! Choose your name!")

const allBoxes = document.querySelectorAll('.pointsbox')
let boxId = undefined

for (let i=0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener('click', () => {
        console.log(allBoxes[i].id)
        boxId = allBoxes[i].id
    })
}

const allModals = document.querySelectorAll('.modal')
let modalId = undefined

for (let e=0; e < allModals.length; e++) {
    allModals[e].addEventListener('click', () => {
        console.log(allModals[e].id)
        modalId = allModals[e].id
    })
}

let playermove = 1
let playerturn;
if (playermove % 2 == 0){
    playerturn = document.getElementById("player2points")
}
else{
    playerturn = document.getElementById("player1points")
}

function basic() {
    var x = document.getElementById("textstuff").value;
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("name", x)
        document.getElementById("player1name").innerHTML = localStorage.getItem("name");
        document.getElementById("textstuff").style.display = "none";
        document.getElementById("nameem1").style.display = "none";
        alert("Player 2! Choose your name!")
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}
function basic2() {
    var x = document.getElementById("textstuff").value;
    var y = document.getElementById("textstuff2").value;
    document.getElementById("player2name").innerHTML = y;
    document.getElementById("textstuff2").style.display = "none";
    document.getElementById("nameem2").style.display = "none";
    alert( x + " ! Make The first move")
}







var Quest = new Array();  //this sets up an array for all of the answers that are given

var getstartedfred =() => {
// this function gives each of the answers 0 points so if someone doesn't answer a question
// the whole thing will continue to work
  for(var i=0; i<1; i++) { Quest[i]=0; }
}

var total =() => {
// alert("function total started");
// this function adds the number of points each answer is worth together
  score=0;
  for (var i=0; i<1; i++) { score=score+Quest[i]; }
  analyzer(score);
}
housename = new Array();{

}
 


var analyzer = (score) => {
// this function uses the total calculated score to figure out which personality type they are
if (score == 0){ housenamePtr = 0;}
else if (score == 1) { housenamePtr = 1; }
  else if (score == 2) { housenamePtr = 2; }
    else if(score == 3)  { housenamePtr = 3; } 
    else if(score == 4)  { housenamePtr = 4; } 
    else if(score == 6)  { housenamePtr = 6; } 
          else { housenamePtr = 5; }
  myDisplay(housename[housenamePtr])
}

var myDisplay = (housename) => {
//This function will open a new window and show the results calculated
//issue and solution found. must be set exactly equal to in order to just revel parts i wish it to
  if(housenamePtr===1){
//    chooseid().style.display = "none"
//    choosemodal().style.display = "none"
   document.getElementById(boxId).style.display = "none"
   document.getElementById(modalId).style.display = "none"
     let x = parseFloat(playerturn.innerHTML)
    playerturn.innerHTML = x + 100
    console.log(playermove)

  }
  if(housenamePtr===0){
        alert("answer is incorrect");
        document.getElementById(boxId).style.display = "none"
        document.getElementById(modalId).style.display = "none"
        playermove +=1
      }
  
  if(housenamePtr===4){
    document.getElementById(boxId).style.display = "none"
    document.getElementById(modalId).style.display = "none"
      let x = parseFloat(document.getElementById("player1points").innerHTML)
     document.getElementById("player1points").innerHTML = x + 400
  }
  if(housenamePtr===2){
    document.getElementById(boxId).style.display = "none"
    document.getElementById(modalId).style.display = "none"
      let x = parseFloat(document.getElementById("player1points").innerHTML)
     document.getElementById("player1points").innerHTML = x + 200
  }
  if(housenamePtr===3){
    document.getElementById(boxId).style.display = "none"
    document.getElementById(modalId).style.display = "none"
      let x = parseFloat(document.getElementById("player1points").innerHTML)
     document.getElementById("player1points").innerHTML = x + 300
  }
  if(housenamePtr===5){
    document.getElementById(boxId).style.display = "none"
    document.getElementById(modalId).style.display = "none"
      let x = parseFloat(document.getElementById("player1points").innerHTML)
     document.getElementById("player1points").innerHTML = x + 500
  }
  if(housenamePtr===6){
    document.getElementById(boxId).style.display = "none"
    document.getElementById(modalId).style.display = "none"
      let x = parseFloat(document.getElementById("player1points").innerHTML)
     document.getElementById("player1points").innerHTML = x + 1000
  }
}

var saver =(q, points) => {
// this function puts the points that each answer is worth into the array
  q=q-q;
  Quest[q]=points
}