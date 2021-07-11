import React from "react";

function ShareQuiz(props) {
	return;
	<div>
		link -
		<a href={`${process.env.REACT_APP_URL}/quiz/play/${props.code}`}>
			{process.env.REACT_APP_URL}/quiz/play/{props.code}
		</a>
	</div>;
}

export default ShareQuiz;
