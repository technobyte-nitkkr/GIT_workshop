import { BsPersonCircle } from "react-icons/bs";
import Stars from "./Stars";

export default function ReviewCard({ review }) {
	return (
		<div
			className={`card border border-yellow-500 p-4 rounded-sm bg-yellow-950`}
		>
			<div className="flex gap-3 items-center">
				<BsPersonCircle className="text-4xl text-white" />
				<div className="flex flex-col">
					<span className="font-bold tracking-wide font-mono text-xl">
						{review.name}
					</span>
					<span className="text-s font-mono text-gray-300">
						{review.rollno}
					</span>
				</div>
			</div>
			<div className="stars w-fit">
				<Stars rate={review.rate} />
			</div>
			<p className="text-white font-mono text-lg">{review.review}</p>
			{review.improvements.length > 0 && (
				<div className="improvements bg-yellow-100 mt-2 p-2 rounded-sm">
					<p className="text-blue-800 font-mono text-lg font-bold">
						Points of Improvements:
					</p>
					<ul className="text-black font-semibold font-mono text-lg ml-5">
						{review.improvements.map((improvement, index) => {
							return <li key={index}>- {improvement}</li>;
						})}
					</ul>
				</div>
			)}
		</div>
	);
}
