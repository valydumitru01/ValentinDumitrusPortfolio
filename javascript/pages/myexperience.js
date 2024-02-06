function generateEducationHTML(educationJson) {
    let html = '';

    educationJson.experiences.forEach(experience => {
        html += `
    <div class="timeline">
        <span class="icon"><i class="fa ${experience.icon}"></i></span>
        <div class="timeline-content">
            <div class="content-inner">
                <span class="year">
                    <span class="start">${experience.period.start}</span>
                    <span class="dashed-line"></span>
                    <span class="end">${experience.period.end}</span>
                </span>
                <h3 class="title">${experience.title}</h3>
                <p class="description">${experience.description}</p>
            </div>
        </div>
    </div>`;
    });


    return html;
}

function generateRandomPositionsForIcons() {
    let i = 0;
    let baseTop = 10;
    let baseFontSize = 10;
    let baseLeftForEven = 10;
    let baseLeftForOdd = 73;

    $('.education-background-icon').each(function () {
        let randomAdjustment = Math.random() * 5;
        let randomRotation = Math.floor(Math.random() * 360) + 'deg';
        let randomFontSize = Math.floor(baseFontSize + Math.random() * 3) + 'vw';

        let randomTop = Math.floor(baseTop + (1 + i) * 10 + randomAdjustment) + 'vh';
        let randomLeft;
        let animation;

        if (i % 2 === 0) {
            randomLeft = Math.floor(Math.random() * baseLeftForEven) + 'vw';
            animation = 'move_right_to_left_icons 1s ease forwards';
        } else {
            randomLeft = Math.floor(baseLeftForOdd + Math.random() * baseLeftForEven) + 'vw';
            animation = 'move_left_to_right_icons 1s ease forwards';
        }

        $(this).css({
            top: randomTop,
            left: randomLeft,
            transform: 'rotate(' + randomRotation + ')',
            fontSize: randomFontSize,
            animation: animation
        });

        i++;
    });
}

$.getJSON(basePath+'json/pages/myexperience.json', function (jsonData) {
    let html = generateEducationHTML(jsonData);
    generateRandomPositionsForIcons();
    $('.main-timeline').html(html);
}).fail(function (jqxhr, textStatus, error) {
    let err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
});

