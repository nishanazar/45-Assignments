let magicians: string[] =["Alice" , "David" , "Chais"];
function show_magicians(magicians: string[]){
    magicians.forEach(magicians => 
      {
        console.log(magicians)
    });
    
    }
function make_great(magicians: string[]){

 for (var i =0; i < magicians.length; i++){
        magicians[i] =magicians[i] + " the Great";
    }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); //Show modified names