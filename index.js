//Calculator Screen
const calculatorScreen = document.querySelector('.calculator-screen')

//UpdateScreen
const updateScreen = (number) => {
    calculatorScreen.value = number
}

//Input Number
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

//Operator
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
 })

//Input Operator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

//= atau Equal Sign
const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener("click", (event) => {
    calculate()
    updateScreen(currentNumber)
})

//Calculation Operator
const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case '+':
           result = parseFloat (prevNumber) + parseFloat (currentNumber)
        break
        case '-':
           result = parseFloat (prevNumber) - parseFloat (currentNumber)
        break
        case '*':
           result = parseFloat (prevNumber) * parseFloat (currentNumber)
        break
        case '/':
           result = parseFloat (prevNumber) / parseFloat (currentNumber)
        break
        default:
        return          
    }

    currentNumber = result
    calculationOperator = ''
}

//AC atau All-Clear
const clearBtn = document.querySelector(".all-clear")

    clearBtn.addEventListener("click", (event) => {
        clearAll()
        updateScreen(currentNumber)
    })
   
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

//Decimal
const decimal = document.querySelector(".decimal")

    decimal.addEventListener("click", (event) => {
        inputDecimal (event.target.value)
        updateScreen(currentNumber)
    })

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}  

//Numbers
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
   number.addEventListener("click", (event) => {
       inputNumber(event.target.value);
       updateScreen(currentNumber);
   })
})


let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

//Presentage
const presentage = document.querySelector(".presentage")

    presentage.addEventListener("click", (event) => {
        inputPresentage (event.target.value)
        updateScreen(currentNumber)
    })

inputPresentage = (presentage) => {
    if (currentNumber.includes('%')) {
        return
    }
    currentNumber = currentNumber/100
}  