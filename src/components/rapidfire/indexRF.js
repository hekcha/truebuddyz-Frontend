import "./indexrf.css";
import friends from "../assets/rf_friends.jpg";
import couples from "../assets/rf_couples.jpg";
import bff from "../assets/rf_bff.jpg";
import coming_soon from "../assets/coming_soon.jpg";
<<<<<<< HEAD
=======
import Card from '../Card';
>>>>>>> ff5a0fff774fe373d5ab530277dfd6d80158fe1d

function IndexRf() {
	return (
		<div id="indexrf" className="container">
<<<<<<< HEAD
			<div class="cards-list">
				<div class="card 1">
					<div onClick={() => (window.location.href = "/rapidfire/friends")} class="card_image">
						<img src={friends} />
					</div>
					<div class="card_title title-white">
						<p>Friend's RapidFire</p>
					</div>
				</div>
				<div class="card 2">
					<div onClick={() => (window.location.href = "/rapidfire/couples")} class="card_image">
						<img src={couples} />
					</div>
					<div class="card_title title-white">
						<p>Couple's RapidFire</p>
					</div>
				</div>
				<div class="card 3">
					<div onClick={() => (window.location.href = "/rapidfire/bff")} class="card_image">
						<img src={bff} />
					</div>
					<div class="card_title title-white">
						<p>BFF RapidFire</p>
					</div>
				</div>
				<div class="card 3">
					<div class="card_image">
						<img src={coming_soon} />
					</div>
					{/* <div class="card_title"><p>Coming Soon</p></div> */}
				</div>
				<div class="card 3">
					<div class="card_image">
						<img src={coming_soon} />
					</div>
					{/* <div class="card_title"><p>Coming Soon</p></div> */}
				</div>
				<div class="card 3">
					<div class="card_image">
						<img src={coming_soon} />
					</div>
					{/* <div class="card_title"><p>Coming Soon</p></div> */}
				</div>
=======
			<div className="cards-list">
				<Card link="/rapidfire/friends" img={friends} text="Friend's RapidFire" />
				<Card link="/rapidfire/couples" img={couples} text="Couple's RapidFire" />
				<Card link="/rapidfire/bff" img={bff} text="BFF RapidFire" />
				<Card link="" img={coming_soon} text="" />
				<Card link="" img={coming_soon} text="" />
				<Card link="" img={coming_soon} text="" />
>>>>>>> ff5a0fff774fe373d5ab530277dfd6d80158fe1d
			</div>
		</div>
	);
}

export default IndexRf;
