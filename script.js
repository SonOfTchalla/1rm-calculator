// Query Selectors
let numEL = document.getElementById("num");
let repsEL = document.getElementById("reps");
let calcEL = document.getElementById("calc");
let containerEL = document.getElementById("container");

// function to calculate 1RM
function calculateMax(weight, reps){
    // calculating max using the Bryzycki equation 
    // (Brzycki, M. (1993). Strength Testing—Predicting a One-Rep Max from Reps-to-Fatigue. Journal of Physical Education, Recreation & Dance, 64(1), 88–90. https://doi.org/10.1080/07303084.1993.10606684)
    return weight / (1.0278 - 0.0278 * reps)
}

// flag to determine if results is currently diaplayed
let resultDisplayed = false;

calcEL.addEventListener('click', function(){
    //check if a result is already displayed
    if(resultDisplayed == false)
    {
        let weight = numEL.value;
        let reps = repsEL.value;
        let result = calculateMax(weight, reps);

        let max = document.createElement("p")
        max.textContent = `Your One Rep Max is ${Math.round(result)} kg`
        containerEL.appendChild(max) 

        // set result displayed flag to true after diaplying result
        resultDisplayed = true;
    }
})