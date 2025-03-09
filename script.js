// Query Selectors
let numEL = document.getElementById("num");
let repsEL = document.getElementById("reps");
let calcEL = document.getElementById("calc");
let containerEL = document.getElementById("container");

// Create element to display the user's max
let max = document.createElement("p");

// Create element to reset the form
let reset = document.createElement("button");

// Create element to display warning
let warning = document.createElement("p");

// function to calculate 1RM
function calculateMax(weight, reps){
    // calculating max using the Bryzycki equation 
    // (Brzycki, M. (1993). Strength Testing—Predicting a One-Rep Max from Reps-to-Fatigue. Journal of Physical Education, Recreation & Dance, 64(1), 88–90. https://doi.org/10.1080/07303084.1993.10606684)
    return weight / (1.0278 - 0.0278 * reps)
}

// flag to determine if results is currently diaplayed
let resultDisplayed = false;

// flag to chheck if warning displayed
let warningDisplayed = false;

// event listener for calc button click
calcEL.addEventListener('click', function(){
    if(numEL.value !=0 && repsEL.value != 0)
    {
        let weight = numEL.value;
        let reps = repsEL.value;
        let result = Math.round(calculateMax(weight, reps));

        max.textContent = `Your One Rep Max is ${result} kg. Based on the Brzycki formula.`

        //check if a result is already displayed
        if(resultDisplayed == false)
        {
            calcEL.remove();

            // when results are displayed, add a reset button
            reset.textContent = "Reset";
            reset.id = "reset";
            containerEL.appendChild(reset);

            //removes warning message if displayed and resets flag
            warning.remove();
            warningDisplayed = false;

            containerEL.appendChild(max) 


            // set result displayed flag to true after diaplying result
            resultDisplayed = true;
        }
    }
    else{
        if(!warningDisplayed)
        {
            //removes the result and reset button and resets the flag
            max.remove();
            reset.remove();
            resultDisplayed = false;

            warning.textContent = "Please put in valid weight and repitition values";
            warning.id = "warning";
            containerEL.append(warning);
            warningDisplayed = true;
        }
    }
});

// event listener for reset button click
reset.addEventListener('click', function(){
    numEL.value = null;
    repsEL.value = null;
    max.remove();
    resultDisplayed = false;
    reset.remove();
    containerEL.append(calcEL);
})