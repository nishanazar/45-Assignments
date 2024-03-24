function make_car ( 
    manufacturer: string, model: string, ...options: [string, any][])
{
let car = { manufacturer, model };
options.forEach(([key, value]) => (car as any )[key] = value);
return car;
 }
 console.log(make_car("toyota", "carolla",["color" , "red"], ["year", 2020]));
 console.log(make_car("ford", "fiesta", ["color", "blue"] , ["sunroof", true]));
