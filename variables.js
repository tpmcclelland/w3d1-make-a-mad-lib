// intentially made global by leaving var off variable name
log = console.log.bind(console);

var defaultName = 'JavaScript';
var transportationName = 'Escape';
var transportationType = 'Car';
var $cost = 'Too Much';
var _green = true;

function sayHello (name) {
    // debugger;
    if (name === undefined) {
        console.log ('Hello, ' + defaultName + '!');
    }
    else {
        console.log('Hello, ' + name + '!');
    }
}

var thisIsAVariable = true;
let thisBeTrue = true;
const thisNeverChange = true;

function testVariables () {
    var thisIsNotAvailableOutside = true;
    log(thisIsAVariable);
}

if (true === true) {
    let thisIsAvailableOutside = true;
}

var firstName = 'Tom';
// sayHello(firstName);

var title = 'Rudy';
var director ='David Anspaugh';
var year = 1993;
var genre ='Sport';
var isMovie = true;

var verb = 'run';
var sentance = 'Flying by the tower, I ' + verb + ' to safety.';
log(sentance);

var verb = 'run';
var sentance = `Flying by the tower, I ${verb} to
safety.`;
log(sentance);

var on = true;
var ternary = (on ? 'The light is on' : 'The light is off.');
log(ternary);

// log(title, director, year, genre, isMovie);

// log(thisIsAvailableOutside);

// const thisCannotChange = true;
// thisCannotChange = false;

// log(thisIsNotAvailableOutside);

// sayHello();
// sayHello('tom');
// sayHello('joel');
// console.log(global);
