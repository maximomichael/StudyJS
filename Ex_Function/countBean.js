function countCharUpperCaseB(text){
    var value = 0;
    var textString = String(text);
    for(var countString = 0; countString < textString.length - 1; countString++){
        if(textString.charAt(countString) == "B"){
            value++;
        }
    }
    return value;
}

function countChat(text, letter){
    var value = 0;
    var textString = String(text);
    var letterString = String(letter);
    
    for(var countString = 0; countString < textString.length - 1; countString++){
        if(textString.charAt(countString) == letterString){
            value++;
        }
    }
    return value;
}

console.log(countCharUpperCaseB("Casa do Bairro não tem barril bbs, somente 2 BBs"));
console.log(countChat("Vivemos em uma época que ter opinião própria é crime!", "p"));