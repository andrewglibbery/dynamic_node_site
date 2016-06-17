var fs = require("fs");

function mergeValues(values, content) {
	//cycle over the keys
	for(var key in values) {
		content = content.replace("{{" + key + "}}", values[key]);
		//replace all {{key}} with the value from the values object
	}

	//return merged content
	return content;
}

function view(templateName, values, response) {
	//Read from template file
	var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});

  		//Insert values in to the content
  		fileContents = mergeValues(values, fileContents);
		//Write out to the response
  		response.write(fileContents);

}


module.exports.view = view;