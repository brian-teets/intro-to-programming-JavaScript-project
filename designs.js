/**
 * Variable declarations -
 * Per Udacity JavaScript style guidelines, start with const first
 * if reassignment is needed later, use let
 */
// Select color input - will use color Variable name to reference colorPicker
const color = document.getElementById('colorPicker');
// querySelector could also be used, but regardless should be consistent

// get the height and width elements
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');

// Need to get the table element which is id of pixelCanvas
// I'll declare it here as grid
const grid = document.getElementById('pixelCanvas');

/**
 * get the size from sizePicker
 * sizePicker is the id of the form
 * which includes inputs for height, width, and submit
 */
const size = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
// So, I need an event listener to listen for submit event

size.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid()
});

/**
 * The makeGrid function should dynamically clear and create the grid
 * based on user input. makeGrid needs a loop. Each cell of the grid
 * should have its own even listener to set/fill cell background color.
 */
// Need the value of height and width in the loop
// innerHTML will clear and reset the grid
// reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
/**
 * then need a nested for loop to create table rows and columns
 * y will refer to height and x will refer to width
 * can reassign with let keyword
 */
// how to: create table row: https://www.w3schools.com/jsref/dom_obj_tablerow.asp
// how to: create table row: https://www.w3schools.com/jsref/dom_obj_tablerow.asp
function makeGrid() {
    grid.innerHTML = '';
    for (let y = 0; y < height.value; y++) {
        const addRow = document.createElement('tr');
        grid.append(addRow);
        for (let x = 0; x < width.value; x++) {
            const addColumn = document.createElement('td');
            addRow.appendChild(addColumn);
        }
    }
};


grid.addEventListener('click', function(event) {
    if (event.target.nodeName.toUpperCase() === 'TD') {
        event.target.style.backgroundColor = color.value;
    }
});


// added a couple of blank lines between end of makeGrid function and grid event listener for readability
// per review, changed Variable keywords from let to const for addRow and addColumn
// updated per code review to check node name of 'TD' instead of 'td'
// per code review, updated if statement in grid listener to event.target.nodeName.toUpperCase
// per reviewer feedback, checked/updated indentation using https://beautifier.io/
/**
 * tested and checked the console and didn't have any errors
 * the grid dynamically displayed to the screen
 * and was able to click individual cells to paint selected color
 */
