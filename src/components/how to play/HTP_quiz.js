import React from "react";

function HTP_quiz() {
	return (
		<div
			style={{
				position: "relative",
				color: "black",
				minWidth: "320px",
				maxWidth: "550px",
				fontSize: "32px",
				margin: "auto",
				marginTop: "80px",
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
				<li>Enter your name in the textbox📝.</li>
				<li>
					Answer the question.
					<li>
						You can <strong style={{ fontWeight: "550", color: "#58688e" }}>change the options</strong> or{" "}
						<strong style={{ fontWeight: "550", color: "#58688e" }}>skip to next one</strong>.
					</li>
				</li>
				<li>Share the quiz with your friends.😃</li>
				<li>Click on result to view the responses. </li>
				<li>Enjoy your friend's response.</li>
			</ol>
		</div>
	);
}

export default HTP_quiz;
