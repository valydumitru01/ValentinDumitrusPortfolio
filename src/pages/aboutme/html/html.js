/***************************************
 * Global Constants: IDs, Classes, Texts, and Error Messages
 ***************************************/
const RESOURCES = {
	portrait: "res/aboutme/me_transparent.png"
}

TEMPLATE_STRINGS = {
	base: `
    <article id="aboutme">
        <section class="frame-container">
            <figure class="frame falling-animation">
                <div class="paper">
                    <img class="portrait" src="${RESOURCES.portrait}" alt="Photo of myself"/>
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
    </article>
    `,
	tableRow: `
	    <tr>
	        <td class="tile">{strength}</td>
            <td class="tile">{weakness}</td>
        </tr>
    `
};

function generate_page_aboutme(jquery_selector_where) {
	load_page_json('aboutme', (jsonData) => {
		let html = TEMPLATE_STRINGS.base;
		let signature = jsonData.signature;
		let paragraphs = "";
		for (let i = 0; i < jsonData.paragraphs.length; i++) {
			paragraphs += `<p>${jsonData.paragraphs[i]}</p>`;
		}
		let tableRows = "";
		let strengths = jsonData.strengthsAndWeaknesses.strengths;
		let weaknesses = jsonData.strengthsAndWeaknesses.weaknesses;

		for (let i = 0; i < strengths.length; i++) {
			tableRows += renderTemplate(TEMPLATE_STRINGS.tableRow, {
				strength: strengths[i], weakness: weaknesses[i] ? weaknesses[i] : ""
			});
		}
		html = renderTemplate(html, {
			signature: signature, paragraphs: paragraphs, tableRows: tableRows
		});
		$(jquery_selector_where).html(html);
	});


}

