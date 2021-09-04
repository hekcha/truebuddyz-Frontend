import "./indexrf.css";
import friends from "../assets/rf_friends.jpg";
import couples from "../assets/rf_couples.jpg";
import bff from "../assets/rf_bff.jpg";
import coming_soon from "../assets/coming_soon.jpg";
import Card from '../Card';

function IndexRf() {
	return (
		<div id="indexrf" className="container">
			<div className="cards-list">
				<Card link="/rapidfire/friends" img={friends} text="Friend's RapidFire" />
				<Card link="/rapidfire/couples" img={couples} text="Couple's RapidFire" />
				<Card link="/rapidfire/bff" img={bff} text="BFF RapidFire" />
				<Card link="" img={coming_soon} text="" />
				<Card link="" img={coming_soon} text="" />
				<Card link="" img={coming_soon} text="" />
			</div>
		</div>
	);
}

export default IndexRf;
