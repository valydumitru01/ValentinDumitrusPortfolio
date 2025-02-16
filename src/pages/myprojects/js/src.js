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
		const carouselItemHtml = fillTemplate(TEMPLATE_STRINGS.carouselItem, {
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
		const indicatorHtml = fillTemplate(TEMPLATE_STRINGS.carouselIndicator, {
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
		const cardHtml = fillTemplate(TEMPLATE_STRINGS.card, {
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
