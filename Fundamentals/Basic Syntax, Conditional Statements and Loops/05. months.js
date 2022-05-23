function month(input){

    let arr = [`January`,
`February`,
`March`,
`April`,
`May`,
`June`,
`July`,
`August`,
`September`,
`October`,
`November`,
`December`,]
if(input > 12 || input < 1){
    console.log('Error!');
    
}else{
    console.log(arr[input-1]);

}


}
month(13)