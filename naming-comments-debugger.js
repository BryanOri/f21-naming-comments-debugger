/* Note: The Math.sqrt() function returns the square root of
     the provided number (given as a parameter) */

/* Uncomment the below instruction for the
     debugger to pause execution of all JavaScript */
     debugger;

     /* (1) Rename these identifiers to notify what the function
            is doing and what the variables are holding
        (2) Add a comment above the function describing what it does */
        //it does the calculations of whatever number is being imputted within
        function z(y,x)
        {
            let Multiply = (y * y) + (x * x);
            let SquareRoot = Math.sqrt(Multiply);
            return SquareRoot;
        }
        console.log(z(10, 5)); // w = 125
        
        /* (3) Add Single Line Comments after each of the three
             instructions below to tell us what each "w" value
             is inside the method being called */
        console.log(z(3, 4));//11.180339887498949
        console.log(z(7, 21));//5
        console.log(z(17, 14));//22.135943621178654
        