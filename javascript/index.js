
class Portfolio{
    pageTitles = {}
    url = new URL(window.location)
    
    constructor() {
        this.pageTitles['home'] = "Home"
        this.pageTitles['aboutme'] = "About Me"
        this.pageTitles['myexperience'] = "My Experience"
        this.pageTitles['myprojects'] = "My Projects"
        this.pageTitles['myskills'] = "My Skills"

        $("#header").load("components/nav.html")
        $("#footer").load("components/footer.html")

        this.loadPage()
    }

    loadPage(){
        if (history.state === null ) 
        this.goTo('home')
        console.log("HISTORY STATE: " + history.state)
        
        $("#body").empty()
        $("#page-title").html("")
        $("#body").load("components/pages/" + history.state + ".html", () => {
            this.updateTitle()
        })
    }
    goTo(where) {
        window.history.pushState(where, "", this.url);
    
        $("#navbarNavDropdown").collapse('hide')
        //window.scroll({top: 180});
        this.loadPage()
    
    }
    updateTitle(){
        if (history.state !== "home")
                $("#page-title").html(this.pageTitles[history.state])
            else
                $("#page-title").hide();
    }
}

var portfolio = new Portfolio()