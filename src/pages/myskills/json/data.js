// Define your numeric levels for easy sorting
var LEVELS = {
	basic       : 1,
	intermediate: 2,
	advanced    : 3,
	expert      : 4
};


// Define categories for grouping software
var CATEGORIES = {
	programming: "Programming Languages & Scripting",
	libraries  : "Frameworks & Libraries",
	tools      : "Tools & IDEs",
	game       : "Game Dev & Graphics"
};

// Updated data using numeric levels and category references
DATA = {
	engineering: [
		{
			title      : "Real-Time Development",
			description: "Expert in Real-Time development techniques and strategies. Expert in real time architectures and design. Expert in real-time debugging and testing. Expert in real-time performance optimization."
		}, {
			title      : "Web Development",
			description: "Full-stack expertise (vanilla JS/CSS/HTML, Angular, Bootstrap, SpringBoot). Expert in UI/UX design and development. Expert in accessibility and responsive design. Expert in RESTful APIs."
		}, {
			title      : "Documentation",
			description: "Proficient in writing understandable and maintainable documentation for different projects. Including writing meaningful comments, README files, user manuals, different kind of diagrams, automated documentation, etc."
		}, {
			title      : "Testing",
			description: "Expert in writing unit, integration and E2E tests for different kind of projects. Knowledge in testing documentation and planning with black-box (such as equivalence classes) and white-box testing."
		}, {
			title      : "Requirements Analysis",
			description: "Knowledge in writing and analyzing requirements for projects. Including writing user stories, use cases, functional and non-functional requirements, etc."
		}, {
			title      : "Project Planning and Management",
			description: "Knowledge in planning and managing projects. Including writing:\n -Gantt charts, PERT diagrams, WBS, etc. \n -Risk management, quality assurance, etc. \n -Agile methodologies (Scrum, Kanban, etc.) \n -Budgeting: cost estimation, cost control, etc."
		}, {
			title      : "Performance & Optimization",
			description: "Expert in optimizing performance, memory usage and maintainability. Knowledge in writing efficient algorithms, parallelism, memory access optimization, etc. Knowledge of techniques and concepts such as Big O notation, cache optimization, temporal and spatial locality and more."
		}, {
			title      : "Databases",
			description: "Expert in designing and managing databases. Knowledge of different theoretical concepts such as database normalization, ACID properties and queries concepts such as joins, subqueries, etc."
		}, {
			title      : "Security",
			description: "Knowledge in writing secure code. Knowledge in different security concepts such as encryption, hashing, authentication, authorization, etc. Knowledge in different security vulnerabilities and how to prevent them. Including website security and secure coding practices."
		}, {
			title      : "Algorithms & Data Structures",
			description: "Expert in algorithms and data structures. Knowledge in different algorithms such as sorting, searching, graph algorithms, etc. Knowledge in different data structures such as arrays, linked lists, trees, hash tables, etc. Knowledge in different algorithmic techniques such as dynamic programming, greedy algorithms, heuristic algorithms, etc."
		}, {
			title      : "Design Patterns & Architectures",
			description: "Expert in design patterns. Knowledge in different design patterns such as creational, structural and behavioral. Expert in Layered Architecture, Domain Driven Design, and Model-View-Controller."
		}, {
			title      : "Game Development",
			description: "Expert in game development. Knowledge in different game engines such as Unity, Unreal Engine, etc. Expert in game engine: architecture, design, development, testing, rendering, physics, patterns, input, maths, GPU programming, etc. Expert in game development: game loops, game states, game design, game mechanics, game optimizations, etc."
		}
	],
	software   : [
		// Programming Languages & Scripting
		{
			title   : "C++",
			level   : LEVELS.expert,
			file    : BRAND_IMAGES.cpp,
			category: CATEGORIES.programming
		}, {
			title   : "Java",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.java,
			category: CATEGORIES.programming
		}, {
			title   : "JavaScript",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.javascript,
			category: CATEGORIES.programming
		}, {
			title   : "TypeScript",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.typescript,
			category: CATEGORIES.programming
		}, {
			title   : "Python",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.python,
			category: CATEGORIES.programming
		}, {
			title   : "SQL",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.sql,
			category: CATEGORIES.programming
		}, {
			title   : "HTML",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.html,
			category: CATEGORIES.programming
		}, {
			title   : "CSS",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.css,
			category: CATEGORIES.programming
		}, {
			title   : "Bash",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.bash,
			category: CATEGORIES.programming
		}, {
			title   : "LaTeX",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.latex,
			category: CATEGORIES.programming
		}, {
			title   : "CMake",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.cmake,
			category: CATEGORIES.programming
		}, {
			title   : "Makefile",
			level   : LEVELS.expert,
			file    : BRAND_IMAGES.makefile,
			category: CATEGORIES.programming
		}, {
			title   : "XML",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.xml,
			category: CATEGORIES.programming
		}, {
			title   : "JSON",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.json,
			category: CATEGORIES.programming
		}, {
			title   : "YAML",
			level   : LEVELS.basic,
			file    : BRAND_IMAGES.yaml,
			category: CATEGORIES.programming
		}, {
			title   : "Markdown",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.markdown,
			category: CATEGORIES.programming
		}, {
			title   : "R",
			level   : LEVELS.basic,
			file    : BRAND_IMAGES.r,
			category: CATEGORIES.programming
		}, {
			title   : "Matlab",
			level   : LEVELS.basic,
			file    : BRAND_IMAGES.matlab,
			category: CATEGORIES.programming
		}, {
			title   : "PHP",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.php,
			category: CATEGORIES.programming
		}, {
			title   : "Antlr",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.antlr,
			category: CATEGORIES.programming
		}, {
			title   : "C#",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.csharp,
			category: CATEGORIES.programming
		}, {
			title   : "C",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.c,
			category: CATEGORIES.programming
		},
		{
			title   : "Rust",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.rust,
			category: CATEGORIES.programming
		},
		
		// Frameworks & Libraries
		{
			title   : "React",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.react,
			category: CATEGORIES.libraries
		}, {
			title   : "Angular",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.angular,
			category: CATEGORIES.libraries
		}, {
			title   : "Bootstrap",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.bootstrap,
			category: CATEGORIES.libraries
		}, {
			title   : "SpringBoot",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.springboot,
			category: CATEGORIES.libraries
		}, {
			title   : "Node.js",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.nodejs,
			category: CATEGORIES.libraries
		}, {
			title   : "MongoDB",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.mongodb,
			category: CATEGORIES.libraries
		}, {
			title   : "SDL",
			level   : LEVELS.expert,
			file    : BRAND_IMAGES.sdl,
			category: CATEGORIES.libraries
		}, {
			title   : "OpenGL",
			level   : LEVELS.expert,
			file    : BRAND_IMAGES.opengl,
			category: CATEGORIES.libraries
		}, {
			title : "Vulkan",
			level : LEVELS.intermediate,
			file : BRAND_IMAGES.vulkan,
			category : CATEGORIES.libraries
		}, {
			title   : "Android",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.android,
			category: CATEGORIES.libraries
		},
		
		// Tools & IDEs
		{
			title   : "Git",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.git,
			category: CATEGORIES.tools
		}, {
			title   : "Docker",
			level   : LEVELS.basic,
			file    : BRAND_IMAGES.docker,
			category: CATEGORIES.tools
		}, {
			title   : "Microsoft Office",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.microsoftOffice,
			category: CATEGORIES.tools
		}, {
			title   : "Linux",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.linux,
			category: CATEGORIES.tools
		},{
			title   : "Visual Studio Code",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.vscode,
			category: CATEGORIES.tools
		}, {
			title   : "Microsoft Visual Studio",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.msvs,
			category: CATEGORIES.tools
		}, {
			title   : "CLion",
			level   : LEVELS.expert,
			file    : BRAND_IMAGES.clion,
			category: CATEGORIES.tools
		}, {
			title   : "Eclipse",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.eclipse,
			category: CATEGORIES.tools
		}, {
			title   : "IntelliJ IDEA",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.intellij,
			category: CATEGORIES.tools
		}, {
			title   : "Doxygen",
			level   : LEVELS.expert,
			file    : BRAND_IMAGES.doxygen,
			category: CATEGORIES.tools
		}, {
			title   : "Compodoc",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.compodoc,
			category: CATEGORIES.tools
		}, {
			title   : "Mermaid",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.mermaid,
			category: CATEGORIES.tools
		}, {
			title   : "Draw.io",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.drawio,
			category: CATEGORIES.tools
		}, {
			title   : "CppDepend",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.cppdepend,
			category: CATEGORIES.tools
		}, {
			title   : "ESLint",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.eslint,
			category: CATEGORIES.tools
		}, {
			title   : "NSight",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.nsight,
			category: CATEGORIES.tools
		}, {
			title   : "Makefile",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.makefile,
			category: CATEGORIES.tools
		}, {
			title   : "CMake",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.cmake,
			category: CATEGORIES.tools
		}, {
			title   : "Clang-Format",
			level   : LEVELS.expert,
			file    : BRAND_IMAGES.clangFormat,
			category: CATEGORIES.tools
		},
		
		// Game Dev & Graphics
		{
			title   : "Unity",
			level   : LEVELS.advanced,
			file    : BRAND_IMAGES.unity,
			category: CATEGORIES.game
		}, {
			title   : "Unreal Engine",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.unrealEngine,
			category: CATEGORIES.game
		}, {
			title   : "Blender",
			level   : LEVELS.expert,
			file    : BRAND_IMAGES.blender,
			category: CATEGORIES.game
		}, {
			title   : "GIMP",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.gimp,
			category: CATEGORIES.game
		}, {
			title   : "Photoshop",
			level   : LEVELS.intermediate,
			file    : BRAND_IMAGES.photoshop,
			category: CATEGORIES.game
		},
	],
	languages  : [
		{
			title: "Spanish",
			level: "Native",
			file : COUNTRY_FLAGS.Spain
		}, {
			title: "Romanian",
			level: "Native but not fluent anymore",
			file : COUNTRY_FLAGS.Romania
		}, {
			title: "French",
			level: "A Few Words",
			file : COUNTRY_FLAGS.France
		}, {
			title: "German",
			level: "Low",
			file : COUNTRY_FLAGS.Germany
		}, {
			title: "Dutch",
			level: "Low",
			file : COUNTRY_FLAGS.Netherlands
		}, {
			title      : "English",
			level      : "Advanced",
			file       : COUNTRY_FLAGS.UnitedStates,
			certificate: {
				title: "C1 certificate",
				file : "resources/certificates/CambridgeC1Certificate.pdf"
			}
		}
	]
};
