import React from "react";
import "./main.css";
import noimage from "../assets/noimage.jpg";
import quiz_friends from "../assets/quiz_friends.jpg";
import quiz_couples from "../assets/quiz_couples.jfif";
import rf_friends from "../assets/rf_friends.jpg";
import quiz from "../assets/quiz.jpg";
import rf from "../assets/rf.jpg";
import Card from "../Card";
import Trending from "./Trending";
import NewGame from "./NewGame";

function Home() {
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
									Most loved❤️‍🔥 and played🃏 Games by TrueBff Family.
								</h2>
							</header>
							<section className="tiles section" style={{ marginTop: "0" }}>
								<div id="indexrf" className="container">
									<div className="cards-list">
										<Card link="/quiz/friends" img={quiz_friends} text="Friend's Quiz" />
										<Card link="/quiz/couples" img={quiz_couples} text="Couple's Quiz" />
										<Card link="/rapidfire/friends" img={rf_friends} text="Friend's RapidFire" />
									</div>
								</div>
							</section>
						</div>
						<br />
						<br />
						<Trending />
						<br />
						<br />
						<NewGame />
						<br />
						<br />

						<div className="inner div">
							<header className="header">
								<h1 style={{ marginBottom: "0em" }}>Our games🔥</h1>
							</header>
							<section className="tiles section" style={{ marginTop: "0" }}>
								<div id="indexrf" className="container">
									<div className="cards-list">
										<Card link="/quiz" img={quiz} text="" />
										<Card link="/rapidfire" img={rf} text="RapidFire" />

										<div
											className="card"
											onClick={() => (window.location.href = "/howwelluknow")}
											style={{
												fontSize: "65px",
												backgroundColor: "black",
												color: "white",
												fontWeight: "700",
												margin: "auto",
												alignItems: "center",
												justifyContent: "center",
												textTransform: "capitalize",
												textAlign: "center",
											}}
										>
											How Well You Know
										</div>

										<div
											className="card"
											onClick={() => (window.location.href = "/youlooklike")}
											style={{
												fontSize: "65px",
												backgroundColor: "black",
												color: "white",
												fontWeight: "700",
												margin: "auto",
												alignItems: "center",
												justifyContent: "center",
												textTransform: "capitalize",
												textAlign: "center",
											}}
										>
											You Look Like
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Home;
