          //Original order

let places: string[]=["Japan","london","Germany","New zealand", "Norway"];
console.log("Original order:",places);

          //Alphabetical order

console.log("Alphabetical order:",
[...places].sort());

console.log("Original order:", places);
     
         //Reverse Alphabetical
       
console.log("Reverse alphabetical order:",
[...places].sort().reverse());

console.log("Original order:",places)

places.reverse();
console.log("Reversed order:",places);

places.reverse();
console.log("Original order:",places);

places.sort();
console.log("Alphabetical order:",places);

places.reverse();
console.log("Reverse alphabetical order:", places);
