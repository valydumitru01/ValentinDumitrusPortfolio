TEMPLATE_STRINGS ={
	base:`
	<section class="myexperience">
		{timeline}
	</section>
	`,
}


function generate_page_myexperience(selector) {
	let timeline = generateTimelineHTML(DATA);
	const finalHtml = renderTemplate(TEMPLATE_STRINGS.base, {
		timeline: timeline
	});
	$(selector).html(finalHtml);
}
