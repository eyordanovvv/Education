function solve (arr){

    let newarr = [];

    for(i = 0; i < arr.length / 2; i++){
        let buffer = arr[i];
        arr[i] = arr[arr.length - i - 1]
        arr[arr.length - i - 1] = buffer;
        

    }
    console.log(arr);
}
solve(['a', 'b', 'c', 'd', 'e'])