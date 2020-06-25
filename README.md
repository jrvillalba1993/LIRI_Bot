<h2> Liri_Bot </h2>
<h4> Julian Villalba </h4>
In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

I started off the assignment by getting the correct modules and doing an NPM install. I got the node-spotify api, axios,Moment and dotenv.

Using node.js and javascript I made a keys.js file that contained the twitter api keys.
<img src="https://i.imgur.com/wTCpF4B.png" alt ="" />
After that I created a javascript file called liri.js and coded it to use the following commands:

<b>spotify-this-song</b>

<b>movie-this</b>

<b>do-what-it-says</b>

<img src="https://i.imgur.com/MM7Aue3.png" alt="" />

The liri.js file can be ran by typing "node liri.js" + command in terminal.
<img src="https://i.imgur.com/m2z8iqx.png" alt="" />
In this case I typed node.liri.js my-tweets to get all 20 of my last tweets. However, as I dont have a twitter, I used a friends twitter account.
<img src="https://i.imgur.com/XeJ9gPn.png" alt="" />
This is a screenshot from running node liri.js movie-this "Scarface"
<img src="https://i.imgur.com/nfxmzLD.png" alt="" />
and from running node liri.js spotify-this-song "Stairway to heaven"(which gave me a rather odd result)
<img src="https://i.imgur.com/kUfOsP1.png" alt="" />
