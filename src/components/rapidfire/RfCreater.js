// eslint-disable-next-line
import * as firebase from "firebase"; // important
import firebaseDb from "../../firebase";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import NeonRapidfire from "../Neon/NeonRapidfire";
import finger from "../assets/finger.gif";


function RfCreater(props) {
	var ALLOWED_PAGES = ["friends", "couple", "siblings"];

	useEffect(() => {
		for (var i = 0; i < ALLOWED_PAGES.length; i++) {
			if (ALLOWED_PAGES[i] === props.type) break;
			if (i === ALLOWED_PAGES.length - 1) window.location.href = "/"; // SHOW 404 page
		}
	// eslint-disable-next-line
	}, []);

	const [isLoading, setIsLoading] = useState(false)
	const Redirect = () => {
		setIsLoading(true);
		var date = new Date();
		var gameId = date.getTime().toString(31);
		var x=Math.floor(Math.random()*50);
		firebaseDb.child("RapidFire").child(gameId).set(
				{
					queNo: x,
					users: "null",
					ans: "null",
				},
				(err) => {
					if(err)
						console.log("Error: ", err);
					else
						window.location.href = `/rapid-fire/${props.type}/${gameId}`;
				}
			);
	};
	if(isLoading)
		return (
			<div id="playRF" style={{ margin: "40px auto" }}>
				<NeonRapidfire types={props.type} style={{ margin: "auto",}} />
				<br />
				<div
					className="card"
					style={{border:'0', zIndex: '-1'}}
				><img
				src={finger} 
				alt="finger" 
				style={{
					backgroundImage: finger,
					margin: "8px auto",
					width: "330px",
					height: "243px",
					borderRadius: "450px",
				}}
			/></div>
				<p style={{ textAlign: "center", fontSize: "50px" }}>Creating A Room For You...</p>
			</div>
		);
	return (
		<div className="text-center">
			<span className="row " style={{ display: "inline", flexDirection: "row" }}>
				<NeonRapidfire types={props.type} />
			</span>
			<h1 style={{ color: "#404040" }}>Click to Create a room</h1>
			<Button variant="contained" color="primary" onClick={() => Redirect()}>
				Create a room
			</Button>
			<pre style={{ fontSize: "48px", fontWeight: "999", fontFamily: "'Pacifico', cursive", color: "#404040" }}>How to Play?👇 </pre>
		</div>
	);
}

export default RfCreater;
