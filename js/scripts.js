// Buisness Logic

//constructors
function Pizza(pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.crustType;
  this.sauceType;
  this.vegToppings = [];
  this.meatToppings = [];
  this.cost;
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



//User Interface Logic
$(document).ready(function() {

  var newPizza = new Pizza()
  // var newCustomer = new Customer()
  $("#order-now").click(function() {
    $(".home").hide();
    $(".panel").toggle();
    $(".form-size").toggle();
  })

  $(".form-size").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    var newPizza = new Pizza(size);
    $(".form-size").toggle();
    $(".form-crust").toggle();
    console.log(newPizza);
  })

  $(".form-crust").submit(function(event) {
    event.preventDefault();
    var crust = $("input:radio[name=crust]:checked").val();
    newPizza.crust = crust;
    $(".form-crust").toggle();
    $(".form-sauce").toggle();
    console.log(newPizza);
  })

  $(".form-sauce").submit(function(event) {
    event.preventDefault();
    var sauce = $("input:radio[name=sauce]:checked").val();
    newPizza.sauce = sauce;
    $(".form-vegTops").toggle();
    $(".form-meatTops").toggle();
    console.log(newPizza);
  })



})
