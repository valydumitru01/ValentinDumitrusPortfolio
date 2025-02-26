function getBaseTemplate() {
	return `
	<p> This is my most updated CV. If you have received my CV a long time ago, most probably this one is a different and improved version. It might be worth checking out.
	</p>
	<object type="application/pdf" id="cv-pdf"
		data="src/pages/cv/res/pdfs/cv.pdf?#zoom=85&scrollbar=0&navpanes=0">
    <p>Oops! Your browser doesn't support PDFs!</p>
    <p><a href="src/pages/cv/res/pdfs/cv.pdf">Download Instead</a></p>
	</object>`
}

function generate_page_cv(selector) {
	$(selector).html(getBaseTemplate());
}