import React, { useEffect, useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/page/HomePage";
import Navbar from "./components/Nav/Navbar";
import Game from "./components/page/Game";
import CreateQuiz from "./components/quiz/createQuiz";
import Playquiz from "./components/quiz/playQuiz";
import Quizhome from "./components/quiz/quizHome";
import Quizshow from "./components/quiz/showQuiz";
import EachResponse from "./components/quiz/eachResponse";
import RfCreater from "./components/rapidfire/RfCreater";
import Rapidfire from "./components/rapidfire/playRF";
import IndexRf from "./components/rapidfire/indexRF";
import YouLookLike from "./components/youlooklike/YouLookLike";
import Feedback from "./components/page/Feedback";
import Contribution from "./components/page/Contribution";
import IndexYouLookLike from "./components/youlooklike/IndexYouLookLike";
import IndexHowWellUKnow from "./components/howWellUKnow/IndexHowWellUKnow";
import HowWellUKnow from "./components/howWellUKnow/HowWellUKnow";
import Policy from "./components/page/Policy";
import IndexThisOrThat from "./components/TwoOptionQue/ThisOrThatIndex";
import IndexWouldYouRather from "./components/TwoOptionQue/WouldYouRatherIndex";
import TwoOptRoom from "./components/TwoOptionQue/CreateTwoOptionsRoom";
import PlayTwoOpt from "./components/TwoOptionQue/PlayTwoOpt";


function App() {
	const [token,setToken] = useCookies(['tb-token','tb-user']);
	const [trand, setTrand] = useState(null);
	const [newGame, setNewGame] = useState(null);

	useEffect(() => {
		var form = new FormData();
		var date = new Date();
		if (!token["tb-token"]) {
			form.append("username", date.getTime().toString(31));
			form.append("password", "adminadmin");
			date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
			fetch(`${process.env.REACT_APP_API_URL}/core/user/`, {
				method: "POST",
				body: form,
			})
				.then((resp) => resp.json())
				.then((res) => {
					setToken("tb-token",res,{expires:date});
					setToken("tb-user",form.get("username"),{expires:date});
				})
				.catch((err) => console.log(err));
		}
		fetch(`${process.env.REACT_APP_API_URL}/core/games/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
			.then((resp) => resp.json())
			.then((res) => {
				setTrand(res["trending"]);
				setNewGame(res["newgames"]);
			})
			.catch((err) => console.log(err));
		// eslint-disable-next-line
	}, []);

	return (
		<React.Fragment>
			<CookiesProvider>
				<Navbar />
				<div style={{ paddingTop: "100px" }}>
					<Router>
						<Switch>
							<Route path="/" exact component={() => <Home trand={trand} newGame={newGame} />} />
							<Route path="/games" exact component={() => <Game trand={trand} newGame={newGame} />} />
							<Route path="/feedback" exact component={() => <Feedback />} />
							<Route path="/contribution" exact component={() => <Contribution />} />
							<Route path="/policy" exact component={() => <Policy />} />

							<Route path="/quiz" exact component={() => <Quizhome />} />
							<Route path="/quiz/:type" exact component={(x) => <CreateQuiz type={x.match.params.type} />} />
							<Route path="/quiz/play/:code" exact component={(x) => <Playquiz code={x.match.params.code} />} />
							<Route path="/quiz/view/:code" exact component={(x) => <Quizshow code={x.match.params.code} />} />
							<Route path="/quiz/response/:code" exact component={(x) => <EachResponse responseCode={x.match.params.code} />} />

							<Route path="/rapid-fire" exact component={() => <IndexRf />} />
							<Route path="/rapid-fire/:type" exact component={(x) => <RfCreater type={x.match.params.type} />} />
							<Route path="/rapid-fire/:type/:code" exact component={(x) => <Rapidfire gameId={x.match.params.code} type={x.match.params.type} />}/>

							<Route path="/you-look-like" exact component={() => <IndexYouLookLike />} />
							<Route path="/you-look-like/:type" exact component={(x) => <YouLookLike type={x.match.params.type} />} />

							<Route path="/how-well-u-know" exact component={() => <IndexHowWellUKnow />} />
							<Route path="/how-well-u-know/:type" exact component={(x) => <HowWellUKnow type={x.match.params.type} />} />
						
							<Route path="/this-or-that" exact component={(x) => <IndexThisOrThat />} />
							<Route path="/this-or-that/:type" exact component={(x) => <TwoOptRoom game="thisorthat" subGame={x.match.params.type} />} />
							<Route path="/this-or-that/:type/:code" exact component={(x) => <PlayTwoOpt game="thisorthat" subGame={x.match.params.type} gameId={x.match.params.code} />} />

							{/* <Route path="/would-you-rather" exact component={(x) => <IndexWouldYouRather />} /> */}
							<Route path="/would-you-rather" exact component={(x) => <TwoOptRoom game="wouldyourather" subGame="all" />} />
							<Route path="/would-you-rather/:code" exact component={(x) => <PlayTwoOpt game="wouldyourather" subGame="all" gameId={x.match.params.code} />} />
							<Redirect to="/" />
						</Switch>
					</Router>
				</div>
			</CookiesProvider>
		</React.Fragment>
	);
}

export default App;
