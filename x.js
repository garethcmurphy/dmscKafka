const fs = require('fs');
var content;
fs.readFile('./x.json','utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    content = JSON.parse( data);

    // Invoke the next step here however you like
//    console.log(content);   // Put all of the code here (not the best solution)
    processFile();          // Or put the next step in a function and invoke it
});


function processFile() {
//    console.log(content);   // Put all of the code here (not the best solution)

	if ( content.hasOwnProperty('files') ){
	console.log('status message has files');

	var name=  content.files;
	console.log(name);
	if (Object.entries(name).length === 0 && name.constructor === Object)
	{
	var randomName = Object.keys(name)[0];
	console.log(randomName);
	}

	}


}
