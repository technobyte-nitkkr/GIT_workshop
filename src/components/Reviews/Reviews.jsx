import Header from "../Header/Header";
import ReviewCard from "./ReviewCard";
import { reviews } from "../../reviews";

export default function Reviews() {
	return (
		<div className="w-[40svw] h-[90svh] border border-yellow-300">
			<Header text={"Reviews"} />
			<div className="reviewContain max-h-[75svh] overflow-auto p-2 flex flex-col gap-2">
				{reviews.map((review, index) => {
					return (
						<div key={index}>
							<ReviewCard review={review} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
