// Query Selectors
let numEL = document.getElementById("num");
let repsEL = document.getElementById("reps");
let calcEL = document.getElementById("calc");
let containerEL = document.getElementById("container");

// Create element to display the user's max
let max = document.createElement("p");

// Create element to reset the form
let reset = document.createElement("button");

// function to calculate 1RM
function calculateMax(weight, reps){
    // calculating max using the Bryzycki equation 
    // (Brzycki, M. (1993). Strength Testing—Predicting a One-Rep Max from Reps-to-Fatigue. Journal of Physical Education, Recreation & Dance, 64(1), 88–90. https://doi.org/10.1080/07303084.1993.10606684)
    return weight / (1.0278 - 0.0278 * reps)
}

// flag to determine if results is currently diaplayed
let resultDisplayed = false;

// event listener for calc button click
calcEL.addEventListener('click', function(){
    
        let weight = numEL.value;
        let reps = repsEL.value;
        let result = calculateMax(weight, reps);

        max.textContent = `Your One Rep Max is ${Math.round(result)} kg`

        //check if a result is already displayed
        if(resultDisplayed == false)
        {
            containerEL.appendChild(max) 

            // when results are displayed, add a reset button
            reset.textContent = "Reset";
            containerEL.appendChild(reset);

            // set result displayed flag to true after diaplying result
            resultDisplayed = true;
        }
});

// event listener for reset button click
reset.addEventListener('click', function(){
    numEL.value = null;
    repsEL.value = null;
    max.remove();
    resultDisplayed = false;
    reset.remove();
})