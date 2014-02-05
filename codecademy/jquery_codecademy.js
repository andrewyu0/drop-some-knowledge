// jQuery 

// Language + Terms 
// Example below:
// .click() = "Event handler" on an element, they handle jQuery events
// .fadeOut() = "jQuery Event", the actual event that occurs
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('slow');
    });
});

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
/////////////////////////////////////


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

// Select by class and elements. Place inside the $()

// when button is clicked..
// divs with the .vanish class will fadeout slowly 

$(document).ready(function() {
    $('button').click(function() {
        $('.vanish').fadeOut('slow')
    });
});

// Select by ID
// example: this only fades out the #blue div 

<body>
    <div id="blue"></div>
    <div></div>
    <div></div>
    <div></div>
    <br/><button>Click Me!</button>
</body>

$(document).ready(function() {
    $('button').click(function() {
        $('#blue').fadeOut('slow');
    });
});

// Essentially, anything you can target with CSS, you can modify with jQuery. This includes targeting elements that are descendants of other elements:
$('ul li ol li');
// pseudo selectors:
$('li:nth-child(4)');
// and compound selectors:
$('p, li');

// Using "this"
//$(this): the event will only affect the element you're currently doing something with 
// In this example, the .fadeOut() event only affects 'div's 
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('slow');
    });
});

// Toggle Panel Exercise

// "call the .click() event handler on the .pull-me jQuery object"
// "Inside .click()'s parentheses, create a .panel jQuery object and call the .slideToggle() effect. Give it the input 'slow' for the animation speed."

$(document).ready(function(){
    $('.pull-me').click(function(){
        $('.panel').slideToggle('slow')
    })
})

///////////////////////////////////////////
///////// Modifying HTML Elements /////////
///////////////////////////////////////////

// Creating HTML Elements 

// Create variables and set to jQuery objects, have to include the entire HTML element with tags
$h1 = $("<h1>Hello</h1>");


// Inserting Elements (.append(), .prepend())

// .append() inserts the specified element as the last child of the target element. 
//.prepend() inserts the specified element as the first child of the target element.

// Example: We have a class of divs called .info
// .append() will make the paragraph the last child of each div; .prepend() will make the paragraph the first child of each div
$(".info").append("<p>Stuff!</p>");
$(".info").prepend("<p>Stuff!</p>");

// Example: .append() a paragraph to the body of your HTML document. Your paragraph should contain the text: "I'm a paragraph!"

$(document).ready(function(){
  $('body').append('<p>I\'m a paragraph!</p>');
})

// Before and After (.before(), .after())

//Syntax:
// Where 'target' is the element after which you want to add something and the bit between <tag>s is the HTML element you want to add. 
$('target').after('<tag>To add</tag>');

// Example: add a <p> tag .after() the <div> with the ID #one
$(document).ready(function(){
    $('#one').after('<p>whatever</p>');
})


// Removing Elements (.remove())

// Syntax
$('element to remove').remove();


// Addinng and Removing Classes (.addClass(), .removeClass())

// Syntax
// where 'selector' is the HTML element you want and 'className' is the class name you want to add or remove.
$('selector').addClass('className');
$('selector').removeClass('className');
// Example
// add the jQuery code necessary to make your #text div highlighted when clicked (using the .highlighted class)
$(document).ready(function(){
    $('#text').click(function(){
        $(this).addClass('highlighted');
    })
})


// Toggling Classes (.toggleClass())

// Example:
// The #text div highlights on and off as it is clicked 
$(document).ready(function(){
    $('#text').click(function(){
        $(this).toggleClass('highlighted');
    })
})

