import React, { lazy, Suspense, useEffect, useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/page/HomePage";
import Navbar from "./components/Nav/Navbar";
import { LoadingReload } from "./components/page/Loading";
import Game from "./components/page/Game";

// import CreateQuiz from "./components/quiz/createQuiz";
// import Playquiz from "./components/quiz/playQuiz";
// import Quizhome from "./components/quiz/quizHome";
// import Quizshow from "./components/quiz/showQuiz";
// import EachResponse from "./components/quiz/eachResponse";
// import RfCreater from "./components/rapidfire/RfCreater";
// import Rapidfire from "./components/rapidfire/playRF";
// import IndexRf from "./components/rapidfire/indexRF";
// import YouLookLike from "./components/youlooklike/YouLookLike";
// import Feedback from "./components/page/Feedback";
// import Contribution from "./components/page/Contribution";
// import IndexYouLookLike from "./components/youlooklike/IndexYouLookLike";
// import IndexHowWellUKnow from "./components/howWellUKnow/IndexHowWellUKnow";
// import HowWellUKnow from "./components/howWellUKnow/HowWellUKnow";

const CreateQuiz = lazy(() => import("./components/quiz/createQuiz"));
const Playquiz = lazy(() => import("./components/quiz/playQuiz"));
const Quizhome = lazy(() => import("./components/quiz/quizHome"));
const Quizshow = lazy(() => import("./components/quiz/showQuiz"));
const EachResponse = lazy(() => import("./components/quiz/eachResponse"));
const RfCreater = lazy(() => import("./components/rapidfire/RfCreater"));
const Rapidfire = lazy(() => import("./components/rapidfire/playRF"));
const IndexRf = lazy(() => import("./components/rapidfire/indexRF"));
const YouLookLike = lazy(() => import("./components/youlooklike/YouLookLike"));
const Feedback = lazy(() => import("./components/page/Feedback"));
const Contribution = lazy(() => import("./components/page/Contribution"));
const IndexYouLookLike = lazy(() => import("./components/youlooklike/IndexYouLookLike"));
const IndexHowWellUKnow = lazy(() => import("./components/howWellUKnow/IndexHowWellUKnow"));
const HowWellUKnow = lazy(() => import("./components/howWellUKnow/HowWellUKnow"));
const Policy = lazy(() => import("./components/page/Policy"));

function App() {
	const [token] = useCookies("tb-token");
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
					document.cookie = "tb-token=" + res + "; expires=" + date.toGMTString() + ";path=/;";
					document.cookie = "tb-user=" + form.get("username") + "; expires=" + date.toGMTString() + ";path=/;";
					// window.location.reload();
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
							<Suspense fallback={<div />}>
								<Route path="/feedback" exact component={() => <Feedback />} />
								<Route path="/contribution" exact component={() => <Contribution />} />
								<Route path="/rapidfire" exact component={() => <IndexRf />} />
								<Route path="/youlooklike" exact component={() => <IndexYouLookLike />} />
								<Route path="/howwelluknow" exact component={() => <IndexHowWellUKnow />} />
								{token["tb-token"] ? (
									<div>
										<Route path="/quiz" exact component={() => <Quizhome />} />
										<Route path="/quiz/:type" exact component={(x) => <CreateQuiz type={x.match.params.type} />} />
										<Route path="/quiz/play/:code" exact component={(x) => <Playquiz code={x.match.params.code} />} />
										<Route path="/quiz/view/:code" exact component={(x) => <Quizshow code={x.match.params.code} />} />
										<Route path="/quiz/response/:code" exact component={(x) => <EachResponse responseCode={x.match.params.code} />} />

										<Route path="/rapidfire/:type" exact component={(x) => <RfCreater type={x.match.params.type} />} />

										<Route
											path="/rapidfire/:type/:code"
											exact
											component={(x) => <Rapidfire gameId={x.match.params.code} type={x.match.params.type} />}
										/>
										<Route path="/youlooklike/:type" exact component={(x) => <YouLookLike type={x.match.params.type} />} />

										<Route path="/howwelluknow/:type" exact component={(x) => <HowWellUKnow type={x.match.params.type} />} />
										{/* <Route path="/*" component={() => window.location.href="/"} /> */}
									</div>
								) : (
									<Route path="/*" exact component={() => <LoadingReload />} />
								)}
							</Suspense>
							<Redirect to="/" />
						</Switch>
					</Router>
				</div>
			</CookiesProvider>
		</React.Fragment>
	);
}

export default App;
