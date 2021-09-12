import React from "react";
import "./neonrapidfire.css";

function NeonRapidfire(props) {
	return (
		<div className="logoR row">
			<b>
				<span style={{ textTransform: "capitalize" }}>{props.types}</span>
				<span> Ra</span>
				<span>pid</span>
				<span>Fire</span>
			</b>
		</div>
	);
}

export default NeonRapidfire;
