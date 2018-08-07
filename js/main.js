// add an event listener to the form to submit Dave's message

var myInput = document.getElementById("chatInput"),
	daveChat = document.getElementById("dave"),
	halChat = document.getElementById("hal"),
	readInput = myInput.value;

myInput.addEventListener( 'input', function () {
	readInput
});

var displayDaveMessage = function () {
		daveChat.innerHTML = readInput;
	};

if (readInput !== null) {
	displayDaveMessage();
};
	
// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs

// create a function for HAL to open the chat with "Good morning, Dave"



// invoke the opening message
var openingMessage = function () {
	halChat.innerHTML = "Good morning, Dave";
	};

openingMessage();