$.getJSON(basePath + 'json/pages/myeducation.json', function (jsonData) {
    let html = generateTimelineHTML(jsonData);
    $('.myeducation').html(html);
}).fail(function (jqxhr, textStatus, error) {
    let err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});

