TEMPLATE_STRINGS = {
	base: `
	<object type="application/pdf" id="cv-pdf"
		data="src/pages/cv/res/pdfs/cv.pdf?#zoom=85&scrollbar=0&navpanes=0">
    <p>Error: PDF cannot be displayed. If this happens tell Valentin :). Use the links in the footer.</p>
	</object>`
}

function generate_page_cv(selector) {
	$(selector).html(TEMPLATE_STRINGS.base);
}