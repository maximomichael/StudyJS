//Mutabilidade
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2); //True
console.log(object1 == object3); //False

object1.value = 15;
console.log(object2.value); //return 15
console.log(object3.value); //return 10