// Nov 13
// Custom Setters and Getters

// The object of this exercise will be to provide a constructor 
// named "Archiver" that creates a "self-archiving" object with 
// respect to its "temperature" property, but otherwise looks and 
// acts just like a normal JS object. Each time the "temperature" 
// property is assigned, the object should add a log entry to an 
// array (the "archive") that it returns via a "getArchive" 
// function. The log entry should be formed as such: {date: 
// the Date when the "temperature" property was assigned, val: 
// the value that was written to the "temperature" property.} .
// The "date" property of the log entry should be a valid JS Date
// object.

// Example

//new Date() == '2013-09-24...Z'
var arc = new Archiver();
arc.temperature = 33;
arc.temperature = 28;
arc.temperature = 21;
arc.getArchive() //returns
//[{date: 2013-09-24..., val:33},{date: 2013-09-24..., val:28},{date: 2013-09-24..., val:21}]

// First Attempt

//where is date coming from? Look into this
// define a date object?

function Archiver() {
    var temperature = null; // look into why this is set to null
    var archive = [];
    //TODO: implement "Archiver" as a self-archiving object
    //...ensure that when "temperature" property is
    //...set, that the array returned by getArchive
    //...gets a log entry in the form of {date:,val:}
    this.getArchive = function() {
      archive.push(" date:" + new Date() + ", val:" + temperature);
      return archive;
    };
}






