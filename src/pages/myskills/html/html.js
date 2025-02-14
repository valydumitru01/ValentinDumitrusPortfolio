/*********************************************
 * Example template-based generator for
 * "my skills" page, imitating the
 * generate_page_myprojects approach.
 *********************************************/

/* 
 Expect a global DATA object with
 DATA.engineering,
 DATA.software,
 DATA.languages,
 etc.
 */

/***********************
 * Template Strings
 ***********************/
TEMPLATE_STRINGS = {
	// The overall "base" layout with placeholders
	// for the engineering accordion, software accordion,
	// and languages table.
	base: `
    <div class="container py-5">
      <h1 class="text-center mb-5">My Skills</h1>

      <!-- Engineering Section -->
      <section class="mb-5">
        <h2 class="mb-3">Engineering</h2>
        <div class="accordion" id="engineeringAccordion">
          {engineeringItems}
        </div>
      </section>

      <!-- Software Section -->
      <section class="mb-5">
        <h2 class="mb-3">Software</h2>
        <div class="accordion" id="softwareAccordion">
          {softwareCategories}
        </div>
      </section>

      <!-- Languages Section -->
      <section class="mb-5">
        <h2 class="mb-3">Languages</h2>
        <div class="table-responsive">
          <table id="languagesTable" class="table table-striped table-hover table-bordered align-middle">
            <thead>
              <tr>
                <th>Flag</th>
                <th>Language</th>
                <th>Level</th>
                <th>Certificate</th>
              </tr>
            </thead>
            <tbody>
              {languagesRows}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `,
	
	// Each engineering accordion item
	engineeringItem: `
    <div class="accordion-item">
      <h2 class="accordion-header" id="engHead{index}">
        <button class="accordion-button {collapsedClass}" type="button"
                data-bs-toggle="collapse" data-bs-target="#engCollapse{index}"
                aria-expanded="{expandedState}" aria-controls="engCollapse{index}">
          {title}
        </button>
      </h2>
      <div id="engCollapse{index}" class="accordion-collapse collapse {showClass}"
           aria-labelledby="engHead{index}" data-bs-parent="#engineeringAccordion">
        <div class="accordion-body">
          {description}
        </div>
      </div>
    </div>
  `,
	
	// Each software category (accordion item), containing a table
	softwareCategory: `
    <div class="accordion-item">
      <h2 class="accordion-header" id="softHead{catIndex}">
        <button class="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#softCollapse{catIndex}"
                aria-expanded="false" aria-controls="softCollapse{catIndex}">
          {categoryName}
        </button>
      </h2>
      <div id="softCollapse{catIndex}" class="accordion-collapse collapse"
           aria-labelledby="softHead{catIndex}" data-bs-parent="#softwareAccordion">
        <div class="accordion-body">
          <div class="table-responsive">
            <table id="softTable{catIndex}" class="table table-striped table-hover table-bordered align-middle">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                {softwareRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
	
	// A single row in a software table
	softwareRow: `
    <tr>
      <td>
        <img src="{file}" alt="{title}"
             style="width:30px;height:30px;object-fit:contain;margin-right:5px;">
        {title}
      </td>
      <td>{levelLabel}</td>
    </tr>
  `,
	
	// A single row in the languages table
	languageRow: `
    <tr>
      <td class="text-center">
        <img src="{flagFile}" alt="{language}"
             style="width:30px;height:30px;object-fit:contain;">
      </td>
      <td>{language}</td>
      <td>{level}</td>
      <td>{certificateLink}</td>
    </tr>
  `
};

// Simple helper to replace placeholders in a template string
function renderTemplate(template, dataObj) {
	let out = template;
	for (const key in dataObj) {
		const pattern = new RegExp("\\{" + key + "\\}", "g");
		out           = out.replace(pattern, dataObj[key]);
	}
	return out;
}

/********************************************
 * Generation Functions
 ********************************************/

function generate_engineering_items(engineeringArray) {
	return engineeringArray.map((item, i) => {
		return renderTemplate(TEMPLATE_STRINGS.engineeringItem, {
			index         : i,
			collapsedClass: i === 0 ? "" : "collapsed",
			showClass     : i === 0 ? "show" : "",
			expandedState : i === 0 ? "true" : "false",
			title         : item.title,
			description   : item.description
		});
	}).join("");
}

// Map numeric levels to labels
function numericLevelToText(num) {
	switch (num) {
		case 1:
			return "Basic";
		case 2:
			return "Intermediate";
		case 3:
			return "Advanced";
		case 4:
			return "Expert";
		default:
			return "Unknown";
	}
}

function group_software_by_category(softwareArray) {
	const grouped = {};
	// assume you have CATEGORIES object or similar
	for (const catKey in CATEGORIES) {
		grouped[CATEGORIES[catKey]] = [];
	}
	softwareArray.forEach(item => {
		grouped[item.category].push(item);
	});
	return grouped;
}

function generate_software_categories(softwareArray) {
	const grouped = group_software_by_category(softwareArray);
	let index     = 0;
	let result    = "";
	
	for (const catName in grouped) {
		// generate row HTML for each item in that category
		const rowsHtml = grouped[catName].map(item => {
			return renderTemplate(TEMPLATE_STRINGS.softwareRow, {
				file      : BRAND_IMAGES_PATH + item.file + BRAND_IMAGES_EXT,
				title     : item.title,
				levelLabel: numericLevelToText(item.level)
			});
		}).join("");
		
		// now wrap in the accordion item
		const categoryHtml = renderTemplate(TEMPLATE_STRINGS.softwareCategory, {
			catIndex    : index,
			categoryName: catName,
			softwareRows: rowsHtml
		});
		result += categoryHtml;
		index++;
	}
	return result;
}

function convert_tables_to_data_tables() {
	$(document).ready(function () {
		$("table").each(function () {
			$(this).DataTable({
								  paging   : true,
								  searching: true,
								  info     : true
							  });
		});
	});
}

function generate_languages_rows(langsArray) {
	return langsArray.map(lang => {
		const certLink = lang.certificate ?
						 `<a href="${lang.certificate.file}" target="_blank">${lang.certificate.title}</a>` : "-";
		return renderTemplate(TEMPLATE_STRINGS.languageRow, {
			flagFile       : COUNTRY_FLAGS_PATH + lang.file + COUNTRY_FLAGS_EXT,
			language       : lang.title,
			level          : lang.level,
			certificateLink: certLink
		});
	}).join("");
}

/********************************************
 * Main function: generate_page_myskills
 ********************************************/
function generate_page_myskills(jquery_selector_where) {
	// We assume there's a global DATA object with .engineering, .software, .languages
	const engineeringItems = generate_engineering_items(DATA.engineering);
	const softwareCats     = generate_software_categories(DATA.software);
	const languagesRows    = generate_languages_rows(DATA.languages);
	
	// Build final HTML from base template
	const finalHtml = renderTemplate(TEMPLATE_STRINGS.base, {
		engineeringItems  : engineeringItems,
		softwareCategories: softwareCats,
		languagesRows     : languagesRows
	});
	
	$(jquery_selector_where).html(finalHtml);
	convert_tables_to_data_tables();
}
