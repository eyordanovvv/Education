function arrRotation (arr, rotations){

    while(rotations > 0){

        let elementToMove = arr.shift();

        arr.push(elementToMove)
        rotations--;
    }
    console.log(arr.join(' '));
}
arrRotation([51, 47, 32, 61, 21], 3)