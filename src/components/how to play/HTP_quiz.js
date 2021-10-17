import React from "react";

function HTP_quiz() {
	return (
		<div
			style={{
				position: "relative",
				color: "black",
				fontSize: "32px",
				textAlign: "center",
				fontWeight: "600",
				marginTop: "80px",
			}}
		>
			<p style={{ fontSize: "49px", fontFamily: "'Permanent Marker', cursive" }}>How to play?</p>
			<ol>
				<li>Enter your name in the textbox📝.</li>
				<li>
					Answer the question.
					<li>
						You can <u>change the options</u> or <u>skip to next one</u>.
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
