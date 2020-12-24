var journal = [];

//Função para adicionar valores dentro da variavel Journal
function addEntry(event, didTurnIntoSquirrel){
    journal.push({
        events: event,
        squirrel: didTurnIntoSquirrel
    });
}

//Adicionando valores
addEntry(["work", "touched tree", "pizza", "runnig", "television"], false);
addEntry(["work", "ice cream", "cauliflower","lasagna", "Touched Tree", "Brushed Teeth"], false);
addEntry(["Weekend", "Cycling", "break", "peanuts", "beer"], false);
addEntry(["work", "touched tree", "pizza", "runnig", "television"], false);
addEntry(["work", "ice cream", "cauliflower","lasagna", "Touched Tree", "Brushed Teeth"], false);
addEntry(["Weekend", "Cycling", "break", "peanuts", "beer"], false);
addEntry(["work", "touched tree", "pizza", "runnig", "television"], false);
addEntry(["work", "ice cream", "cauliflower","lasagna", "Touched Tree", "Brushed Teeth"], false);
addEntry(["Weekend", "Cycling", "break", "peanuts", "beer"], false);
addEntry(["work", "touched tree", "pizza", "runnig", "television"], false);
addEntry(["work", "ice cream", "cauliflower","lasagna", "Touched Tree", "Brushed Teeth"], false);
addEntry(["Weekend", "Cycling", "break", "peanuts", "beer"], true);
addEntry(["work", "touched tree", "pizza", "runnig", "television"], false);
addEntry(["work", "ice cream", "cauliflower","lasagna", "Touched Tree", "Brushed Teeth"], false);
addEntry(["Weekend", "Cycling", "break", "peanuts", "beer"], true);
addEntry(["work", "touched tree", "pizza", "runnig", "television"], false);
addEntry(["work", "ice cream", "cauliflower","lasagna", "Touched Tree", "Brushed Teeth"], false);
addEntry(["Weekend", "Cycling", "break", "peanuts", "beer"], true);
addEntry(["work", "touched tree", "pizza", "runnig", "television"], true);
addEntry(["work", "ice cream", "cauliflower","lasagna", "Touched Tree", "Brushed Teeth"], false);
addEntry(["Weekend", "Cycling", "break", "peanuts", "beer"], true);
addEntry(["work", "touched tree", "pizza", "runnig", "television"], true);
addEntry(["work", "ice cream", "cauliflower","lasagna", "Touched Tree", "Brushed Teeth"], true);
addEntry(["Weekend", "Cycling", "break", "peanuts", "beer"], true);

//Calculando ø
function phi(table){
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
                  (table[0] + table[1]) *
                  (table[1] + table[3]) *
                  (table[0] + table[2])); 
}

//Verificando se existe o determinado evento
function hasEvent(event, entry){
    return entry.events.indexOf(event) != -1;
}

//Contando evento
function tableFor(event, journal){
    var table = [0, 0, 0, 0];
    for(var x = 0; x < journal.length; x++){
        //Inserir mais de uma varivel na mesma "var"
        var entry = journal[x], index = 0;

        if(hasEvent(event, entry)){
            index += 1;
        }
        if(entry.squirrel){
            index += 2;
        }
        table[index] +=1;

    }
    return table;
}


console.log(tableFor("pizza", journal))
console.log(hasEvent("work", journal[0]));
console.log(phi(tableFor("pizza", journal)));