import Card from "../Card";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function Trending() {
	const [token] = useCookies(["tb-token"]);
	const [Trand, setTrand] = useState(null);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/core/trnd`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
			.then((resp) => resp.json())
			.then((res) => setTrand(res))
			.catch((err) => console.log(err));
	// eslint-disable-next-line
	}, []);

	if (Trand)
		return (
			<div className="inner div">
				<header className="header">
					<h1 className="h1" style={{ marginBottom: "0em" }}>Hot & Trending🔥</h1>
				</header>
				<section className="tiles section" style={{ marginTop: "0" }}>
					<div id="indexrf" className="container">
						<div className="cards-list">
							{Trand.map((item) => {
								return <Card link={item.link} img={item.image} text={item.text} />;
							})}
						</div>
					</div>
				</section>
			</div>
		);

	return <div>loading....</div>; // dont use loading.js
}

export default Trending;
