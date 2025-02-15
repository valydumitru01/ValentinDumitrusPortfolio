/**
 *
 * Define the object in the comment
 * @param {Array.<{period: {duration: string, start: string, end: string}, icon: string, title: string, description:
 *     string}>} events The events to generate the timeline from
 * @returns {string}
 */
function generateTimelineHTML(events) {
	let html = '<div class="timeline">';
	
	events.forEach(event => {
		html += `
    <span class="duration">${event.period.duration}</span>
    <span class="timeline-point"></span>
    <div class="timeline-event">
            <div class="content-inner">
                <span class="year">
                    <span class="start">${event.period.start}</span>
                    <span class="separator">-</span>
                    <span class="end">${event.period.end}</span>
                </span>
                <h3 class="title"><i class="fa ${event.icon}"></i> ${event.title}</h3>
                <p class="description">${event.description}</p>
            </div>
    </div>`;
	});
	
	html += '</div>';
	
	return html;
}

