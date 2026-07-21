function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalize(input){
  for(i in input){
    input[i] = capitalizeFirstLetter(input[i]); 
  }
  return input;
}

console.log(capitalize({ name: "alice", city: "delhi" }));
