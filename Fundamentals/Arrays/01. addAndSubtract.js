function addAndSubstract(arr){

let originalArrSum = 0;
let newArraySum = 0;

let arrLenght = arr.length;

for(let n = 0; n < arrLenght; n++){

    
    originalArrSum += arr[n];

    if(arr[n] % 2 === 0){
        arr[n] += n;
    }else{
        arr[n] -= n;
    }
    newArraySum += arr[n];
}
console.log(arr);
console.log(originalArrSum);
console.log(newArraySum);

}
addAndSubstract([5, 15, 23, 56, 35])