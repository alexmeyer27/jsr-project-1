//TODO: learn how to append to chat pane
//		learn how to parse through daveCommandHistory to append to hal chat pane
//		clean up + refactor

// add an event listener to the form to submit Dave's message

var chatForm = document.getElementById('chatForm'),
	chatInput = document.getElementById('chatInput'),
	daveChat = document.getElementById('dave'),
	halChat = document.getElementById('hal');
	
let	daveArray = [""],
	halArray = ["Good Morning Dave!", 
	"How can I help you?", 
	"What should I change your name to?", 
	"I'm sorry, I don't understand", 
	"My apologies Alex, I'll change that for next time",
	"Aparently you spent too much time coding gimics", 
	"An AI is only as good as it's code, Dave"],
	classNamesArray = ["Alex", "Chris", "Utah", "Hannah", "Kiya", "Matt", "Meghan", "Trevor", "Vishal"],
	daveCommandHistory = [],
	humanName = "Dave";

// create a function for HAL to open the chat with "Good morning, Dave"

var halMessage = function (halResponse) {
	halChat.innerHTML = "Hal: " + halResponse;
	};

// invoke the opening message

halMessage(halArray[0]);

var buildDaveArray = function() {
	daveArray.push(chatInput.value.toLowerCase());
	daveArray.shift();
	daveCommandHistory.push(chatInput.value.toLowerCase());
	daveChat.innerHTML = humanName + ": " + daveArray[0];
};	

chatForm.addEventListener('submit', function(){
	event.preventDefault();
	
	buildDaveArray();

// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs

	switch (true) {
		case daveArray.includes("hi hal"):
			halMessage(halArray[1])
			break;
		case daveArray.includes("what's my name again?"):
			halMessage("Why it's " + humanName + " of course!");
			break;
		case daveArray.includes("change my name"):
			halMessage(halArray[2])
			break;
		case daveArray.includes("my name is alex"):
			halMessage(halArray[4]);
			humanName = "Alex";
			break;
		case daveArray.includes("gimmie a person"):
			function getPerson() {
   				return classNamesArray[Math.floor(Math.random() * classNamesArray.length)];
			}
			halMessage(getPerson())
			break;
		case daveArray.includes("quote me"):
			daveArray.forEach(function(command) {
				halArray.push(command)
				halMessage(daveCommandHistory)
			})
			break;
		case daveArray.includes("why don't our messages appear in the chat pane as p elements?"):
			if (humanName !== "Dave") {
				halMessage(halArray[5])
			} else {
				halMessage(halArray[6])
			}
			break;
		default:
			halMessage(halArray[3]);
	}
});










