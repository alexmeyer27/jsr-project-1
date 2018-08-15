# Chatbot!
### ReadMe

## Approach + commands
The approach I took to this chat bot was to enter all commands and responses into their own arrays.

Hals responses are predetermined in their own array, and are called based on Switch cases depending on the user input. 

Dave's commands are not predetermined, but cycle through an array where the last command is kept for reference by Hal. The command is pushed to an array, and the Dave chat pane .innerHTML function references that value to show Dave's command.

The switch statement which determines Hal's response checks if Dave's command array contains the case it will need to respond too. Dave's array is also cleared with each new submission so Hal doesn't get confused by the current command.

However, there is an additional array that keeps a list of Dave's commands avaliable for later.

This array method was designed to append all commands to the chat pane as a running chat (visual history). This and a variety of other attempts at additional functionality did not succeed.

Also, quick shout out to the requirement for Hal to start the chat with "Good Morning Dave!" This actually really helped with testing because everytime I reloaded the page I expected to see that message from Hal. If that message wasn't there, I knew the code wasn't working


	List of Commands - not case sensitive
		"Hi Hal" - simple greeting
		"What's my name again?" - Hal responds with user's set name
		"Change my name" - Unfortunately just a hard coded response (see things that went wrong)
		"my name is Alex" - also hard coded
		"Gimmie a person" - random person from the class
		"Quote me" - command history
		"Why don't our messages appear in the chat pane as p elements?" - easter egg + conditional logic


## Things tried + things that went wrong

The simplicity of the app doesn't tell the whole story, as I attempted a variety of additional features that didn't pan out.

	1. Appending the chat history to the chat pane's dynamically.
		a. Getting this to work took a good majority of the time I had to work on this project. It also justified the array method I used, although given more time I would have liked to refactor that method.
		b. This explains the easter egg command.
	2. For the "Change my name" command, I attempted to allow the user to enter any name several ways.
		a. adding an additional event listener within the switch case. Presumably this ran into scoping issues or adding another event listener with submit within a submit event listener was not viable.
		b. Conditional logic which would clear the Dave command array then enter the user's response as the new human name variable for the chat pane
		c. A combination of these two methods. None of this worked, so I ended with a hard coded value just accepting my name.
	3. For the "Gimmie a person" command, originally this was split into two Switch cases. 
		a. The first method would return the entire classNameArray array one name at a time on 1.5 second intervals. I ran into a scoping issue when attempting to cram the forEach method into a setTimeout function.
	4. For the "Quote me" command, I wanted the ability to pull a specific command from the daveCommandHistory array. In theory, this would have meant submitting something to the effect of "command 1", pulling the number value from the submission, subtracting it by 1 to reflect how arrays start on [0], then displaying the appropriate command from the command history array.
		a. Given my Switch - true - includes() logic, I need to enter the exact command to get a case. So I could have the switch statement listen for the string "command", if the subnmission was "command 1" it would not understand.
		b. To enact this I would have either needed to make the command a single number (ie: submitting "1" returns the daveCommandHistory[0] value), or completely refactor my switch logic.
		c. I ran out of time to add this feature...

