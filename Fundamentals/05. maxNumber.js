function maxNumber(arr1){

    let maxNumber = Number.MIN_SAFE_INTEGER
    let newArr = [];
    for(i = arr1.length - 1; i >= 0; i--){
        let currentNumber = arr1[i]
        if(currentNumber > maxNumber){
            maxNumber = currentNumber;
            newArr.push(maxNumber)
        }
    }
    console.log(newArr.reverse().join(' '));


}
maxNumber([41, 41, 34, 20])