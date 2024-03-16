function make_album(artist: string, title: string, tracks?: number){
let album = {artist, title};
if (tracks) {
    album['tracks'] = tracks;
}
 return album;
}
console.log(make_album("Artist One" , "The First album"));
console.log(make_album("Artist two" , "The Second album"));
console.log(make_album("Artist three" , "The Third album"));

