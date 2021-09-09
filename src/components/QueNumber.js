import React from "react";
import { makeStyles } from "@material-ui/core/styles";


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
}

export default QueNumber;
