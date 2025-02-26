// Smaller templates to avoid an overly large base
function mainCarouselTemplate(carouselIndicators, carouselItems) {
	return `
    <div id="header-carousel" class="carousel slide mb-4 h-10" data-bs-ride="carousel">
      <div class="carousel-lower-band"></div>
      <a class="carousel-control-prev" href="#header-carousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <ol class="carousel-indicators">
        ${carouselIndicators}
      </ol>
      <div class="carousel-inner">
        ${carouselItems}
      </div>
      <a class="carousel-control-next" href="#header-carousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      <div class="carousel-upper-band"></div>
    </div>
  `;
}

function modalCarouselTemplate() {
	return `
    <div class="modal-carousel">
      <div id="modal-header-carousel" class="carousel slide mb-4 h-10" data-bs-ride="carousel">
        <a class="carousel-control-prev" href="#modal-header-carousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <ol class="carousel-indicators"><!-- modalCarouselIndicators --></ol>
        <div class="carousel-inner"><!-- modalCarouselItems --></div>
        <a class="carousel-control-next" href="#modal-header-carousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  `;
}

function modalTemplate() {
	return `
    <div class="modal fade" id="projectModal" tabindex="-1" role="dialog" aria-labelledby="projectModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="projectModalLabel"></h5>
            <button type="button" class="close text-white bg-dark border-0 rounded" style="width: 2em; height: 2em;"
                    data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"><i class="fas fa-times"></i></span>
            </button>
          </div>
          ${modalCarouselTemplate()}
          <div class="modal-body"><!-- body --></div>
        </div>
      </div>
    </div>
  `;
}

// Refactored base template, now assembling smaller pieces
function baseTemplate(carouselIndicators, carouselItems, cards) {
	return `
    <p>
      Here is a complete collection of all my projects since I started my software engineering career.
    </p>
    <article id="projects-container" style="margin-top: 5em;">
      ${mainCarouselTemplate(carouselIndicators, carouselItems)}
      <p>Click on a project for more information!</p>
      <div class="filter-container">
        <label for="tool-filter">Filter by Tools:</label>
        <select id="tool-filter" multiple class="tool-select form-control"></select>
      </div>
      <div class="card-deck d-flex flex-wrap justify-content-center" id="filtered-projects">
        ${cards}
      </div>
      ${modalTemplate()}
    </article>
  `;
}

function carouselItemTemplate(index, activeClass, imgSrc, title, descriptionHtml) {
	return `
    <div class="carousel-item ${activeClass}" style="cursor:pointer;" data-bs-index="${index}">
      <img class="carousel-img" src="${imgSrc}" alt="${title}">
      <div class="carousel-caption d-none d-md-block">
        <p class="carousel-title">${title}</p>
        <p class="carousel-description">${descriptionHtml}</p>
      </div>
    </div>
  `;
}

// We remove the clickable styles from the modal items to avoid opening another modal.
function modalCarouselItemTemplate(index, activeClass, imgSrc, title) {
	return `
    <div class="carousel-item ${activeClass}">
      <img class="carousel-img" src="${imgSrc}" alt="${title}">
    </div>
  `;
}

function carouselIndicatorTemplate(index, activeClass) {
	return `<li data-bs-target="#header-carousel" data-bs-slide-to="${index}" class="${activeClass}"></li>`;
}

function cardTemplate(index, title, imgSrc, tools) {
	return `
    <div class="card text-white project-card" data-bs-index="${index}" style="cursor:pointer;">
      <div class="card-header bg-white">
        <div class="card-title text-black">${title}</div>
      </div>
      <img class="card-img-top" src="${imgSrc}" alt="${title}">
      <div class="card-footer bg-white">
        <div class="tools-slider slider">${tools}</div>
      </div>
    </div>
  `;
}

function modalLinksContainerTemplate(buttons) {
	return `
    <div class="modal-links mt-3">
      ${buttons}
    </div>
  `;
}

function modalLinkTemplate(url, btnClass, text) {
	return `<a href="${url}" target="_blank" class="btn ${btnClass} me-2">${text}</a>`;
}

function toolImgTemplate(imgSrc, tool) {
	return `<img src="${imgSrc}" alt="${tool}" class="tool-img">`;
}

function generate_carousel_items(projects) {
	let carouselItems = "";
	let index = 0;
	projects.forEach((project, i) => {
		if (!project.header) return;
		const activeClass = index === 0 ? "active" : "";
		carouselItems += carouselItemTemplate(i, activeClass, project.imgs[0], project.title, project.description);
		index++;
	});
	return carouselItems;
}

function generate_carousel_indicators(projects) {
	let carouselIndicators = "";
	let index = 0;
	projects.forEach((project) => {
		if (!project.header) return;
		const activeClass = index === 0 ? "active" : "";
		carouselIndicators += carouselIndicatorTemplate(index, activeClass);
		index++;
	});
	return carouselIndicators;
}

function generate_cards(projects) {
	let cardsHtml = "";
	projects.forEach((project, idx) => {
		let projectsToolHtml = "";
		if (project.tools) {
			projectsToolHtml = project.tools.map(tool =>
													 toolImgTemplate(BRAND_IMAGES_PATH + tool + BRAND_IMAGES_EXT, tool)
			).join("");
		}
		cardsHtml += cardTemplate(idx, project.title, project.imgs[0], projectsToolHtml);
	});
	return cardsHtml;
}

