import React from "react";
import "./neonrapidfire.css";

function NeonRapidfire(props) {
	return (
		<div className="logoR row">
			<b>
				<span style={{ textTransform: "capitalize" }}>{props.types}</span>
				<span> Q</span>
				<span>ui</span>
				<span>z</span>
			</b>
		</div>
	);
}

export default NeonRapidfire;
