// add an event listener to the form to submit Dave's message

var chatForm = document.getElementById('chatForm'),
	chatInput = document.getElementById('chatInput'),
	daveChat = document.getElementById('dave'),
	halChat = document.getElementById('hal');

var displayDaveMessage = function(daveMessage) {
	daveChat.innerHTML = daveMessage;
};
	
chatForm.addEventListener('submit', function(){
	event.preventDefault();
	displayDaveMessage(chatInput.value);
});



	
// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs

// create a function for HAL to open the chat with "Good morning, Dave"

var openingMessage = function () {
	halChat.innerHTML = "Good morning, Dave";
	};

// invoke the opening message

openingMessage();

// chatInput.addEventListener('submit', function(){
// 	event.preventDefault();
// 	displayDaveMessage(chatInput.value);
// });


// if (myInput.value !== undefined) {
// 	displayDaveMessage();
// };
