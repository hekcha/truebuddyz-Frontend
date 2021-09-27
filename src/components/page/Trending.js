import Card, { GradientCard } from "../Card";

function Trending(props) {

	return (
		<div className="inner div">
			<header className="header">
				<h1 className="h1" style={{ marginBottom: "0em" }}>Hot & Trending🔥</h1>
			</header>
			<section className="tiles section" style={{ marginTop: "0" }}>
				<div id="indexrf" className="container">
					{props.trand?
						<div className="cards-list">
							{props.trand.map((item) => {
								if(item.is_GradientCard)
									return <GradientCard link={item.link} text={item.text} />;
								else
									return <Card link={item.link} img={item.image} text={item.text} />;
							})}
						</div>
					:
						<div>loading....</div>
					}
				</div>
			</section>
		</div>
	);
}

export default Trending;
