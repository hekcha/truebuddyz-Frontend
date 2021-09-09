import React from "react";

function Loading() {
	return (
		<div>
			<div
				className="card"
				style={{
					backgroundImage: `url(https://s9.gifyu.com/images/finger.gif)`,
					margin: "8px auto",
					width: "330px",
					height: "243px",
					borderRadius: "450px",
				}}
			></div>
			<p style={{ textAlign: "center", fontSize: "50px" }}>Loading . . .</p>
		</div>
	);
}

export default Loading;
