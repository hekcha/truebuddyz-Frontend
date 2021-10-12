import React from "react";
// import "./main.css";
import quiz_friends from "../assets/quiz_friends.jpg";
import quiz_couples from "../assets/quiz_couples.jfif";
import rf_friends from "../assets/rf_friends.jpg";
import Card from "../Card";
import Trending from "./Trending";
import Game from "./Game";
import Footer from "./Footer";
import CssGauge from "./CssGauge";

function Home(props) {
	return (
		<React.Fragment>
			<div className="is-preload">
				<div className="row"></div>
				<div id="wrapper" className="div mx-4">
					<div id="main" className="div">
						<div className="inner div">
							<header className="header">
								<h1 className="h1" style={{ marginBottom: "0.2em" }}>
									Most Liked💗
								</h1>
								<h2 className="h2" style={{ marginBottom: "0.5em" }}>
									Most loved❤️‍🔥 and played🃏 Games by TrueBuddyZ Family.
								</h2>
							</header>
							<section className="tiles section" style={{ marginTop: "0" }}>
								<div id="indexrf" className="container">
									<div className="cards-list">
										<Card link="/quiz/friends" img={quiz_friends} text="Friend's Quiz" />
										<Card link="/quiz/couple" img={quiz_couples} text="Couple's Quiz" />
										<Card link="/rapid-fire/friends" img={rf_friends} text="Friend's RapidFire" />
									</div>
								</div>
							</section>
						</div>
						<br />
						<br />
						<Trending trand={props.trand} />
						<br />
						<br />
						<Game newGame={props.newGame} />
						<br />
						<CssGauge />
						<hr />
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Home;
