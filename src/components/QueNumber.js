import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// var colour = [
// 	"#55E6C1",
// 	"#FD7272",
// 	"#FEA47F",
// 	"#25CCF7",
// 	"#EAB543",
// 	"#FC427B",
// 	"#2C3A47",
// 	"#ffa801",
// 	"#ef5777",
// 	"#575fcf",
// 	"#ffc048",
// 	"#00d8d6",
// 	"#0be881",
// 	"#c0392b",
// 	"#e67e22",
// 	"#16a085",
// 	"#8e44ad",
// 	"#7f8c8d",
// 	"#e15f41",
// 	"#f78fb3",
// ];

const useStyles = makeStyles({
	root: {
		display: "flex",
		position: "relative",
		flexDirection: "row",
		alignContent: "center",
		alignItems: "center",
		marginLeft: "6vw",
		justifyContent: "center",
	},
	active: {
		fontSize:'28px',
		color:'blue',
		opacity:'1'
	},
});

function QueNumber(props) {
	const value = props.que;
	const classes = useStyles();
	return (
		<div className={classes.root} style={{margin:'0',fontSize:'22px',opacity:'0.75'}}>
			<span className={value===0?classes.active:null} >●</span>
			<span className={value===1?classes.active:null} >●</span>
			<span className={value===2?classes.active:null} >●</span>
			<span className={value===3?classes.active:null} >●</span>
			<span className={value===4?classes.active:null} >●</span>
			<span className={value===5?classes.active:null} >●</span>
			<span className={value===6?classes.active:null} >●</span>
			<span className={value===7?classes.active:null} >●</span>
			<span className={value===8?classes.active:null} >●</span>
			<span className={value===9?classes.active:null} >●</span>
		</div>
	);




	// return (
	// 	<div className={classes.root}>
	// 		<span>
	// 			<i
	// 				className={
	// 					value >= 1
	// 						? ` fa-check-circle fa-xs ${classes.checked}`
	// 						: value == 0
	// 						? ` fa-circle fa-xs ${classes.blink}`
	// 						: ` fa-circle fa-xs ${classes.gap}`
	// 				}
	// 			>
	// 				<br />
	// 				●
	// 				{/* <div className={classes.number}>1</div> */}
	// 			</i>
	// 			{console.log(value)}
	// 		</span>

	// 		<span>
	// 			<i
	// 				className={
	// 					value >= 2
	// 						? `fas fa-check-circle fa-xs ${classes.checked}`
	// 						: value == 1
	// 						? `fas fa-circle fa-xs ${classes.blink}`
	// 						: `far fa-circle fa-xs ${classes.gap}`
	// 				}
	// 			>
	// 				<br />
	// 				{/* <div className={classes.number}>2</div> */}
	// 			</i>
	// 		</span>

	// 		<span>
	// 			<i
	// 				className={
	// 					value >= 3
	// 						? `fas fa-check-circle fa-xs ${classes.checked}`
	// 						: value == 2
	// 						? `fas fa-circle fa-xs ${classes.blink}`
	// 						: `far fa-circle fa-xs ${classes.gap}`
	// 				}
	// 			>
	// 				<br />
	// 				{/* <div className={classes.number}>3</div> */}
	// 			</i>
	// 		</span>

	// 		<span>
	// 			<i
	// 				className={
	// 					value >= 4
	// 						? `fas fa-check-circle fa-xs ${classes.checked}`
	// 						: value == 3
	// 						? `fas fa-circle fa-xs ${classes.blink}`
	// 						: `far fa-circle fa-xs ${classes.gap}`
	// 				}
	// 			>
	// 				<br />
	// 				{/* <div className={classes.number}>4</div> */}
	// 			</i>
	// 		</span>

	// 		<span>
	// 			<i
	// 				className={
	// 					value >= 5
	// 						? `fas fa-check-circle fa-xs ${classes.checked}`
	// 						: value == 4
	// 						? `fas fa-circle fa-xs ${classes.blink}`
	// 						: `far fa-circle fa-xs ${classes.gap}`
	// 				}
	// 			>
	// 				<br />
	// 				{/* <div className={classes.number}>5</div> */}
	// 			</i>
	// 		</span>
	// 		<span>
	// 			<i
	// 				className={
	// 					value >= 6
	// 						? `fas fa-check-circle fa-xs ${classes.checked}`
	// 						: value == 5
	// 						? `fas fa-circle fa-xs ${classes.blink}`
	// 						: `far fa-circle fa-xs ${classes.gap}`
	// 				}
	// 			>
	// 				<br />
	// 				{/* <div className={classes.number}>6</div> */}
	// 			</i>
	// 		</span>
	// 		<span>
	// 			<i
	// 				className={
	// 					value >= 7
	// 						? `fas fa-check-circle fa-xs ${classes.checked}`
	// 						: value == 6
	// 						? `fas fa-circle fa-xs ${classes.blink}`
	// 						: `far fa-circle fa-xs ${classes.gap}`
	// 				}
	// 			>
	// 				<br />
	// 				{/* <div className={classes.number}>7</div> */}
	// 			</i>
	// 		</span>
	// 		<span>
	// 			<i
	// 				className={
	// 					value >= 8
	// 						? `fas fa-check-circle fa-xs ${classes.checked}`
	// 						: value == 7
	// 						? `fas fa-circle fa-xs ${classes.blink}`
	// 						: `far fa-circle fa-xs ${classes.gap}`
	// 				}
	// 			>
	// 				<br />
	// 				{/* <div className={classes.number}>8</div> */}
	// 			</i>
	// 		</span>
	// 		<span>
	// 			<i
	// 				className={
	// 					value >= 9
	// 						? `fas fa-check-circle fa-xs ${classes.checked}`
	// 						: value == 8
	// 						? `fas fa-circle fa-xs ${classes.blink}`
	// 						: `far fa-circle fa-xs ${classes.gap}`
	// 				}
	// 			>
	// 				<br />
	// 				{/* <div className={classes.number}>9</div> */}
	// 			</i>
	// 		</span>
	// 		<span>
	// 			<i
	// 				className={
	// 					value >= 10
	// 						? `fas fa-check-circle fa-xs ${classes.checked}`
	// 						: value == 9
	// 						? `fas fa-circle fa-xs ${classes.blink}`
	// 						: `far fa-circle fa-xs ${classes.gap}`
	// 				}
	// 			>
	// 				<br />
	// 				{/* <div className={classes.number}>10</div> */}
	// 			</i>
	// 		</span>
	// 	</div>
	// );
}

export default QueNumber;
