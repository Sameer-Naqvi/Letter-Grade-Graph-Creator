
var grades = [66, 27, 11, 48, 50, 6, 1, 75, 98, 54, 55, 5, 43, 89, 92];
var output1Arr = [];
var output2Arr = [];
var output3Arr = [];
var output4Arr = [];
var output5Arr = [];
var output6Arr = [];
var output7Arr = [];
var output8Arr = [];
var output9Arr = [];
var output10Arr = [];
var output11Arr = [];

function displayArray() {
  var outputElements = document.querySelectorAll(".table2 div[id^='output']");

  outputElements.forEach(function (element, index) {
    const outputArray = window['output' + (index + 1) + 'Arr'];
    element.textContent = 'O'.repeat(outputArray.length);
  });

}
function checkBoundsOrder() {
  var bounds = [
    parseFloat(document.getElementById("boundMAX").value),
    parseFloat(document.getElementById("boundA+").value),
    parseFloat(document.getElementById("boundA").value),
    parseFloat(document.getElementById("boundA-").value),
    parseFloat(document.getElementById("boundB+").value),
    parseFloat(document.getElementById("boundB").value),
    parseFloat(document.getElementById("boundB-").value),
    parseFloat(document.getElementById("boundC+").value),
    parseFloat(document.getElementById("boundC").value),
    parseFloat(document.getElementById("boundC-").value),
    parseFloat(document.getElementById("boundD").value),
    parseFloat(document.getElementById("boundF").value)
  ];

  for (var i = 0; i < bounds.length - 1; i++) {
    if (bounds[i] <= bounds[i + 1]) {
      document.getElementById("error-message").textContent = "Please ensure the bounds are in decreasing order.";
      return;
    }
  }

  document.getElementById("error-message").textContent = "";
}
var bound1 = document.getElementById("boundMAX");
var bound2 = document.getElementById("boundA+");
var bound3 = document.getElementById("boundA");
var bound4 = document.getElementById("boundA-");
var bound5 = document.getElementById("boundB+");
var bound6 = document.getElementById("boundB");
var bound7 = document.getElementById("boundB-");
var bound8 = document.getElementById("boundC+");
var bound9 = document.getElementById("boundC");
var bound10 = document.getElementById("boundC-");
var bound11 = document.getElementById("boundD");
var bound12 = document.getElementById("boundF");

var gradeSubmit = document.getElementById("newGrade");
var new_grade;
var bound_MAX;
var bound_A_plus;
var bound_A;
var bound_A_minus;
var bound_B_plus;
var bound_B;
var bound_B_minus;
var bound_C_plus;
var bound_C;
var bound_C_minus;
var bound_D;
var bound_F;

bound1.addEventListener('change', function b1(evt){
  evt.preventDefault();
  bound_MAX = parseFloat(evt.target.value);
  checkBoundsOrder();
  checkRangeAndUpdateOutputForBounds();
});
bound2.addEventListener('change', function b2(evt){
  evt.preventDefault();
  bound_A_plus = parseFloat(evt.target.value);
  checkBoundsOrder();
  checkRangeAndUpdateOutputForBounds();
});
bound3.addEventListener('change', function b3(evt){
  evt.preventDefault();
  bound_A = parseFloat(evt.target.value);
  checkBoundsOrder();
  checkRangeAndUpdateOutputForBounds();
});
bound4.addEventListener('change', function b4(evt){
  evt.preventDefault();
  bound_A_minus = parseFloat(evt.target.value);
  checkBoundsOrder();
  checkRangeAndUpdateOutputForBounds();
});
bound5.addEventListener('change', function b5(evt){
  evt.preventDefault();
  bound_B_plus = parseFloat(evt.target.value);
  checkBoundsOrder();
  checkRangeAndUpdateOutputForBounds();
});
bound6.addEventListener('change', function b6(evt){
  evt.preventDefault();
  bound_B = parseFloat(evt.target.value);
  checkBoundsOrder();
  checkRangeAndUpdateOutputForBounds();
});
bound7.addEventListener('change', function b7(evt){
  evt.preventDefault();
  bound_B_minus = parseFloat(evt.target.value);
  checkBoundsOrder();
  checkRangeAndUpdateOutputForBounds();
});
bound8.addEventListener('change', function b8(evt){
  evt.preventDefault();
  bound_C_plus = parseFloat(evt.target.value);
  checkBoundsOrder();
  checkRangeAndUpdateOutputForBounds();
});
bound9.addEventListener('change', function b9(evt){
  evt.preventDefault();
  bound_C = parseFloat(evt.target.value);
  checkBoundsOrder();
  checkRangeAndUpdateOutputForBounds();
});
bound10.addEventListener('change', function b10(evt){
  evt.preventDefault();
  bound_C_minus = parseFloat(evt.target.value);
  checkBoundsOrder();
  checkRangeAndUpdateOutputForBounds();
});
bound11.addEventListener('change', function b11(evt){
  evt.preventDefault();
  bound_D = parseFloat(evt.target.value);
  checkBoundsOrder();
  checkRangeAndUpdateOutputForBounds();
});
bound12.addEventListener('change', function b12(evt){
  evt.preventDefault();
  bound_F = parseFloat(evt.target.value);
  checkBoundsOrder();
  checkRangeAndUpdateOutputForBounds();
});

