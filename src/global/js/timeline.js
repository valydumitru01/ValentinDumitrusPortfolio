function generateTimelineHTML(educationJson) {
    let html = '<div class="timeline">';

    educationJson.list.forEach(experience => {
        html += `
    <span class="duration">${experience.period.duration}</span>
    <span class="timeline-point"></span>
    <div class="timeline-event">
            <div class="content-inner">
                <span class="year">
                    <span class="start">${experience.period.start}</span>
                    <span class="separator">-</span>
                    <span class="end">${experience.period.end}</span>
                </span>
                <h3 class="title"><i class="fa ${experience.icon}"></i> ${experience.title}</h3>
                <p class="description">${experience.description}</p>
            </div>
    </div>`;
    });

    html += '</div>';

    return html;
}

