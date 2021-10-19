import quiz_friends from "../assets/QUIZ/QUIZ_friends.jpg";
import quiz_couples from "../assets/QUIZ/QUIZ_couple.jpg";
import rf_friends from "../assets/RF/RF_friends.jpg";
import Card from "../Card";

function MostLiked(props) {
	return (
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
	);
}

export default MostLiked;
