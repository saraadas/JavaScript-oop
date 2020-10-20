var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];
 let oldestPerson = function (persons){
     let total = 0;
     let oldestPerson = {}
        persons.reduce ((first,age) {
         if ((first.age - first.age) > total) {
             total = ( first.age - first.age);
             oldestPerson = age; 
         }
        return first;
         })
        return oldestPerson;
     }
