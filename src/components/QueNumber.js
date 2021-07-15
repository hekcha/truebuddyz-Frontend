import React from "react";
import { makeStyles } from "@material-ui/core/styles";

var colour = [
	"#55E6C1",
	"#FD7272",
	"#FEA47F",
	"#25CCF7",
	"#EAB543",
	"#FC427B",
	"#2C3A47",
	"#ffa801",
	"#ef5777",
	"#575fcf",
	"#ffc048",
	"#00d8d6",
	"#0be881",
	"#c0392b",
	"#e67e22",
	"#16a085",
	"#8e44ad",
	"#7f8c8d",
	"#e15f41",
	"#f78fb3",
];

const useStyles = makeStyles({
	"@keyframes blinking": {
		"0%": {
			color: `${colour[0]}`,
		},
		"5%": {
			color: `${colour[1]}`,
		},
		"10%": {
			color: `${colour[2]}`,
		},
		"15%": {
			color: `${colour[3]}`,
		},
		"20%": {
			color: `${colour[4]}`,
		},
		"25%": {
			color: `${colour[5]}`,
		},
		"30%": {
			color: `${colour[6]}`,
		},
		"35%": {
			color: `${colour[7]}`,
		},
		"40%": {
			color: `${colour[8]}`,
		},
		"45%": {
			color: `${colour[9]}`,
		},
		"50%": {
			color: `${colour[10]}`,
		},
		"55%": {
			color: `${colour[11]}`,
		},
		"60%": {
			color: `${colour[12]}`,
		},
		"65%": {
			color: `${colour[13]}`,
		},
		"70%": {
			color: `${colour[14]}`,
		},
		"75%": {
			color: `${colour[15]}`,
		},
		"80%": {
			color: `${colour[16]}`,
		},
		"85%": {
			color: `${colour[17]}`,
		},
		"90%": {
			color: `${colour[18]}`,
		},
		"955%": {
			color: `${colour[19]}`,
		},
		"100%": {
			color: `${colour[20]}`,
		},
	},

	root: {
		display: "flex",
		flexDirection: "row",
		alignContent: "center",
		alignItems: "center",
		marginLeft: "6vw",
		justifyContent: "center",
	},

	checked: {
		color: "green",
		width: "8vw",
		transition: "all 0.3s ease-out",
		fontSize: "14px",
	},
	gap: {
		width: "8vw",
	},

	blink: {
		display: "inline-block",
		boxSizing: "border-box",
		color: "gold",
		animation: "$blinking 2s ease-in-out infinite",
		width: "8vw",
		boxShadow: "9.91px 9.91px 15px #d9dade,-9.91px -9.91px 15px #fff",
	},

	number: {
		position: "relative",
		fontSize: "20px",
		color: "black",
		fontFamily: `'Tourney', cursive`,
	},
});

function QueNumber(props) {
	const value = props.que;
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<span>
				<i
					className={
						value >= 1
							? `fas fa-check-circle fa-xs ${classes.checked}`
							: value == 0
							? `fas fa-circle fa-xs ${classes.blink}`
							: `far fa-circle fa-xs ${classes.gap}`
					}
				>
					<br />
					<div className={classes.number}>1</div>
				</i>
				{console.log(value)}
			</span>

			<span>
				<i
					className={
						value >= 2
							? `fas fa-check-circle fa-xs ${classes.checked}`
							: value == 1
							? `fas fa-circle fa-xs ${classes.blink}`
							: `far fa-circle fa-xs ${classes.gap}`
					}
				>
					<br />
					<div className={classes.number}>2</div>
				</i>
			</span>

			<span>
				<i
					className={
						value >= 3
							? `fas fa-check-circle fa-xs ${classes.checked}`
							: value == 2
							? `fas fa-circle fa-xs ${classes.blink}`
							: `far fa-circle fa-xs ${classes.gap}`
					}
				>
					<br />
					<div className={classes.number}>3</div>
				</i>
			</span>

			<span>
				<i
					className={
						value >= 4
							? `fas fa-check-circle fa-xs ${classes.checked}`
							: value == 3
							? `fas fa-circle fa-xs ${classes.blink}`
							: `far fa-circle fa-xs ${classes.gap}`
					}
				>
					<br />
					<div className={classes.number}>4</div>
				</i>
			</span>

			<span>
				<i
					className={
						value >= 5
							? `fas fa-check-circle fa-xs ${classes.checked}`
							: value == 4
							? `fas fa-circle fa-xs ${classes.blink}`
							: `far fa-circle fa-xs ${classes.gap}`
					}
				>
					<br />
					<div className={classes.number}>5</div>
				</i>
			</span>
			<span>
				<i
					className={
						value >= 6
							? `fas fa-check-circle fa-xs ${classes.checked}`
							: value == 5
							? `fas fa-circle fa-xs ${classes.blink}`
							: `far fa-circle fa-xs ${classes.gap}`
					}
				>
					<br />
					<div className={classes.number}>6</div>
				</i>
			</span>
			<span>
				<i
					className={
						value >= 7
							? `fas fa-check-circle fa-xs ${classes.checked}`
							: value == 6
							? `fas fa-circle fa-xs ${classes.blink}`
							: `far fa-circle fa-xs ${classes.gap}`
					}
				>
					<br />
					<div className={classes.number}>7</div>
				</i>
			</span>
			<span>
				<i
					className={
						value >= 8
							? `fas fa-check-circle fa-xs ${classes.checked}`
							: value == 7
							? `fas fa-circle fa-xs ${classes.blink}`
							: `far fa-circle fa-xs ${classes.gap}`
					}
				>
					<br />
					<div className={classes.number}>8</div>
				</i>
			</span>
			<span>
				<i
					className={
						value >= 9
							? `fas fa-check-circle fa-xs ${classes.checked}`
							: value == 8
							? `fas fa-circle fa-xs ${classes.blink}`
							: `far fa-circle fa-xs ${classes.gap}`
					}
				>
					<br />
					<div className={classes.number}>9</div>
				</i>
			</span>
			<span>
				<i
					className={
						value >= 10
							? `fas fa-check-circle fa-xs ${classes.checked}`
							: value == 9
							? `fas fa-circle fa-xs ${classes.blink}`
							: `far fa-circle fa-xs ${classes.gap}`
					}
				>
					<br />
					<div className={classes.number}>10</div>
				</i>
			</span>
		</div>
	);
}

export default QueNumber;
