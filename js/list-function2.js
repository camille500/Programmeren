// HTML elementen
var allLists = document.getElementsByTagName('ul'); 		// alle UL documenten, benaderen als allLists[nummer]
var formText = document.getElementById('newText');
var formDate = document.getElementById('newDate');
var sendButton = document.getElementById('send');
var deleteP = document.getElementsByClassName('dltP');
var deleteN = document.getElementsByClassName('dlt');

// Global variablen
var taskID;												// ID dat wordt toegewezen aan nieuwe elementen
var lst;
var counter = 0;											// gebruikt om ID toe te kennen
var counter2 = 0;
var setClass;
var callFunction;


sendButton.onclick = function updateList() {
	var inputText = formText.value;					// Waarde die is ingevoerd in formulier.
	var inputDate = Date.parse(formDate.value);		// Datum die is ingevoerd in formulier in milliseconden
	var dateString = MakeString(inputDate);					// Zet datum om in string
	var compareDates = SortDate(new Date(inputDate), counter);			// Functie berekent aantal dagen tussen huidige datum en inputdatum.
	AddToList(inputText, dateString, compareDates[0], compareDates[1], compareDates[2], compareDates[5]);
}

// Bereken aantal dagen tussen inputDate & actuele tijd.
function SortDate(inputDate, counter) {
	var timeNow = dateForList;								// dateForList is variable uit time.js
	var oneDay = 24*60*60*1000;								// berekent de tijd in een dag
	var compare = Math.round(Math.abs((timeNow.getTime() - inputDate.getTime()) / (oneDay)) + 1);

	 if(compare <= 3) {
		 taskID = ["pListID" + counter, "pListID" + counter + "T", "pListID" + counter + "D"];
		 lst = [0,1,2];
		 setClass = ("prior");												// Wijst Class toe
		 counter++;															// +1 voor getal ID
	 } else if(formDate.value < timeNow) {
	 	console.log("!");
	 } else {
		 taskID = ["listID" + counter2, "listID" + counter2 + "T", "listID" + counter2 + "D"];
		 lst = [3,4,5];
		 setClass = ("normal");
		 counter2++;
	 }


	var output = [taskID, lst, setClass, counter, counter2, callFunction];   // geeft waardes terug aan variable
	return output;
}

function AddToList(text, date, compare, list, setClassN, callFunction) {

	var monthName =  monthsOfYear[(date[1] - 1)];
	var dateNode = date[2] + " " + monthName + " " + date[0];
	var newListEl = document.createElement('li');								// Maak nieuw lijstelement aan (DATUM);
	var dateNode = document.createTextNode(dateNode);							// Zet datum om in tekst Node
	newListEl.appendChild(dateNode);												// Koppelt tekst Node aan opdracht om nieuw lijstelement te maken.
	allLists[list[2]].insertBefore(newListEl, allLists[list[2]].firstChild);		// Bepaald in welke lijst het element wordt geplaatst.
	newListEl.setAttribute('id', compare[2]);
	setClass = 'date-' + setClass;
	newListEl.setAttribute('class', setClass);
	newListEl.setAttribute('onmouseover', callFunction);
	setClass = setClassN;

	newListEl = document.createElement('li');									// Maak nieuw lijstelement aan(TEXT)
	var textNode = document.createTextNode(text);
	newListEl.appendChild(textNode);
	allLists[list[1]].insertBefore(newListEl, allLists[list[1]].firstChild);
	newListEl.setAttribute('id', compare[1]);
	newListEl.setAttribute('onmouseover', callFunction);
	setClass = 'txt-' + setClass;
	newListEl.setAttribute('class', setClass);

	newListEl = document.createElement('li');								// Maak nieuw prullenbak icoon aan
	var newImgEl = document.createElement('img');
	var img = 'wastebin.png';
	newImgEl.setAttribute('src', img);
	newImgEl.setAttribute('onclick', 'DeleteItem(this.id)');
	newListEl.setAttribute('onmouseover', callFunction);
	newImgEl.setAttribute('width', '15px');
	newImgEl.setAttribute('height', '15px');
	newImgEl.setAttribute('id', compare[0]);
	newImgEl.setAttribute('class', 'trash')
	newListEl.appendChild(newImgEl);
	allLists[list[0]].insertBefore(newListEl, allLists[list[0]].firstChild);

}



function MakeString(inputDate) {														// maakt leesbare string van datum
	var setAsDate = new Date(inputDate);
	var dateArray = [setAsDate.getFullYear(), (setAsDate.getMonth() + 1), setAsDate.getDate()];
	return dateArray;
}

function DeleteItem(ID) {
	document.getElementById('popup').style.display = 'inherit';					// laat pop-up verschijnen
	var yes = document.getElementById('pja');
	var no = document.getElementById('pnee');
	//yes.onclick(document.getElementById('popup').style.display = 'none';
	var itemDelete = document.getElementById(ID);
	var textDelete = document.getElementById(ID + "T");
	var dateDelete = document.getElementById(ID + "D");
	getParent.removeChild(dateDelete);
	getParent.removeChild(textDelete);
	getParent.removeChild(dateDelete);
		}
	itemDelete =
	no.onclick = function() {
			document.getElementById('popup').style.display = 'none';
}

function Highlight(ID) {														//jQuery voor effecten (list items)
	console.log(ID);
	$(document).ready(function() {
        var $id = "li#" + ID;
	  $($id).mouseenter(function() {
	$(this).css('color', 'yellow');
	$(this).css('background-color', 'rgba(255,255,255,0.3');
	$(this).css('font-weight', '600');
	});
	 $($id).mouseleave(function() {
		 $(this).css('color', 'white');
		 $(this).css('background-color', 'transparent');
		 $(this).css('font-weight', '500');
	 });
	});
}

function Highlight2(ID) {
	console.log(ID);
	$(document).ready(function() {
        var $id = "li#" + ID;
	  $($id).mouseenter(function() {
	$(this).css('color', 'yellow');
	$(this).css('background-color', 'rgba(0,0,0,0.3');
	$(this).css('font-weight', '600');
	});
	 $($id).mouseleave(function() {
		 $(this).css('color', 'black');
		 $(this).css('background-color', 'transparent');
		 $(this).css('font-weight', '500');
	 });
	});
}
