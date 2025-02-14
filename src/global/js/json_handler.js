function load_json(relative_path, callback) {
    $.getJSON(basePath + relative_path, function (jsonData) {
        callback(jsonData);
    }).fail(function (jqxhr, textStatus, error) {
        let err = textStatus + ", " + error;
        console.log("Request Failed: " + err);
    });

}

function load_page_json(page_name, callback) {
    load_json('src/pages/' + page_name + '/json/data.json', callback);
}