// const numbers = [1,2,3,4,5,6,7,8,9];
// for(i = 0 ; i< numbers.length ; i++){
     

//       if(numbers[i]> 4){
//             break;
//       }
//       console.log(numbers[i]);
// }


const numbers = [1,2,3,-4,5,6,-7,8,-9];
for(i = 0 ; i< numbers.length ; i++){
     

      if(numbers[i]< 0){
            continue;
      }
      console.log(numbers[i]);
}