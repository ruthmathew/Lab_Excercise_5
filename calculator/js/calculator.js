// calculator object

let calculator = {
    firstNumber: 0,
    secondNumber: 0,
    numberArray: [],
    input = "",
    
    
    // addition function
    add: function(numberArray){
        let add = 0;
        numberArray.forEach( numberArray => {
            add = add + parseInt(numberArray);
            }
        )
        return add;
    },
    
    // substraction function
    substract: function(number1, number2){
        return (parseInt(number1) - parseInt(number2));
    },


    // multiplication function
    multiply: function(numberArray){
        let multi = 1;
        numberArray.forEach( numberArray => {
            multi = multi * parseInt(numberArray);
            }
        )
        return multi;
    },

    //division function

    divide: function(number1, number2){

        if (parseInt(this.secondNumber) != 0){
            return Number.parseFloat(number1 / number2).toFixed(2);
        }

        else{
            return "Error";
        }
        
    },

    square: function(number){
        return Math.pow(parseInt(number), 2);
    },

    squareRoot: function(number){
        if (number < 0){
            return "Error"
        }
        else{
            return Math.pow(parseInt(number), 0.5);
        }
    }


    // // calculate based on the choosen operation
    // calculate: function(choosen){
    //     let answer;
    
    //     if (choosen == "add"){
    //         answer = calculator.add(calculator.numberArray);
            
            
    //     }

    //     if (choosen == "sub"){
    //         answer = this.sub(this.firstNumber, this.secondNumber);
            
    //     }

    //     if (choosen == "mul"){
    //         answer = calculator.mul(calculator.numberArray);
            
    //     }

    //     if (choosen == "div"){
    //         answer = this.divide(this.firstNumber, this.secondNumber);
            
    //     }

    //     return answer;

    // }




}


// select the needed buttons

const symbol = document.querySelectorAll(".symbol");
const input = document.querySelector(".input");
const eqSign = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");

// add event listener

del.addEventListener()
