import Header from "../Header/Header";
import ReviewCard from "./ReviewCard";
import { reviews } from "../../reviews";
import Button from "../Details/Button";

export default function Reviews() {
	return (
		<div className="w-[40svw] h-[90svh] border-l border-yellow-300 flex flex-col">
			<Header text={"Reviews"} logo={false} />
			<div className="reviewContain max-h-[70svh] overflow-auto p-2 flex flex-col gap-2">
				{reviews.map((review, index) => {
					return (
						<div key={index}>
							<ReviewCard review={review} />
						</div>
					);
				})}
			</div>
			<div className="flex-grow m-2 flex items-center justify-center">
				<Button
					text={"Add Review"}
					redirect={
						"https://github.com/Debatreya/GIT_workshop/blob/main/CONTRIBUTINIG.md"
					}
				/>
			</div>
		</div>
	);
}
