const readline = require('readline');
const fs = require('fs')
// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,  // Read input from the terminal
  output: process.stdout // Output to the terminal
});
//What we are doing up here ^^^ is importing modules into the program using the require method, in order to be able to actualy use them and the functionality they provide
//This can be either built in modules from node.js itself or things like your own files.
mainMenu();

function createNotes(){              
  // rl.question prompts the user for input and waits for them to put it in
  //fs.appendFile creates a copy of the file in question or creates one if one doesn't already exist
                                 //v this means an arrow function what's inside the parantheses are the function parameters just like normal JS functions
  rl.question("Enter Notes: ", (note) =>{
    fs.appendFile("Notes.txt", note + "\n", (error) => {
      if(error) throw error;
      console.log("Note succesfully created")
      mainMenu();
    })
  })
}
//important side note, is that you always want a callback function when using node you want one that gives you results and another that's an error-
//-wich is what will trigger if the actual function fails

function viewNotes(){
//fs.readFile allows you to read the contents of the file with the provided path, also important to remember what coding you want-
//-in this instance we want text so we use utf-8
  fs.readFile("notes.txt", "utf-8", (error, data) => {
    fs.access('notex.txt', err => err ? 'does not exist' : 'exists')
		if (error) console.log("Error, no notes found");
		else console.log("Your notes:\n" + data);
		mainMenu();

  })
}


function deleteNotes() {
  //unlink deletes the specified file when the path is provided
	fs.unlink("notes.txt", (error) => {
		if (error) console.log("Error, unable to delete");
		else console.log("Notes succesfully deleted");
		mainMenu();
	});
}




function mainMenu(){
//Standard Switch, i don't really need a reminder for what this does.
  console.log('What would you like to do? 1: Create a new note. 2: View all notes. 3: Delete your notes. 4: Close Program.')
  rl.question(">", (input) =>{
    switch(input){
      case "1":
        createNotes();
        break;
        case "2":
        viewNotes();
        break;
        case "3":
          deleteNotes();
          break;
          case "4":
          rl.close();
          break;
          default:
            console.log('Invalid Input')
            mainMenu();
            break;

    }
  })
}





