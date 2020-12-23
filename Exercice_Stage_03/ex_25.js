var day1 = {
    squirrel: false,
    events: ["work", "Touched Tree", "Pizza", "Running", "Television"]
};

console.log(day1.wolf);

//Adicionando um novo registro
day1.wolf = false;
console.log(day1.wolf);


var description = {
    work: "went to work",
    "touched tree": "touched a tree"
};
console.log(description["touched tree"]);

//delete -> removendo propriedades do objeto
var anObject = {
    left: 1,
    right: 2
};
console.log(anObject.left);

delete anObject.left; //Delete
console.log(Object.left); //undefined

//Verificando se objeto ainda existe returno booleano con "in".
console.log("left" in anObject); //False
console.log("Right" in anObject); //true

//verificando com typeOf
console.log(typeof(anObject));

