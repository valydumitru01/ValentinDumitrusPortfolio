TEMPLATE_STRINGS = {
	base               : `
    <p>
      Here is a complete collection of all my projects since I started my software engineering career.
    </p>
    <article id="projects-container" style="margin-top: 5em;">
		<div id="header-carousel" class="carousel slide mb-4 h-10" data-bs-ride="carousel">
			<div class="carousel-lower-band"></div>
			
			<a class="carousel-control-prev" href="#header-carousel" role="button" data-bs-slide="prev">
			  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
			  <span class="sr-only">Previous</span>
			</a>
			<ol class="carousel-indicators">
				{carouselIndicators}
			</ol>
			<div class="carousel-inner">
				{carouselItems}
			</div>
			
			<a class="carousel-control-next" href="#header-carousel" role="button" data-bs-slide="next">
			  <span class="carousel-control-next-icon" aria-hidden="true"></span>
			  <span class="sr-only">Next</span>
			</a>
			<div class="carousel-upper-band"></div>
		</div>
		<p> Click on a project for more information! </p>
        <div class="card-deck d-flex flex-wrap justify-content-center">
        	{cards}
		</div>
		
		<div class="modal fade" id="projectModal" tabindex="-1" role="dialog" aria-labelledby="projectModalLabel" aria-hidden="true">
		  <div class="modal-dialog modal-xl" role="document">
			<div class="modal-content">
			  <div class="modal-header">
				<h5 class="modal-title" id="projectModalLabel"><!-- title --></h5>
				<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
				  <span aria-hidden="true">&times;</span>
				</button>
			  </div>
			  <div class="modal-carousel">
			  	 <div id="modal-header-carousel" class="carousel slide mb-4 h-10" data-bs-ride="carousel">
				
				<a class="carousel-control-prev" href="#modal-header-carousel" role="button" data-bs-slide="prev">
				  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				  <span class="sr-only">Previous</span>
				</a>
				<ol class="carousel-indicators">
					<!-- modalCarouselIndicators -->
				</ol>
				<div class="carousel-inner">
					<!-- modalCarouselItems -->
				</div>
				
				<a class="carousel-control-next" href="#modal-header-carousel" role="button" data-bs-slide="next">
				  <span class="carousel-control-next-icon" aria-hidden="true"></span>
				  <span class="sr-only">Next</span>
				</a>
			</div>
			  </div>
			  <div class="modal-body">
				 <!-- body -->
			  </div>
			</div>
		  </div>
		</div>
    </article>
    `,
	carouselItem       : `
    <div class="carousel-item {activeClass}" style="cursor:pointer;" data-bs-index="{index}">
      <img class="carousel-img" src="{imgSrc}" alt="{title}">
      <div class="carousel-caption d-none d-md-block">
        <p class="carousel-title">{title}</p>
        <p class="carousel-description">{descriptionHtml}</p>
      </div>
    </div>
    `,
	modalCarouselItem  : `
	<div class="carousel-item {activeClass}">
      <img class="carousel-img" src="{imgSrc}" alt="{title}">
    </div>
	`,
	carouselIndicator  : `<li data-target="#header-carousel" data-bs-slide-to="{index}" class="{activeClass}"></li>`,
	card               : `
      <div class="card text-white project-card " data-bs-index="{index}" style="cursor:pointer;">
      	<div class="card-header bg-white">
      	  <div class="card-title text-black">
          {title}
          </div>
      	</div>
        <img class="card-img-top" src="{imgSrc}" alt="{title}">
        
      	<div class="card-footer bg-white">
      	  {tools}
      	</div>
	  </div>
    `,
	modalLinksContainer: `
		<div class="modal-links mt-3">
			{buttons}
		</div>
	`,
	modalLink          : `<a href="{url}" target="_blank" class="btn {btnClass} me-2">{text}</a>`,
	toolImg			: `<img src="{imgSrc}" alt="{tool}" class="tool-img">`
};

function generate_carousel_items(projects) {
	let carouselItems = "";
	let index         = 0;
	projects.forEach((project, i) => {
		if (project.header !== true) return;
		const activeClass = index === 0 ? "active" : "";
		carouselItems += fillTemplate(TEMPLATE_STRINGS.carouselItem, {
			activeClass    : activeClass,
			imgSrc         : project.imgs[0],
			title          : project.title,
			descriptionHtml: project.description,
			index          : i
		});
		index++;
	});
	return carouselItems;
}

