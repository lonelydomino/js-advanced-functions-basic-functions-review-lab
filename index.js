
//difference between function and function expression?
function saturdayFun(string="roller-skate") {//function
    return "This Saturday, I want to " + string + "!"
}

let mondayWork = function(string="go to the office"){//function expression
    return "This Monday, I will " + string + "."
}

let wrapAdjective = function(param="*") {
    return function(adjective="special") {
      return `You are ${param}${adjective}${param}!`
    }
  }
// difference between let and const
let Calculator = {
    add(a, b) {
        return a + b
    },
    subtract(a, b) {
        return a - b
    },
    multiply(a, b) {
        return a * b
    },
    divide(a, b) {
        return a / b
    }
}
function actionApplyer(int,array) {
    for (let i = 0; i < array.length; i++ ){
        int = array[i](int)
      }
    
      return int
}