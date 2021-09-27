import Card, { GradientCard } from "../Card";
import coming_soon from "../assets/coming_soon.jpg";
import HWYN_FAF_main from "../assets/HWYN_FAF_main-min.jpg";
function IndexHowWellUKnow() {
	return (
		<div className="inner div">
			<header className="header">
				<h1
					className="h1"
					style={{
						marginBottom: "0em",
						textAlign: "center",
						fontFamily: "Permanent Marker",
					}}
				>
					How Well You Know
				</h1>
			</header>
			<section className="tiles section" style={{ marginTop: "0" }}>
				<div id="indexrf" className="container">
					<div className="cards-list">
						<Card img={HWYN_FAF_main} link="/howwelluknow/fastandfurious" text="The Hardest Fast & Furious Quiz You’ll Ever Take" />
						<GradientCard link="/howwelluknow/marvel" text="A Marvel Trivia Quiz Only True MCU Fans Can Ace" />

						<Card link="#" img={coming_soon} text="" />
						<Card link="#" img={coming_soon} text="" />
						<Card link="#" img={coming_soon} text="" />
						<Card link="#" img={coming_soon} text="" />
					</div>
				</div>
			</section>
		</div>
	);
}

export default IndexHowWellUKnow;
