var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
<<<<<<< HEAD
  kittens.push(name); 
  return kittens; 
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name); 
  return kittens;  
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(); 
  return kittens; 
}

function destructivelyRemoveLastKitten() {
  kittens.pop(); 
  return kittens; 
}

function appendKitten(name) {
  var x = kittens.concat(name); 
  return x;  
}

function prependKitten(name) {
  var x = [name,...kittens]; 
  return x;  
}

function removeLastKitten() {
  var x = kittens.slice(0, kittens.length -1); 
  return x;  
}

function removeFirstKitten() {
  var x = kittens.slice(1); 
  return x;  
}
=======
  var x = kittens.push(name); 
  return x 
}

>>>>>>> 0072a03b858202bea9889a2d07def9f124eec745
