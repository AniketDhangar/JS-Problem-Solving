const people = [
    { name: "John", age: 15 },
    { name: "Jane", age: 25 },
    { name: "Tom", age: 19 },
    { name: "Emily", age: 17 },
    { name: "Anna", age: 30 }
  ];
  
  // Filter out people who are under 18.
  // Map the filtered people to a new array with just their names in uppercase.
  const adult  = people.filter((x)=> x.age<18)
  .map((y)=>y.name.toUpperCase())
  
  console.log(adult)