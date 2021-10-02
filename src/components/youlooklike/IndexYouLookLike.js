import Card from "../Card";
import coming_soon from "../assets/coming_soon.jpg";
import YLL_TRANS_main from "../assets/YLL_TRANS_main-min.jpg";
import YLL_NARUTO_main from "../assets/YLL_NARUTO_main.gif";

function IndexYouLookLike() {
	return (
		<div className="inner div">
			<header className="header">
				<h1
					className="h1"
					style={{ marginBottom: "0em", textAlign: "center", fontFamily: "Permanent Marker" }}
				>
					You Look Like
				</h1>
			</header>
			<section className="tiles section" style={{ marginTop: "30px" }}>
				<div id="indexrf" className="container">
					<div className="cards-list">
						<Card img={YLL_NARUTO_main} link="/you-look-like/naruto" text="Which Naruto character you are?" />
						<Card img={YLL_TRANS_main} link="/you-look-like/transformer" text="Which Transformer Are You? Take the Quiz to Find Out" />

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

export default IndexYouLookLike;
