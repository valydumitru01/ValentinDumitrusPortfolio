

class GraphFactory {
    N_LANGUAGES = 10;
    PATH = "media/brands/";
    IMG_TYPE = ".png";
    LABELS = { js: "Javascript", java: "Java", css: "CSS", py: "Python", sql: "SQL", cpp: "C++", csharp: "C#", php: "PHP", c: "C", ts: "Typescript" };
    IMAGES = new Map()
    PRACTICE_VALUES = new Map()
    PREFERENCE_VALUES = new Map()
    constructor() {
        this.IMAGES.set(this.LABELS.js, "javascript")
        this.IMAGES.set(this.LABELS.java, "java")
        this.IMAGES.set(this.LABELS.css, "css")
        this.IMAGES.set(this.LABELS.py, "python")
        this.IMAGES.set(this.LABELS.sql, "sql")
        this.IMAGES.set(this.LABELS.cpp, "c++")
        this.IMAGES.set(this.LABELS.csharp, "csharp")
        this.IMAGES.set(this.LABELS.php, "php")
        this.IMAGES.set(this.LABELS.c, "c")
        this.IMAGES.set(this.LABELS.ts, "typescript")
        this.PRACTICE_VALUES.set(this.LABELS.js, 100)
        this.PRACTICE_VALUES.set(this.LABELS.java, 100)
        this.PRACTICE_VALUES.set(this.LABELS.css, 100)
        this.PRACTICE_VALUES.set(this.LABELS.css, 100)
        this.PRACTICE_VALUES.set(this.LABELS.py, 40)
        this.PRACTICE_VALUES.set(this.LABELS.sql, 60)
        this.PRACTICE_VALUES.set(this.LABELS.cpp, 80)
        this.PRACTICE_VALUES.set(this.LABELS.csharp, 50)
        this.PRACTICE_VALUES.set(this.LABELS.php, 30)
        this.PRACTICE_VALUES.set(this.LABELS.c, 30)
        this.PRACTICE_VALUES.set(this.LABELS.ts, 30)

        this.PREFERENCE_VALUES.set(this.LABELS.js, 100)
        this.PREFERENCE_VALUES.set(this.LABELS.java, 60)
        this.PREFERENCE_VALUES.set(this.LABELS.css, 100)
        this.PREFERENCE_VALUES.set(this.LABELS.py, 40)
        this.PREFERENCE_VALUES.set(this.LABELS.sql, 40)
        this.PREFERENCE_VALUES.set(this.LABELS.cpp, 100)
        this.PREFERENCE_VALUES.set(this.LABELS.csharp, 80)
        this.PREFERENCE_VALUES.set(this.LABELS.php, 40)
        this.PREFERENCE_VALUES.set(this.LABELS.c, 50)
        this.PREFERENCE_VALUES.set(this.LABELS.ts, 30)
    }
    createData(values_hash) {
        var data_list = [
            { img: this.IMAGES.get(this.LABELS.js), label: this.LABELS.js, value: values_hash.get(this.LABELS.js) },
            { img: this.IMAGES.get(this.LABELS.java), label: this.LABELS.java, value: values_hash.get(this.LABELS.java) },
            { img: this.IMAGES.get(this.LABELS.css), label: this.LABELS.css, value: values_hash.get(this.LABELS.css) },
            { img: this.IMAGES.get(this.LABELS.py), label: this.LABELS.py, value: values_hash.get(this.LABELS.py) },
            { img: this.IMAGES.get(this.LABELS.sql), label: this.LABELS.sql, value: values_hash.get(this.LABELS.sql) },
            { img: this.IMAGES.get(this.LABELS.cpp), label: this.LABELS.cpp, value: values_hash.get(this.LABELS.cpp) },
            { img: this.IMAGES.get(this.LABELS.csharp), label: this.LABELS.csharp, value: values_hash.get(this.LABELS.csharp) },
            { img: this.IMAGES.get(this.LABELS.php), label: this.LABELS.php, value: values_hash.get(this.LABELS.php) },
            { img: this.IMAGES.get(this.LABELS.c), label: this.LABELS.c, value: values_hash.get(this.LABELS.c) },
            { img: this.IMAGES.get(this.LABELS.ts), label: this.LABELS.ts, value: values_hash.get(this.LABELS.ts) }
        ]

        data_list.sort(function (a, b) {
            return b.value - a.value;
        });
        return data_list
    }
    drawEverything() {
        this.drawConfidenceGraph()
        this.drawPreferenceGraph()
    }

