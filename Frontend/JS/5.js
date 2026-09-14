function faulty(a, b, operator) {
    let random = Math.random();
    if (random < 0.1) {
        if (operator == "+") {
            let result = a + b;
            return result;

        } else if (operator == "-") {
            let result = a - b;
            return result;
            
        } else if (operator == "*") {
            let result = a * b;
            return result;

        } else if (operator == "/") {
            let result = a / b;
            return result;

        }
    }    
        else {
            if (operator == "+") {
                let result = a - b;
                return result;
            }
            else if (operator == "-") {
                let result = a / b;
                return result;

            } else if (operator == "*") {
                let result = a + b;
                return result;

            } else if (operator == "/") {
                let result = a ** b;
                return result;

            }
      
        }
    
}
console.log(faulty(
    Number(prompt("Enter first number")),
    Number(prompt("Enter second number")),
    prompt("Enter operator")));