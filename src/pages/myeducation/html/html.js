TEMPLATE_STRINGS={
	base:`
	<section class="myeducation">
		{timeline}
	</section>
	`,
}
function generate_page_myeducation(selector) {
	let timeline = generateTimelineHTML(DATA.formal);
	const finalHtml = fillTemplate(TEMPLATE_STRINGS.base, {
		timeline: timeline
	});
	$(selector).html(finalHtml);
}