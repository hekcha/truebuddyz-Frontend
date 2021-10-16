import Card from "../Card";
import friends from "../assets/TOT/TOT_friends.jpg";
import couple from "../assets/TOT/TOT_couple.jpg";
import hard from "../assets/TOT/TOT_hard.jpg";
import funny from "../assets/TOT/TOT_funny.jpg";
import adult from "../assets/TOT/TOT_adult.jpg";

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
					This Or That
				</h1>
			</header>
			<section className="tiles section" style={{ marginTop: "0" }}>
				<div id="indexrf" className="container">
					<div className="cards-list">
						<Card link="/this-or-that/friends" img={friends} text="This or That for Friends" />
						<Card link="/this-or-that/couple" img={couple} text="This or That for Couple" />
						<Card link="/this-or-that/funny" img={funny} text="Funny This or That Questions" />
						<Card link="/this-or-that/hard" img={hard} text="Hard This or That Questions" />
						<Card link="/this-or-that/adult" img={adult} text="Adult This or That Questions" />
					</div>
				</div>
			</section>
		</div>
	);
}

export default IndexThisOrThat;
