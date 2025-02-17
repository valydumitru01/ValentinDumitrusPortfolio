TEMPLATE_STRINGS = {
	base  : `
		<section class="myeducation">
			{timeline}
		</section>
		<section id="books" class="container my-4">
			<h3 class="text-white mb-4">Books</h3>
			<div class="slider books-slider">
				{books}
			</div>
		</section>
		<section id="courses" class="container my-4">
			<h3 class="text-white mb-4">Courses</h3>
			<div class="slider courses-slider">
				{courses}
			</div>
		</section>
		<section id="blogs" class="container my-4">
			<h3 class="text-white mb-4">Blogs</h3>
			<div class="slider blogs-slider">
				{blogs}
			</div>
		</section>
	`,
	book  : `
		<div class="book-item card bg-black text-white border-secondary rounded-0">
			<img src="{cover}" class="card-img-top" alt="{title}">
			<div class="card-body">
				<h5 class="card-title">{title}</h5>
				<hr class="hr " />
				<p class="card-text">{author}</p>
			</div>
			<div class="card-footer p-0">
				<div class="progress rounded-0">
					<div class="progress-bar " role="progressbar" style="width: {status}%;" aria-valuenow="{status}" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
		</div>
	`,
	course: `
		<div class="course-item card bg-black text-white border-secondary rounded-0">
			<div class="card-body">
				<h5 class="card-title">{title}</h5>
				<a href="{link}" target="_blank" class="btn btn-primary mb-2">View Course</a>
				<p class="card-text">{description}</p>
			</div>
			<div class="card-footer p-0">
				<div class="progress rounded-0">
					<div class="progress-bar " role="progressbar" style="width: {status}%;" aria-valuenow="{status}" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
		</div>
	`,
	blog  : `
		<div class="blog-item card bg-black text-white border-secondary rounded-0">
			<div class="card-body">
				<h5 class="card-title">{title}</h5>
				<a href="{link}" target="_blank" class="btn btn-secondary mb-2">Read Blog</a>
				<p class="card-text">{description}</p>
			</div>
			<div class="card-footer p-0">
				<div class="progress rounded-0">
					<div class="progress-bar " role="progressbar" style="width: {status}%;" aria-valuenow="{status}" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
		</div>
	`
};

function generate_books(books) {
	return books.map(book => fillTemplate(TEMPLATE_STRINGS.book, {
		cover : 'src/pages/myeducation/res/imgs/' + book.title.replace(/\s+/g, '_').toLowerCase() + '.jpg',
		title : book.title,
		author: book.author,
		status: book.status
	})).join('');
}

function generate_courses(courses) {
	return courses.map(course => fillTemplate(TEMPLATE_STRINGS.course, {
		title      : course.title,
		link       : course.link,
		description: course.description,
		status     : course.status
	})).join('');
}

function generate_blogs(blogs) {
	return blogs.map(blog => fillTemplate(TEMPLATE_STRINGS.blog, {
		title      : blog.title,
		link       : blog.link,
		description: blog.description,
		status     : blog.status
	})).join('');
}

function generate_page_myeducation(selector) {
	let timeline    = generateTimelineHTML(DATA.formal);
	const finalHtml = fillTemplate(TEMPLATE_STRINGS.base, {
		timeline: timeline,
		books   : generate_books(DATA.books),
		courses : generate_courses(DATA.courses),
		blogs   : generate_blogs(DATA.blogs)
	});
	$(selector).html(finalHtml);
	
	// For each slider (books, courses, blogs), detect slide count.
	$('.slider').each(function () {
		const $slider = $(this);
		
		// Otherwise, do the regular multi-slide config
		$slider.slick({
						  centerMode   : true,
						  autoplay     : true,
						  dots: true,
						  infinite     : true,
						  centerPadding: '10vw',
						  cssEase: 'linear',
						  
						  slidesToShow : 3,
						  focusOnSelect: true,
						responsive   : [
							{
								breakpoint: 768,
								settings  : {
									slidesToShow: 1
								}
							}
						]
					  });
		
	});
}