generateNav("header")
generateFooter("footer")


$(document).ready(function () {
	navigator.goTo(PAGES.HOME)
})



document.body.addEventListener("error", function (event) {
	if (event.target.tagName === "IMG") {
		event.target.onerror = null;
		event.target.src = "src/global/res/imgs/placeholder.png";
	}
}, true);