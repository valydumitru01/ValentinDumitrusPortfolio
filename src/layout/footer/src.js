$(document).ready(function () {
	$(".contact-button").hover(function () {
		$(this).find(".contact-button-icon").attr("hidden", true);
		$(this).find(".contact-button-content").attr("hidden", false);
	}, function () {
		$(this).find(".contact-button-icon").attr("hidden", false);
		$(this).find(".contact-button-content").attr("hidden", true);
	});
});