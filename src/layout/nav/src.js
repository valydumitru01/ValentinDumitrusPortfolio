class Navigator {
	/**
	 * A map of callbacks with the key being the page name and the value being a list
	 * of functions to call when the page is loaded.
	 * @type {Object.<string, Array.<Function>>}
	 */
	callbacks = {}
	
	constructor() {
		// Listen for history changes and reload the page when they happen
		window.addEventListener("popstate", () => {
			generate_page(history.state);
			$("#navbarNavDropdown").collapse('hide')
		});
	}
	
	goTo(page) {
		let error = ""
		if (typeof page !== "string") error = "Page is not a string, it is a " + typeof page;
		if (page === "") error = "Page string is empty";
		if (!isPage(page)) error = "Page \"" + page + "\" is not a valid page";
		if (error !== "") {
			console.error("We cannot go to the parameter page: " + error);
			return;
		}
		
		if (page === "back") {
			window.history.back()
			return
		}
		window.history.pushState(page, "", this.url);
		console.log("Navigating to page: " + history.state);
		generate_page(history.state);
		$("#navbarNavDropdown").collapse('hide')
		for (let callback in this.callbacks[page]) {
			callback();
		}
		this.updateTitle();
		
	}
	
	goBack() {
		this.goTo("back")
	}
	
	updateTitle() {
		if (history.state !== "home") {
			$("#title-container").show();
			$("#main-title").text(PAGE_TITLES[history.state]);
		} else {
			$("#title-container").hide();
		}
	}
	
	/**
	 * Add a callback to be called when a page is loaded.
	 * @param {string} page - The name of the page to add the callback to.
	 * @param {Function} callback - The function to call when the page is loaded.
	 * @returns {void}
	 */
	addCallback(page, callback) {
		let error=""
		if (typeof page !== "string") error= "Page is not a string, it is a " + typeof page;
		if (page==="") error= "Page is empty";
		if(!isPage(page)) error= "Page is not a valid page";
		if (typeof callback !== "function") error= "Callback is not a function, it is a " + typeof callback;
		if (error !== "") {
			console.error("Callback could not be applied: " + error);
			return;
		}
		
		if (this.callbacks[page] === undefined) {
			this.callbacks[page] = [];
		}
		this.callbacks[page].push(callback);
	}
}


$(document).ready(function () {
	let navigator                 = new Navigator();
	$("#portfolio-title").onclick = function () {
		navigator.goTo("home");
	}
	
	for (key in PAGES) {
		page = PAGES[key]
		$("#nav-item-" + page).on('click', (ev) => {
			let page = ev.currentTarget.id.replace("nav-item-", "");
			navigator.goTo(page);
		});
	}
	
	$("#go-back-arrow").on('click', (ev) => {
		navigator.goBack();
	});
});
