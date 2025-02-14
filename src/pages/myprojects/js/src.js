/***************************************
 * Validation and Utility Helpers
 ***************************************/
function validateString(value, fallback) {
	if (typeof value === 'string' && value.trim().length > 0) {
		return value.trim();
	}
	console.warn(WARN_MESSAGES.INVALID_STRING(fallback, value));
	return fallback;
}

function isValidImage(src) {
	if (typeof src !== 'string') {
		console.error(`isValidImage: Expected a string but received ${typeof src}`);
		return false;
	}
	return /\.(png|jpe?g|gif)$/i.test(src);
}


/***************************************
 * UI Component Builders
 ***************************************/
function buildCarousel(projects) {
	const headerProjects = projects.filter(p => p && p.header);
	if (headerProjects.length === 0) {
		console.warn(WARN_MESSAGES.NO_HEADER_PROJECTS);
		return null;
	}
	
	const $carousel   = $(TEMPLATE_STRINGS.carouselContainer);
	const $indicators = $(TEMPLATE_STRINGS.carouselIndicators);
	const $inner      = $(TEMPLATE_STRINGS.carouselInner);
	
	headerProjects.forEach((project, index) => {
		const title           = validateString(project.title, TEXTS.FALLBACK_TITLE);
		const descriptionHtml = project.description ? `${project.description}` : '';
		const imgSrc          = getFirstImage(project.imgs);
		const activeClass     = index === 0 ? CSS_CLASSES.CAROUSEL_ITEM_ACTIVE : '';
		
		// Render carousel item.
		const carouselItemHtml = renderTemplate(TEMPLATE_STRINGS.carouselItem, {
			activeClass    : activeClass,
			imgSrc         : imgSrc,
			title          : title,
			descriptionHtml: descriptionHtml
		});
		const $item            = $(carouselItemHtml);
		
		// Open modal on item click.
		$item.on('click', () => openModal(project));
		
		// Attach error handling for the image.
		$item.find('img').on('error', function () {
			const failedSrc = $(this).attr('src');
			console.error(
				`buildCarousel: Failed to load image "${failedSrc}" for project "${title}". Replacing with placeholder.`);
			$(this).attr('src', IDS.PLACEHOLDER_IMG);
		});
		
		$inner.append($item);
		
		// Render and append the carousel indicator.
		const indicatorHtml = renderTemplate(TEMPLATE_STRINGS.carouselIndicator, {
			index      : index,
			activeClass: activeClass
		});
		$indicators.append($(indicatorHtml));
	});
	
	// Assemble carousel.
	$carousel.append($indicators);
	$carousel.append($inner);
	$carousel.append($(TEMPLATE_STRINGS.navPrev));
	$carousel.append($(TEMPLATE_STRINGS.navNext));
	$carousel.append($(TEMPLATE_STRINGS.carouselUpperBand));
	$carousel.append($(TEMPLATE_STRINGS.carouselLowerBand));
	
	return $carousel;
}

function buildCards(projects) {
	const $cardsRow = $(TEMPLATE_STRINGS.cardsRow);
	
	projects.forEach(project => {
		if (!project) {
			console.error("buildCards: Encountered null or undefined project. Skipping.");
			return;
		}
		const title    = validateString(project.title, TEXTS.FALLBACK_TITLE);
		const imgSrc   = getFirstImage(project.imgs);
		const cardHtml = renderTemplate(TEMPLATE_STRINGS.card, {
			imgSrc,
			title
		});
		const $card    = $(cardHtml);
		
		// Open modal on card click.
		$card.find('.card').on('click', () => openModal(project));
		
		// Attach error handling for the card image.
		$card.find('img').on('error', function () {
			const failedSrc = $(this).attr('src');
			console.error(
				`buildCards: Failed to load image "${failedSrc}" for project "${title}". Replacing with placeholder.`);
			$(this).attr('src', IDS.PLACEHOLDER_IMG);
		});
		
		$cardsRow.append($card);
	});
	
	return $cardsRow;
}

/***************************************
 * Modal Display Function
 ***************************************/
function openModal(project) {
	let $modal = $('#' + IDS.MODAL);
	if ($modal.length === 0) {
		// Create modal if it does not exist.
		$modal = $(TEMPLATE_STRINGS.modal);
		$('body').append($modal);
	}
	
	const title = validateString(project.title, TEXTS.FALLBACK_TITLE);
	$modal.find('.' + CSS_CLASSES.MODAL_TITLE).text(title);
	const $modalBody = $modal.find('.' + CSS_CLASSES.MODAL_BODY).empty();
	
	// Append project image.
	const imgSrc = getFirstImage(project.imgs);
	const $img   = createImageTag(imgSrc, title).addClass(CSS_CLASSES.MB_3);
	$modalBody.append($img);
	
	// Append project description if available.
	if (project.description) {
		$modalBody.append($('<p>').html(project.description));
	} else {
		console.warn(WARN_MESSAGES.NO_DESCRIPTION(title));
	}
	
	// Build external resource links.
	const $links = $(TEMPLATE_STRINGS.modalLinks);
	if (project.video) {
		$links.append($('<a>', {
			href  : project.video,
			target: '_blank',
			class : `btn btn-primary ${CSS_CLASSES.MR_2} ${CSS_CLASSES.MB_2}`,
			text  : TEXTS.BUTTON_WATCH_VIDEO
		}));
	}
	if (project.download) {
		$links.append($('<a>', {
			href    : project.download,
			target  : '_blank',
			class   : `btn btn-success ${CSS_CLASSES.MR_2} ${CSS_CLASSES.MB_2}`,
			text    : TEXTS.BUTTON_DOWNLOAD,
			download: ''
		}));
	}
	if (project.site) {
		$links.append($('<a>', {
			href  : project.site,
			target: '_blank',
			class : `btn btn-info ${CSS_CLASSES.MR_2} ${CSS_CLASSES.MB_2}`,
			text  : TEXTS.BUTTON_VISIT_SITE
		}));
	}
	if (project.github) {
		$links.append($('<a>', {
			href  : project.github,
			target: '_blank',
			class : `btn btn-dark ${CSS_CLASSES.MR_2} ${CSS_CLASSES.MB_2}`,
			text  : TEXTS.BUTTON_GITHUB
		}));
	}
	if ($links.children().length === 0) {
		console.warn(WARN_MESSAGES.NO_EXTERNAL_LINKS(title));
	}
	$modalBody.append($links);
	$modal.modal('show');
}

$(document).ready(function () {
	$('.project-card').on('click', function () {
		const index   = $(this).data('index');
		const project = projects[index];
		$('#projectModalLabel').text(project.title);
		// Populate modal carousel images, descriptions, etc.
		// ...
		$('#projectModal').modal('show');
	});
});