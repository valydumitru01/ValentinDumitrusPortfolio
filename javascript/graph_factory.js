

class GraphFactory {
    BRANDS_PATH = "media/brands/";
    IMG_TYPE = ".png";

    prog_lang_data
    ide_data
    tool_data
    language_data
    web_dev_data
    LANGUAGE_LEVELS = ["Not a word", "Some sentences", "Struggling conversations", "Fluent", "Native"]
    constructor() {
        this.prog_lang_data = [
            {
                label: "Javascript",
                libraries: [
                    { name: "Nodejs", image_name: "nodejs", description: "My most used framework" },
                    { name: "React", image_name: "react", description: "" },
                    { name: "Plotly", image_name: "plotly", description: "My favorite graph visualizer" },
                    { name: "Canvas", image_name: "canvas", description: "Nice programmable component" }
                ],
                description: "",
                preference_value: 100,
                practice_value: 100,
                image_name: "javascript"
            },
            {
                label: "Java",
                libraries: [
                    { name: "WindowBuilder", image_name: "windowbuilder", description: "Java GUI tool" },
                    { name: "JDBC", image_name: "jdbc", description: "I used it most of the times that a database query was needed in java." },
                    { name: "ANTLR", image_name: "antlr", description: "I created a programming language analysis and compiler during my degree." }
                ],
                description: "",
                preference_value: 70,
                practice_value: 100,
                image_name: "java"
            },
            {
                label: "CSS",
                libraries: [
                    { name: "Bootstrap", image_name: "bootstrap", description: "I like it" },
                    { name: "MUI", image_name: "mui", description: "I like it" },
                    { name: "FontAwesome", image_name: "fa", description: "I like it" }
                ],
                description: "",
                preference_value: 100,
                practice_value: 100,
                image_name: "css"
            },
            {
                label: "Python",
                libraries: [
                    { name: "Matplotlib", image_name: "matplotlib", description: "I like it" }
                ],
                description: "",
                preference_value: 50,
                practice_value: 60,
                image_name: "python"
            },
            {
                label: "SQL",
                libraries: [
                    { name: "MongoDB", image_name: "mongodb", description: "I like it" },
                    { name: "HSQLDB", image_name: "hsqldb", description: "I like it" }
                ],
                description: "",
                preference_value: 30,
                practice_value: 60,
                image_name: "sql"
            },
            {
                label: "C++",
                libraries: [
                    { name: "OpenGL", image_name: "opengl", description: "" },
                    { name: "Makefile", image_name: "makefile", description: "I used it with almost all my c++ programs" },
                    { name: "SDL2", image_name: "sdl", description: "I used it by my own and during a videogames subject during my degree. Also with their sub-libraries (e.g. SDL_ttf)" }
                ],
                description: "",
                preference_value: 100,
                practice_value: 70,
                image_name: "c++"
            },
            {
                label: "PHP",
                libraries: [
                ],
                description: "",
                preference_value: 50,
                practice_value: 30,
                image_name: "php"
            },
            {
                label: "C",
                libraries: [
                ],
                description: "",
                preference_value: 50,
                practice_value: 20,
                image_name: "c"
            },
            {
                label: "Typescript",
                libraries: [
                    { name: "React", image_name: "react", description: "I like it" }
                ],
                description: "",
                preference_value: 50,
                practice_value: 30,
                image_name: "typescript"
            },
            {
                label: "C#",
                libraries: [
                ],
                description: "",
                preference_value: 70,
                practice_value: 30,
                image_name: "csharp"
            }
        ]

        this.ide_data = [
            {
                label: "Visual Studio Code",
                libraries: [
                    { name: "Javascript + React", image_name: "react", description: "" },
                    { name: "C++ + Makefile + OpenGL", image_name: "opengl", description: "" },
                    { name: "HTML5 + CSS + Javascript", image_name: "javascript", description: "" }
                ],
                description: "Definitely my number one. Who doesn't like vscode?",
                preference_value: 100,
                practice_value: 100,
                image_name: "vscode"
            },
            {
                label: "Microsoft Visual Studio",
                libraries: [
                    { name: "C++", image_name: "c++", description: "" },
                    { name: "C#", image_name: "csharp", description: "" }
                ],
                description: "I know how to use it, but for some reason I've never liked it. (Maybe because of the amount of times it crashes)",
                preference_value: 30,
                practice_value: 50,
                image_name: "mvs"
            },
            {
                label: "Eclipse",
                libraries: [
                    { name: "Java", image_name: "java", description: "" }
                ],
                description: "The main IDE that I've used during my career.",
                preference_value: 60,
                practice_value: 100,
                image_name: "eclipse"
            },
            {
                label: "IntelliJ",
                libraries: [
                    { name: "Javascript + AJAX", image_name: "ajax", description: "" },
                    { name: "Javascript + Nodejs", image_name: "nodejs", description: "" }
                ],
                description: "The main IDE that I've used during my career.",
                preference_value: 70,
                practice_value: 50,
                image_name: "intellij"
            },
            {
                label: "Sublime",
                libraries: [
                    { name: "C++ + SDL", image_name: "c++", description: "" }
                ],
                description: "I tried it once, not bad.",
                preference_value: 50,
                practice_value: 10,
                image_name: "sublime"
            },
            {
                label: "Pycharm",
                libraries: [
                    { name: "Python", image_name: "python", description: "" }
                ],
                description: "My main IDE for python.",
                preference_value: 70,
                practice_value: 30,
                image_name: "pycharm"
            }
        ]
        this.tool_data = [
            {
                label: "Unreal Engine",
                libraries: [
                ],
                description: "",
                preference_value: 70,
                practice_value: 40,
                image_name: "ue"
            },
            {
                label: "Unity",
                libraries: [
                ],
                description: "",
                preference_value: 60,
                practice_value: 25,
                image_name: "unity"
            },
            {
                label: "Blender",
                libraries: [
                ],
                description: "",
                preference_value: 80,
                practice_value: 70,
                image_name: "blender"
            },
            {
                label: "Photoshop",
                libraries: [
                ],
                description: "",
                preference_value: 80,
                practice_value: 50,
                image_name: "photoshop"
            }
        ]

        this.language_data = [
            {
                label: "Spanish",
                practice_value: 4,
                image_name: "spain"
            },
            {
                label: "English",
                practice_value: 3,
                image_name: "usa"
            },
            {
                label: "Romanian",
                practice_value: 2,
                image_name: "romania"
            }
        ]
        this.web_dev_data = [
            {
                label: "FrontEnd",
                practice_value: 100
            },
            {
                label: "BackEnd",
                practice_value: 50
            },
            {
                label: "FullStack",
                practice_value: 50
            }
        ]
        this.prog_lang_data.sort(function (a, b) {
            return b.practice_value - a.practice_value;
        });
        this.ide_data.sort(function (a, b) {
            return b.practice_value - a.practice_value;
        });
        this.tool_data.sort(function (a, b) {
            return b.practice_value - a.practice_value;
        });
    }
    createModalBody(data_json_libraries) {
        var body = `
        <section class="no-content-in-modal">
            <img src=/media/no-content-modal`+ this.IMG_TYPE + ` />
            <p class="black-white-text"> Nothing important for now... </p>    
        </section>`
        var thereIsContent = false
        data_json_libraries.forEach(library => {
            if (thereIsContent == false) {
                body = ""
            }
            thereIsContent = true
            body += `
            <section>
            <header>
                <h2 class="black-white-text">`+ library.name + ` </h2>
                <img src="`+ this.BRANDS_PATH + library.image_name + this.IMG_TYPE + `"/>
            </header>
            <p class="black-white-text">
                `+ library.description + `
            </p>
            </section>
            `
        });
        return body
    }


