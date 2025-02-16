/**
 * Fills the template with the data.
 * @param {string} template Html template string, with placeholders {key}.
 * @param {object} data Object with key-value pairs.
 * @returns {string} Html string with placeholders replaced by values.
 */
function fillTemplate(template, data) {
	// Replace placeholders {key} with corresponding values from data.
	return template.replace(/{(\w+)}/g, (match, key) => data[key] || '');
}

function loadScript(url, className) {
	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.src = url;
		if (className) {
			script.classList.add(className);
		}
		script.onload = () => resolve(script);
		script.onerror = () => reject(new Error("Failed to load script: " + url));
		document.head.appendChild(script);
	});
}

function generate_page(page) {
	document.querySelectorAll(".dynamic-js").forEach(el => el.remove());
	const oldCss = document.querySelector("#dynamic-css");
	if (oldCss) oldCss.remove();
	
	const cssLink = document.createElement("link");
	cssLink.rel = "stylesheet";
	cssLink.id = "dynamic-css";
	cssLink.href = basePath + "src/pages/" + history.state + "/css/style.css";
	document.head.appendChild(cssLink);
	
	loadScript(basePath + "src/pages/" + history.state + "/json/data.js", "dynamic-js")
		.then(() => loadScript(basePath + "src/pages/" + history.state + "/html/html.js", "dynamic-js"))
		.then(() => {
			const generator = window["generate_page_" + page];
			if (typeof generator === "function") {
				generator("main");
			} else {
				console.log("No generator found for page:", page);
			}
		})
		.then(() => loadScript(basePath + "src/pages/" + history.state + "/js/src.js", "dynamic-js"))
		.catch(err => console.error(err));
}

// Object that will store all the template strings
let TEMPLATE_STRINGS;
// Object that will store all the json data
let DATA;