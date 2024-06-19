import YouTube from "react-youtube";

export default function PlayVideo({videoId}) {
    const containerStyles = {
		width: "100%", // You can adjust this width as per your requirement
		maxWidth: "100%", // Maximum width to maintain responsiveness
		margin: "0 auto", // Center the container
	};
	return (
		<div style={containerStyles}>
			<YouTube
				videoId={videoId}
				className=""
				iframeClassName="max-w-full max-h-full mx-auto"
			/>
		</div>
	);
}
