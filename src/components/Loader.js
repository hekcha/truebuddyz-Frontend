import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexDirection: "column",
		margin: "auto",
	},
	loader: {
		width: "200px",
		height: "80px",
		paddinTop: "40vh",
		margin: "auto",
		display: "flex",
	},
	"@keyframes jump": {
		"0%": {
			marginTop: "0",
		},
		"35%": {
			margiTop: "-75px",
		},
		"70%": {
			marginTop: "0px",
		},
	},
	circle1: {
		width: " 30px",
		height: "30px",
		background: "skyblue",
		color: "white",
		bordeRadius: "50%",
		animation: "$jump 1s linear infinite",
		margin: "0 15px",
	},
	circle2: {
		width: " 30px",
		height: "30px",
		background: "skyblue",
		color: "white",
		bordeRadius: "50%",
		animation: "$jump 1s linear infinite",
		margin: "0 15px",
		animationDelay: "0.2s",
	},
	circle3: {
		width: " 30px",
		height: "30px",
		background: "skyblue",
		color: "white",
		bordeRadius: "50%",
		animation: "$jump 1s linear infinite",
		margin: "0 15px",
		animationDelay: "0.4s",
	},
	caption: {
		margin: "auto",
		fonFamily: "arial",
		fonSize: "20px",
		color: "white",
	},
}));

function Loader() {
	const classes = useStyles();
	return (
		<div class="container">
			<div class="loader">
				<div class="circle1"></div>
				<div class="circle2"></div>
				<div class="circle3"></div>
			</div>
			<div class="caption">We're testing your patience😉....</div>
		</div>
	);
}

export default Loader;
