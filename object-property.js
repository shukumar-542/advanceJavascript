const Students= [
      {id:12, name: "david"},
      {id:15, name: "warnner"},
      {id:2, name:"mathew" },
]
const studentsNames = [];

// for(let i = 0 ; i< Students.length;i++){
//       const sNames = Students[i];
//       const allStudens = sNames.name;
//       studentsNames.push(allStudens);     
// }
// console.log(studentsNames);

const names = Students.map(all => all.name);
console.log(names);

const ids = Students.map(isId =>  isId.id);
console.log(ids);
const isGetter = Students.filter(isId => isId.id > 10);
console.log(isGetter);