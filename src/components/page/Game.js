import React from "react";
// import "./main.css";
import quiz from "../assets/QUIZ/QUIZ.jpg";
import rf from "../assets/RF/RF.jpg";
import tot from "../assets/TOT/TOT.jpg";
import hwuk from "../assets/HWUK/HWUK.jpg";
import yll from "../assets/YLL/YLL.jpg";
import wur from "../assets/WUR.jpg";
import NewGame from "./NewGame";
import Card from "../Card";


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

							<Card link="/how-well-u-know" img={hwuk} text="" />
							<Card link="/you-look-like" img={yll} text="You look like" />
							<Card link="/this-or-that" img={tot} text="" />
							<Card link="/would-you-rather" img={wur} text="" />
						</div>
					</div>
				</section>
			</div>
		</React.Fragment>
	);
}

export default Game;