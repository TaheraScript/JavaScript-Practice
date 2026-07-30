/* Concepts Used: Functions · Loops · Objects 
Scenario: FitTrack, a fitness app, logs a user's daily step counts for the week in an array. Write a function weeklyStepsSummary(stepsArray) that returns an object { totalSteps, goalReached }, where goalReached is true once totalSteps reaches 50000. 
● If stepsArray is not an array, return "Invalid". 
● If any value inside the array is not a number, return "Invalid". Expected Output: 
weeklyStepsSummary([8000,7500,9200,6000,10000,5500,4000]) → { totalSteps: 50200, goalReached: true } 
 */

function weeklyStepsSummary(stepsArray) {

    
    if( Array.isArray(stepsArray) === false){//If stepsArray is not an array, return "Invalid". this line is written for this
        return 'invalid';
    }
    let total = 0;
    for( let steps of stepsArray){
        total += steps;
       
        
         if(typeof steps != 'number' ){//If any value inside the array is not a number, return "Invalid".this line is written for this
             return 'invalid';
         }
         }
        let goalReached = false;
        if (total >= 50000){
            goalReached =true;
            
        }
        const returnObj = {
             totalSteps : total,
            // goalReached : goalReached   // it also can be written
             goalReached //as key and value has the same name,we can write like this
        }
        //console.log(returnObj)
 
   return returnObj;
}
let result = weeklyStepsSummary([8000,7500,9200,6000,10000,5500,4000])
console.log(result)
console.log(weeklyStepsSummary('hello'))
console.log(weeklyStepsSummary([8000,7500,9200,6000,10000,5500,4000,'hello']))
