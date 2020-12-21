function IsEven(target){
    function find(start){
        if(start == 1){
            return false;
        }
        else if(start == 0){
            return true;
        }
        else if(start < 0){
            return "Number Negative...";
        }
        else{
            return find(start - 2);
        }
    }
    return(find(target));
}

console.log(IsEven(-1));