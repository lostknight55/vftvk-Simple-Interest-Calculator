//calculate input values
function calculateInvestment() {
  var investAmt = document.getElementById("investamt").value;
  var investYr = document.getElementById("investyr").value;
  var interestRate = document.getElementById("intrate").value;

  //validate input
  if (investAmt === "" || investYr == 0) {
    alert("Please enter values");
    return;
  }

  //calculate total
  var total = [investAmt * (interestRate / 100) * investYr];

  //display the values added the HTML mark tag inside quotes to get it to work
  document.getElementById("p").innerHTML = "If you deposit <mark>" + investAmt + "</mark>,";
  document.getElementById("r").innerHTML = "at a rate of <mark>" + interestRate + "</mark>.";
  document.getElementById("yield").innerHTML = "You will receive an amount of <mark>" + total + "</mark>,";
  document.getElementById("y").innerHTML = "in the year <mark>" + (+d.getFullYear() + +investYr) + "</mark>";
}

//Get current year
var d = new Date();

//click button to calculate
document.getElementById("calculate").onclick = function () {
  calculateInvestment();
};
