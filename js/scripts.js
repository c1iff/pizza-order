// Buisness Logic

//constructors
function Customer() {
  this.order = [];
  this.firstName;
  this.lastNamet;
  this.address = {};
}

function Pizza(pizzaSize, crustType, sauceType, vegToppings, meatToppings) {
  this.pizzaSize = pizzaSize;
  this.crustType = crustType;
  this.sauceType = sauceType;
  this.vegToppings = vegToppings;
  this.meatToppings = meatToppings;
  this.cost;
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
  var newCustomer = new Customer();
  // var newCustomer = new Customer()
  $("#order-now").click(function() {
    $(".home").hide();
    $(".panel").toggle();
    $(".form-size").toggle();
  })

  $("#form-size").click(function() {
    $(".form-size").toggle();
    $(".form-crust").toggle();
  })

  $("#form-crust").click(function() {
    $(".form-crust").toggle();
    $(".form-sauce").toggle();
  })

  $("#form-sauce").click(function() {
    $(".form-sauce").toggle();
    $(".form-vegTops").toggle();
  })

  $("#form-vegTops").click(function() {
    $(".form-vegTops").toggle();
    $(".form-meatTops").toggle();
  })

  $(".form-pizza-order").submit(function(event) {
    event.preventDefault();
    var size = $("input:radio[name=size]:checked").val();
    var crust = $("input:radio[name=crust]:checked").val();
    var sauce = $("input:radio[name=sauce]:checked").val();
    var vegToppings = [];
    var meatToppings = [];
    $("input:checkbox[name=veg-topping]:checked").each(function(){
          vegToppings.push($(this).val())
    })
    $("input:checkbox[name=meat-topping]:checked").each(function(){
          meatToppings.push($(this).val())
    })
    var newPizza = new Pizza(size, crust, sauce, vegToppings, meatToppings);
    console.log(newPizza);
    newCustomer.order.push(newPizza);
    console.log(newCustomer);
  })


})
