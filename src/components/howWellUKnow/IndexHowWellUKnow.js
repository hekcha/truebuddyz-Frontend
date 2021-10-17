import Card from "../Card";
import fastandfurious from "../assets/HWUK/HWUK_fastandfurious.jpg";
import marvel from "../assets/HWUK/HWUK_marvel.jpg";
import hungergames from "../assets/HWUK/HWUK_hungergames.jpg";
import loki from "../assets/HWUK/HWUK_loki.jpg";
import onepunchman from "../assets/HWUK/HWUK_onepunchman.jpg";
import breakingbad from "../assets/HWUK/HWUK_breakingbad.jfif";
import strangerthings from "../assets/HWUK/HWUK_strangerthings.jpg";
import wandavision from "../assets/HWUK/HWUK_wandavision.jpg";
import valorant from "../assets/HWUK/HWUK_valorant.jpg";
import friends from "../assets/HWUK/HWUK_friends.jpg";

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

						<Card link="/how-well-u-know/fastandfurious"	img={fastandfurious}	text="The Hardest Fast & Furious Quiz You’ll Ever Take" />
						<Card link="/how-well-u-know/marvel"			img={marvel}			text="A Marvel Trivia Quiz Only True MCU Fans Can Ace" />
						<Card link="/how-well-u-know/hungergames"		img={hungergames}		text="Only True Fans Can Ace this Hunger Games Trivia Quiz" />
						<Card link="/how-well-u-know/loki"				img={loki}				text="Think You Know the God of Mischief? Take This Loki Trivia Quiz To Find Out" />
						<Card link="/how-well-u-know/onepunchman"		img={onepunchman}		text="Think You Know Everything About One Punch Man? Take Our Trivia Quiz to Find Out" />
						<Card link="/how-well-u-know/breakingbad"		img={breakingbad}		text="The Hardest Breaking Bad Trivia Quiz You’ll Ever Take" />
						<Card link="/how-well-u-know/strangerthings"	img={strangerthings}	text="Only True Stranger Things Fans Can Pass This Trivia Quiz" />
						<Card link="/how-well-u-know/wandavision"		img={wandavision}		text="Think You Know Everything About WandaVision? Take Our Trivia Quiz to Find Out" />
						<Card link="/how-well-u-know/valorant"			img={valorant}			text="How Well Do You Know Valorant’s Agents? Take This Quiz to Find Out" />
						<Card link="/how-well-u-know/friends"			img={friends}			text="Friends Quiz Questions for True Fans" />
					</div>
				</div>
			</section>
		</div>
	);
}

export default IndexHowWellUKnow;
