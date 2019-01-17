document.addEventListener("DOMContentLoaded", function(){   //loads DOM as if js was after body content
    let currOperator = "";
    let screen = document.getElementById('value');
    let screenCleared = false;
    let firstNumber = 0;
    let secondNumber = 0;
    let storedNumber = "";
    let stored = false;
    let screenTotal = "";
    
    const operators = {
        '+': function(num1, num2) {
            return parseFloat(num1) + parseFloat(num2)
        },
        '-': function(num1, num2) {
            return parseFloat(num1) - parseFloat(num2)
        },
        '*': function(num1, num2) {
            return parseFloat(num1) * parseFloat(num2)
        },
        '/': function(num1, num2) {
            return parseFloat(num1) / parseFloat(num2)
        }
    };

    function allClear() {
        storedNumber = "";
        stored = false;
        screenCleared = false;
        firstNumber = 0;
        secondNumber = 0;
        screenTotal = "";
        screen.innerHTML = "0";
    };

    function equals() {
        if (firstNumber === 0) {
            firstNumber = screenTotal;
        } else {
            secondNumber = screenTotal;
        }
        if (firstNumber !== 0 && secondNumber !== 0) {
            firstNumber = operators[operator](firstNumber, secondNumber);
        }
    }
    const button = document.getElementById('enter');
    button.addEventListener('click', function() {
        equals();
    })
    
    function pressNum(num) {
        if (screenCleared) {
            screenTotal = num;
            screenCleared = false;
        } else {
            screenTotal = screenTotal + num;
            document.getElementById('screen').innerHTML = screenTotal;
        }
    }

    for (let i = 0; i < 10; i++) {
        let number = document.getElementsByClassName('number');
        number[i].addEventListener('click', function() {
           pressNum(number[i].value);
        })
    }
    function pressOperator(opp) {
        screenCleared = false;
        currOperator = opp;
        if (firstNumber === 0) {
            firstNumber = screenTotal;
        } else {
            secondNumber = screenTotal;
        }
        screenTotal = "";
    }
    for (let i = 0; i < 4; i++) {
        let operator = document.getElementsByClassName('operator');
        operator[i].addEventListener('click', function() {
            pressOperator(operator[i].value);
        })
    }
    



// let button = document.getElementsByTagName('button');
// for (let i = 0; i < 15; i++) {
//     button[i].addEventListener('click', function() {
//         let thingClicked = this.innerHTML
//         console.log('You clicked: ' + thingClicked);
//         let currentValue = document.getElementById('value').innerHTML;
//         currentValue.innerHTML = thingClicked.value;
//         console.log(thingClicked)
//         if (thingClicked.classList.contains('operator')) {
//             console.log(`${thingClicked} is an operator class`) 
//         }
//     })    
// }

// 
}) // DOMContentLoaded