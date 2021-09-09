import Card from "../Card";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function NewGame() {
	const [token] = useCookies(["tb-token"]);
	const [newGame, setNewGame] = useState(null);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/core/new`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
			.then((resp) => resp.json())
			.then((res) => setNewGame(res))
			.catch((err) => console.log(err));
	}, []);

	if (newGame)
		return (
			<div className="inner div">
				<header className="header">
					<h1 className="h1" style={{ marginBottom: "0em" }}>New Games</h1>
				</header>
				<section className="tiles section" style={{ marginTop: "0" }}>
					<div id="indexrf" className="container">
						<div className="cards-list">
							{newGame.map((item) => {
								return <Card link={item.link} img={item.image} text={item.text} />;
							})}
						</div>
					</div>
				</section>
			</div>
		);

	return <div>loading....</div>;
}

export default NewGame;
