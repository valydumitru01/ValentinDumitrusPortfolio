
class Portfolio{
    pageTitles = {}
    url = new URL(window.location)
    
    constructor() {
        this.pageTitles = {
            'home': "Home",
            'aboutme': "About Me",
            'myexperience': "My Experience",
            'myeducation': "My Education",
            'myskills': "My Skills",
            'myprojects': "My Projects",
            'cv': "CV",
            'back': "Go Back",
        }

        $("#header").load("components/nav.html", () => {
            this.createNav();
        })
        $("#footer").load("components/footer.html")
        this.loadPage();
    }
    createNav() {
        let navItems = Object.keys(this.pageTitles);
        let navList = $(".navbar-nav");

        navItems.forEach(item => {
            // The back button is not a page
            if (item === "back")
                return
            // Home can be accessed by clicking the logo
            if(item === "home")
                return


            let listItem = $('<li>', { class: "nav-item" });
            let link = $('<div>', {
                class: "nav-link fw-bold",
                onclick: `portfolio.goTo('${item}')`
            });
            let title = $('<h2>', { text: this.pageTitles[item],
                style: "color: white; cursor: pointer;"
            });

            link.append(title);
            listItem.append(link);
            navList.append(listItem);
        });
    }

    loadPage(){
        if (history.state === null ) 
            this.goTo('home')

        if(history.state === "cv")
            return window.open(`${basePath}resources/cv.pdf`, "_blank")

        $("#body").load("components/pages/" + history.state + ".html",
            () => {
                this.updateTitle()
            }
        )
        // Load dynamic css and js, the names of the files must be the same as the page
        $("#dynamic-css").remove()
        $("#dynamic-js").remove()

        $('head')
            // Load css
            .append( $('<link rel="stylesheet" type="text/css" />')
            .attr('href', "css/pages/" + history.state + ".css")
            .attr('id', 'dynamic-css'))

            // Load js
            .append( $('<script type="text/javascript" />')
            .attr('src', "javascript/pages/" + history.state + ".js")
            .attr('id', 'dynamic-js')
            .attr('async', true)
        );
    }
    goTo(where) {
        if(where === "back"){
            window.history.back()
            this.loadPage()
            return
        }
        window.history.pushState(where, "", this.url);

        $("#navbarNavDropdown").collapse('hide')
        this.loadPage()
    
    }
    updateTitle(){
        if (history.state !== "home"){
            $("#title-container").show();
            $("#main-title").text(this.pageTitles[history.state]);
        }
        else
            $("#title-container").hide();
    }
}

let basePath;

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    basePath = '/';
} else {
    basePath = '/ValentinDumitrusPortfolio/';
}

const portfolio = new Portfolio();