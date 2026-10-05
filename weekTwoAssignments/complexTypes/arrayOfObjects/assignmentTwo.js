function filter(input){
  let buffer = [];
  for(let i = 0; i < input.length; i++){
    if(input[i].age > 18){
      buffer.push(input[i]);
    }
  }
  let output = [];
  for(let i = 0; i < buffer.length; i++){
    if(buffer[i].gender === "male"){
      output.push(buffer[i]);
    }
  }
  return output;
}

function listName(input){
  let output = [];
  for(let i = 0; i < input.length; i++){
    output.push(input[i].name);
  }
  return output;
}

const users = [{
  name: "daksh",
  age: 17,
  gender: "male"
}, {
  name: "parthina",
  age: 23,
  gender: "female"
}, {
  name: "manas",
  age: 21,
  gender: "male"
}, {
  name: "sukhbeer",
  age: 22,
  gender: "female"
}];

console.log(listName(filter(users)));
