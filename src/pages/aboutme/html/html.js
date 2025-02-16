/***************************************
 * Global Constants: IDs, Classes, Texts, and Error Messages
 ***************************************/

TEMPLATE_STRINGS = {
	base    : `
    <article id="aboutme">
        <section class="frame-container">
            <figure class="frame falling-animation">
                <div class="paper">
                    <img class="portrait" src="/src/pages/aboutme/res/imgs/me_transparent.png" alt="Photo of myself"/>
                    <p class="text-end" id="signature">{signature}</p>
                </div>
            </figure>
        </section>
        <section id="introduction">
            <h1>Introduction</h1>
            {paragraphs}
        </section>
        <section id="strengths-and-weaknesses">
            <h2>
                Strengths and Weaknesses <i class='fas fa-thumbs-up'></i><i class='fas fa-thumbs-down'></i>
            </h2>
            <div id="strengths-and-weaknesses-container">
                <table class="content-table">
                    <thead>
                        <tr>
                            <th id="strength-header-tile" class="tile">Strengths</th>
                            <th id="weakness-header-tile" class="tile">Weaknesses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        </section>
        <section>
            <h2>Passions <i class='fas fa-heart'></i></h2>
            <div class="accordion" id="passions-accordion">
                {passions}
            </div>
        </section>
    </article>
    `,
	tableRow: `
        <tr>
            <td class="tile">{strength}</td>
            <td class="tile">{weakness}</td>
        </tr>
    `,
	passion : `
        <div class="accordion-item">
            <h3 class="accordion-header" id="heading-{index}">
                <button class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-{index}"
                        aria-expanded="false"
                        aria-controls="collapse-{index}">
                    {title}
                </button>
            </h3>
            <div id="collapse-{index}"
                 class="accordion-collapse collapse"
                 aria-labelledby="heading-{index}"
                 data-bs-parent="#passions-accordion">
                <div class="accordion-body">
                    <p>{description}</p>
                    {extra}
                    {images}
                </div>
            </div>
        </div>
    `
};

function generate_passions(passions) {
	let passionsHTML = "";
	for (let i = 0; i < passions.length; i++) {
		let passion = passions[i];
		let images  = passion.images ? generate_image_collage(passion.images, "src/global/res/imgs/") : "";
		let extra   = passion.extra ? passion.extra : "";
		passionsHTML += fillTemplate(TEMPLATE_STRINGS.passion, {
			title      :  " <i style='margin-right: 1em;' class='fas fa-" + passion.icon + "'></i>  "+ passion.title ,
			index      : i,
			description: passion.description,
			extra      : extra,
			images     : images
		});
	}
	return passionsHTML;
}

function generate_page_aboutme(selector) {
	let html       = TEMPLATE_STRINGS.base;
	let signature  = DATA.signature;
	let paragraphs = "";
	for (let i = 0; i < DATA.introduction.paragraphs.length; i++) {
		paragraphs += `<p>${DATA.introduction.paragraphs[i]}</p>`;
	}
	
	let tableRows  = "";
	let strengths  = DATA.strengthsAndWeaknesses.strengths;
	let weaknesses = DATA.strengthsAndWeaknesses.weaknesses;
	for (let i = 0; i < strengths.length; i++) {
		tableRows += fillTemplate(TEMPLATE_STRINGS.tableRow, {
			strength: strengths[i],
			weakness: weaknesses[i] ? weaknesses[i] : ""
		});
	}
	
	html = fillTemplate(html, {
		signature : signature,
		paragraphs: paragraphs,
		tableRows : tableRows,
		passions  : generate_passions(DATA.passions)
	});
	
	$(selector).html(html);
}
