import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
	heading1: {
		textTransform: "capitalize",
		fontSize: "40px",
		fontFamily: "'Rampart One', cursive",
		backgroundColor: "#FEE140",
		backgroundImage: "linear-gradient( 114.3deg,  rgba(55,60,126,0.89) 22%, rgba(13,104,175,0.76) 78.3% )",
		backgroundClip: "text",
		textFillColor: "transparent",
		fontWeight: "999",
		marginBottom: "-10px",
	},
});

function RfCreater(props) {
	var ALLOWED_PAGES = ["friends", "couples", "bff"];
	const classes = useStyles();

	useEffect(() => {
		for (var i = 0; i < ALLOWED_PAGES.length; i++) {
			if (ALLOWED_PAGES[i] === props.type) break;
			if (i === ALLOWED_PAGES.length - 1) window.location.href = "/"; // SHOW 404 page
		}
	}, []);

	const Redirect = () => {
		var date = new Date();
		var gameId = date.getTime().toString(31);
		window.location.href = `/rapidfire/${props.type}/${gameId}`;
	};

	return (
		<div className="text-center">
			<span className="row " style={{ display: "inline", flexDirection: "row" }}>
				<p className={classes.heading1}>{props.type} Rapidfire</p>
			</span>
			<h1>Click to Start</h1>
			<Button variant="contained" color="primary" onClick={() => Redirect()}>
				Start
			</Button>
			<pre style={{ fontSize: "48px", fontWeight: "999" }}>How to Play?👇 </pre>
		</div>
	);
}

export default RfCreater;