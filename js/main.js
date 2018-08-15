//TODO: learn how to append to chat pane
//		learn how to parse through daveCommandHistory to append to hal chat pane
//		cycle through class names on 1.5 second timer
//		clean up + refactor
//		add if then for conditional?
//		add a random component for class names (give me a random class name)

// add an event listener to the form to submit Dave's message

var chatForm = document.getElementById('chatForm'),
	chatInput = document.getElementById('chatInput'),
	daveChat = document.getElementById('dave'),
	halChat = document.getElementById('hal');
	
let	daveArray = [""],
	halArray = ["Good Morning Dave!", "How can I help you?", "What should I change your name too?", "I'm sorry, I don't understand"],
	daveChatList = document.getElementById('daveChatList'),
	halChatList = document.getElementById('halChatList'),
	classNamesArray = ["Alex", "Chris", "Utah", "Hannah", "Kiya", "Matt", "Meghan", "Trevor", "Vishal"],
	daveCommandHistory = [];
	humanName = "Dave: "

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
	daveChat.innerHTML = humanName + daveArray[0];
};	
console.log(daveArray);


chatForm.addEventListener('submit', function(){
	event.preventDefault();
	
	buildDaveArray();

// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs

	switch (true) {
		case daveArray.includes("hi hal"):
			halMessage(halArray[1])
			break;
		case daveArray.includes("change my name"):
				halMessage(halArray[2])
			break;
		case daveArray.includes("my name is alex"):
				halMessage("My apologies Alex, I'll change that for next time");
				humanName = "Alex: ";
			break;
		case daveArray.includes("gimmie one person in our class"):
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
		default:
			halMessage(halArray[3]);
	}
});


//appending p's to chat pane to make pretty
// daveArray.forEach(function(submissions){
//  	var daveChatList = document.createElement("p");
//  	var addToList = document.createTextNode(daveArray[submissions])
//  	daveChatList.appendChild(addToList);
//  	daveChat.appendChild(daveChatList);
// 	});











