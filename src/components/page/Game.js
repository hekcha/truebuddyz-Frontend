import React from "react";
// import "./main.css";
import quiz from "../assets/quiz.jpg";
import rf from "../assets/rf.jpg";
import NewGame from "./NewGame";
import Card, { GradientCard } from "../Card";


function Game(props) {
	return (
		<React.Fragment>
			<NewGame newGame={props.newGame} />
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
							<Card link="/rapid-fire" img={rf} text="RapidFire" />

							<GradientCard link="/how-well-u-know" text="How Well You Know" />
							<GradientCard link="/you-look-like" text="You look like" />
							<GradientCard link="/this-or-that" text="this or that" />
							<GradientCard link="/would-you-rather" text="would you rather" />
						</div>
					</div>
				</section>
			</div>
		</React.Fragment>
	);
}

export default Game;