var guests = ["Ali", "hasnain", "nayab"];
var unableToAttend = "Ali";
console.log(" ".concat(unableToAttend, ",can't make it to dinner."));
//Replace the guest
var newGuest = "Haseeb";
guests[guests.indexOf(unableToAttend)] = newGuest;
console.log(guests);
//New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", Would you like to join me for dinner?"));
});
