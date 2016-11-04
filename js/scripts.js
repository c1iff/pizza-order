// Buisness Logic

//constructors
function Customer() {
  this.orders = [];
  this.customerName;
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

function Address(street, city, state) {
  this.street = street
  this.city = city;
  this.state = state;
}

//methods
Pizza.prototype.getCost = function() {
  var cost = 0;
  if (this.pizzaSize === "Large") {
    cost += 18;
  } else if (this.pizzaSize === "Small") {
    cost += 12;
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

Customer.prototype.getTotal = function() {
var costTotal = 0;
  this.orders.forEach(function(pizza){
    console.log(pizza);
    costTotal += pizza.cost;
  })
  return costTotal;
}



//User Interface Logic
$(document).ready(function() {
  var newCustomer = new Customer();
  // var newCustomer = new Customer()
  $("#order-now").click(function() {
    $(".home").hide();
    $(".panel").toggle();
    $(".form-size").toggle();
    $("#home").removeClass("active")
    $("#order").addClass("active")
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
    newPizza.getCost();
    console.log(newPizza);
    newCustomer.orders.push(newPizza);
    console.log(newCustomer);
    $(".form-meatTops").toggle();
    $(".order-summary").toggle();
    $(".order-summary-list").append('<li>Pizza Size: ' + newPizza.pizzaSize + '</li>' +
                                  '<li>Crust Type: ' + newPizza.crustType + '</li>' +
                                  '<li>Sauce Type: '  + newPizza.sauceType + '</li>' +
                                  '<li>Vegetable Toppings: '  + newPizza.vegToppings + ' </li>' +
                                  '<li>Meat Toppings: '  + newPizza.meatToppings + '</li>' +
                                  '<li>Cost: $' + newPizza.cost + '</li><br>');
    $(".total").text(newCustomer.getTotal());
  })

  $("#summary").click(function() {
    $(".order-summary").toggle();
    $(".customer-info").toggle();
    $("#order").removeClass("active")
    $("#checkout").addClass("active")
  })

  $("#summary1").click(function() {
    $(".order-summary").toggle();
    $(".form-size").toggle();
  })

  $(".final-order").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();
    newCustomer.customerName = name;
    console.log(newCustomer);
    var address = new Address(street, city, state);
    newCustomer.address = address;
    $(".customer-info").toggle();
    $(".final-review").toggle();
    $(".final-result").append('<li>Customer Name: ' + newCustomer.customerName + '</li>' +
                                  '<li>Street Address: ' + address.street + '</li>' +
                                  '<li>City: '  + address.city + '</li>' +
                                  '<li>State: '  + address.state + ' </li>' +
                                  '<li>Cost: $' + newCustomer.getTotal() + '</li><br>');
  })
})
