import Card from "../Card";
import himym from '../assets/YLL/YLL_himym.jpg'
import demonslayer from '../assets/YLL/YLL_demonslayer.jpg'
import transformer from '../assets/YLL/YLL_transformer.jpg'
import naruto from '../assets/YLL/YLL_naruto.jpg'
import fastandfurious from '../assets/YLL/YLL_fastandfurious.jpg'


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
						<Card img={naruto} link="/you-look-like/naruto" text="Which Naruto character you are?" />
						<Card img={transformer} link="/you-look-like/transformer" text="Which Transformer Are You? Take the Quiz to Find Out" />
						<Card img={himym} link="/you-look-like/himym" text="Which How I Met Your Mother Character Are You? Take the Quiz to Find Out" />
						<Card img={demonslayer} link="/you-look-like/demonslayer" text="Which demon slayer character you are" />
						<Card img={fastandfurious} link="/you-look-like/fastandfurious" text="Which Fast & Furious Character Are You? Take This Quiz to Find Out" />

					</div>
				</div>
			</section>
		</div>
	);
}

export default IndexYouLookLike;
