function minValue(number01, number02){

    if(number01 < number02 ){
        return  number01;
    }
    else if(number02 < number01){
        return number02;
    }
    else{
        return number01;
    }
}

console.log(minValue(200, 10));
