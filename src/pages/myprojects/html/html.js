TEMPLATE_STRINGS = {
	base             : `
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
        <div class="card-deck">
        	{cards}
		</div>
		
		
		
		
	<div class="modal fade" id="projectModal" tabindex="-1" role="dialog" aria-labelledby="projectModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
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
	carouselItem     : `
    <div class="carousel-item {activeClass}" style="cursor:pointer;"  data-bs-index="{index}">
      <img class="carousel-img" src="{imgSrc}" alt="{title}">
      <div class="carousel-caption d-none d-md-block">
        <p class="carousel-title">{title}</p>
        <p class="carousel-description">{descriptionHtml}</p>
      </div>
    </div>
    `,
	modalCarouselItem: `
	<div class="carousel-item {activeClass}">
      <img class="carousel-img" src="{imgSrc}" alt="{title}">
    </div>
	`,
	carouselIndicator: `<li data-target="#header-carousel" data-bs-slide-to="{index}" class="{activeClass}"></li>`,
	card             : `
    <div class="col-md-4 mb-4">
      <div class="card text-white h-50" data-bs-index="{index}" style="cursor:pointer;">
        <img class="card-img img-fluid" src="{imgSrc}" alt="{title}">
        <div class="card-img-overlay">
          <h5 class="card-title">{title}</h5>
        </div>
      </div>
    </div>
    `
};

function generate_carousel_items(projects) {
	let carouselItems = "";
	let index         = 0;
	projects.forEach((project, i) => {
		if (project.header !== true) return;
		const activeClass = index === 0 ? "active" : "";
		
		carouselItems += renderTemplate(TEMPLATE_STRINGS.carouselItem, {
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
		
		carouselIndicators += renderTemplate(TEMPLATE_STRINGS.carouselIndicator, {
			activeClass: activeClass,
			index      : index
		});
		index++;
	});
	return carouselIndicators;
}

function generate_cards(projects) {
	let cardsHtml = "";
	projects.forEach(project => {
		cardsHtml += renderTemplate(TEMPLATE_STRINGS.card, {
			imgSrc: project.imgs[0],
			title : project.title
		});
	});
	return cardsHtml;
}



function generate_page_myprojects(selector) {
	let html = renderTemplate(TEMPLATE_STRINGS.base, {
		carouselItems     : generate_carousel_items(DATA),
		carouselIndicators: generate_carousel_indicators(DATA),
		cards             : generate_cards(DATA)
	});
	// Finally, set the HTML into the given container
	$(selector).html(html);
}