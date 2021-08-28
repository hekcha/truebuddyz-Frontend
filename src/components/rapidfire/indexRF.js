import './indexrf.css'
import friends from "../assets/rf_friends.jpg";
import couples from "../assets/rf_couples.jpg";
import bff from "../assets/rf_bff.jpg";
import coming_soon from "../assets/coming_soon.jpg";


function IndexRf() {
	return (
		<div id="indexrf" className="container">
			<div class="cards-list">
				<div class="card 1">
					<div class="card_image"><img src={friends} /></div>
					<div class="card_title title-white"><p>Friend's RapidFire</p></div>
				</div>
				<div class="card 2">
					<div class="card_image"><img src={couples} /></div>
					<div class="card_title title-white"><p>Couple's RapidFire</p></div>
				</div>
				<div class="card 3">
					<div class="card_image"><img src={bff} /></div>
					<div class="card_title title-white"><p>BFF RapidFire</p></div>
				</div>
				<div class="card 3">
					<div class="card_image"><img src={coming_soon} /></div>
					{/* <div class="card_title"><p>Coming Soon</p></div> */}
				</div>
				<div class="card 3">
					<div class="card_image"><img src={coming_soon} /></div>
					{/* <div class="card_title"><p>Coming Soon</p></div> */}
				</div>
				<div class="card 3">
					<div class="card_image"><img src={coming_soon} /></div>
					{/* <div class="card_title"><p>Coming Soon</p></div> */}
				</div>
			</div>
		</div>
	);
}

export default IndexRf;
