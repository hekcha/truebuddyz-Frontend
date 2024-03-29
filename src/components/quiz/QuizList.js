import friends from "../assets/QUIZ/QUIZ_friends.jpg";
import couples from "../assets/QUIZ/QUIZ_couple.jpg";
import siblings from "../assets/QUIZ/QUIZ_siblings.jfif";
import coming_soon from "../assets/coming_soon.jpg";
import Card from "../Card";

function QuizList() {
	return (
		<div className="inner div">
			<br />
			<br />
			<header className="header">
				<h1
					className="h1"
					style={{ marginTop: "-90px", marginBottom: "0em", textAlign: "center", fontFamily: "'Permanent Marker', cursive", fontSize: "72px" }}
				>
					Quiz
				</h1>
			</header>
			<section className="tiles section" style={{ marginTop: "0" }}>
				<div id="indexrf" className="container">
					<div className="cards-list">
						<Card link="/quiz/friends" img={friends} text="Friend's Quiz" />
						<Card link="/quiz/couple" img={couples} text="Couple's Quiz" />
						<Card link="/quiz/siblings" img={siblings} text="Siblings Quiz" />
						<Card link="#" img={coming_soon} text="" />
						<Card link="#" img={coming_soon} text="" />
						<Card link="#" img={coming_soon} text="" />
					</div>
				</div>
			</section>
		</div>
	);
}

export default QuizList;
