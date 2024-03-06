
let guests: string[]=["Ali", "hasnain","nayab"];

let unableToAttend: string = "Ali";
console.log(` ${unableToAttend},can't make it to dinner.`);


     //Replace the guest
let newGuest: string = "Haseeb";
guests[guests.indexOf(unableToAttend)]=newGuest;
console.log(guests);


     //New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, Would you like to join me for dinner?`);});