//business logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.fullTicket = function() {
  return this.movie + ", " + this.time + ", " + this.age;
}

Ticket.prototype.calculateCost = function () {
  var finalCost = 0;

  if ((this.age === "child") || (this.age === "senior")) {
    finalCost += -2;
  }
  if ((this.movie === "dog") || (this.movie === "action")) {
    finalCost += 4;
  }
  else {
    finalCost += 6;

  }return finalCost;
}

//front-end logic
$(document).ready(function(){
  $("#movie-ticket").submit(function(event) {
    event.preventDefault();
    var movie = $("#movie").val();
    var time = $("#time").val();
    var age = $("#age").val();
    var ticketInfo = new Ticket(movie, time, age);
    var ticketDisplay = ticketInfo.fullTicket();
    var ticketCost = ticketInfo.calculateCost();
    $("#result").append(ticketDisplay);
    $("#cost").append(ticketCost);
  })

});
