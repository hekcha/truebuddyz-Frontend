import Card, { GradientCard } from "../Card";
import coming_soon from "../assets/coming_soon.jpg";
function IndexThisOrThat() {
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
						<GradientCard link="/this-or-that/students" text="this or that for students" />
						<GradientCard link="/this-or-that/friends" text="this or that for friends" />

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

export default IndexThisOrThat;
