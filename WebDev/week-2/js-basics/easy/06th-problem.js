function group (input){
  let cities = [];
  for(i in input){
    let unique = true;
    for(j in cities){
      if(cities[j] === input[i].city){
        unique = false;
      }
    }
    if(unique){
      cities.push(input[i].city)
    }
  }
  let output = {};
  for(i in cities){
    output[cities[i]] = [];
    for(j in input){
      if(input[j].city === cities[i]){
        output[cities[i]].push(input[j].name);
      }
    }
  }
  return output;
}

console.log(group([
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]));
