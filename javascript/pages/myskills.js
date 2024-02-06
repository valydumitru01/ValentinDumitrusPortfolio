$(document).ready(function () {
    $.getJSON('/json/pages/myskills.json', function (data) {
        $('#programming-languages').html(buildTable(data.programmingLanguages, 'Programming Languages'));
        $('#ides').html(buildTable(data.ides, 'Integrated Development Environments (IDEs)'));
        $('#software-tools').html(buildTools(data.softwareTools, 'Software Tools'));
        $('#other-skills').html(buildTable(data.other, 'Other'));
        $('#languages').html(buildLanguagesTable(data.languages, 'Languages'));
    });
});

function buildTable(contents, title) {
    let html = `<h2 class="text-center text-uppercase font-weight-bold mb-3">${title}</h2>`;
    html += '<div class="table-responsive"><table class="table table-bordered"><tbody>';
    $.each(contents, function (key, value) {
        html += `<tr><th class="bg-dark text-white">${key}</th><td class="bg-light">${value.join(', ')}</td></tr>`;
    });
    html += '</tbody></table></div>';
    return html;
}

function buildTools(tools, title) {
    let html = `<h2 class="text-center text-uppercase font-weight-bold mb-3">${title}</h2>`;
    html += '<div class="bg-dark text-white p-2">';
    html += tools.join(', ');
    html += '</div>';
    return html;
}

function buildLanguagesTable(languages, title) {
    let html = `<h2 class="text-center text-uppercase font-weight-bold mb-3">${title}</h2>`;
    html += '<div class="table-responsive"><table class="table table-bordered"><tbody>';
    $.each(languages, function (index, language) {
        html += `<tr>
            <th class="bg-dark text-white">
            <img src="/media/flags/${language.flag}.jpg" alt="${language.language}" 
                class="flag" style="width:2em; margin-right: 1em; border: 1px solid white;
                position: relative; bottom: 0.6em; right: 0.4em;">
            <p style="position: relative; bottom: 0.4em; text-align: center">
                ${language.language}</p>
            </th><td class="bg-light">${language.level}`

        if (language.certificate !== "") {
            html += `<p><a style="btn btn-primary btn-sm width: 100%" 
                        href="/resources/certificates/${language.certificate}.pdf" >Open Certificate
                    </a></p>`;
        }
        html += ` </td></tr>`;
    });
    html += '</tbody></table></div>';
    return html;
}