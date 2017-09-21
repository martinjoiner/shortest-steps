
/**
 * Takes a target number and returns the shortest possible number of steps
 * to get to it. Where the steps can only be increment by 1 or double the previous number
 *
 * @param {integer} target
 *
 * @return {array}
 */
function calculateShortestSteps(target) {

    /** An array to store the steps */
    var steps = [];

    /** Start from target and work down */
    var i = target;

    while (i > 1) {

        if (i % 2 == 1) { 
            // If number is odd, there must be an increment step
            steps.unshift("+1:" + i);
            i--;	
        } else {
            // Number is even, halve it
            steps.unshift("*2:" + i);
            i = i / 2
        } 

    }

    // Add the essential first step
    steps.unshift("s1:1");

    return steps;
}


/**
 * Concat it all into a human-readable sentence
 *
 * @param {integer} target
 *
 * @return {string} The sentence
 */
function shortestStepsAsSentence(target) {

    var steps = calculateShortestSteps(target);

    return target + ' (' + steps.length + ' steps): ' + steps.join(', ') + '.';
}


/** 
 * Adds a paragraph tag to the document body
 *
 * @param {string} innerHTML
 */
function printLineToDOM(innerHTML){
    var p = document.createElement('p');
    p.innerHTML = innerHTML;
    document.body.appendChild(p);
}


// Step notation: 
//  - s1 = Start with 1
//  - +1 = Increment by 1
//  - *2 = Double
// The bit after the colon is the result of the step

tests = [ 
    6, // Should be 4 steps: s1:1, *2:2, +1:3, *2:6
    88, // Should be 9 steps: s1:1, *2:2, *2:4, +1:5, *2:10, +1:11, *2:22, *2:44, *2:88
    113,
    247,
    399, // Should be 14 steps: s1:1, *2:2, +1:3, *2:6, *2:12, *2:24, *2:48, +1:49, *2:98, +1:99, *2:198, +1:199, *2:398, +1:399
    891,
    1068, // Should be 14 steps: s1:1, *2:2, *2:4, *2:8, *2:16, *2:32, +1:33, *2:66, *2:132, +1:133, *2:266, +1:267, *2:534, *2:1068
    1837,
    2222,
    26348,
    2400300,
    12934781,
];

for( var i = 0, iLimit = tests.length; i < iLimit; i++ ){
    printLineToDOM( shortestStepsAsSentence(tests[i]) ); 
}
