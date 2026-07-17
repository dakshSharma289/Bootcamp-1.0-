function sum(input){
  let foodExpense = input.food;
  let foodCost = 0;
  for(let i = 0; i<foodExpense.length; i++){
    foodCost += foodExpense[i];
  } 
  let travelExpense = input.travel;
  let travelCost = 0;
  for(let i = 0; i<travelExpense.length; i++){
    travelCost += travelExpense[i];
  } 
  let billingExpense = input.bills;
  let billingCost = 0;
  for(let i = 0; i<billingExpense.length; i++){
    billingCost += billingExpense[i];
  }
  return {food : foodCost, travel: travelCost, bills: billingCost};
}

console.log(sum({ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }));
