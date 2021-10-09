import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
	logoR: {
		[theme.breakpoints.down("xs")]: {
			fontSize: "18px",
		},
	},
}));
function NeonTwoOpt(props) {
	const classes = useStyle();
	if(props.game==='thisorthat')
		return (
			<div className={`${classes.logoR} logoR row `}>
				<b className="mb-5">
					<span>This</span>
					<span> Or </span>
					<span>That</span>
				</b>
			</div>
		);
	if(props.game==='wouldyourather')
		return (
			<div className={`${classes.logoR} logoR row `}>
				<b className="mb-5">
					<span>Would</span>
					<span> You </span>
					<span>Rather</span>
				</b>
			</div>
		);
}

export default NeonTwoOpt;