    createData(json_data) {
        var data_list = []
        json_data.forEach(prog_lang => {
            data_list.push({ img: prog_lang.image_name, label: prog_lang.label, value: prog_lang.practice_value })
        });
        return data_list
    }
    drawEverything() {
        this.drawProgrammingLanguagesGraph()
        this.drawIDEsGraph()
        this.drawToolsGraph()
        this.drawLanguageGraph()
        this.createWebDevGraph()
    }

    drawProgrammingLanguagesGraph() {
        function resizeFunction() {
            var graph_width = window.innerWidth * 0.8;
            if (window.innerWidth < 800) {
                graph_width = window.innerWidth;
            }
            return graph_width
        }
        this.drawBarGraph(this.createData(this.prog_lang_data), resizeFunction, "How much I used it", "", "Percentage (%)", 0, 'prog-lang-graph')
        this.addChangeColorOnHoverToGraph('prog-lang-graph', this.prog_lang_data, 'rgb(70,90,200)')
        this.addModalToGraphOnClick('prog-lang-graph', this.prog_lang_data)

    }
    drawIDEsGraph() {
        function resizeFunction() {
            var graph_width = window.innerWidth * 0.8;
            if (window.innerWidth < 800) {
                graph_width = window.innerWidth;
            }
            return graph_width
        }
        this.drawBarGraph(this.createData(this.ide_data), resizeFunction, "How much I used it", "", "Percentage (%)", 0, 'ides-graph')
        this.addChangeColorOnHoverToGraph('ides-graph', this.ide_data, 'rgb(70,90,200)')
        this.addModalToGraphOnClick('ides-graph', this.ide_data)
    }
    drawToolsGraph() {
        function resizeFunction() {
            var graph_width = window.innerWidth * 0.8;
            if (window.innerWidth < 800) {
                graph_width = window.innerWidth;
            }
            return graph_width
        }
        this.drawBarGraph(this.createData(this.tool_data), resizeFunction, "How much I used it", "", "Percentage (%)", 0, 'tools-graph')
        this.addChangeColorOnHoverToGraph('tools-graph', this.tool_data, 'rgb(70,90,200)')
    }
    drawLanguageGraph() {
        function resizeFunction() {
            var graph_width = window.innerWidth * 0.5;

            return graph_width
        }
        this.drawBarGraph(this.createData(this.language_data), resizeFunction, "", "", "Level", -1.3, 'language-graph')
        this.addChangeColorOnHoverToGraph('language-graph', this.language_data, 'rgb(200,90,100)')


        $("#language-legend").html("")
        for (let index = 0; index < this.LANGUAGE_LEVELS.length; index++) {
            const element = this.LANGUAGE_LEVELS[index];
            var content = $("#language-legend").html()
            $("#language-legend").html(content + "<span> Level " + index + "->" + element + "</span>")
        }


    }
    createWebDevGraph() {
        function resizeFunction() {
            var graph_width = window.innerWidth * 0.5;

            return graph_width
        }
        this.drawPieGraph(this.createData(this.web_dev_data), resizeFunction, 'frontend-backend-graph')
    }
    createModalHtml(language_json, max_value) {
        var header = `
        <div class="modal-header">
            <span class="close-modal black-white-text-hover">&times;</span>
            <div class="modal-title">
                <img style="width:10vw" src="`+ this.BRANDS_PATH + language_json.image_name + this.IMG_TYPE + `"/>
                <h2 class="black-white-text">`+ language_json.label + `</h2>
            </div>
        </div>`

        var body =
            `<div class="modal-body" >`
            + this.createModalBody(language_json.libraries) +
            `</div>`

        var footer =
            `<div class="modal-footer">
          <p class="black-white-text"> 
          How much I like `+ language_json.label + ` from 0 to 100: 
          <span class=\"preference-rate-value\">`+ language_json.preference_value + ` </span>
          </p>
        </div>`
        var rgb = this.calcRgbByValue(language_json.practice_value,max_value)


        var modalContent = `
        <div style="background-color:`+ `rgb(` + rgb.r + "," + rgb.g + "," + rgb.b + `)" class="modal-content">
        `+ header + body + footer + `
        </div>
        `
        return modalContent
    }
    addModalToGraphOnClick(idGraph, json_data) {
        var event = (data) => {
            var pn = data.points[0].pointNumber
            const values = json_data.map(function (a) {
                return a.practice_value;
            })
            var max=Math.max(...values)

            console.log(max)
            $(".modal").html(this.createModalHtml(json_data[pn],max))

            var span = document.getElementsByClassName("close-modal")[0];
            var modal = document.getElementsByClassName("modal")[0];
            modal.style.display = "block";

            span.onclick = function () {
                modal.style.display = "none";
            }

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
        document.getElementById(idGraph).on('plotly_click', event.bind(this));
    }
    addChangeColorOnHoverToGraph(idGraph, json_data, colorString) {
        var self = this
        document.getElementById(idGraph).on('plotly_hover', function (data) {
            try {
                var pn = '',
                    tn = '',
                    colors = [];
                pn = data.points[0].pointNumber;
                tn = data.points[0].curveNumber;
                colors = data.points[0].data.marker.color;
                colors[pn] = colorString;

                var update = { 'marker': { color: colors, size: 16 } };
                Plotly.restyle(idGraph, update, [tn]);
            } catch (e) {

            }

        });
        document.getElementById(idGraph).on('plotly_unhover', function (data) {


            var pn = '',
                tn = '',
                colors = [];
            pn = data.points[0].pointNumber;
            tn = data.points[0].curveNumber;
            colors = data.points[0].data.marker.color;
            const values = json_data.map(function (a) {
                return a.practice_value;
            })
            var max=Math.max(...values)

            var rgb = self.calcRgbByValue(json_data[pn].practice_value,max)

            colors[pn] = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")"


            var update = { 'marker': { color: colors, size: 16 } };
            Plotly.restyle(idGraph, update, [tn]);

        });

    }
    calcRgbByValue(value, maxValue) {
        var r = Math.min((33 * (maxValue / value)), 200)
        var g = Math.min((37 * (maxValue / value)), 200)
        var b = Math.min((41 * (maxValue / value)), 200)
        return { r: r, g: g, b: b }
    }
    drawPieGraph(data_list, resizeFunction, graphElementID) {
        const values = data_list.map(function (a) {
            return a.value;
        })
        const labels = data_list.map(function (a) {
            return a.label;
        })

        var colors = []
        var max_value = Math.max(...values)
        var pull=[]
        for (let i = 0; i < data_list.length; i++) {
            var data = data_list[i]
            var rgb = this.calcRgbByValue(data.value, max_value)
            var random=30*Math.random()
            colors.push("rgb(" + (rgb.r+random) + "," + (rgb.g+random) + "," + (rgb.b+random)+ ")")
            pull.push(0.03)
        }
        var graph_width = resizeFunction();
        var data = [{
            type: "pie",
            values: values,
            labels: labels,
            textinfo: "label+percent",
            insidetextorientation: "radial",
            pull: pull,
            marker: {
                colors: colors,
                line: {
                    width: 3,
                    width: [3, 0, 0]
                }
            }
        }]

        var layout = [{
            width: graph_width,
            showlegend: false
        }]
        const config = {
            displayModeBar: false, // this hides the bar.
        };
        Plotly.newPlot(graphElementID, data, layout, config)
    }
    drawBarGraph(data_list, resizeFunction, graph_title, x_title, y_title, x_offset, graphElementID) {
        var imgSize = window.innerWidth / 7000
        if (window.innerWidth < 700) {
            imgSize = window.innerWidth / 3000
        } else if (window.innerWidth < 1000) {
            imgSize = window.innerWidth / 5000
        }

        var graph_width = resizeFunction();

        const values = data_list.map(function (a) {
            return a.value;
        })
        const labels = data_list.map(function (a) {
            return a.label;
        })
        const images = data_list.map(function (a) {
            return a.img;
        })

        var colors = []
        var images_layout = []
        var y_offset = 0
        var max_value = Math.max(...values)

        for (let i = 0; i < data_list.length; i++) {

            y_offset = 100 * (values[i] / max_value)

            var data = data_list[i]
            //The intention is that the max value results in 33,37,41 which is black~ish
            var rgb = this.calcRgbByValue(data.value, max_value)

            colors.push("rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")")
            images_layout.push({
                x: (i + 0.5) / (data_list.length),
                y: (y_offset) / 100,
                sizex: imgSize,
                sizey: imgSize,
                source: this.BRANDS_PATH + images[i] + this.IMG_TYPE,
                xanchor: "center",
                xref: "paper",
                yanchor: "bottom",
                yref: "paper"
            })
        }
        var data = [
            {
                x: labels,
                y: values,
                type: 'bar',
                marker: {
                    color: colors
                },
            }
        ];


        const layout = {
            autosize: false,
            width: graph_width,
            margin: {
                l: 35,
                r: 20
            },
            title: graph_title,
            showlegend: false,
            yaxis: { title: y_title, fixedrange: true },
            xaxis: { title: x_title, fixedrange: true },
            images: images_layout
        };
        const config = {
            displayModeBar: false, // this hides the bar.
        };

        Plotly.newPlot(graphElementID, data, layout, config);
    }
}

