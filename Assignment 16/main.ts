let guests: string[]=["ALi", "Hasnain", "Hashir"];
console.log("Great news! I found a bigger dinner table!");

     //Adding more guests
guests.unshift("Aiza");
guests.splice(guests.length/2, 0, "falak");
guests.push("zainab");
    //   console.log(guests);
guests.forEach(guest =>{
    console.log(`Dear ${guest}, would you like to join me for dinner`)
});




export{}

