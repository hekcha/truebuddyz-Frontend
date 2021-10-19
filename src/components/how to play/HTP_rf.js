import React from "react";

function HTP_rf() {
	return (
		<div
			style={{
				position: "relative",
				color: "rgb(0,0,0,0.86)",
				minWidth: "320px",
				maxWidth: "550px",
				fontSize: "32px",
				margin: "auto",
				marginTop: "20px",
			}}
		>
			<p style={{ fontSize: "49px", fontFamily: "'Pacifico', cursive", fontWeight: "600", textAlign: "center" }}>How to play?</p>
			<ol
				style={{
					display: "flex",
					textAlign: "left",
					flexDirection: "column",
				}}
			>
				<li>
					First click on <strong style={{ fontWeight: "550", color: "gray" }}>Create a Room</strong> Button.
				</li>
				<li>Enter your name in the textbox📝.</li>
				<li>
					Share the link by <strong style={{ fontWeight: "550", color: "gray" }}>Copy Link</strong> or using{" "}
					<strong style={{ fontWeight: "550", color: "gray" }}>Share Option</strong>.
				</li>
				<li>After the player have joined.Click Start Button to continue.😃</li>
				<li>
					<italic>Responses of all users are shown after they choose any option.</italic>{" "}
				</li>
			</ol>
		</div>
	);
}

export default HTP_rf;
