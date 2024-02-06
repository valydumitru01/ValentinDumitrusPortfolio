
var ProjectCarouselItem = class ProjectCarouselItem {
    constructor(project, active = false) {
        this.project = project;
        this.active = active;
        this.html = $("<div class='carousel-item' ></div>");

        this.init();
    }

    init() {
        let carouselImage = $("<img src='" + this.project.img + "' class=' carousel-img' alt='" + this.project.title + "'>");

        this.html.append(carouselImage, this.getUpperBand(), this.getLowerBand());

        if (this.active) {
            this.html.addClass('active');
        }
    }

    getUpperBand() {
        let upperBand = $("<div class='carousel-upper-band d-flex align-items-center justify-content-center'></div>");
        let title = $("<div class='carousel-title text-white'>" + this.project.title + "</div>");

        upperBand.append(title);
        return upperBand;
    }


    getLowerBand() {
        let lowerBand = $("<div class='carousel-lower-band align-items-center justify-content-between'></div>");
        let description = $("<p class='carousel-description text-white'>" + this.project.description + "</p>");
        lowerBand.append(description);

        let buttons = $("<div class='carousel-buttons'></div>");
        if (this.project.moreDetailsInfo){
            let moreDetailsInfo = $("<button onclick='this.openMoreInfo(${this.project.moreDetailsInfo})' class='btn btn-light'>" +
                "More Details <i class=\"fas fa-info-circle\"></i>" +
                "</button>");
            buttons.append(moreDetailsInfo);
        }
        if (this.project.downloadLink) {
            let download = $("<a href='" + this.project.downloadLink + "' class='btn btn-light' download>" +
                "Download Here! <i class='fas fa-download'></i>" +
                "</a>");
            buttons.append(download);
        }

        if (this.project.link){
            let link = $("<a href='" + this.project.link + "' class='btn btn-light'>" +
                "Visit Site <i class='fas fa-external-link-alt'></i>" +
                "</a>");
            buttons.append(link);
        }



        lowerBand.append(buttons);
        return lowerBand;
    }

    getHtml() {
        return this.html;
    }
}


var ProjectCarousel = class ProjectCarousel {
    constructor(projects) {
        this.projects = projects;
        this.carouselItems = [];

        this.init();
    }

    init() {
        for (let i = 0; i < this.projects.length; i++) {
            let carouselItem = new ProjectCarouselItem(this.projects[i], i === 0);
            this.carouselItems.push(carouselItem);
        }
    }

    appendToContainer(containerId) {
        let carouselIndicators = $("<ol class='carousel-indicators' ></ol>");
        let carouselInner = $("<div class='carousel-inner' ></div>");
        let carousel = $("<div id='projectCarousel' class='carousel slide' data-ride='carousel'></div>");

        this.carouselItems.forEach((item, i) => {
            let carouselItem = item.getHtml();
            carouselInner.append(carouselItem);

            let indicator = $("<li data-target='#projectCarousel' data-slide-to='" + i + "'></li>");
            if (i === 0) {
                indicator.addClass('active');
            }
            carouselIndicators.append(indicator);
        });

        carousel.append(carouselIndicators);
        carousel.append(carouselInner);

        $(containerId).append(carousel);

        // Adding navigation arrows
        const navArrows = this.getNavArrows();
        carousel.append(navArrows[0]);
        carousel.append(navArrows[1]);

        // Thumbnails
        let thumbnailContainer = this.getThumbnailContainer();
        $(containerId).append(carousel);
        $(containerId).append(thumbnailContainer);

        $('#projectCarousel').carousel();

    }

    getNavArrows() {
        let prevArrow = $("<a class='carousel-control-prev custom-control' href='#projectCarousel' role='button' data-slide='prev'><div class='circle-control'><span class='carousel-control-prev-icon' aria-hidden='true'></span><span class='sr-only'>Previous</span></div></a>");
        let nextArrow = $("<a class='carousel-control-next custom-control' href='#projectCarousel' role='button' data-slide='next'><div class='circle-control'><span class='carousel-control-next-icon' aria-hidden='true'></span><span class='sr-only'>Next</span></div></a>");
        return [prevArrow, nextArrow];
    }

    getThumbnailContainer() {
        let thumbnailContainer = $("<div class='carousel-container d-flex justify-content-center flex-wrap mt-3'></div>");
        this.projects.forEach((project, i) => {
            let thumbnailItem = $("<div class='carousel-thumbnail-item' data-target='#projectCarousel' data-slide-to='" + i + "'></div>");
            let thumbnail = $("<img src='" + project.img + "' alt='" + project.title + "' class='carousel-thumbnail'>");
            let thumbnailTitle = $("<p class='thumbnail-title text-center'>" + project.title + "</p>");

            thumbnailItem.append(thumbnail);
            thumbnailItem.append(thumbnailTitle);
            thumbnailContainer.append(thumbnailItem);
        });
        return thumbnailContainer;
    }

    handleEvents() {
        // Add carousel navigation events
        $('.carousel').on('slide.bs.carousel', function (e) {
            // Update activeIndex
            this.activeIndex = $(e.relatedTarget).index();

            let carouselThumbnailItem = $('.carousel-thumbnail-item');
            let carouselContainer = $('.carousel-container');
            let carouselThumbnailItemActive = $('.carousel-thumbnail-item.active');

            // Remove active class from the old active thumbnail
            carouselThumbnailItem.removeClass('active');
            // Add active class to the new active thumbnail
            $(carouselThumbnailItem[this.activeIndex]).addClass('active');
            // Scroll thumbnail container to keep the active thumbnail centered
            if (carouselThumbnailItemActive.length > 0) // If there is an active thumbnail
                carouselContainer.animate({
                    scrollLeft: carouselThumbnailItemActive.offset().left - carouselContainer.offset().left + carouselContainer.scrollLeft() - carouselContainer.width() / 2 + carouselThumbnailItemActive.width() / 2
                });
        });


    }
}

var createCarousel = function () {
    $.getJSON("json/pages/myprojects.json", function (data) {
        var projects = data.projects;
        var projectCarousel = new ProjectCarousel(projects);

        projectCarousel.appendToContainer("#projects-container");
        projectCarousel.handleEvents();

    }).fail(function () {
        console.log("Error occurred while trying to fetch data");
    });
}

$(document).ready(createCarousel);


