// add an event listener to the form to submit Dave's message

var chatForm = document.getElementById('chatForm'),
	chatInput = document.getElementById('chatInput'),
	daveChat = document.getElementById('dave'),
	halChat = document.getElementById('hal');
	
let	daveArray = [""],
	halArray = ["Good Morning Dave!"];
	daveChatList = document.getElementById('daveChatList');
	halChatList = document.getElementById('halChatList');

var halMessage = function (halResponse) {
	halChat.innerHTML = halResponse;
	};

halMessage(halArray[0]);

var buildDaveArray = function() {
	daveArray.push(chatInput.value.toLowerCase());
	daveArray.shift();
	daveChat.innerHTML = daveArray[0];
};	
console.log(daveArray);


chatForm.addEventListener('submit', function(){
	event.preventDefault();
	
	buildDaveArray();


	switch (daveArray[0]) {
		case "hello":
			halArray.push("How can I help you?");
			halMessage(halArray[1])
			break;
		default:
			halMessage("I'm sorry, I don't understand");
	}
});

// daveArray.forEach(function(submissions){
//  	var daveChatList = document.createElement("p");
//  	var addToList = document.createTextNode(daveArray[submissions])
//  	daveChatList.appendChild(addToList);
//  	daveChat.appendChild(daveChatList);
// 	});



// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs




// var value = daveArray[0];

// switch(value) {
//     case "hello":
//         halChat.innerHTML = "How can I help you?";
//         break;
//     // case n:
//     //     code block
//     //     break;
//     default:
//         halChat.innerHTML = halArray[0];
// }

// create a function for HAL to open the chat with "Good morning, Dave"


// invoke the opening message




