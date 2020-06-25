var fs = require('fs');
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');
var nodeArgv = process.argv[2];
var song = process.argv[3];


switch (nodeArgv) {
    case "my-tweets":
        myTweets();
        break;

    case "spotify-this-song":
        spotifySong();
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doThing();
        break;

};


function myTweets() {
    var client = new Twitter(keys);



    var params = {
        screen_name: 'joeyweir26',
        count: 10
    };
    client.get("statuses/user_timeline", params, function(error, data, response) {
        if (!error) {
            for (var i = 0; i < data.length; i++) {
                console.log("---------------------------------------")
                console.log("Time Tweeted: " + data[i].created_at);
                console.log(data[i].text);
            }
        } else {
            console.log("Error :" + error);
            return;
        }
    });
}

function movieThis() {
    //
    var searchMovie;
    if (process.argv[3] === undefined) {
        searchMovie = "The Departed";
    } else {
        searchMovie = process.argv[3];
    };

    var url = 'http://www.omdbapi.com/?apikey=trilogy&r=json&t=' + searchMovie;
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {

            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
            console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL);
        }
    });
};

function spotifySong() {

    var spotify = new Spotify({
        id: 'c7b379bdbdf5407b8b0924518dd56f0b',
        secret: '60ed1dc3924441739102b4281298258b'
    });

    spotify.search({
        type: 'track',
        query: 'song',
        

    }, function(err, data) {
        if (err) {
            song = 'Zeze'
            spotifySong();

            return console.log('Error occurred: ' + err);
        }
        for (var i = 0; i < data.tracks.items.length; i++) {
            var songData = data.tracks.items[i];
            console.log(songData.artists[0].name);
            console.log(songData.name);
            console.log(songData.preview_url);
            console.log(songData.album.name);
        }
    });
	   }
    function doThing(){
  fs.readFile('random.txt', "utf8", function(error, data){
   var txt = data.split(',');
   	spotifySong(txt[1]);
});
}