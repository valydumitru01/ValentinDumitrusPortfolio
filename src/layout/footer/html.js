TEMPLATE_STRINGS_FOOTER = {
	base         : `
	<div class="bg-dark text-center text-white" id="footer">
		<div class="container p-4 pb-0">
			<section class="mb-4 contact-container">
				{contactAnchors}
			</section>
		</div>
		<div id="copyright-footer-text">
			${NAME}'s Portfolio &copy; ${DATE_OF_PORTFOLIO_CREATION}
		</div>
		<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
			<img class="footer-img" src="src/global/res/imgs/brands/bootstrap.png" alt="bootstrap brand logo">
			<img class="footer-img" src="src/global/res/imgs/brands/html5.png" alt="html5 brand logo">
			<img class="footer-img" src="src/global/res/imgs/brands/javascript.png" alt="javascript brand logo">
			<img class="footer-img" style="background: white; padding: 0.1em; border-radius: 0.1em" src="src/global/res/imgs/brands/jquery.png" alt="javascript brand logo">
			<a href="http://jigsaw.w3.org/css-validator/check/referer">
				<img style="border:0;width:88px;height:31px" src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!"/>
			</a>
		</div>
	</div>
    `,
	contactAnchor: `
	<a class="btn btn-outline-light btn-floating m-1 {class} contact-button" id="{id}" href="{href}"
		data-rel="external" role="button">
		<i class="{icon} contact-button-icon" ></i>
		<p class="contact-button-content" hidden>{content}</p>
	</a>
	 `
};


function generateFooter() {
	let contactAnchors = "";
	for (let contact of Object.values(CONTACT)) {
		contactAnchors += renderTemplate(TEMPLATE_STRINGS_FOOTER.contactAnchor, {
			href   : contact.link,
			icon   : contact.icon,
			content: contact.username,
		});
	}
	let html = renderTemplate(TEMPLATE_STRINGS_FOOTER.base, {contactAnchors: contactAnchors});
	$("footer").html(html);
}

generateFooter();