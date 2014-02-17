// jQuery 

// Library for interactive JS features

// Language + Terms 

// Example below:
// "Event handler" on an element, they handle jQuery events = 
//.click()
// "jQuery Event", the actual event that occurs
//.fadeOut() 
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
// dynamically update the content of your HTML page, including adding and removing elements. Gandle manipulating the DOM

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

// Changing individual elements

//Example: Change the <div> in our HTML document so it has a height of 200 pixels, a width of 200 pixels, and a border-radius of 10 pixels. Let's make this happen immediately, without the need for a click. No need for event handler
$(document).ready(function() {
    $("div").height("200px");
    $("div").width("200px");
    $("div").css("border-radius","10px");
});

// Modifying Content (.html(), .val())

// .html() can be used to set the contents of the first element match it finds. For instance
// grabs first div found, and changes text to: 
$('div').html("I love jQuery!");

// .val() is used to get the value of form elements. For example
// would get the value of the first checked checkbox that jQuery finds.
$('input:checkbox:checked').val();


// "Mastering Manipulations" Exercise

// Example: 
// Call the .click() event handler on your #button. As usual, give your .click() a function() {} as an input. Inside your function's {}s, create the variable toAdd and set it equal to the contents of the input field.

// Go ahead and .append() a <div> with class="item" to the .list div of your HTML document, then MAKE SURE to click your button to add an item—the exercise will wait for you to do so!
$(document).ready(function(){
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
    })
})

// Modifying Elements (13/14) Good example to see how everhything ties together, revisit

// Example: Add element in input, then remove by clicking
// .on() event handler 
// .on() as a general handler that takes the event, its selector, and an action as inputs.
// Complete your program by adding the .on() event handler as described above. It should go inside your $(document).ready(), but after and outside your $('#button').click().

$(document).ready(function(){
    // When you click the button, goes to toAdd
    $('#button').click(function(){
        $(document).on('click', '.item', function(){
            $(this).remove();
        });
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>');
    })
})


/////////////////////////////////////
////////// jQuery Events ////////////
/////////////////////////////////////

// General Structure
$(document).ready(function() {
    $('thingToTouch').event(function() {
        $('thingToAffect').effect();
    });
});

// ...to have effect occur right away, remove event
$(document).ready(function(){
    $('thingToAffect').effect();
});

// (3/12) Use the event handler .click() to make it fadeOut fast
$(document).ready(function() {
    $('div').click(function() {
        $('div').fadeOut('fast');
    });
});

// (4/12) "When you hover over the div, make it add the 'red' class to the div (making it red)"

$(document).ready(function(){
    $('div').hover(function(){
        $(this).addClass('red');
    });
});

// .dblclick() event 
// "Double click a div and make it fadeOut fast"
$(document).ready(function(){
    $('div').dblclick(function(){
        $(this).fadeOut('fast');
    });
});

// .mouseenter() & .mouseleave()
// On .mouseenter(), have your 'div' .fadeTo() an opacity of 1. (Use 'fast' as the first input and 1 as the second.)
// On .mouseleave(), have your 'div' .fadeTo() an opacity of 0.25. (Again, use 'fast' as the first input.)
$(document).ready(function(){
    $('div').mouseenter(function(){
        $(this).fadeTo('fast', '1');
    });
    $('div').mouseleave(function(){
        $(this).fadeTo('fast', '0.25');
    });
});

// .focus()
// We say an element has focus when we click on it or tab over to it. If you've ever filled out a form on a web page and seen how each text box lights up when you tab to it or click on it, you've seen focus in action
// The .focus() event handler only works on elements that can receive focus—the list of these elements is a bit vague, but HTML elements like <textarea>s and <input>s are the usual suspects.

// Example:
// Turn 'input' into a jQuery element and call the .focus() event handler on it.
// Inside your event handler function, call .css() on your 'input' element and pass it two inputs: the CSS element to change ('outline-color') and the color to change it to ('#FF0000').

$(document).ready(function(){
    $('input').focus(function(){
        $(this).css('outline-color', '#FF0000');
    });
});

//.keydown() event & .animate() effect

// .animate() effect takes two inputs: 
//1. the animation to perform, and 
//2. the time in which to perform the animation
// Syntax:
$(document).ready(function() {
   $('div').animate({left:'+=10px'},500);
});

// Example:
// After setting up with $(document).ready(), call the .keydown() event on $(document). (We want the whole document object to respond whenever a key is pressed.)
// Inside your .keydown() handler, .animate() your 'div' with the same inputs as above: {left:'+=10px'} and 500.

$(document).ready(function(){
    $(document).keydown(function(){
        $('div').animate({left:'+=10px'}, 500)
    });
});

// Using keys to move Mario around:


$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            // numeric keycode for "a"
            case 65:
                // "remove 10 px to the left margin, moving it left"
                $('img').animate({left: "-=10px"}, 'fast');
                break;
            //  numeric keycode for "w"
            case 83:
                $('img').animate({top: "+=10px"}, 'fast');
                break;
            //  numeric keycode for "s"     
            case 87:
                $('img').animate({top: "-=10px"}, 'fast');
                break;
            //  numeric keycode for "d"
            case 68:
                $('img').animate({left: "+=10px"}, 'fast');
                break;
            default:
                break;
        }
    });
});


/////////////////////////////////////
////////// jQuery Effects ///////////
/////////////////////////////////////

// Make the elevator image move down 100px in 1 second
$(document).ready(function(){
    $('img').animate({top:'+=100px'}, 1000);
});

// jQuery UI Library 
// uses .effect()
// Here: http://jqueryui.com/
// Include an extra <script> tag to include the library
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>

// .explode()
// "Make Krypton explode when you click it"
$(document).ready(function(){
    $('div').click(function(){
        $(this).effect('explode');
    });
});

// .bounce()
// Change your 'explode' to a bounce, and make it so Krypton bounces three times in 500 milliseconds when you click on it.

$(document).ready(function(){
    $('div').click(function(){
        $(this).effect('bounce', {times:3}, 500);
    });
});

//.slide()

// .accordion()
$(document).ready(function() {
    $("#menu").accordion({collapsible: true, active: false});
});

// .draggable()

// .resizable()
// Makes elements resizable

// .selectable()
// Can select elements and have them color (?)

// .sortable - allows you to drag drop sort elements 
$(document).ready(function(){
    $("ol").sortable();
})

//.accordion() - slick accordion drop down 
// <div id="menu"> - couple of elements under this div 
$(document).ready(function(){
   $('#menu').accordion(); 
});

