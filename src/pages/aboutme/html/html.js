function baseTemplate(signature, paragraphs, passionsHtml) {
	return `
    <article id="aboutme">
      <section class="frame-container">
        <figure class="frame falling-animation">
          <div class="paper">
            <img class="portrait" src="src/pages/aboutme/res/imgs/me_transparent.png" alt="Photo of myself"/>
            <p class="text-end" id="signature">${signature}</p>
          </div>
        </figure>
      </section>
      <section id="introduction">
        <h1>Introduction</h1>
        ${paragraphs}
      </section>
      <section>
        <h2>Passions <i class='fas fa-heart'></i></h2>
        <div class="accordion" id="passions-accordion">
          ${passionsHtml}
        </div>
      </section>
    </article>
  `;
}

function strengthsAndWeaknessesTemplate(tableRows) {
	return `
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
            ${tableRows}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function tableRowTemplate(strength, weakness) {
	return `
    <tr>
      <td class="tile">${strength}</td>
      <td class="tile">${weakness}</td>
    </tr>
  `;
}

function passionTemplate(index, icon, title, description, extra, imagesHtml) {
	return `
    <div class="accordion-item">
      <h3 class="accordion-header" id="heading-${index}">
        <button class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse" data-bs-target="#collapse-${index}"
                aria-expanded="false"
                aria-controls="collapse-${index}">
          <i style='margin-right: 1em;' class='fas fa-${icon}'></i> ${title}
        </button>
      </h3>
      <div id="collapse-${index}"
           class="accordion-collapse collapse"
           aria-labelledby="heading-${index}"
           data-bs-parent="#passions-accordion">
        <div class="accordion-body">
          <p>${description}</p>
          ${extra}
          ${imagesHtml}
        </div>
      </div>
    </div>
  `;
}

function generate_passions(passions) {
	let result = "";
	for (let i = 0; i < passions.length; i++) {
		const passion = passions[i];
		const imagesHtml = passion.images
						   ? generate_image_collage(passion.images, "src/global/res/imgs/")
						   : "";
		const extraHtml = passion.extra || "";
		result += passionTemplate(
			i,
			passion.icon,
			passion.title,
			passion.description,
			extraHtml,
			imagesHtml
		);
	}
	return result;
}

function generate_table_rows(strengths, weaknesses) {
	let rows = "";
	for (let i = 0; i < strengths.length; i++) {
		const weakness = weaknesses[i] ? weaknesses[i] : "";
		rows += tableRowTemplate(strengths[i], weakness);
	}
	return rows;
}

function generate_page_aboutme(selector) {
	const signature = DATA.signature;
	let paragraphs = "";
	for (let i = 0; i < DATA.introduction.paragraphs.length; i++) {
		paragraphs += `<p>${DATA.introduction.paragraphs[i]}</p>`;
	}
	
	const passionsHtml = generate_passions(DATA.passions);
	const baseHtml = baseTemplate(signature, paragraphs, passionsHtml);
	
	const strengthsRows = generate_table_rows(
		DATA.strengthsAndWeaknesses.strengths,
		DATA.strengthsAndWeaknesses.weaknesses
	);
	const strengthsHtml = strengthsAndWeaknessesTemplate(strengthsRows);
	
	// If you want to include the Strengths & Weaknesses block on the same page:
	const finalHtml = baseHtml + strengthsHtml;
	// Otherwise, just use baseHtml if you only want the first part.
	
	$(selector).html(finalHtml);
}
