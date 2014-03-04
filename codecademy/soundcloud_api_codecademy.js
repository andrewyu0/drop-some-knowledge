// Soundcloud API codecademy 

// JS code that requests info from codecademy
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/", false);
xhr.send();

console.log(xhr.status); // 200
console.log(xhr.statusText); // OK


Client/Server Relationship: 

// client sends a HTTP REQUEST
// server fulfills the request, and sends back RESPONSE 
// One server can handle many requests from several clients at once


RESTful 

// In fact, this client/server relationship is a prerequisite of a set of principles called REST (or Representational State Transfer). 

// HTTP involves sending hypertext (text with links)? Whenever you navigate through a site by clicking links, you're making a STATE TRANSITION, which brings you to the next page (REPRESENTING the next state of the application). That's it!

// By following this simple model of clicking from page to page, you're starting to follow REST principles. When something follows REST principles, we say that thing is RESTful. 

 For an API or web service to be RESTful, it must do the following:

// 1.  Separate the client from the server
// 2. Not hold state between requests (meaning that all the information necessary to respond to a request is available in each individual request; no data, or state, is held by the server from request to request)
// 3. Use HTTP and HTTP methods (as explained in the next section).

Making a request

// we've created the xhr variable, which stands for XML HTTP Request. This is how we make an HTTP request!
var xhr = new XMLHttpRequest();
// we make the actual request to Codecademy.com.
xhr.open("GET", "http://www.codecademy.com/", false);
// we then actually send the request
xhr.send();


The Four Verbs

// The number of HTTP methods you'll use is quite small—there are just four HTTP "verbs" you'll need to know! They are:

// GET: retrieves information from the specified source 
// POST: sends new information to the specified source.
// PUT: updates existing information of the specified source.
// DELETE: removes existing information from the specified source.

Anatomy of a Request 

// An HTTP request is made up of three parts:

// The REQUEST LINE, which tells the server what kind of request is being sent (GET, POST, etc.) and what resource it's looking for;
// The HEADER, which sends the server additional information (such as which client is making the request)
// The BODY, which can be empty (as in a GET request) or contain data (if you're POSTing or PUTing information, that information is contained here).

Endpoints

// Endpoints are API-defined locations where particular data are stored. Just as you'll GET a pair of pants from PantsWorld or you'll GET a bag of peanuts from PeanutHut, you'll GET something different depending on the endpoint you use.

Authentication & API Keys

// Many APIs require auth keys/OAUTH

HTTP Status Codes

// successful REQ to server returns a RES to the client
// RES returns a 3 digit code:

// 1xx: You won't see these a lot. The server is saying, "Got it! I'm working on your request."

// 2xx: The server sends these when it's successfully responding to your request. 

// 3xx: These mean "I can do what you want, but I have to do something else first." You might see this if a website has changed addresses and you're using the old one; the server might have to reroute the request before it can get you the resource you asked for.

// 4xx: These mean you probably made a mistake. The most famous is "404," meaning "file not found": you asked for a resource or web page that doesn't exist.

// 5xx: These mean the server goofed up and can't successfully respond to your request.

Anatomy of a Response

// An HTTP response mirrors that of request 

// HTTP/1.1 200 OK
// Content-Type: text/xml; charset=UTF-8

// <?xml version="1.0" encoding="utf-8"?>
// <string xmlns="http://www.codecademy.com/">Accepted</string>

// 1. 3 digit HTTP status code
// 2. header w info about server + response
// 3. the body, which contains the text of the response

// 1. 
// HTTP/1.1 200 OK
// 2.
// Content-Type: text/xml; charset=UTF-8
// 3.
// <?xml version="1.0" encoding="utf-8"?>
// <string xmlns="http://www.codecademy.com/">Accepted</string>

Parsing XML

// XML (Extensible Markup Language) 
// Requesting XML document

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);


Parsing JSON

// alternative to XML. More succinct than XML 

// create JSON object in demo
var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';

var json = JSON.parse(demo);
console.log(json);


XML or JSON 

REST Constraints & Requirements 


//////////////////////////////////////////////
/////////   Soundcloud JS SDK   ////////////// 
//////////////////////////////////////////////


INITIALIZING THE JS SDK 


// adding correct script tag for both script.js AND soundcloud 
<!doctype html>
<html>
    <head>
        <script src="//connect.soundcloud.com/sdk.js"></script>
        <script src="script.js"></script>
    </head>
    <body>
        
    </body>
</html>

// in script.js initialize method on SC object 
// 'YOUR_CLIENT_ID' takes place of an actual client id that would be given by registering application on SC

SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});



MAKING REQUESTS 


// JS SDK uses methods named for the TYPE of HTTP request being made 
// E.g. SC.get to make GET request 

// First arg to SC.get is RELATIVE ENDPOINT URL
// E.g. perform GET request on the endpoint https://api.soundcloud.com/tracks.json
SC.get('/tracks')

// Second arg is optional obj containing params for the request

// Last arg is cb that will be called with the results of request 

// Example Code: 
// will get a list of tracks with a specific genre and append the title and genre to a list in our HTML.

<!doctype html>
<html>
    <head>
        <script src="http://connect.soundcloud.com/sdk.js"></script>
        <script src="script.js"></script>
    </head>
    <body>
        <ul id="results">       
        </ul>
    </body>
</html>

//JS

SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

$(document).ready(function() {
  SC.get('/tracks', { genres: 'hip hop' }, function(tracks) {
    $(tracks).each(function(index, track) {
      $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
    });
  });
});


AUTHENTICATION 


