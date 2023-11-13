let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}

function deleteLastcharacter() {
  displayValue = displayValue.slice(0,-1);
  document.getElementById("display").value = displayValue;
}

function calculateResult() {
  try {
    displayValue = eval(displayValue);
    document.getElementById("display").value = displayValue;
  } catch (error) {
    alert("Invalid input");
    clearDisplay();
  }
}

function openparenthesis(){
  appendToDisplay("(");
}
function closeparenthesis(){
  appendToDisplay(")");
}

function appendToDisplay(value){
	if (value === 'ans'){
	  if(previousResult != null){
		displayValue += previousResult.toString();
	  }

	} else if (value ==='='){
		calculateResult();
	} else if (value ==='%'){
		calculatePercentage();
        } else if (value ==='√'){
		calculateSquareRoot();
        }else if (value ==='±'){
		PlusMinus();
        }else {
		displayValue += value;
	}
	document.getElementById("display").value = displayValue;
}


function calculatePercentage() {
  try {
    displayValue = eval(displayValue);
    displayValue /= 100;
    document.getElementById("display").value = displayValue;
  } catch (error) {
    alert("Invalid input");
    clearDisplay();
  }
}

function calculateSquareRoot() {
  try {
    displayValue = Math.sqrt(eval(displayValue));
    document.getElementById("display").value = displayValue;
    previousResult = displayValue;
  } catch (error) {
    alert("Invalid input");
    clearDisplay();
  }
}

function PlusMinus(){
  if (displayValue !== ""){
    displayValue = eval(displayValue)* -1;
    document.getElementById("display").value = displayValue;
   }
}










