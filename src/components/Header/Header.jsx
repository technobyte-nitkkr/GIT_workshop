import TechnoLogo from "../../assets/Techno.svg";
import Git from "../../assets/git-icon.svg";
import Github from "../../assets/github-icon-2.svg";

export default function Header({ text, logo }) {
	return (
		<div className="header h-[10svh] flex items-center justify-between px-5 border-b border-yellow-300">
			{logo && (
				<img
					src={TechnoLogo}
					alt="Techno+"
					className="h-10 cursor-pointer"
					onClick={() => {
						window.open("https://technobyte.tech", "_blank");
					}}
				/>
			)}
			<span className="text-3xl font-bold font-mono flex-grow text-center">{text}</span>
			{logo && (
				<div className="flex gap-2 items-center">
					<img src={Git} alt="Git" className="h-10" />
                    +
					<img src={Github} alt="Github" className="h-10" />
				</div>
			)}
		</div>
	);
}
