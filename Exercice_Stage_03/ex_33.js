//Object Argument
function noArguments() {
    console.log(arguments[1]);
}
noArguments(1, 2, 3);

//Usando arguments para criar uma array
function addEntry(squirrel){
    var entry = {events: [], squirrel: squirrel};
    for(var x = 1; x < arguments.length; x++){
        entry.events.push(arguments[x]);
    }
    console.log(entry.events);
}

addEntry(true, "Eat", "Bread", "Water", "Drink");

