export default function Stars({ rate }) {
	return (
		<div className="flex gap-1 py-2">
			{[...Array(rate)].map((_, i) => (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5 text-yellow-500"
					viewBox="0 0 24 24"
					fill="currentColor"
					key={i}
				>
					<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
				</svg>
			))}
		</div>
	);
}