function generate_carousel_indicators(projects) {
	let carouselIndicators = "";
	let index              = 0;
	projects.forEach((project) => {
		if (project.header !== true) return;
		const activeClass = index === 0 ? "active" : "";
		carouselIndicators += fillTemplate(TEMPLATE_STRINGS.carouselIndicator, {
			activeClass: activeClass,
			index      : index
		});
		index++;
	});
	return carouselIndicators;
}

function generate_cards(projects) {
	let cardsHtml = "";
	projects.forEach((project, index) => {
		let projectsToolHtml = "";
		projectsToolHtml=project.tools ? project.tools.map(tool => fillTemplate(TEMPLATE_STRINGS.toolImg, {imgSrc: BRAND_IMAGES_PATH+tool+BRAND_IMAGES_EXT, tool: tool})).join("") : "";
		cardsHtml += fillTemplate(TEMPLATE_STRINGS.card, {
			imgSrc: project.imgs[0],
			title : project.title,
			tools : projectsToolHtml,
			index : index
		});
	});
	return cardsHtml;
}

function generate_page_myprojects(selector) {
	let html = fillTemplate(TEMPLATE_STRINGS.base, {
		carouselItems     : generate_carousel_items(DATA),
		carouselIndicators: generate_carousel_indicators(DATA),
		cards             : generate_cards(DATA)
	});
	$(selector).html(html);
}

function openModal(project) {
	// Set the modal title
	$('#projectModalLabel').text(project.title);
	
	// Populate the modal carousel with project images
	var $modalCarousel   = $('#modal-header-carousel');
	var $modalIndicators = $modalCarousel.find('.carousel-indicators');
	var $modalInner      = $modalCarousel.find('.carousel-inner');
	
	$modalIndicators.empty();
	$modalInner.empty();
	
	if (project.imgs && project.imgs.length > 0) {
		project.imgs.forEach(function (imgSrc, index) {
			var activeClass = index === 0 ? "active" : "";
			var modalItem   = fillTemplate(TEMPLATE_STRINGS.modalCarouselItem, {
				activeClass: activeClass,
				imgSrc     : imgSrc,
				title      : project.title
			});
			$modalInner.append(modalItem);
			var indicator = `<li data-bs-target="#modal-header-carousel" data-bs-slide-to="${index}" class="${activeClass}"></li>`;
			$modalIndicators.append(indicator);
		});
	}
	
	// Populate the modal body with the project description and external links
	var $modalBody = $('#projectModal').find('.modal-body');
	$modalBody.empty();
	
	if (project.description) {
		$modalBody.append($('<p>').html(project.description));
	}
	
	// Generate external links buttons if available
	var buttonsHtml = "";
	if (project.site) {
		buttonsHtml += fillTemplate(TEMPLATE_STRINGS.modalLink, {
			url     : project.site,
			btnClass: "btn-info",
			text    : "Visit Site"
		});
	}
	if (project.download) {
		buttonsHtml += fillTemplate(TEMPLATE_STRINGS.modalLink, {
			url     : project.download,
			btnClass: "btn-success",
			text    : "Download"
		});
	}
	if (project.github) {
		buttonsHtml += fillTemplate(TEMPLATE_STRINGS.modalLink, {
			url     : project.github,
			btnClass: "btn-dark",
			text    : "GitHub"
		});
	}
	if (project.video) {
		buttonsHtml += fillTemplate(TEMPLATE_STRINGS.modalLink, {
			url     : project.video,
			btnClass: "btn-primary",
			text    : "Watch Video"
		});
	}
	
	if (buttonsHtml !== "") {
		var modalLinks = fillTemplate(TEMPLATE_STRINGS.modalLinksContainer, {buttons: buttonsHtml});
		$modalBody.append(modalLinks);
	}
	
	// Show the modal
	$('#projectModal').modal('show');
}

$(document).ready(function () {
	$('.project-card').on('click', function () {
		const index = $(this).data('bs-index');
		openModal(DATA[index === "" ? 0 : index]);
	});
});
