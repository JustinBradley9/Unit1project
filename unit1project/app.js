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