TEMPLATE_STRINGS = {
    base: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <!-- Portfolio title -->
        <h2 class="text-white fw-bold" id="portfolio-title">${NAME}'s Portfolio</h2>
    
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggled-content" aria-controls="toggled-content" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="toggled-content">
            <ul class="navbar-nav" >
                {navItems}
            </ul>
        </div>
    </nav>
    
    <h1 class="bg-dark text-white" id="title-container">
        <i class="fa fa-arrow-alt-circle-left" id="go-back-arrow"  role="button"></i>
        <span id="go-back-text"></span>
        <span id="main-title">
            <!-- Changes dynamically depending on the page -->
        </span>
    </h1>
`,
    navItem: `
    <li class="nav-item">
        <a class="nav-link fw-bold" id="nav-item-{item}">
            <h2 style="color: white; cursor: pointer;"> {title} </h2>
        </a>
    </li>
`
}

function generateNav(){
    let html = TEMPLATE_STRINGS.base;
    let navItems = "";
    for (var page of Object.values(PAGES)) {
        navItems += renderTemplate(TEMPLATE_STRINGS.navItem, { item: page, title: PAGE_TITLES[page] });
    }
    html = renderTemplate(html, { navItems: navItems });
    $("header").html(html);
}

generateNav();