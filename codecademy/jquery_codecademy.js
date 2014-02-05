// jQuery 

// "when the HTML document is ready, do something!
$(document).ready(function(){
    //jQuery magic
    // something ;
});

// What is jQuery?
// jQuery is a library, or set of helpful add-ons, to the JavaScript
// easier way to manipulate DOM elements 

//jQuery SYNTAX
$(document).ready(function() {
    $(thingToClick).event(function() {
        $(thingToAffect).effect();
    });
});

// $() is a function (a kind of action) that turns whatever's inside the parentheses into a jQuery object—that is, something jQuery can work with. 

///////////////////

// pass elements and classes to apply jQuery
$('.button').someAction

$(document).ready(function() {
    $('div').fadeOut(1000);
});

// write jQuery code that calls fadeOut on the div with the ID #notready. 
$(document).ready(function() {
    $(notready).fadeOut(1000);
});

// use script tag to connect HTML with jQuery
<script type="text/javascript" src="script.js"></script>

// action: slidedown (1. 9/14)
$(document).ready(function() {
    $('div').slideDown('slow');
});

// actions: mouseenter, fadeto (1. 12/14)
$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast',1);
    });
});

// action: mouseleave (1. 13/14)
$(document).ready(function() {
    $('div').mouseenter(function() {
        $('div').fadeTo('fast', 1);
    });
    $('div').mouseleave(function() {
        $('div').fadeTo('fast', 0.5);
    });
});

/////////////////////////////////////
// jQuery Functions and Selectors ///

// Functions are the basic unit of action in jQuery. The main entry point of most jQuery applications is a block of code that looks like this:

// function(){} is the action that .ready() will perform as soon as the HTML document is loaded. 
$(document).ready(function() {
    Do something
});

//Create a variable called $target in script.js and use the = sign to assign it to the jQuery object that represents #4 in the ordered list.
//use nth-child
$(document).ready(function() {
    var $target = $('div ul li ol li:nth-child(4)');
    $target.fadeOut('fast');
});

