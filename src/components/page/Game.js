import React from "react";
import "./main.css";
import quiz from "../assets/quiz.jpg";
import rf from "../assets/rf.jpg";
import NewGame from "./NewGame";
import Card, { BlueCard } from "../Card";


function Game() {
	return (
		<React.Fragment>
			<NewGame />
			<br />
			<br />
			<div className="inner div">
				<header className="header">
					<h1 className="h1" style={{marginBottom:'0em'}}>Our games🔥</h1>
				</header>
				<section className="tiles section" style={{marginTop:'0'}}>
					<div id="indexrf" className="container">
						<div className="cards-list">
							<Card link="/quiz" img={quiz} text="" />
							<Card link="/rapidfire" img={rf} text="RapidFire" />

							<BlueCard link="/howwelluknow" text="How Well You Know" />
							<BlueCard link="/youlooklike" text="you look like" />
						</div>
					</div>
				</section>
			</div>
		</React.Fragment>
	);
}

export default Game;