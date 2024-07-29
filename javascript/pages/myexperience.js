$.getJSON(basePath + 'json/pages/myexperience.json', function (jsonData) {
    let html = generateTimelineHTML(jsonData);
    $('.myexperience').html(html);
}).fail(function (jqxhr, textStatus, error) {
    let err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});

