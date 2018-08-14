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
	halArray = ["Good Morning Dave!", "How can I help you?"],
	daveChatList = document.getElementById('daveChatList'),
	halChatList = document.getElementById('halChatList'),
	classNamesArray = ["Alex", "Chris", "Utah", "Hannah", "Kiya", "Matt", "Meghan", "Trevor", "Vishal"],
	daveCommandHistory = [];


var halMessage = function (halResponse) {
	halChat.innerHTML = halResponse;
	};

halMessage(halArray[0]);

var buildDaveArray = function() {
	daveArray.push(chatInput.value.toLowerCase());
	daveArray.shift();
	daveCommandHistory.push(chatInput.value.toLowerCase());
	daveChat.innerHTML = daveArray[0];
};	
console.log(daveArray);


chatForm.addEventListener('submit', function(){
	event.preventDefault();
	
	buildDaveArray();


	switch (true) {
		case daveArray.includes("hi hal"):
			halMessage(halArray[1])
			break;
		case daveArray.includes("who is in our class?"):
			//cycle through class names for 1.5 seconds each
			break;
		case daveArray.includes("name one person in our class"):
			//cycle through class names for 1.5 seconds each
			break;
		case daveArray.includes("quote me"):
			daveArray.forEach(function(command) {
				halArray.push(command)
				halMessage(daveCommandHistory)
			})
			break;
		default:
			halMessage("I'm sorry, I don't understand");
	}
});

//appending p's to chat pane to make pretty
// daveArray.forEach(function(submissions){
//  	var daveChatList = document.createElement("p");
//  	var addToList = document.createTextNode(daveArray[submissions])
//  	daveChatList.appendChild(addToList);
//  	daveChat.appendChild(daveChatList);
// 	});



// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs


// create a function for HAL to open the chat with "Good morning, Dave"


// invoke the opening message




