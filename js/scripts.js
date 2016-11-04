// Buisness Logic

//constructors
function Pizza(pizzaSize, crustType, sauceType) {
  this.pizzaSize = pizzaSize;
  this.crustType = crustType;
  this.sauceType = sauceType;
  this.vegToppings = [];
  this.meatToppings = [];
}

function Customer() {
  this.firstName = first;
  this.lastName = last;
  this.address = {};
}

function Address() {
  this.street = street
  this.cit = city;
  this.state = state;
}

//methods
Pizza.prototype.getCost = function() {
  var cost = 0;
  if (this.pizzaSize === "Large") {
    cost += 18;
  } else if (this.pizzaSize === "Small") {
    cost -= 12;
  }
  if (this.crustType === "Thick") {
    cost += 1;
  }
  this.vegToppings.forEach(function(topping) {
    cost += 1;
  })
  this.meatToppings.forEach(function(topping) {
    cost += 2;
  })
  this.cost = cost;

}

Pizza.prototype.addTopping = function(topping) {

}

Pizza.prototype.addToOrder = function() {

}

var newPizza = new Pizza("Large", "Thick", "Red", "Extra")

newPizza.vegToppings.push("pepperoni", "onions", "tomatoes")

console.log(newPizza);
newPizza.getCost();
console.log(newPizza.cost);



//User Interface Logic
$(document).ready(function() {

  $("#order-now").click(function() {
    $("#order-now").hide();
    $(".panel").toggle();
  })

  $("#order-now").submit(function(event) {
    event.preventDefault();
  })




})
