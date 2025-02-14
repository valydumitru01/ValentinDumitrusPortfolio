const PAGES = {
	HOME: 'home',
	CV: 'cv',
	ABOUT_ME: 'aboutme',
	MY_EXPERIENCE: 'myexperience',
	MY_EDUCATION: 'myeducation',
	MY_SKILLS: 'myskills',
	MY_PROJECTS: 'myprojects'
}

function isPage(page) {
	return Object.values(PAGES).includes(page);
}

const PAGE_TITLES = {
	[PAGES.HOME]: 'Home',
	[PAGES.CV]: 'CV',
	[PAGES.ABOUT_ME]: 'About Me',
	[PAGES.MY_EXPERIENCE]: 'My Experience',
	[PAGES.MY_EDUCATION]: 'My Education',
	[PAGES.MY_SKILLS]: 'My Skills',
	[PAGES.MY_PROJECTS]: 'My Projects'
}

let basePath;
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
	basePath = '/';
} else {
	basePath = '/ValentinDumitrusPortfolio/';
}


const NAME = 'Valentin Dumitru';
const DATE_OF_PORTFOLIO_CREATION = '2021';
const EMAIL = 'valentindmtr115@gmail.com';
const PHONES = [{
	number: '+31610971413', country: 'Netherlands'
}, {
	number: '+34651953462', country: 'Spain'
}]
const LOCATION = 'Netherlands';
const BIRTH_LOCATION = 'Romania';
const BIRTH_DATE = {
	day: 11, month: 5, year: 2001
}

/**
 * Object containing the contact information of the user.
 * @type {{LINKEDIN: {link: string, icon: string, username: string}, GITHUB: {link: string, icon: string, username: string}, YOUTUBE: {link: string, icon: string, username: string}, X: {link: string, icon: string, username: string}, MAIL: {link: string, icon: string, username: string}, PHONE1: {link: string, icon: string, username: string}, PHONE2: {link: string, icon: string, username: string}}}
 */
const CONTACT = {
	LINKEDIN: {
		link: 'https://www.linkedin.com/in/valentin-dumitru/',
		icon: 'fab fa-linkedin',
		username: '@valentin-dumitru'
	},
	GITHUB: {
		link: 'https://www.github.com/valydumitru01',
		icon: 'fab fa-github',
		username: '@valydumitru01'
	},
	YOUTUBE: {
		link: 'https://www.youtube.com/@valentindmtr115',
		icon: 'fab fa-youtube',
		username: '@valentindmtr115'
	},
	X: {
		link: 'https://x.com/valentindmtr115',
		icon: 'fab fa-twitter',
		username: '@valentindmtr115'
	},
	MAIL: {
		link: 'mailto:'+EMAIL,
		icon: 'fas fa-envelope',
		username: EMAIL
	},
	PHONE1: {
		link: 'tel:'+PHONES[0].number,
		icon: 'fas fa-phone',
		username: PHONES[0].number
	},
	PHONE2: {
		link: 'tel:'+PHONES[1].number,
		icon: 'fas fa-phone',
		username: PHONES[1].number
	}
}

const COUNTRY_CODES = {
	Netherlands: 'NL',
	Romania: 'RO',
	Spain: 'ES',
	UnitedStates: 'US',
	France: 'FR',
	Germany: 'DE',
}

const COUNTRY_FLAGS_PATH = 'src/global/res/imgs/flags/';
const COUNTRY_FLAGS_EXT = '.png';
const COUNTRY_FLAGS = {
	Netherlands: COUNTRY_CODES.Netherlands,
	Romania: COUNTRY_CODES.Romania,
	Spain: COUNTRY_CODES.Spain,
	UnitedStates: COUNTRY_CODES.UnitedStates,
	France: COUNTRY_CODES.France,
	Germany: COUNTRY_CODES.Germany,
}

const BRAND_IMAGES_PATH = 'src/global/res/imgs/brands/';
const BRAND_IMAGES_EXT = '.png';

const BRAND_IMAGES={
	antlr:'antlr',
	blender:'blender',
	bootstrap:'bootstrap',
	c:'c',
	canvas:'canvas',
	cpp:'c++',
	csharp:'c#',
	css:'css',
	eclipse:'eclipse',
	hsqldb:'hsqldb',
	html:'html5',
	intellij:'intellij',
	java:'java',
	javascript:'javascript',
	jdbc:'jdbc',
	jquery:'jquery',
	json:'json',
	makefile:'makefile',
	mongodb:'mongodb',
	nodejs:'nodejs',
	opengl:'opengl',
	photoshop:'photoshop',
	php:'php',
	python:'python',
	react:'react',
	sdl:'sdl',
	sql:'sql',
	typescript:'typescript',
	unity:'unity',
	unrealEngine:'ue',
	vscode:'vscode',
	bash:'bash',
	linux:'linux',
	latex:'latex',
	cmake:'cmake',
	xml:'xml',
	yaml:'yaml',
	markdown:'markdown',
	doxygen:'doxygen',
	r : 'r',
	matlab : 'matlab',
	angular : 'angular',
	springboot : 'springboot',
	git : 'git',
	docker : 'docker',
	microsoftOffice : 'microsoftOffice',
	android : 'android',
	msvs : 'msvs',
	clion : 'clion',
	compodoc : 'compodoc',
	mermaid : 'mermaid',
	drawio : 'drawio',
	cppdepend : 'cppdepend',
	eslint : 'eslint',
	nsight : 'nsight',
	gimp : 'gimp',
	
}
