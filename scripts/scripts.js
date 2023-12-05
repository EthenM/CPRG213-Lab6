/****************** YOUR NAME: Ethen Mitterhuber

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE

const MODEL_XYZ = "XYZ";
const MODEL_CPRG = "CPRG";

let modelName = MODEL_XYZ;
let duration = 0;

//some other constants
const XYZ_PRICE = 100;
const CPRG_PRICE = 213;

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE

/**
 * calculates the cost of the rental based on the model and the duration
 */
const recalculate = () => {

    //get the element where the cost text will be stored
    let costLabel = document.getElementById("calculated-cost");
    
    //define calculatedCost
    let calculatedCost = 0;

    //get the model name, and display the cost for the duration chosen
    switch (modelName) {
        case "XYZ":
            calculatedCost = duration * XYZ_PRICE;
            break;
        case "CPRG":
            calculatedCost = duration * CPRG_PRICE;
            break;
    }

    console.log("calculated cost: ", calculatedCost);
    costLabel.innerHTML = calculatedCost;
};


/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */

// INSERT YOUR CODE HERE

const MODEL_BUTTON = document.getElementById("model-button");

/**
 * Switches the model to the one not currently active
 */
const changeModel = () => {
    //get the element containing the model text
    let modelText = document.getElementById("model-text");

    //switch the model to the one not currently active
    switch (modelName) {
        case MODEL_XYZ:
            modelName = MODEL_CPRG;
            modelText.innerHTML = "Model " + MODEL_CPRG;
            break;
        case MODEL_CPRG:

            modelName = MODEL_XYZ;
            modelText.innerHTML = "Model " + MODEL_XYZ;
            break;
    }

    //recalculate the cost for the new model
    recalculate();
};

MODEL_BUTTON.addEventListener("click", changeModel);

/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE

const DURATION_BUTTON = document.getElementById("duration-button");

/**
 * Changes the duration of the rental to the number of days the user inputs 
 */
const changeDuration = () => {
    //get the element containing the duration text
    let durationText = document.getElementById("duration-text");

    //prompt the user for a new duration
    duration = prompt("Please Enter a duration for renting");

    //set the text to the new duration
    durationText.innerHTML = duration;

    //recalculate the cost for the new duration
    recalculate();
};

DURATION_BUTTON.addEventListener("click", changeDuration);