//Soma de intervalo

function Rage(start, end){
    var value = [];
    
    if(start < end){
        for(var x = start; end + 1 > x; x++){
            value.push(x);
        }
    }
    else{
        for(var x = start; end - 1 < x; x--){
            value.push(x);
        }
    }

    var soma = 0;
    for(var x = 0; x < value.length; x++){
        soma += value[x];
    }

    return value +  " = " + soma;
    
}
console.log(Rage(1, 10));