function baseTemplate() {
	return `
	<article id="home-page">
	<div class="centering-container">
		<section id="home-text">
			<div class="deconstructed">
				WELCOME
				<div>WELCOME</div>
				<div>WELCOME</div>
				<div>WELCOME</div>
				<div>WELCOME</div>
			</div>
			<div class="fade-in-text" id="to-my">To My</div>
			<div class="stripped-effect-text">
				<div class="text-drop">
					<div id="P">P</div>
					<div id="O">O</div>
					<div id="R">R</div>
					<div id="T">T</div>
					<div id="F">F</div>
					<div id="O1">O</div>
					<div id="L">L</div>
					<div id="I">I</div>
					<div id="O2">O</div>
				</div>
			</div>
			<div class="fade-in-text" id="by-valentin">
				By ${NAME}
			</div>
		</section>
	</div>
	</article>
	`
}

function generate_page_home(selector) {
	$(selector).html(baseTemplate());
}