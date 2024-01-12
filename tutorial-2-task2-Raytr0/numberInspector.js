// Task 2.1: Number Inspector

/**
  
 *You will write a number of functions to learn or check different things about each number. 
 */



 /*This function will return the appropriate operation to perform a numberInvestigating task*/
 function getNumberInvestigatingTool(task)
{
    switch (task)
    {
        case 'palindrome':
            return Palindrome;
        case 'max':
            return MaxDigit;
        case 'duplicate':
            return DuplicateNumber;
        case 'divisibleBy':
            return MakeDivisibleBy;
        // Complete the code so that based on a given string "palindrome, max, duplicate, divisibleBy" 
        // The appropriate function is returned. 
     
    }

     /*Write a function that returns the palindrome number of the number you are given, 
    *For example, if you are given 1234, it should return 4321. 
    *You are expected to use only the loops/conditional statements we have learned in class. 
    *Keep in mind that you can access each digit of a number through simple operations. 
    *You can assume that this function will receive a number as a parameter. 
    *HINT: You can use Math.floor to get the integer closest to a numberr*/
    function Palindrome(number){
        let final = 0;
        let initial = number;
        while(initial > 0){
            const lastdig = initial % 10
            final = (final*10)+lastdig
            initial = initial/10 | 0
        }
        return final.toString()
    }

    /* Write a function that will return the maximum digit of the number you are given.
    * For example, if you are given 192345, it should return 9. If you are given 12645 it should return 6. 
    *Keep in mind that you can access each digit of a number through simple operations. 
    *You can assume that this function will receive a number as a parameter. 
    *HINT: You can use Math.floor to get the integer closest to a numberr*/

    function MaxDigit(number){
        let max = number%10;
        let initial = number;
        while(initial > 0){
            if(max < initial%10){
                max = initial%10;
            }
            initial = initial/10 | 0;
        }
        return max;
    }
    /*This function can be use to identify whether a number contains 2 or more consecutive duplicate numbers
    * For example, if you are given 1223 it should return yes because we have 22 in our number. Similarly, 
    * 12344 should also return true while 23452 should return false
    *Keep in mind that you can access each digit of a number through simple operations. 
    *You can assume that this function will receive a number as a parameter. 
    *HINT: You can use Math.floor to get the integer closest to a number, the remainder operator is also helful*/
     
    function DuplicateNumber(number){
        let initial = number;
        let tf = false;
        while(initial>0){
            consec = (initial%100)%11
            if(consec == 0){
                tf = true;
            }
            initial = initial/10 | 0;
        }
        return tf;
    }
    /*This function will return the value needed to be added to a number to make it divisible by the given dividor. 
    *For example, if you are given 63 and 5, we are looking for the number needed to make 63 divisible by 5. In this case, 
    the function should return 2. To challenged yourself, try to use the && or || operator.
    *Keep in mind that you can access each digit of a number through simple operations. 
    *You can assume that this function will receive a number as a parameter. 
    *HINT: You can use Math.floor to get the integer closest to a number, the remainder operator is also helful*/

    function MakeDivisibleBy(number,divide){
        if((number%divide) == 0){
            return 0;
        }
        else{
            return divide-(number%divide);
        }
    }
}

// let Palindrome  =getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the palindrome making function */); 
// let MaxDigit = getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the max digit finder function */);
// let DuplicateNumber = getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the double digit Check function*/); 
// let MakeDivisibleBy = getNumberInvestigatingTool(/* call the NumberInvestigating tool so that it would return the function that will makeANumberDivisibleBy function*/); 


let Palindrome = getNumberInvestigatingTool('palindrome');
let MaxDigit = getNumberInvestigatingTool('max');
let DuplicateNumber = getNumberInvestigatingTool('duplicate');
let MakeDivisibleBy = getNumberInvestigatingTool('divisibleBy'); 


// don't change the three lines below

module.exports.Palindrome = Palindrome;
module.exports.MaxDigit = MaxDigit;
module.exports.DuplicateNumber = DuplicateNumber;
module.exports.MakeDivisibleBy = MakeDivisibleBy;
