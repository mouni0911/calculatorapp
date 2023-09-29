//calculator variables
var display=document.getElementById("display");

// Function to append a value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value=" ";
}
function back() {
    display.value= display.value.slice(0,-1);
}
// Function to perform the calculation
function calculate() {
    try{
        var result = eval(display.value);
        display.value=result;
    }
    catch(error){
        display.value="Error";
    }
}
// Function to calculate percentage
function calculatePercentage() {
  try {
    var result = eval(display.value + "/100");
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}