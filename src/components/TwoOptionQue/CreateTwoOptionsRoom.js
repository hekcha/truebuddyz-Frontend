// eslint-disable-next-line
import * as firebase from "firebase"; // important
import firebaseDb from "../../firebase";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import finger from "../assets/finger.gif";
import NeonTwoOpt from "../Neon/NeonTwoOpt";


function TwoOptRoom(props) {
	const [isLoading, setIsLoading] = useState(false)

	var ALLOWED_GAMES = ["wouldyourather", "thisorthat"];
    var ALLOWED_PAGES = {
        "wouldyourather":["friends", "students"],
        "thisorthat":["friends", "students"],
    }

	useEffect(() => {
		for (var i = 0; i < ALLOWED_GAMES.length; i++) {
			if (ALLOWED_GAMES[i] === props.game)
            {
                for(var j = 0; j < ALLOWED_PAGES[props.game].length; j++)
                {
                    if(ALLOWED_PAGES[props.game][j] === props.subGame) break;
                    if(j === ALLOWED_PAGES[props.game].length - 1) window.location.href = "/";
                }
                break;
            }
			if (i === ALLOWED_GAMES.length - 1) window.location.href = "/"; // SHOW 404 page
		}
	// eslint-disable-next-line
	}, []);

	const Redirect = () => {
		setIsLoading(true);
		var date = new Date();
		var gameId = date.getTime().toString(31);
		var x=Math.floor(Math.random()*10);
		firebaseDb.child(props.game).child(gameId).set(
				{
                    subGame:props.subGame,
					queNo: x,
					users: "null",
					ans: "null",
				},
				(err) => {
					if(err)
						console.log("Error: ", err);
					else
					{
						if(props.game==='wouldyourather')
							window.location.href = `/would-you-rather/${props.subGame}/${gameId}`;
						if(props.game==='thisorthat')
							window.location.href = `/this-or-that/${props.subGame}/${gameId}`;
					}
				}
			);
	};
	if(isLoading)
		return (
			<div id="playRF" style={{ margin: "40px auto" }}>
                <NeonTwoOpt game={props.game} />
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
                <NeonTwoOpt game={props.game} />
			</span>
			<h1 style={{ color: "#404040" }}>Click to Create a room for {props.subGame}</h1>
			<Button variant="contained" color="primary" onClick={() => Redirect()}>
				Create a room
			</Button>
			<pre style={{ fontSize: "48px", fontWeight: "999", fontFamily: "'Pacifico', cursive", color: "#404040" }}>How to Play?👇 </pre>
		</div>
	);
}

export default TwoOptRoom;
