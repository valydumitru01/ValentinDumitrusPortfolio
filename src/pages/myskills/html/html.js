function baseTemplate(engineeringItems, softwareCategories, languagesRows) {
	return `
    <div class="py-5">
      <h1 class="text-center mb-5">My Skills</h1>

      <!-- Engineering Section -->
      <section class="mb-5">
        <h2 class="mb-3">Engineering</h2>
        <div class="accordion" id="engineeringAccordion">
          ${engineeringItems}
        </div>
      </section>

      <!-- Software Section -->
      <section class="mb-5">
        <h2 class="mb-3">Software</h2>
        <div class="accordion" id="softwareAccordion">
          ${softwareCategories}
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
              ${languagesRows}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `;
}

function engineeringItemTemplate(index, collapsedClass, showClass, expandedState, title, description) {
	return `
    <div class="accordion-item">
      <h2 class="accordion-header" id="engHead${index}">
        <button class="accordion-button ${collapsedClass}" type="button"
                data-bs-toggle="collapse" data-bs-target="#engCollapse${index}"
                aria-expanded="${expandedState}" aria-controls="engCollapse${index}">
          ${title}
        </button>
      </h2>
      <div id="engCollapse${index}" class="accordion-collapse collapse ${showClass}"
           aria-labelledby="engHead${index}" data-bs-parent="#engineeringAccordion">
        <div class="accordion-body">
          ${description}
        </div>
      </div>
    </div>
  `;
}

function softwareCategoryTemplate(catIndex, categoryName, softwareRows) {
	return `
    <div class="accordion-item">
      <h2 class="accordion-header" id="softHead${catIndex}">
        <button class="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#softCollapse${catIndex}"
                aria-expanded="false" aria-controls="softCollapse${catIndex}">
          ${categoryName}
        </button>
      </h2>
      <div id="softCollapse${catIndex}" class="accordion-collapse collapse"
           aria-labelledby="softHead${catIndex}" data-bs-parent="#softwareAccordion">
        <div class="accordion-body">
          <div class="table-responsive">
            <table id="softTable${catIndex}" class="softTable table table-striped table-hover table-bordered align-middle">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                ${softwareRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
}

function softwareRowTemplate(file, title, numericLevel, levelLabel) {
	return `
    <tr>
      <td>
        <img src="${file}" alt="${title}"
             style="width:30px;height:30px;object-fit:contain;margin-right:5px;">
        ${title}
      </td>
      <td data-order="${numericLevel}">${levelLabel}</td>
    </tr>
  `;
}

function languageRowTemplate(flagFile, language, level, certificateLink) {
	return `
    <tr>
      <td class="text-center">
        <img src="${flagFile}" alt="${language}"
             style="width:30px;height:30px;object-fit:contain;">
      </td>
      <td>${language}</td>
      <td>${level}</td>
      <td>${certificateLink}</td>
    </tr>
  `;
}

// Map numeric levels to labels
function numericLevelToText(num) {
	switch (num) {
		case 1: return "Basic";
		case 2: return "Intermediate";
		case 3: return "Advanced";
		case 4: return "Expert";
		default: return "Unknown";
	}
}

function group_software_by_category(softwareArray) {
	const grouped = {};
	for (const catKey in CATEGORIES) {
		grouped[CATEGORIES[catKey]] = [];
	}
	softwareArray.forEach(item => {
		grouped[item.category].push(item);
	});
	return grouped;
}

function generate_engineering_items(engineeringArray) {
	return engineeringArray.map((item, i) => {
		const collapsedClass = i === 0 ? "" : "collapsed";
		const showClass = i === 0 ? "show" : "";
		const expandedState = i === 0 ? "true" : "false";
		return engineeringItemTemplate(
			i,
			collapsedClass,
			showClass,
			expandedState,
			item.title,
			item.description
		);
	}).join("");
}

function generate_software_categories(softwareArray) {
	const grouped = group_software_by_category(softwareArray);
	let index = 0;
	let result = "";
	for (const catName in grouped) {
		const rowsHtml = grouped[catName].map(item =>
												  softwareRowTemplate(
													  BRAND_IMAGES_PATH + item.file + BRAND_IMAGES_EXT,
													  item.title,
													  item.level,
													  numericLevelToText(item.level)
												  )
		).join("");
		
		result += softwareCategoryTemplate(index, catName, rowsHtml);
		index++;
	}
	return result;
}

function generate_languages_rows(langsArray) {
	return langsArray.map(lang => {
		const certLink = lang.certificate
						 ? `<a href="${lang.certificate.file}" target="_blank">${lang.certificate.title}</a>`
						 : "-";
		return languageRowTemplate(
			COUNTRY_FLAGS_PATH + lang.file + COUNTRY_FLAGS_EXT,
			lang.title,
			lang.level,
			certLink
		);
	}).join("");
}

function convert_tables_to_data_tables() {
	$(document).ready(function () {
		$(".softTable").each(function () {
			$(this).DataTable({
								  paging: true,
								  searching: true,
								  autoWidth: true,
								  lengthMenu: [5, 7, 10],
								  pageLength: 5,
								  dom:
									  '<"row"<"col-6"l><"col-6"f>>' +
									  '<"row"<"col-12"i>>' +
									  'rt' +
									  '<"row"<"col-12"p>>' +
									  '<"clear">',
								  columnDefs: [
									  {
										  targets: 1,
										  type: "num",
										  orderData: 1
									  }
								  ]
							  });
		});
		$(".dataTables_length").addClass("d-flex flex-column");
		$(".dataTables_length label").addClass("mb-2");
		$(".dataTables_paginate").addClass("d-flex flex-column");
		$(".dataTables_paginate .pagination").addClass("justify-content-center");
	});
}

function generate_page_myskills(selector) {
	const engineeringItems = generate_engineering_items(DATA.engineering);
	const softwareCats = generate_software_categories(DATA.software);
	const languagesRows = generate_languages_rows(DATA.languages);
	
	const finalHtml = baseTemplate(engineeringItems, softwareCats, languagesRows);
	$(selector).html(finalHtml);
	convert_tables_to_data_tables();
}
