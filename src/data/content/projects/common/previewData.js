// External NPM Packages
import { ALL_SKILL_DATA } from "../../common/skillData";

const PREVIEW_DATA = [
	{
		title: "Project Cushman",
		preview:
			"A fully-functioning CRM and lead acquisition site designed, managed, and development by myself. Made for Cushman & Dunn.",
		attributes: [
			ALL_SKILL_DATA["MERN"],
			ALL_SKILL_DATA["RIRedux"],
			ALL_SKILL_DATA["RESTAPI"],
			ALL_SKILL_DATA["Email"],
			ALL_SKILL_DATA["Security"],
			ALL_SKILL_DATA["Auth"],
		],
		graphic:
			"https://res.cloudinary.com/thatcloudisbuff/image/upload/f_auto,q_auto/xiazkz11jli6vpqhiikn",
		href: "/projects/cushman",
		spotlight: true,
		projectType: "Full-Stack Application",
	},
	{
		title: "Easter Eggs",
		preview:
			"Explore your easter egg statistics, access hints when needed, and gain behind the scenes access to the development process of this site's easter eggs feature.",
		attributes: [
			ALL_SKILL_DATA["LocalStorage"],
			ALL_SKILL_DATA["ContextAPI"],
			ALL_SKILL_DATA["Clock"],
			ALL_SKILL_DATA["CustomHooks"],
			ALL_SKILL_DATA["Conditional"],
			ALL_SKILL_DATA["Animations"],
		],
		graphic:
			"https://res.cloudinary.com/thatcloudisbuff/image/upload/f_auto,q_auto/na2l8ydppueph0b3oxp0", // Pink
		href: "/projects/easter-eggs",
		projectType: "Front-End Application",
	},
	{
		title: "Site Statistics",
		preview:
			"It's true: your every move has been tracked. Not really, that'd take far too much work. Explore some of the simple site-based observations made about you as a user, in the form of some fancy graphs.",
		attributes: [
			ALL_SKILL_DATA["LocalStorage"],
			ALL_SKILL_DATA["ContextAPI"],
			ALL_SKILL_DATA["Clock"],
			ALL_SKILL_DATA["CustomHooks"],
			ALL_SKILL_DATA["D3"],
		],
		graphic:
			"https://res.cloudinary.com/thatcloudisbuff/image/upload/f_auto,q_auto/xiazkz11jli6vpqhiikn",
		href: "/projects/site-stats",
		projectType: "Front-End Application",
	},
	{
		title: "Visual Studio Code Shortcuts",
		preview:
			"A search tool that helps you find VSCode shortcuts for your operating system.",
		attributes: [
			ALL_SKILL_DATA["Search"],
			ALL_SKILL_DATA["Tagging"],
			ALL_SKILL_DATA["Reusable"],
			ALL_SKILL_DATA["Documentation"],
		],
		graphic:
			"https://res.cloudinary.com/thatcloudisbuff/image/upload/f_auto,q_auto/uo0rm927t5ifxs6ldbsb",
		href: "/projects/vscode-shortcuts",
		projectType: "Front-End Application",
	},
	{
		title: "Data Structures Library",
		preview:
			"An in-depth approach to data structures, aimed at being educational, efficient, and beginner-friendly for those new to open-source. Written in JavaScript.",
		attributes: [
			ALL_SKILL_DATA["RIJS"],
			ALL_SKILL_DATA["OpenSource"],
			ALL_SKILL_DATA["Data"],
			ALL_SKILL_DATA["Documentation"],
			ALL_SKILL_DATA["TDD"],
		],
		graphic:
			"https://res.cloudinary.com/thatcloudisbuff/image/upload/f_auto,q_auto/xkworalwza6bgnudcrld",
		href: "/projects/js-ds-library",
		projectType: "Library",
	},
];

export default PREVIEW_DATA;
