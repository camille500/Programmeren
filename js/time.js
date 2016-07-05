/*  Camille Sébastien Niessen */
		
// Lijst met variabelen zonder toegekende waarde
var greetText;
	
// Opvragen en opslaan van actuele datum en tijd
var newDate = new Date();
var actualDayOfMonth = newDate.getUTCDate();
var actualYear = newDate.getUTCFullYear();
var actualMonth = newDate.getUTCMonth();
var actualDay = newDate.getDay();
var actualHour = newDate.getHours();
var actualMinutes = newDate.getUTCMinutes();
var actualSeconds = newDate.getUTCSeconds();
var actualMseconds = newDate.getUTCMilliseconds();
var dateForList = new Date(actualYear, actualMonth, actualDayOfMonth, actualHour, actualMinutes, actualSeconds, actualMseconds);

// Lijst met arrays
var daysOfWeek = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
var monthsOfYear = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
var daysPerMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

// Namen van maanden en dagen koppelen aan actuele tijd
var whatDayIsIt = daysOfWeek[(actualDay - 1)];
var whatMonthIsIt = monthsOfYear[actualMonth];

// Functies
function HowToGreet(hours) {				// Functie om bezoeker te begroeten op basis van dagdeel.
	if(hours >= 18) {
		greetText = 'Goedenavond';
	} else if(hours >= 12) { 
		greetText = 'Goedemiddag';
	} else if(hours >= 6) {
		greetText = 'Goedemorgen';
	} else if(hours >= 0) {
		greetText = 'Goedenacht';
	}
 return greetText
}
	
// Lijst van variabelen met functie
var daysTillWeekend = 6 - (actualDay - 1);
var daysTillEndMonth = (daysPerMonth[actualMonth]) - actualDayOfMonth;
var whatIsTheTime = actualHour + ":" + actualMinutes + ":" + actualSeconds

// Code die zorgt dat copyright datum actueel blijft
var copyrightMessage = "Copyright " + actualYear + " - Camille Sébastien Niessen";
var copyrightElement = document.getElementById("copyright");
	copyrightElement.innerHTML = copyrightMessage;
	
// Codes die de DOM beïnvloeden
var greetingText = HowToGreet(actualHour);
var greetElement = document.getElementById("begroeting");
greetElement.innerHTML = HowToGreet(actualHour);

console.log(greetingText);
console.log(daysTillWeekend);
console.log(daysTillEndMonth);
console.log(whatIsTheTime);




