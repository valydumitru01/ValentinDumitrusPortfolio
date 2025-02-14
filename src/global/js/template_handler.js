/***************************************
 * Template Rendering Helper
 ***************************************/
function renderTemplate(template, data) {
	// Replace placeholders {key} with corresponding values from data.
	return template.replace(/{(\w+)}/g, (match, key) => data[key] || '');
}

function generate_page(page) {
	
	$(".dynamic-js").remove()
	
	let head = "head";
	// We need to load the templates before we can generate the page
	$(head)
		.append($('<script type="text/javascript">')
					.attr('src', basePath + "src/pages/" + history.state + "/json/data.js")
					.attr('class', 'dynamic-js'))
		.append($('<script type="text/javascript">')
					.attr('src', basePath + "src/pages/" + history.state + "/html/html.js")
					.attr('class', 'dynamic-js'))
	
	
	const generator = window["generate_page_" + page];
	if (typeof generator === "function") {
		generator("main");
	} else {
		console.log("No generator found for page: " + page);
	}
	
	
	// Load dynamic css and js, the names of the files must be the same as the page
	$("#dynamic-css").remove()
	
	$(head)
		// Load css
		.append($('<link rel="stylesheet" type="text/css" />')
					.attr('href', basePath + "src/pages/" + history.state + "/css/style.css")
					.attr('id', 'dynamic-css'))
		.append($('<script type="text/javascript">')
					.attr('src', basePath + "src/pages/" + history.state + "/js/src.js")
					.attr('class', 'dynamic-js'))
}

// Object that will store all the template strings
let TEMPLATE_STRINGS;
// Object that will store all the json data
let DATA;