gradeSubmit.addEventListener('submit', function(evt){
  evt.preventDefault();
  new_grade = document.getElementById("userInput").value;
  if (isNaN(new_grade)){
    document.getElementById("error-message2").textContent = "The input is not a numerical value";
    return;
  }
  document.getElementById("error-message2").textContent = "";
  //clear the input field
  document.getElementById("userInput").value = "";
  grades.push(parseFloat(new_grade));
  checkRangeAndUpdateOutput(new_grade);
});

function addToOutput(grade, upperBound, lowerBound, outputElementId) {
  if (grade >= lowerBound && grade < upperBound) {
    const outputElement = document.getElementById(outputElementId);
    const currentWidth = parseInt(outputElement.style.width) || 0;
    const newWidth = currentWidth + 10;
    outputElement.style.width = newWidth + 'px';
  }
  displayArray();
}

function checkRangeAndUpdateOutput(grade) {
  //using this method to put the max grade value into the highest range
  if(parseFloat(grade) === parseFloat(bound_MAX)){
    addToOutput((grade - parseFloat(1)), bound_MAX, bound_A_plus, 'output1');
    document.getElementById("error-message2").textContent = "";
    return;
  }
     if (grade > bound_MAX) {
      document.getElementById("error-message2").textContent = "Please ensure the grade is lesser than the max value you have set.";
        return;
    }
    document.getElementById("error-message2").textContent = "";
  if(grade === ''){
    document.getElementById("error-message2").textContent = "No grade value added. Please make sure you add a numerical grade value.";
    return;
  }
  document.getElementById("error-message2").textContent = "";
  addToOutput(grade, bound_MAX, bound_A_plus, 'output1');
  addToOutput(grade, bound_A_plus, bound_A, 'output2');
  addToOutput(grade, bound_A, bound_A_minus, 'output3');
  addToOutput(grade, bound_A_minus, bound_B_plus, 'output4');
  addToOutput(grade, bound_B_plus, bound_B, 'output5');
  addToOutput(grade, bound_B, bound_B_minus, 'output6');
  addToOutput(grade, bound_B_minus, bound_C_plus, 'output7');
  addToOutput(grade, bound_C_plus, bound_C, 'output8');
  addToOutput(grade, bound_C, bound_C_minus, 'output9');
  addToOutput(grade, bound_C_minus, bound_D, 'output10');
  addToOutput(grade, bound_D, bound_F, 'output11');
}

function checkRangeAndUpdateOutputForBounds() {
  // Clear histogram bars
  var outputElements = document.querySelectorAll(".table2 div[id^='output']");
  outputElements.forEach(function (element) {
    element.style.width = '0';
  });

  // Update histogram bars based on new bounds
  grades.forEach(function (grade) {
    addToOutput(grade, bound_MAX, bound_A_plus, 'output1');
    addToOutput(grade, bound_A_plus, bound_A, 'output2');
    addToOutput(grade, bound_A, bound_A_minus, 'output3');
    addToOutput(grade, bound_A_minus, bound_B_plus, 'output4');
    addToOutput(grade, bound_B_plus, bound_B, 'output5');
    addToOutput(grade, bound_B, bound_B_minus, 'output6');
    addToOutput(grade, bound_B_minus, bound_C_plus, 'output7');
    addToOutput(grade, bound_C_plus, bound_C, 'output8');
    addToOutput(grade, bound_C, bound_C_minus, 'output9');
    addToOutput(grade, bound_C_minus, bound_D, 'output10');
    addToOutput(grade, bound_D, bound_F, 'output11');
  });

  displayArray();
}