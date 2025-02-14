

generateNav("header")
generateFooter("footer")

// To all images that are not found, replace with a placeholder image and log an error
$("img").on("error", function () {
	console.error("Image not found: " + $(this).attr("src"))
	$(this).attr("src", "src/global/res/imgs/placeholder.png")
})

