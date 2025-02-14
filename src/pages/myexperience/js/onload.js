
load_json("myexperience", (loaded_json)=>{
    let html = generateTimelineHTML(loaded_json);
    $('.myexperience').html(html);
})