function reverseAnArray(n, inputarr){

    let arr = [];

    for (let index = 0; index < n; index++) {
        
        arr.push(inputarr[index])
        
    }
    console.log(arr.reverse().join(' '));
}
reverseAnArray(2, [66, 43, 75, 89, 47])