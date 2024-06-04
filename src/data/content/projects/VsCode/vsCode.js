import {
	IoIosArrowRoundBack as LeftArrow,
	IoIosArrowRoundForward as RightArrow,
	IoIosArrowRoundDown as DownArrow,
	IoIosArrowRoundUp as UpArrow,
} from "react-icons/io";
import {
	ImCommand as Command,
	ImShift as Shift,
	ImOpt as Option,
} from "react-icons/im";

import { MdMiscellaneousServices as General } from "react-icons/md";
import {
	LuNavigation as Navigation,
	LuFileSearch as SearchAndReplace,
	LuTextCursorInput as MultiCursorAndSelection,
} from "react-icons/lu";
import { CiEdit as BasicEditing } from "react-icons/ci";

import { FaApple as Mac, FaWindows as PC } from "react-icons/fa";
import {
	FaLanguage as LanguageEditing,
	FaRegFileCode as FileManagement,
	FaDisplay as Display,
} from "react-icons/fa6";

import {
	VscEditorLayout as EditorManagement,
	VscDebug as Debug,
	VscTerminal as IntegratedTerminal,
} from "react-icons/vsc";

export const DEV_INSIGHT_DATA = {
	overview:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, minima illo laborum natus quaerat, numquam enim, iste tenetur quos nobis dolore sapiente eum dicta eos!",
	goals: ["goal1", "goal2", "goal3", "goal4", "goal5"],
	challenges: [
		"challenge1",
		"challenge2",
		"challenge3",
		"challenge4",
		"challenge5",
	],
	process:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, minima illo laborum natus quaerat, numquam enim, iste tenetur quos nobis dolore sapiente eum dicta eos!",
};

const sharedKeys = {
	LeftArrow: LeftArrow,
	RightArrow: RightArrow,
	UpArrow: UpArrow,
	DownArrow: DownArrow,
	Minus: "-",
	Comma: ",",
	Period: ".",
	Zero: "0",
	Equals: "=",
	Backtick: "`",
	Mousedrag: "Drag mouse",
	Forwardslash: "/",
	Backslash: "\\",
	"/": "/",
};

export const macKeys = {
	...sharedKeys,
	Command: Command,
	Shift: Shift,
	Option: Option,
	Control: "^", // "Control": <Control/>,
	Fn: "fn",
};

export const pcKeys = {
	...sharedKeys,
	Control: "CTRL",
	Shift: "SHIFT",
	Alt: "ALT",
};

export const filters = [
	"General",
	"Basic Editing",
	"Navigation",
	"Search and Replace",
	"Multi-cursor and Selection",
	"Rich Language Editing",
	"Editor Management",
	"File Management",
	"Display",
	"Debug",
	"Integrated Terminal",
	"Mac Only",
	"PC Only",
];

