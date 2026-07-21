function filter(data, keys){
  output = {};
  for(i in data){
    for(j in keys){
      if(i === keys[j]){
        output[i] = data[i];
      }
    }
  }
  return output;
}


console.log(filter({ name: "Rahul", age: 23, city: "Noida" }, ["name","city"]));
