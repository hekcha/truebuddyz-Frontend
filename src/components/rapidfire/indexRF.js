import "./indexrf.css";
import friends from "../assets/rf_friends.jpg";
import couples from "../assets/rf_couples.jpg";
import bff from "../assets/rf_bff.jpg";
import coming_soon from "../assets/coming_soon.jpg";
import Card from '../Card';

function IndexRf() {
	return (
		<div className="inner div">
			<header className="header">
				<h1 className="h1" onClick={() => window.location.href='/rapidfire'} style={{marginBottom:'0em'}}>RapidFire</h1>
			</header>
			<section className="tiles section" style={{marginTop:'0'}}>
				<div id="indexrf" className="container">
					<div className="cards-list">
						<Card link="/rapidfire/friends" img={friends} text="Friend's RapidFire" />
						<Card link="/rapidfire/couples" img={couples} text="Couple's RapidFire" />
						<Card link="/rapidfire/bff" img={bff} text="BFF RapidFire" />
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
