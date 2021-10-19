import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
	logoR: {
		[theme.breakpoints.up("xs")]: {
			marginTop: "10px",
			fontSize: "18px",
		},
		[theme.breakpoints.down("xs")]: {
			marginTop: "10px",
			maginBottom: "50px",
			fontSize: "18px",
		},
	},
}));
function NeonRapidfire(props) {
	const classes = useStyle();
	return (
		<div className={`${classes.logoR} logoR row `}>
			<b className="mb-5">
				<span style={{ textTransform: "capitalize" }}>{props.types}</span>
				<span> Ra</span>
				<span>pid</span>
				<span>Fire</span>
			</b>
		</div>
	);
}

export default NeonRapidfire;
