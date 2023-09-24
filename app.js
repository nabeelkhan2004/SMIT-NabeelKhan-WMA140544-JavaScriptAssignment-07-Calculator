var userInput = document.getElementById("input");

function getNumber(num) {
  userInput.value += num;
}

function getOperator(operator) {
  var operatorArr = ["/", "+", "-", "%", "*", "."];

  for (var i = 0; i < operatorArr.length; i++) {
    if (userInput.value[userInput.value.length - 1] === operatorArr[i]) {
      userInput.value = userInput.value.slice(0, -1);
    }
  }
  userInput.value += operator;
}

function clearResult() {
  userInput.value = "";
}

function deleteChar() {
  var deleteChar = document.getElementById("input");
  var removeChar = deleteChar.value;
  removeChar = removeChar.slice(0, -1);
  deleteChar.value = removeChar;
}

function result() {
  var result = eval(userInput.value).toString();
  for(var i = 0; i < (result.toString()).length; i++){
    if(result.charCodeAt(i) === 46){
      result = Number(result).toFixed(3)
    }
  }
  userInput.value = result
}