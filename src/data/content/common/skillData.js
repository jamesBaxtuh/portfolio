// External NPM Packages
import { ReactComponent as HTML5 } from "../../../static/icons/html5.svg";
import { ReactComponent as CSS } from "../../../static/icons/css.svg";
import { ReactComponent as Javascript } from "../../../static/icons/javascript.svg";
import { ReactComponent as JQuery } from "../../../static/icons/jquery.svg";
import { ReactComponent as Express } from "../../../static/icons/express.svg";
import { ReactComponent as MongoDB } from "../../../static/icons/mongodb.svg";
import { ReactComponent as NodeJS } from "../../../static/icons/node-js.svg";
import { ReactComponent as Python3 } from "../../../static/icons/python.svg";
import { ReactComponent as React } from "../../../static/icons/react.svg";
import { ReactComponent as Redux } from "../../../static/icons/redux.svg";
import { ReactComponent as MySql } from "../../../static/icons/mysql.svg";
import { ReactComponent as Git } from "../../../static/icons/git.svg";
import { ReactComponent as Germany } from "../../../static/icons/germany.svg";
import { ReactComponent as ReactRouter } from "../../../static/icons/react-router.svg";

import { GrStorage as Storage } from "react-icons/gr";
import { HiMiniSquare3Stack3D as Stack } from "react-icons/hi2";
import { TbMailCheck as Mail } from "react-icons/tb";
import { BsRecycle as Reusable } from "react-icons/bs";
import { CiClock2 as Clock } from "react-icons/ci";
import { IoMdCloudDownload as API } from "react-icons/io";
import { MdOutlineDashboard as Dashboard } from "react-icons/md";
import { TbAdjustmentsCode as CustomCode } from "react-icons/tb";
import { GoShieldCheck as Shield } from "react-icons/go";
import { LuUserCheck2 as UserAuth } from "react-icons/lu";
import { BsPatchQuestion as Conditional } from "react-icons/bs";
import { SiRedux as RIRedux } from "react-icons/si";
import { RiJavascriptLine as RIJavaScript } from "react-icons/ri";
import { MdDataObject as Data } from "react-icons/md";
import { AiOutlineTeam as Team } from "react-icons/ai";
import { MdAnimation as Animations } from "react-icons/md";
import { SlDocs as Docs } from "react-icons/sl";
import { FaListCheck as TDD } from "react-icons/fa6";
import { TbBrandD3 as D3 } from "react-icons/tb";
import { HiMagnifyingGlass as Search } from "react-icons/hi2";
import { FaTags as DataTags } from "react-icons/fa";

export const HOME_SKILL_DATA = [
	{
		id: "HTMLIcon",
		tooltip: "HTML5",
		Icon: HTML5,
	},
	{
		id: "CSSIcon",
		tooltip: "CSS3",
		Icon: CSS,
	},
	{
		id: "JavaScriptIcon",
		tooltip: "JavaScript",
		Icon: Javascript,
	},
	{
		id: "JqueryIcon",
		tooltip: "JQuery",
		Icon: JQuery,
	},
	{
		id: "ReactIcon",
		tooltip: "React",
		Icon: React,
	},
	{
		id: "ReduxIcon",
		tooltip: "Redux",
		Icon: Redux,
	},
	{
		id: "ReactRouterIcon",
		tooltip: "React-Router",
		Icon: ReactRouter,
	},
	{
		id: "NodeJSIcon",
		tooltip: "NodeJS",
		Icon: NodeJS,
	},
	{
		id: "ExpressIcon",
		tooltip: "Express",
		Icon: Express,
	},
	{
		id: "MongoDBIcon",
		tooltip: "MongoDB",
		Icon: MongoDB,
	},
	{
		id: "PythonIcon",
		tooltip: "Python",
		Icon: Python3,
	},
	{
		id: "MySqlIcon",
		tooltip: "MySQL",
		Icon: MySql,
	},
	{
		id: "GitIcon",
		tooltip: "Git",
		Icon: Git,
	},
	{
		id: "GermanyIcon",
		tooltip: "Bilingual",
		Icon: Germany,
	},
];