    drawConfidenceGraph() {
        function resizeFunction() {
            var graph_width = window.innerWidth * 0.8;
            if (window.innerWidth < 800) {
                graph_width = window.innerWidth;
            }
            return graph_width
        }
        this.drawGraph(this.createData(this.PRACTICE_VALUES), resizeFunction, "How much I used it", 'skill-graph')
        this.addChangeColorOnHoverToGraph('skill-graph', 'rgb(70,90,200)')
        this.addModalToGraphOnClick('skill-graph')

    }
    drawPreferenceGraph() {
        function resizeFunction() {
            var graph_width = window.innerWidth * 0.8;
            if (window.innerWidth < 800) {
                graph_width = window.innerWidth;
            }
            return graph_width
        }
        this.drawGraph(this.createData(this.PREFERENCE_VALUES), resizeFunction, "How much I enjoy it", 'preference-graph')
        this.addChangeColorOnHoverToGraph('preference-graph', 'rgb(70,90,180)')
        this.addModalToGraphOnClick('preference-graph')
    }
    createModalHtml(languageTitle, iconName, bodyHtml) {
        var header = `
        <div class="modal-header">
            <span class="close-modal">&times;</span>
            <img style="width:10vw" src="`+this.PATH+ iconName + this.IMG_TYPE+`"/>
            <h2>`+ languageTitle + `</h2>
        </div>
        `
        var body = `
        <div class="modal-body">`
            + bodyHtml +
            `
        </div>
        `
        var footer = `
        <div class="modal-footer">
          <h3>Modal Footer</h3>
        </div>
        `
        var modalContent = `
        <div class="modal-content">
        `+header+body+footer+`
        </div>
        `
        return modalContent
    }
    addModalToGraphOnClick(idGraph) {
        var event=(data)=>{
            var icon = this.IMAGES.get(data.points[0].label)
            $(".modal").html(this.createModalHtml(data.points[0].label, icon, ""))

            var span = document.getElementsByClassName("close-modal")[0];
            var modal=document.getElementsByClassName("modal")[0];
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
    addChangeColorOnHoverToGraph(idGraph, colorString) {

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
            try {
                var pn = '',
                    tn = '',
                    colors = [];
                pn = data.points[0].pointNumber;
                tn = data.points[0].curveNumber;
                colors = data.points[0].data.marker.color;
                var r = (33 * (100 / data.points[0].value))
                var g = (37 * (100 / data.points[0].value))
                var b = (41 * (100 / data.points[0].value))
                colors[pn] = 'rgb(' + r + "," + g + "," + b + ")";


                var update = { 'marker': { color: colors, size: 16 } };
                Plotly.restyle(idGraph, update, [tn]);
            } catch (e) {

            }
        });

    }
    drawGraph(data_list, resizeFunction, graph_title, graphElementID) {
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
        for (let i = 0; i < this.N_LANGUAGES; i++) {
            //The intention is that the max value results in 33,37,41 which is black
            var r = (33 * (100 / values[i]))
            var g = (37 * (100 / values[i]))
            var b = (41 * (100 / values[i]))
            colors.push("rgb(" + r + "," + g + "," + b + ")")

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
        var images_layout = []
        for (let i = 0; i < this.N_LANGUAGES; i++) {
            images_layout.push({
                x: i / this.N_LANGUAGES + 0.05,
                y: values[i] / 100,
                sizex: imgSize,
                sizey: imgSize,
                source: this.PATH + images[i] + this.IMG_TYPE,
                xanchor: "center",
                xref: "paper",
                yanchor: "bottom",
                yref: "paper"
            })
        }
        const layout = {
            autosize: false,
            width: graph_width,
            margin: {
                l: 35,
                r: 20
            },
            title: graph_title,
            showlegend: false,
            yaxis: { fixedrange: true },
            xaxis: { fixedrange: true },
            images: images_layout
        };
        const config = {
            displayModeBar: false, // this is the line that hides the bar.
        };

        Plotly.newPlot(graphElementID, data, layout, config);
    }
}

