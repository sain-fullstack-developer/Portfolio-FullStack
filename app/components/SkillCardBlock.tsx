import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiStorybook } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaGitlab } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiDeepin } from "react-icons/si";
import { MdDataSaverOff } from "react-icons/md";

type SkillCardBlockProps = {
	icon: string;
	name: string;
};

export default function SkillCardBlock({ icon, name }: SkillCardBlockProps) {
	let IconComponent = null;
	switch (icon) {
		case "HTMLPlain":
			IconComponent = FaHtml5;
			break;
		case "photoshopIcon":
			IconComponent = SiAdobephotoshop;
			break;
		case "blenderIcon":
			IconComponent = SiBlender;
			break;
		case "MLIcon":
			IconComponent = GiArtificialIntelligence;
			break;
		case "datascienceIcon":
			IconComponent = MdDataSaverOff;
			break;
		case "deeplearningIcon":
			IconComponent = SiDeepin;
			break;
		case "CSSOriginal":
			IconComponent = FaCss3;
			break;
		case "StorybookOriginal":
			IconComponent = SiStorybook;
			break;
		case "figmaIcon":
			IconComponent = FaFigma;
			break;
		case "ReactOriginal":
			IconComponent = FaReact;
			break;
		case "NextjsLine":
			IconComponent = TbBrandNextjs;
			break;
		case "TailwindcssPlain":
			IconComponent = SiTailwindcss;
			break;
		case "JavascriptOriginal":
			IconComponent = IoLogoJavascript;
			break;
		case "MongoDBPlain":
			IconComponent = DiMongodb;
			break;
		case "SQLitePlain":
			IconComponent = SiSqlite;
			break;
		case "NodejsOriginal":
			IconComponent = FaNodeJs;
			break;
		case "ExpressOriginal":
			IconComponent = SiExpress;
			break;
		case "ReduxOriginal":
			IconComponent = SiRedux;
			break;
		case "GitlabOriginal":
			IconComponent = FaGitlab;
			break;
		case "GithubOriginal":
			IconComponent = FaGithub;
			break;
		default:
			break;
	}

	return (
		<div className="flex flex-row  justify-evenly items-center gap-4 p-4 rounded-[5px] bg-ab">
			{IconComponent && (
				<div>
					<IconComponent className="scale-[150%]" />
				</div>
			)}
			<div>{name}</div>
		</div>
	);
}
