import Button from "./Button";
import PlayVideo from "./PlayVideo";

export default function Details(){
    return (
			<div className="flex-grow flex flex-col py-5">
				<PlayVideo videoId={"Uszj_k0DGsg"} />
				<div className="h-fit font-semibold tracking-wider font-mono text-2xl text-center border-b border-yellow-300 py-3">
					<span className="font-bold text-yellow-500">Workshop Recording:</span> Git and Github
				</div>
				<div className="flex-grow flex items-center justify-center">
					<Button
						text={"Download Workshop PPT"}
						redirect={
							"https://docs.google.com/presentation/d/1fEOQOPUGoKKQHO1mS0Bs25vTSLmVbrDilJIAm6zwYLg/edit?usp=sharing"
						}
					/>
				</div>
			</div>
		);
}