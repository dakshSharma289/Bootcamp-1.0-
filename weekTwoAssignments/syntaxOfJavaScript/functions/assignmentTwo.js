function canVote (age){
  if(age<18){
    return false;
  }
  return true;
}

console.log(canVote(19));
console.log(canVote(16));
