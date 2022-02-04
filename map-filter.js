const numbers = [3,10,15,20];
const output = [];

for(let i = 0; i<numbers.length;i++){
      const elemnts = numbers[i];
      const sqr = elemnts * elemnts;
      
      output.push(sqr);
}
console.log(output);

const sqr = numbers.map(function(elemnet){
      return elemnet * elemnet;
})
console.log(sqr);


const newsqr = numbers.map(x => x * x);
console.log(newsqr);


 const getter = numbers.filter(x => x > 5)
 console.log(getter);

numbers.map(function(element, index, array){
      console.log(element,index,array);
})