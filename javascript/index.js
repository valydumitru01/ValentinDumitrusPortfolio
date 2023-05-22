
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

        $("#body").load("components/pages/" + history.state + ".html",
            () => {
                this.updateTitle()
            }
        )
    }
    goTo(where) {
        console.log("Going to " + where)
        console.log("Old History state: " + history.state)
        console.log(history)
        if(where === "back"){
            window.history.back()
            this.loadPage()
            return
        }
        window.history.pushState(where, "", this.url);
        console.log("New History state: " + history.state)
    
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

const portfolio = new Portfolio();