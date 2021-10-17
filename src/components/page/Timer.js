import React from "react";
import "./timer.css";

function Timer() {
	return (
		<div style={{ margin: "auto" }}>
			<div class="outer">
				<div class="inner">
					<div class="minute-box">
						<p id="minute-box">00</p>
					</div>
					<div class="second-box">
						<p id="timer">30</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Timer;