export const ALL_SKILL_DATA = {
	HTML5: {
		id: "HTMLIcon",
		tooltip: "HTML5",
		Icon: HTML5,
	},
	CSS3: {
		id: "CSSIcon",
		tooltip: "CSS3",
		Icon: CSS,
	},
	JS: {
		id: "JavaScriptIcon",
		tooltip: "JavaScript",
		Icon: Javascript,
	},
	RIJS: {
		id: "ReactIconsJavaScript",
		tooltip: "JavaScript",
		Icon: RIJavaScript,
	},
	JQuery: {
		id: "JqueryIcon",
		tooltip: "JQuery",
		Icon: JQuery,
	},
	React: {
		id: "ReactIcon",
		tooltip: "React",
		Icon: React,
	},
	Redux: {
		id: "ReduxIcon",
		tooltip: "Redux",
		Icon: Redux,
	},
	RIRedux: {
		id: "ReactIconsRedux",
		tooltip: "Redux",
		Icon: RIRedux,
	},
	"React-Router": {
		id: "ReactRouterIcon",
		tooltip: "React-Router",
		Icon: ReactRouter,
	},
	NodeJS: {
		id: "NodeJSIcon",
		tooltip: "NodeJS",
		Icon: NodeJS,
	},
	Express: {
		id: "ExpressIcon",
		tooltip: "Express",
		Icon: Express,
	},
	MongoDB: {
		id: "MongoDBIcon",
		tooltip: "MongoDB",
		Icon: MongoDB,
	},
	Python3: {
		id: "PythonIcon",
		tooltip: "Python3",
		Icon: Python3,
	},
	MySQL: {
		id: "MySqlIcon",
		tooltip: "MySQL",
		Icon: MySql,
	},
	Git: {
		id: "GitIcon",
		tooltip: "Git",
		Icon: Git,
	},
	Germany: {
		id: "GermanyIcon",
		tooltip: "Bilingual",
		Icon: Germany,
	},
	MERN: {
		id: "MERN",
		tooltip: "MERN stack",
		Icon: Stack,
	},
	LocalStorage: {
		id: "localStorage",
		tooltip: "Local storage",
		Icon: Storage,
	},
	ContextAPI: {
		id: "ContextAPI",
		tooltip: "Context API",
		Icon: API,
	},
	RESTAPI: {
		id: "RESTAPI",
		tooltip: "REST API",
		Icon: API,
	},
	Email: {
		id: "Email",
		tooltip: "Email capabilities",
		Icon: Mail,
	},
	Clock: {
		id: "TimeTracking",
		tooltip: "Time-tracking",
		Icon: Clock,
	},
	CustomHooks: {
		id: "CustomHooks",
		tooltip: "Custom hooks",
		Icon: CustomCode,
	},
	Reusable: {
		id: "Reusable",
		tooltip: "Reusable components",
		Icon: Reusable,
	},
	Dashboard: {
		id: "Dashboard",
		tooltip: "Dashboard",
		Icon: Dashboard,
	},
	Security: {
		id: "Security",
		tooltip: "Security features",
		Icon: Shield,
	},
	Auth: {
		id: "UserAuth",
		tooltip: "User auth",
		Icon: UserAuth,
	},
	Conditional: {
		id: "ConditionalContent",
		tooltip: "Conditional content",
		Icon: Conditional,
	},
	Data: {
		id: "Data",
		tooltip: "Data Structures",
		Icon: Data,
	},
	OpenSource: {
		id: "OpenSource",
		tooltip: "Open source",
		Icon: Team,
	},
	Animations: {
		id: "Animations",
		tooltip: "Site-wide animations",
		Icon: Animations,
	},
	Documentation: {
		id: "Documentation",
		tooltip: "Extensive documentation",
		Icon: Docs,
	},
	TDD: {
		id: "TDD",
		tooltip: "Test-driven development",
		Icon: TDD,
	},
	D3: {
		id: "D3",
		tooltip: "D3.js",
		Icon: D3,
	},
	Search: {
		id: "Search",
		tooltip: "Search functionality",
		Icon: Search,
	},
	Tagging: {
		id: "Datatags",
		tooltip: "Data tagging",
		Icon: DataTags,
	},
};