export const masterHotkeyList = [
	// General Section
	{
		title: "Show Command Palette",
		tags: ["command", "palette", "show", "general"],
		category: "General",
		hotkeys: {
			mac: "Shift+Command+P,F1",
			windows: "Control+Shift+P,F1",
		},
	},
	{
		title: "Quick Open (Go to file)",
		tags: ["open", "file", "general"],
		category: "General",
		hotkeys: {
			mac: "Command+P",
			windows: "Control+P",
		},
	},
	{
		title: "New Editor/Window",
		tags: ["new", "window", "general"],
		category: "General",
		hotkeys: {
			mac: "Shift+Command+N",
			windows: "Control+Shift+N",
		},
	},
	{
		title: "Close Editor/Window",
		tags: ["close", "window", "editor", "general"],
		category: "General",
		hotkeys: {
			mac: "Command+W",
			windows: "Control+Shift+W",
		},
	},
	{
		title: "User Settings",
		tags: ["user", "settings", "open", "general"],
		category: "General",
		hotkeys: {
			mac: "Command+Comma",
			windows: "Control+Comma",
		},
	},
	{
		title: "View Keyboard Shortcuts",
		tags: ["view", "keyboard", "shortcuts", "general"],
		category: "General",
		hotkeys: {
			mac: "Command+K Command+S",
			windows: "Control+K Control+S",
		},
	},

	// Basic Editing Section
	{
		title: "Cut Line (empty selection)",
		tags: ["cut", "delete", "remove", "empty", "line", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Command+X",
			windows: "Control+X",
		},
		extra: {
			mac: "This command also copies the contents of the removed line.",
		},
	},
	{
		title: "Copy Line (empty selection)",
		tags: ["copy", "line", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Command+C",
			windows: "Control+C",
		},
	},
	{
		title: "Move cursor to previous/next word/phrase",
		tags: ["phrase", "word", "next", "jump", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Option+LeftArrow/RightArrow",
			windows: "Control+LeftArrow/RightArrow",
		},
		systemRelated: true,
	},
	{
		title: "Move Line Down/Up",
		tags: ["move", "line", "up", "down", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Option+DownArrow/UpArrow",
			windows: "Alt+DownArrow/UpArrow",
		},
	},
	{
		title: "Copy Line Down/Up",
		tags: ["copy", "line", "up", "down", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Shift+Option+DownArrow/UpArrow",
			windows: "Shift+Alt+DownArrow/UpArrow",
		},
	},
	{
		title: "Delete Line",
		tags: ["delete", "line", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Shift+Command+K",
			windows: "Control+Shift+K",
		},
	},
	{
		title: "Insert Line Above",
		tags: ["insert", "line", "above", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Command+Shift+Enter",
			windows: "Control+Shift+Enter",
		},
	},
	{
		title: "Insert Line Below",
		tags: ["insert", "line", "below", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Command+Enter",
			windows: "Control+Enter",
		},
	},
	{
		title: "Jump to Matching Bracket",
		tags: ["jump", "bracket", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Shift+Command+Backslash",
			windows: "Control+Shift+Backslash",
		},
	},
	{
		title: "Indent/Outdent Line",
		tags: ["indent", "outdent", "line", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Command+]/[",
			windows: "Control+]/[",
		},
	},
	{
		title: "Go to Beginning/End of Line",
		tags: ["go", "beginning", "end", "line", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Command/Fn+LeftArrow/RightArrow",
			windows: "Home/End",
		},
		extra: {
			mac: "This is listed as Home/End on the official VSCode shortcut page, but because there is no Home/End buttons on Mac keyboards, you need to use Fn+LeftArrow (Home) and Fn+RightArrow (End) to achieve the same functionality. However, Apple's built-in hotkeys provide this same functionality, allowing you to use Command instead of the Fn keyword.",
		},
	},
	{
		title: "Go to Beginning/End of File",
		tags: ["go", "beginning", "end", "file", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Command+UpArrow/DownArrow",
			windows: "Control+Home/End",
		},
	},
	{
		title: "Scroll Line Up/Down",
		tags: ["scroll", "line", "up", "down", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Control+Fn+UpArrow/DownArrow",
			windows: "Control+UpArrow/DownArrow",
		},
		extra: {
			mac: "This is listed as Control+PageUp/PageDown on the official VSCode shortcut page, but because there is no PageUp/PageDown buttons on Mac keyboards, you need to use Fn+UpArrow (PageUp) and Fn+DownArrow (PageDown) to achieve the same functionality.",
		},
	},
	{
		title: "Scroll Page Up/Down",
		tags: ["scroll", "page", "up", "down", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Command+Fn+UpArrow/DownArrow",
			windows: "Control+PageUp/PageDown",
		},
		extra: {
			mac: "This is listed as Command+PageUp/PageDown on the official VSCode shortcut page, but because there is no PageUp/PageDown buttons on Mac keyboards, you need to use Fn+UpArrow (PageUp) and Fn+DownArrow (PageDown) to achieve the same functionality.",
		},
	},
	{
		title: "Fold Region",
		tags: ["fold", "unfold", "region", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Option+Command+[",
			windows: "Control+Shift+[",
		},
	},
	{
		title: "Unfold Region",
		tags: ["fold", "unfold", "region", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Option+Command+]",
			windows: "Control+Shift+]",
		},
	},
	{
		title: "Fold All Subregions",
		tags: ["fold", "unfold", "subregions", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Command+K Command+[",
			windows: "Control+K Control+[",
		},
	},
	{
		title: "Unfold All Subregions",
		tags: ["fold", "unfold", "subregions", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Command+K Command+]",
			windows: "Control+K Control+]",
		},
	},
	{
		title: "Fold All Regions",
		tags: ["fold", "unfold", "all", "regions", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Command+K Command+Zero",
			windows: "Control+K Control+Zero",
		},
	},
	{
		title: "Unfold All Regions",
		tags: ["fold", "unfold", "all", "regions", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Command+K Command+J",
			windows: "Control+K Control+J",
		},
	},
	{
		title: "Add Line Comment",
		tags: ["add", "comment", "line", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Command+K Control+C",
			windows: "Control+K Control+C",
		},
	},
	{
		title: "Remove Line Comment",
		tags: ["remove", "comment", "line", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Command+K Control+U",
			windows: "Control+K Control+U",
		},
	},
	{
		title: "Toggle Line Comment",
		tags: ["toggle", "line", "comment", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Command+Forwardslash",
			windows: "Control+Forwardslash",
		},
	},
	{
		title: "Toggle Block Comment",
		tags: ["toggle", "block", "comment", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Shift+Option+A",
			windows: "Shift+Alt+A",
		},
	},
	{
		title: "Toggle Word Wrap",
		tags: ["toggle", "word", "wrap", "basic", "editing"],
		category: "Basic Editing",
		hotkeys: {
			mac: "Option+Z",
			windows: "Alt+Z",
		},
	},

	// Navigation Section
	{
		title: "Show All Symbols",
		tags: ["show", "symbols", "navigation"],
		category: "Navigation",
		hotkeys: {
			mac: "Command+T",
			windows: "Ctrl+T",
		},
	},
	{
		title: "Go to Line...",
		tags: ["go", "line", "navigation"],
		category: "Navigation",
		hotkeys: {
			mac: "Control+G",
			windows: "Ctrl+G",
		},
	},
	{
		title: "Go to File...",
		tags: ["go", "file", "navigation"],
		category: "Navigation",
		hotkeys: {
			mac: "Command+P",
			windows: "Ctrl+P",
		},
	},
	{
		title: "Go to Symbol...",
		tags: ["go", "symbol", "navigation"],
		category: "Navigation",
		hotkeys: {
			mac: "Shift+Command+O",
			windows: "Ctrl+Shift+O",
		},
	},
	{
		title: "Show Problems Panel",
		tags: ["show", "problems", "panel", "navigation"],
		category: "Navigation",
		hotkeys: {
			mac: "Shift+Command+M",
			windows: "Ctrl+Shift+M",
		},
	},
	{
		title: "Go to Next Error or Warning",
		tags: ["go", "next", "previous", "error", "warning", "navigation"],
		category: "Navigation",
		hotkeys: {
			mac: "F8",
			windows: "F8",
		},
	},
	{
		title: "Go to Previous Error or Warning",
		tags: ["go", "next", "previous", "error", "warning", "navigation"],
		category: "Navigation",
		hotkeys: {
			mac: "Shift+F8",
			windows: "Shift+F8",
		},
	},
	{
		title: "Navigate Editor Group History",
		tags: ["navigate", "editor", "group", "history", "navigation"],
		category: "Navigation",
		hotkeys: {
			mac: "Control+Shift+Tab",
			windows: "Ctrl+Shift+Tab",
		},
	},
	{
		title: "Go Back/Forward",
		tags: ["go", "back", "forward", "navigation"],
		category: "Navigation",
		hotkeys: {
			mac: "Control+Minus/Shift+Minus",
			windows: "Alt+LeftArrow/RightArrow",
		},
	},
	{
		title: "Toggle Tab Moves Focus",
		tags: ["toggle", "tab", "moves", "focus", "navigation"],
		category: "Navigation",
		hotkeys: {
			mac: "Control+Shift+M",
			windows: "Ctrl+M",
		},
	},
	// Search and Replace Section
	{
		title: "Find",
		tags: ["find", "search"],
		category: "Search and Replace",
		hotkeys: {
			mac: "Command+F",
			windows: "Ctrl+F",
		},
	},
	{
		title: "Replace",
		tags: ["replace", "search"],
		category: "Search and Replace",
		hotkeys: {
			mac: "Option+Command+F",
			windows: "Ctrl+H",
		},
	},
	{
		title: "Find Next/Previous Occurence of Find Match",
		tags: ["find", "next", "previous", "search", "replace"],
		category: "Search and Replace",
		hotkeys: {
			mac: "Command+G/Shift+Command+G",
			windows: "F3/Shift+F3",
		},
	},
	{
		title: "Select All Occurrences of Find Match",
		tags: [
			"select",
			"all",
			"occurrences",
			"find",
			"match",
			"search",
			"replace",
		],
		category: "Search and Replace",
		hotkeys: {
			mac: "Option+Enter",
			windows: "Alt+Enter",
		},
	},
	{
		title: "Add Selection to Next Find Match",
		tags: [
			"add",
			"selection",
			"next",
			"find",
			"match",
			"search",
			"replace",
		],
		category: "Search and Replace",
		hotkeys: {
			mac: "Command+D",
			windows: "Ctrl+D",
		},
	},
	{
		title: "Move Last Selection to Next Find Match",
		tags: [
			"move",
			"last",
			"selection",
			"next",
			"find",
			"match",
			"search",
			"replace",
		],
		category: "Search and Replace",
		hotkeys: {
			mac: "Command+K Command+D",
			windows: "Ctrl+K Ctrl+D",
		},
	},

	// Multi-cursor and Selection
	{
		title: "Insert Cursor",
		tags: ["insert", "cursor", "multi-cursor", "selection"],
		category: "Multi-cursor and Selection",
		hotkeys: {
			mac: "Option+Click",
			windows: "Alt+Click",
		},
	},
	{
		title: "Insert Cursor Above/Below",
		tags: [
			"insert",
			"cursor",
			"above",
			"below",
			"multi-cursor",
			"selection",
		],
		category: "Multi-cursor and Selection",
		hotkeys: {
			mac: "Option+Command+UpArrow/DownArrow",
			windows: "Control+Alt+UpArrow/DownArrow",
		},
	},
	{
		title: "Undo Last Cursor Operation",
		tags: [
			"undo",
			"last",
			"cursor",
			"operation",
			"multi-cursor",
			"selection",
		],
		category: "Multi-cursor and Selection",
		hotkeys: {
			mac: "Command+U",
			windows: "Control+U",
		},
	},
	{
		title: "Insert Cursor at End of Each Line Selected",
		tags: [
			"insert",
			"cursor",
			"end",
			"line",
			"selected",
			"multi-cursor",
			"selection",
		],
		category: "Multi-cursor and Selection",
		hotkeys: {
			mac: "Shift+Option+I",
			windows: "Shift+Alt+I",
		},
	},
	{
		title: "Select Current Line",
		tags: ["select", "current", "line", "multi-cursor", "selection"],
		category: "Multi-cursor and Selection",
		hotkeys: {
			mac: "Command+L",
			windows: "Control+L",
		},
	},
	{
		title: "Select All Occurrences of Current Selection",
		tags: [
			"select",
			"all",
			"occurrences",
			"current",
			"selection",
			"multi-cursor",
			"selection",
		],
		category: "Multi-cursor and Selection",
		hotkeys: {
			mac: "Shift+Command+L",
			windows: "Control+Shift+L",
		},
	},
	{
		title: "Select All Occurrences of Current Word",
		tags: [
			"select",
			"all",
			"occurrences",
			"current",
			"word",
			"multi-cursor",
			"selection",
		],
		category: "Multi-cursor and Selection",
		hotkeys: {
			mac: "Command+F2",
			windows: "Control+F2",
		},
	},
	{
		title: "Expand/Shrink Selection",
		tags: ["expand", "shrink", "selection", "multi-cursor", "selection"],
		category: "Multi-cursor and Selection",
		hotkeys: {
			mac: "Control+Shift+Command+RightArrow/LeftArrow",
			windows: "Shift+Alt+RightArrow/LeftArrow",
		},
	},
	{
		title: "Column (Box) Selection (Mouse)",
		tags: ["column", "box", "selection", "multi-cursor", "selection"],
		category: "Multi-cursor and Selection",
		hotkeys: {
			mac: "Shift+Option+Mousedrag",
			windows: "Shift+Alt+Mousedrag",
		},
	},
	{
		title: "Column (Box) Selection (Arrow-key)",
		tags: [
			"column",
			"box",
			"selection",
			"up",
			"down",
			"multi-cursor",
			"selection",
		],
		category: "Multi-cursor and Selection",
		hotkeys: {
			mac: "Shift+Option+Command+ArrowKey",
			windows: "Control+Shift+Alt+ArrowKey",
		},
	},
	{
		title: "Column (Box) Selection Page Up/Page Down",
		tags: [
			"column",
			"box",
			"selection",
			"page",
			"up",
			"down",
			"multi-cursor",
			"selection",
		],
		category: "Multi-cursor and Selection",
		hotkeys: {
			mac: "Shift+Option+Command+Fn+UpArrow/DownArrow",
			windows: "Control+Shift+Alt+PageUp/PageDown",
		},
		extra: {
			mac: "This is listed as Shift+Option+Command+PageUp/PageDown on the official VSCode shortcut page, but because there is no PageUp/PageDown buttons on Mac keyboards, you need to use Fn+UpArrow (PageUp) and Fn+DownArrow (PageDown) to achieve the same functionality.",
		},
	},

	// Rich Language Editing
	{
		title: "Trigger Suggestion",
		tags: ["trigger", "suggestion", "editing", "language"],
		category: "Rich Language Editing",
		hotkeys: {
			mac: "Control+Space,Command+I",
			windows: "Control+Space,Control+I",
		},
	},
	{
		title: "Trigger Parameter Hints",
		tags: ["trigger", "parameter", "hints", "editing", "language"],
		category: "Rich Language Editing",
		hotkeys: {
			mac: "Shift+Command+Space",
			windows: "Control+Shift+Space",
			windows: "Shift+Alt+F",
		},
	},
	{
		title: "Format Document",
		tags: ["format", "document", "editing", "language"],
		category: "Rich Language Editing",
		hotkeys: {
			mac: "Shift+Option+F",
			windows: "Shift+Alt+F",
		},
	},
	{
		title: "Format Selection",
		tags: ["format", "selection", "editing", "language"],
		category: "Rich Language Editing",
		hotkeys: {
			mac: "Command+K Command+F",
			windows: "Control+K Control+F",
		},
	},
	{
		title: "Go to Definition",
		tags: ["go", "definition", "editing", "language"],
		category: "Rich Language Editing",
		hotkeys: {
			mac: "F12",
			windows: "F12",
		},
	},
	{
		title: "Peek Definition",
		tags: ["peek", "definition", "editing", "language"],
		category: "Rich Language Editing",
		hotkeys: {
			mac: "Option+F12",
			windows: "Alt+F12",
		},
	},
	{
		title: "Open Definition to the Side",
		tags: ["open", "definition", "side", "editing", "language"],
		category: "Rich Language Editing",
		hotkeys: {
			mac: "Command+K F12",
			windows: "Control+K F12",
		},
	},
	{
		title: "Quick Fix",
		tags: ["quick", "fix", "editing", "language"],
		category: "Rich Language Editing",
		hotkeys: {
			mac: "Command+Period",
			windows: "Control+Period",
		},
	},
	{
		title: "Show References",
		tags: ["show", "references", "editing", "language"],
		category: "Rich Language Editing",
		hotkeys: {
			mac: "Shift+F12",
			windows: "Shift+F12",
		},
	},
	{
		title: "Rename Symbol",
		tags: ["rename", "symbol", "editing", "language"],
		category: "Rich Language Editing",
		hotkeys: {
			mac: "F2",
			windows: "F2",
		},
	},
	{
		title: "Trim Trailing Whitespace",
		tags: ["trim", "trailing", "whitespace", "editing", "language"],
		category: "Rich Language Editing",
		hotkeys: {
			mac: "Command+K Command+X",
			windows: "Control+K Control+X",
		},
	},
	{
		title: "Change File Language",
		tags: ["change", "file", "language", "editing"],
		category: "Rich Language Editing",
		hotkeys: {
			mac: "Command+K M",
			windows: "Control+K M",
		},
	},

	// Editor Management
	{
		title: "Close Editor",
		tags: ["close", "editor", "management"],
		category: "Editor Management",
		hotkeys: {
			mac: "Command+W",
			windows: "Control+W,Control+F4",
		},
	},
	{
		title: "Close Folder",
		tags: ["close", "folder", "management"],
		category: "Editor Management",
		hotkeys: {
			mac: "Command+K F",
			windows: "Control+K F",
		},
	},
	{
		title: "Split Editor",
		tags: ["split", "editor", "management"],
		category: "Editor Management",
		hotkeys: {
			mac: "Command+Backslash",
			windows: "Control+Backslash",
		},
	},
	{
		title: "Focus into 1st, 2nd, or 3rd Editor Group",
		tags: ["focus", "editor", "group", "management"],
		category: "Editor Management",
		hotkeys: {
			mac: "Command+1 Command+2 Command+3",
			windows: "Control+1 Control+2 Control+3",
		},
	},
	{
		title: "Focus into Previous Editor Group",
		tags: ["focus", "previous", "next", "editor", "group", "management"],
		category: "Editor Management",
		hotkeys: {
			mac: "Command+K Command+LeftArrow",
			windows: "Control+K Control+LeftArrow",
		},
	},
	{
		title: "Focus into Next Editor Group",
		tags: ["focus", "previous", "next", "editor", "group", "management"],
		category: "Editor Management",
		hotkeys: {
			mac: "Command+K Command+RightArrow",
			windows: "Control+K Control+RightArrow",
		},
	},
	{
		title: "Move Editor Left",
		tags: ["move", "editor", "left", "right", "management"],
		category: "Editor Management",
		hotkeys: {
			mac: "Command+K Shift+Command+LeftArrow",
			windows: "Control+Shift+PageUp",
		},
	},
	{
		title: "Move Editor Right",
		tags: ["move", "editor", "left", "right", "management"],
		category: "Editor Management",
		hotkeys: {
			mac: "Command+K Shift+Command+RightArrow",
			windows: "Control+Shift+PageDown",
		},
	},
	{
		title: "Move Active Editor Group",
		tags: ["move", "active", "editor", "group", "management"],
		category: "Editor Management",
		hotkeys: {
			mac: "Command+K LeftArrow/RightArrow",
			windows: "Control+K LeftArrow/RightArrow",
		},
	},

	// File Management
	{
		title: "New File",
		tags: ["new", "create", "file", "management"],
		category: "File Management",
		hotkeys: {
			mac: "Command+N",
			windows: "Control+N",
		},
	},
	{
		title: "Open File",
		tags: ["open", "file", "management"],
		category: "File Management",
		hotkeys: {
			mac: "Command+O",
			windows: "Control+O",
		},
	},
	{
		title: "Save File",
		tags: ["save", "file", "management"],
		category: "File Management",
		hotkeys: {
			mac: "Command+S",
			windows: "Control+S",
		},
	},
	{
		title: "Save As",
		tags: ["save", "as", "file", "management"],
		category: "File Management",
		hotkeys: {
			mac: "Shift+Command+S",
			windows: "Shift+Control+S",
		},
	},
	{
		title: "Save All",
		tags: ["save", "all", "file", "management"],
		category: "File Management",
		hotkeys: {
			mac: "Option+Command+S",
			windows: "Control+K S",
		},
	},
	{
		title: "Close File",
		tags: ["close", "file", "management"],
		category: "File Management",
		hotkeys: {
			mac: "Command+W",
			windows: "Control+F4",
		},
	},
	{
		title: "Close All Files",
		tags: ["close", "all", "file", "management"],
		category: "File Management",
		hotkeys: {
			mac: "Command+K Command+W",
			windows: "Control+K Control+W",
		},
	},
	{
		title: "Reopen Closed Editor",
		tags: ["reopen", "closed", "editor", "management"],
		category: "File Management",
		hotkeys: {
			mac: "Command+Shift+T",
			windows: "Control+Shift+T",
		},
	},
	{
		title: "Keep Preview Mode Editor Open",
		tags: ["keep", "preview", "mode", "editor", "open", "management"],
		category: "File Management",
		hotkeys: {
			mac: "Command+K Enter",
			windows: "Control+K Enter",
		},
	},
	{
		title: "Open Next File",
		tags: ["open", "next", "previous", "file", "management"],
		category: "File Management",
		hotkeys: {
			mac: "Control+Tab",
			windows: "Control+Tab",
		},
	},
	{
		title: "Open Previous File",
		tags: ["open", "next", "previous", "file", "management"],
		category: "File Management",
		hotkeys: {
			mac: "Control+Shift+Tab",
			windows: "Control+Tab",
		},
	},
	{
		title: "Copy Path of Active File",
		tags: ["copy", "path", "active", "file", "management"],
		category: "File Management",
		hotkeys: {
			mac: "Command+K P",
			windows: "Control+K P",
		},
	},
	{
		title: "Reveal Active File in Finder",
		tags: ["reveal", "active", "file", "finder", "management"],
		category: "File Management",
		hotkeys: {
			mac: "Command+K R",
			windows: "Control+K R",
		},
	},
	{
		title: "Show Active File in New Window/Instance",
		tags: [
			"show",
			"active",
			"file",
			"new",
			"window",
			"instance",
			"management",
		],
		category: "File Management",
		hotkeys: {
			mac: "Command+K O",
			windows: "Control+K O",
		},
	},

	// Display
	{
		title: "Toggle Fullscreen",
		tags: ["toggle", "fullscreen", "display"],
		category: "Display",
		hotkeys: {
			mac: "Control+Command+F",
			windows: "F11",
		},
	},
	{
		title: "Toggle Editor Layout (Horizontal/Vertical)",
		tags: [
			"toggle",
			"editor",
			"layout",
			"horizontal",
			"vertical",
			"display",
		],
		category: "Display",
		hotkeys: {
			mac: "Option+Command+Zero",
			windows: "Shift+Alt+Zero",
		},
	},
	{
		title: "Zoom In/Out",
		tags: ["zoom", "in", "out", "display"],
		category: "Display",
		hotkeys: {
			mac: "Command+Equals",
			windows: "Control+Equals",
		},
	},
	{
		title: "Zoom Out",
		tags: ["zoom", "in", "out", "display"],
		category: "Display",
		hotkeys: {
			mac: "Shift+Command+Minus",
			windows: "Control+Minus",
		},
	},
	{
		title: "Toggle Sidebar Visibility",
		tags: ["toggle", "sidebar", "visibility", "display"],
		category: "Display",
		hotkeys: {
			mac: "Command+B",
			windows: "Control+B",
		},
	},
	{
		title: "Show Explorer/Toggle Focus",
		tags: ["show", "explorer", "toggle", "focus", "display"],
		category: "Display",
		hotkeys: {
			mac: "Command+Shift+E",
			windows: "Control+Shift+E",
		},
	},
	{
		title: "Show Search",
		tags: ["show", "search", "display"],
		category: "Display",
		hotkeys: {
			mac: "Command+Shift+F",
			windows: "Control+Shift+F",
		},
	},
	{
		title: "Show Source Control",
		tags: ["show", "source", "control", "display"],
		category: "Display",
		hotkeys: {
			mac: "Control+Shift+G",
			windows: "Control+Shift+G",
		},
	},
	{
		title: "Show Debug",
		tags: ["show", "debug", "display"],
		category: "Display",
		hotkeys: {
			mac: "Command+Shift+D",
			windows: "Control+Shift+D",
		},
	},
	{
		title: "Show Extensions",
		tags: ["show", "extensions", "display"],
		category: "Display",
		hotkeys: {
			mac: "Command+Shift+X",
			windows: "Control+Shift+X",
		},
	},
	{
		title: "Replace in Files",
		tags: ["replace", "files", "display"],
		category: "Display",
		hotkeys: {
			mac: "Command+Shift+H",
			windows: "Control+Shift+H",
		},
	},
	{
		title: "Toggle Search Details",
		tags: ["toggle", "search", "details", "display"],
		category: "Display",
		hotkeys: {
			mac: "Command+Shift+J",
			windows: "Control+Shift+J",
		},
	},
	{
		title: "Show Output Panel",
		tags: ["show", "output", "panel", "display"],
		category: "Display",
		hotkeys: {
			mac: "Command+Shift+U",
			windows: "Control+Shift+U",
		},
	},
	{
		title: "Open Markdown Preview",
		tags: ["open", "markdown", "preview", "display"],
		category: "Display",
		hotkeys: {
			mac: "Command+Shift+V",
			windows: "Control+Shift+V",
		},
	},
	{
		title: "Open Markdown Preview to the Side",
		tags: ["open", "markdown", "preview", "side", "display"],
		category: "Display",
		hotkeys: {
			mac: "Command+K V",
			windows: "Control+K V",
		},
	},
	{
		title: "Zen Mode (Esc Esc to Exit)",
		tags: ["zen", "mode", "escape", "display"],
		category: "Display",
		hotkeys: {
			mac: "Command+K Z",
			windows: "Control+K Z",
		},
	},

	// Debug
	{
		title: "Toggle Breakpoint",
		tags: ["toggle", "breakpoint", "debug"],
		category: "Debug",
		hotkeys: {
			mac: "F9",
			windows: "F9",
		},
	},
	{
		title: "Start/Continue",
		tags: ["start", "continue", "debug"],
		category: "Debug",
		hotkeys: {
			mac: "F5",
			windows: "F5",
		},
	},
	{
		title: "Stop",
		tags: ["stop", "debug"],
		category: "Debug",
		hotkeys: {
			mac: "Shift+F5",
			windows: "Shift+F5",
		},
	},
	{
		title: "Step Into/Out",
		tags: ["step", "into", "out", "debug"],
		category: "Debug",
		hotkeys: {
			mac: "F11/Shift+F11",
			windows: "F11/Shift+F11",
		},
	},
	{
		title: "Step Over",
		tags: ["step", "over", "debug"],
		category: "Debug",
		hotkeys: {
			mac: "F10",
			windows: "F10",
		},
	},
	{
		title: "Show Hover",
		tags: ["show", "hover", "debug"],
		category: "Debug",
		hotkeys: {
			mac: "Command+K Command+I",
			windows: "Control+K Control+I",
		},
	},

	// Integrated Terminal
	{
		title: "Show Integrated Terminal",
		tags: ["show", "integrated", "terminal"],
		category: "Integrated Terminal",
		hotkeys: {
			mac: "Control+Backtick",
			windows: "Control+Backtick",
		},
	},
	{
		title: "Create New Terminal",
		tags: ["create", "new", "terminal"],
		category: "Integrated Terminal",
		hotkeys: {
			mac: "Control+Shift+Backtick",
			windows: "Control+Shift+Backtick",
		},
	},
	{
		title: "Scroll Up/Down",
		tags: ["scroll", "up", "down", "terminal"],
		category: "Integrated Terminal",
		hotkeys: {
			mac: "Command+UpArrow/DownArrow",
			windows: "Control+UpArrow/DownArrow",
		},
	},
	{
		title: "Scroll Page Up/Down",
		tags: ["scroll", "page", "up", "down", "terminal"],
		category: "Integrated Terminal",
		hotkeys: {
			mac: "Fn+UpArrow/DownArrow",
			windows: "Shift+PageUp/PageDown",
		},
	},
	{
		title: "Scroll to Top/Bottom",
		tags: ["scroll", "top", "bottom", "terminal"],
		category: "Integrated Terminal",
		hotkeys: {
			mac: "Command+Fn+LeftArrow/RightArrow",
			windows: "Control+Home/End",
		},
		extra: {
			mac: "This is listed as Command+Home/End on the official VSCode shortcut page, but because there is no Home/End buttons on Mac keyboards, you need to use Fn+LeftArrow (Home) and Fn+RightArrow (End) to achieve the same functionality.",
		},
	},
];

export const filteredHotkeys = (() => {
	const res = {};
	filters.forEach((f) => {
		if (f !== "Mac Only" && f !== "PC Only") {
			res[f] = masterHotkeyList.filter((hotkey) => hotkey.category === f);
		}
	});
	return res;
})();

export const systemHotkeys = {
	macKeyboardShortcuts: "https://support.apple.com/en-us/HT201236",
	windowsKeyboardShortcuts:
		"https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec",
};

export const filterIcons = {
	General: <General />,
	"Basic Editing": <BasicEditing />,
	Navigation: <Navigation />,
	"Search and Replace": <SearchAndReplace />,
	"Multi-cursor and Selection": <MultiCursorAndSelection />,
	"Rich Language Editing": <LanguageEditing />,
	"Editor Management": <EditorManagement />,
	"File Management": <FileManagement />,
	Display: <Display />,
	Debug: <Debug />,
	"Integrated Terminal": <IntegratedTerminal />,
	"Mac Only": <Mac />,
	"PC Only": <PC />,
};
