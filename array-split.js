const numbers = [1,2,3,4,5,6,7,8,9];

const part = numbers.slice(2,5);
console.log(part);


const remove = numbers.splice(3,4);
console.log(remove);
console.log(numbers);

const add = numbers.join(" and ,");
console.log(add);