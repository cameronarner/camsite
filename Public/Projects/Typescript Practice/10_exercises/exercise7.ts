//create type alias
type coolio = string;
type streamer = {
    gamertag: coolio,
    platform: coolio,
    age: number
};
//use type alias
let cameronana : streamer = {
    gamertag: "conbon",
    platform: "twitch",
    age: 20
};

console.log(typeof cameronana);
console.log(typeof cameronana.gamertag);
console.log(cameronana);

//this is a useful tool bc I could create a lot of streamers with this info