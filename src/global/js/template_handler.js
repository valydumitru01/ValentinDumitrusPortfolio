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
		script.type  = "text/javascript";
		script.src   = url;
		if (className) {
			script.classList.add(className);
		}
		script.onload  = () => resolve(script);
		script.onerror = () => reject(new Error("Failed to load script: " + url));
		document.head.appendChild(script);
	});
}

function loadCss(url) {
	return new Promise((resolve, reject) => {
		const cssLink   = document.createElement("link");
		cssLink.rel     = "stylesheet";
		cssLink.href    = url;
		cssLink.onload  = () => resolve(cssLink);
		cssLink.onerror = () => reject(new Error("Failed to load css: " + url));
		cssLink.id      = "dynamic-css";
		document.head.appendChild(cssLink);
	});
}

function generate_page(page, loadId) {
	if (loadId !== currentPageLoadId) return; // Ignore if a newer load started
	
	// Hide content to prevent showing old HTML with old styles
	const mainContainer = document.getElementsByTagName("main")[0];
	if (mainContainer) {
		mainContainer.style.visibility = "hidden"; // Hide the old content
		mainContainer.innerHTML        = ""; // Remove old HTML
	}
	
	// Remove old scripts and CSS
	document.querySelectorAll(".dynamic-js").forEach(el => el.remove());
	const oldCss = document.querySelector("#dynamic-css");
	if (oldCss) oldCss.remove();
	
	// Load new CSS first
	loadCss(basePath + "src/pages/" + page + "/css/style.css")
		.then(() => {
			if (loadId !== currentPageLoadId) return;
		})
		.catch(err => console.error(err));
	
	// Load page scripts and HTML
	loadScript(basePath + "src/pages/" + page + "/json/data.js", "dynamic-js")
		.then(() => {
			if (loadId !== currentPageLoadId) return;
			return loadScript(basePath + "src/pages/" + page + "/html/html.js", "dynamic-js");
		})
		.then(() => {
			if (loadId !== currentPageLoadId) return;
			const generator = window["generate_page_" + page];
			if (typeof generator === "function") generator("main");
		})
		.then(() => {
			if (loadId !== currentPageLoadId) return;
			return loadScript(basePath + "src/pages/" + page + "/js/src.js", "dynamic-js");
		})
		.then(() => {
			// Show content only after everything is loaded
			if (mainContainer) {
				mainContainer.style.visibility = "visible";
			}
		})
		.catch(err => console.error(err));
}

// Object that will store all the template strings
let TEMPLATE_STRINGS;
// Object that will store all the json data
let DATA;