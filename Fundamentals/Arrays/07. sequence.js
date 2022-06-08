function sequence(arr){

   let maxSequence = [];
   let arrL = arr.length;

   for(let i = 0; i < arrL; i++){
       let currentSequence = [];
       for(let j = i; j < arrL; j++){
           if(arr[i] === arr[j]){
               currentSequence.push(arr[i])
           }else{
               break;
           }
       }
       if(currentSequence > maxSequence){
           maxSequence = currentSequence
       }
   }
   console.log(maxSequence.join(' '));
}
sequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1, 4, 4, 4, 4])