const IMAGE_COLLAGE = {
	base: `
	<div class="images row">
		{columns}
	</div>
	<div id="image-viewer">
	  <span class="close">&times;</span>
	  <img class="modal-content" id="full-image" alt="full image" src="">
	</div>`,
	column: `
	<div class="column">
		{images}
	</div>`,
	image: `
    <img src="{src}" alt="{alt}">`
}

function generate_image_collage(imageFileNames, basePath) {
	let columnsHTML = ["", "", "", ""];
	for (let i = 0; i < imageFileNames.length; i++) {
		let imagePath = basePath + imageFileNames[i];
		let colIndex = i % 4;
		columnsHTML[colIndex] += fillTemplate(IMAGE_COLLAGE.image, {
			src: imagePath,
			alt: imageFileNames[i]
		});
	}
	let columns = "";
	for (let i = 0; i < 4; i++) {
		columns += fillTemplate(IMAGE_COLLAGE.column, { images: columnsHTML[i] });
	}
	return fillTemplate(IMAGE_COLLAGE.base, { columns: columns });
}