// Helper to create all modal carousel items & indicators in one pass
function createModalCarouselContent(project) {
	const $modalIndicators = [];
	const $modalInner = [];
	
	if (project.imgs && project.imgs.length > 0) {
		project.imgs.forEach(function (imgSrc, idx) {
			const activeClass = idx === 0 ? "active" : "";
			$modalInner.push(
				modalCarouselItemTemplate(idx, activeClass, imgSrc, project.title)
			);
			$modalIndicators.push(`
        <li data-bs-target="#modal-header-carousel" data-bs-slide-to="${idx}" class="${activeClass}"></li>
      `);
		});
	}
	return {
		indicators: $modalIndicators.join(""),
		items: $modalInner.join("")
	};
}

function openModal(project) {
	$('#projectModalLabel').text(project.title);
	
	const $modalCarousel = $('#modal-header-carousel');
	const $modalIndicators = $modalCarousel.find('.carousel-indicators');
	const $modalInner = $modalCarousel.find('.carousel-inner');
	
	$modalIndicators.empty();
	$modalInner.empty();
	
	const modalContent = createModalCarouselContent(project);
	$modalIndicators.html(modalContent.indicators);
	$modalInner.html(modalContent.items);
	
	const $modalBody = $('#projectModal').find('.modal-body');
	$modalBody.empty();
	if (project.description) {
		$modalBody.append($('<p>').html(project.description));
	}
	
	let buttonsHtml = "";
	if (project.site) {
		buttonsHtml += modalLinkTemplate(project.site, "btn-info", "Visit Site");
	}
	if (project.download) {
		buttonsHtml += modalLinkTemplate(project.download, "btn-success", "Download");
	}
	if (project.github) {
		buttonsHtml += modalLinkTemplate(project.github, "btn-dark", "GitHub");
	}
	if (project.video) {
		buttonsHtml += modalLinkTemplate(project.video, "btn-primary", "Watch Video");
	}
	
	if (buttonsHtml) {
		$modalBody.append(modalLinksContainerTemplate(buttonsHtml));
	}
	
	$('#projectModal').modal('show');
}

function createSlidersForTools() {
	$('.slider').each(function () {
		$(this).slick({
						  infinite: true,
						  slidesToShow: 5,
						  slidesToScroll: 1,
						  autoplay: true,
						  autoplaySpeed: 300,
						  autoplayStopTime: 0,
						  cssEase: 'linear',
						  variableWidth: true,
						  arrows: false,
						  dots: false,
						  responsive: [
							  {
								  breakpoint: 992,
								  settings: { slidesToShow: 2 }
							  },
							  {
								  breakpoint: 768,
								  settings: { slidesToShow: 1 }
							  }
						  ]
					  });
	});
}

function formatToolOption(tool) {
	if (!tool.id) return tool.text;
	return $(`
    <span>
      <img src="${BRAND_IMAGES_PATH}${tool.text}${BRAND_IMAGES_EXT}"
           style="height: 2em; margin-right: 1em; margin-top: 0.5em; margin-bottom: 0.5em"
           alt="${tool.text}" class="tool-img">
      ${tool.text}
    </span>
  `);
}

function formatToolResult(tool) {
	if (!tool.id) return tool.text;
	return $(`
    <span>
      <img src="${BRAND_IMAGES_PATH}${tool.text}${BRAND_IMAGES_EXT}"
           style="height: 2em; margin-right: 1em;"
           alt="${tool.text}" class="tool-img">
      ${tool.text}
    </span>
  `);
}

function populateToolFilter() {
	const toolSet = new Set();
	Object.keys(BRAND_IMAGES).forEach(brand => toolSet.add(BRAND_IMAGES[brand]));
	const toolFilter = $("#tool-filter");
	toolFilter.empty();
	toolSet.forEach(tool => {
		toolFilter.append(new Option(tool, tool));
	});
	toolFilter.select2({
						   placeholder: "Select tools...",
						   allowClear: true,
						   templateResult: formatToolResult,
						   templateSelection: formatToolOption
					   });
}

function setupToolFilter() {
	$("#tool-filter").on("change", function () {
		const selectedTools = $(this).val() || [];
		if (selectedTools.length === 0) {
			$("#filtered-projects").html(generate_cards(DATA));
		} else {
			const filteredProjects = DATA.filter(
				project => project.tools && selectedTools.every(tool => project.tools.includes(tool))
			);
			$("#filtered-projects").html(generate_cards(filteredProjects));
		}
	});
}

// Keep the generate_page_myprojects signature as requested
function generate_page_myprojects(selector) {
	const html = baseTemplate(
		generate_carousel_indicators(DATA),
		generate_carousel_items(DATA),
		generate_cards(DATA)
	);
	$(selector).html(html);
}



$(document).ready(function () {
	// Make carousel and cards open the modal when clicked
	$(document).on('click', '#header-carousel .carousel-item, .project-card', function (e) {
		e.preventDefault();
		const index = $(this).data('bs-index');
		if (typeof index !== 'undefined') {
			openModal(DATA[index]);
		}
		return false;
	});
	
	$('#projectModal').on('shown.bs.modal', function () {
		const mainCarousel = bootstrap.Carousel.getInstance(document.getElementById('header-carousel'));
		if (mainCarousel) {
			mainCarousel.pause();
		}
	});
	$('#projectModal').on('hidden.bs.modal', function () {
		const mainCarousel = bootstrap.Carousel.getInstance(document.getElementById('header-carousel'));
		if (mainCarousel) {
			mainCarousel.cycle();
		}
	});
	createSlidersForTools();
	populateToolFilter();
	setupToolFilter();
});
