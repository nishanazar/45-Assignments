function make_shirt(size: string="large" , message:string ="I love TypeScript"){
    console.log(`Making a ${size} t_shirt with the message "${message}" printed on it.`);
}  
make_shirt();    // Default large and message,
make_shirt("medium");  //  Default message, medium size
make_shirt("small" , "Dive into coding"); //Custom message, small size