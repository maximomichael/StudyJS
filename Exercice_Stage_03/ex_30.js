//Adcionando e removendo itens no final da array
var todoList = [0,1,2,3,4,5,6,7,8];

function addToEnd(task){
    todoList.push(task);
}

addToEnd(9);
console.log(todoList  + "   <--");

function removeToEnd(){
    todoList.pop();
}

removeToEnd();
console.log(todoList + "   <--");

//Adcionando e removendo itens no inicio da array
function addToHome(task){
    return todoList.unshift(task);
}

addToHome(-1);
console.log(todoList + "   <--");

function removeToHome(){
    return todoList.shift();
}

removeToHome();
console.log(todoList + "   <--");

//Removendo um indice com slice e concat
function remove(array, index){
    //Separando a array usando slice        
    return array.slice(0, index)
           //unindo array usando concat
           .concat(array.slice(index+1));
}
console.log(remove(["a", "b", "c", "d", "e", "f"], 2));