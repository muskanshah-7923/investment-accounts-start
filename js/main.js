// Array Visualizer Template

// HTML Variables
let outputEl = document.getElementById("output");

// Global Variables
let dataArray = [1, 2, 3, 5, 8];
let maxDataVal = 10; // max data value

// Display Data
drawArray(dataArray, maxDataVal);

// Main Menu & Go Button
document.getElementById("go-btn").addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = document.getElementById("menu-select").value;

  // Take action based on menu selection
  if (selection === "option1") {
    option1();
  } else if (selection === "option2") {
    option2();
  }

  // Redraw array to show any changes
  drawArray(dataArray, maxDataVal);
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function option1() {
  outputEl.innerHTML = "Option 1";
}

function option2() {
  outputEl.innerHTML = "Option 2";
}

// ******************************************************
// END OF MENU SELECTION FUNCTIONS
// ******************************************************

// DRAW ARRAY FUNCTION
// Function to draw current state of grades array
function drawArray(array, maxVal) {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < array.length; i++) {
    divHeight = (array[i] / maxVal) * 600; // Scale grades to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  document.getElementById("container").innerHTML = outputStr;
}
