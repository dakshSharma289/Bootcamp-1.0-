function filter(input){
  let output = [];
  for(let i=0; i<input.length; i++){
    if(input[i].age > 18){
      output.push(input[i]);
    }
  }
  return output;
}

const users = [{
		name: "Harkirat",
		age: 21
	}, {
		name: "raman",
		age: 22
	}, {
    name: "sukhi",
    age: 17
  }
]

function printNames(input){
  let output = [];
  for(let i = 0; i < input.length; i++){
    output.push(input[i].name);
  }
  return output;
}

console.log(printNames(filter(users)));
