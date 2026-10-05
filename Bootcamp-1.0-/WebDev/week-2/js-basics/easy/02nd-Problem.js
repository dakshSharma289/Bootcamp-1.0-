function count(input){
    let unique = [];
    for(i in input){
        let duplicate = false
        for(j in unique){
            if(unique[j] === input[i]){
                duplicate = true;
            }
        }
        if(!duplicate){
            unique.push(input[i]);
        }
    }
    let output = {};
    for(i in unique){
        output[unique[i]] = 0;
        for(j in input){
            if(unique[i] === input[j]){
                output[unique[i]]++;
            }
        }
    }
    return output;
}

console.log(count(["apple", "banana", "apple", "orange", "banana", "apple"]))