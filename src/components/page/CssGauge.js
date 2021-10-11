import React from "react";
import "./cssgauge.css";

// const fourspeed3 = (props) => keyframes`
//   0% {
//     transform: rotate(0);
//   }
//   100% {
//     transform: rotate(props.score *18);
//   }
// `;

function CssGauge(props) {
	const Needle = (item) => {
		if (item == "0") return <div className="needle needle2" />;
		if (item == "1") return <div className="needle needle2" />;
		if (item == "2") return <div className="needle needle2" />;
		if (item == "3") return <div className="needle needle3" />;
		if (item == "4") return <div className="needle needle4" />;
		if (item == "5") return <div className="needle needle5" />;
		if (item == "6") return <div className="needle needle6" />;
		if (item == "7") return <div className="needle needle7" />;
		if (item == "8") return <div className="needle needle8" />;
		if (item == "9") return <div className="needle needle9" />;
		if (item == "10") return <div className="needle needle10" />;
	};

	return (
		<div className="my-1">
			<div class="gauge-wrapper">
				<div className="gauge four rischio3">
					<div className="slice-colors">
						<div className="st slice-item"></div>
						<div className="st slice-item"></div>
						<div className="st slice-item"></div>
						<div className="st slice-item"></div>
					</div>
					{Needle(props.score)}
					<div className="gauge-center">
						{console.log(props.score)}
						<div className="number">HIGH</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CssGauge;
