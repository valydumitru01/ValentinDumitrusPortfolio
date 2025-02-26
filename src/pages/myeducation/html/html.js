function baseTemplate(timeline, books, courses, blogs) {
	return `
    <section class="myeducation">
      ${timeline}
    </section>
    <section id="books" class="container my-4">
      <h3 class="text-white mb-4">Books</h3>
      <div class="slider books-slider">
        ${books}
      </div>
    </section>
    <section id="courses" class="container my-4">
      <h3 class="text-white mb-4">Courses</h3>
      <div class="slider courses-slider">
        ${courses}
      </div>
    </section>
    <section id="blogs" class="container my-4">
      <h3 class="text-white mb-4">Blogs</h3>
      <div class="slider blogs-slider">
        ${blogs}
      </div>
    </section>
  `;
}

function bookTemplate(cover, title, author, status) {
	return `
    <div class="book-item card bg-black text-white border-secondary rounded-0">
      <img src="${cover}" class="card-img-top" alt="${title}">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <hr class="hr" />
        <p class="card-text">${author}</p>
      </div>
      <div class="card-footer p-0">
        <div class="progress rounded-0">
          <div class="progress-bar" role="progressbar" style="width: ${status}%;"
               aria-valuenow="${status}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  `;
}

function courseTemplate(title, link, description, status) {
	return `
    <div class="course-item card bg-black text-white border-secondary rounded-0">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <a href="${link}" target="_blank" class="btn btn-primary mb-2">View Course</a>
        <p class="card-text">${description}</p>
      </div>
      <div class="card-footer p-0">
        <div class="progress rounded-0">
          <div class="progress-bar" role="progressbar" style="width: ${status}%;"
               aria-valuenow="${status}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  `;
}

function blogTemplate(title, link, description, status) {
	return `
    <div class="blog-item card bg-black text-white border-secondary rounded-0">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <a href="${link}" target="_blank" class="btn btn-secondary mb-2">Read Blog</a>
        <p class="card-text">${description}</p>
      </div>
      <div class="card-footer p-0">
        <div class="progress rounded-0">
          <div class="progress-bar" role="progressbar" style="width: ${status}%;"
               aria-valuenow="${status}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  `;
}

function generate_books(books) {
	return books.map(book =>
						 bookTemplate(
							 'src/pages/myeducation/res/imgs/' + book.title.replace(/\s+/g, '_').toLowerCase() + '.jpg',
							 book.title,
							 book.author,
							 book.status
						 )
	).join('');
}

function generate_courses(courses) {
	return courses.map(course =>
						   courseTemplate(
							   course.title,
							   course.link,
							   course.description,
							   course.status
						   )
	).join('');
}

function generate_blogs(blogs) {
	return blogs.map(blog =>
						 blogTemplate(
							 blog.title,
							 blog.link,
							 blog.description,
							 blog.status
						 )
	).join('');
}

function generate_page_myeducation(selector) {
	let timeline = generateTimelineHTML(DATA.formal);
	const finalHtml = baseTemplate(
		timeline,
		generate_books(DATA.books),
		generate_courses(DATA.courses),
		generate_blogs(DATA.blogs)
	);
	$(selector).html(finalHtml);
	
	$('.slider').each(function () {
		$(this).slick({
						  centerMode: true,
						  autoplay: true,
						  dots: true,
						  infinite: true,
						  centerPadding: '10vw',
						  cssEase: 'linear',
						  slidesToShow: 3,
						  focusOnSelect: true,
						  responsive: [
							  {
								  breakpoint: 768,
								  settings: { slidesToShow: 1 }
							  }
						  ]
					  });
	});
}
