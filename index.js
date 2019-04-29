function yourAnimal (){
  var animal = 'cat';
  return function myAnimal(){
    var animal = 'dog';
    return animal;
  }
}

var yourAnimal = yourAnimal()
    yourAnimal;
    
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below

const two = 2

function add2(n) {
  return n + two
}

// Fix the scope of the funkyFunction.

var funkyFunction = function () {
  return function() {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction;


    

