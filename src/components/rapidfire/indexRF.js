// import "./indexrf.css";
import friends from "../assets/rf_friends.jpg";
import couples from "../assets/rf_couples.jpg";
import siblings from "../assets/rf_siblings.jpg";
import coming_soon from "../assets/coming_soon.jpg";
import Card from '../Card';

function IndexRf() {
	return (
		<div className="inner div">
			<header className="header">
				<h1 className="h1" style={{marginBottom:'0em'}}>RapidFire</h1>
			</header>
			<section className="tiles section" style={{marginTop:'0'}}>
				<div id="indexrf" className="container">
					<div className="cards-list">
						<Card link="/rapid-fire/friends" img={friends} text="Friend's RapidFire" />
						<Card link="/rapid-fire/couple" img={couples} text="Couple's RapidFire" />
						<Card link="/rapid-fire/siblings" img={siblings} text="Siblings's RapidFire" />
						<Card link="#" img={coming_soon} text="" />
						<Card link="#" img={coming_soon} text="" />
						<Card link="#" img={coming_soon} text="" />
					</div>
				</div>
			</section>
		</div>
	);
}

export default IndexRf;
