import React, { useEffect } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/page/HomePage";
// import Quizcreate from "./components/createQuiz";
import CreateQuiz from "./components/quiz/createQuiz";
import Playquiz from "./components/quiz/playQuiz";
import Quizhome from "./components/quiz/quizHome";
import Quizshow from "./components/quiz/showQuiz";
import Navbar from "./components/Nav/Navbar";
import EachResponse from "./components/quiz/eachResponse";
import RfCreater from "./components/rapidfire/RfCreater";
import Rapidfire from "./components/rapidfire/playRF";
import IndexRf from "./components/rapidfire/indexRF";
import Entertainment from "./components/entertainment/Entertainment";
import NotAllowed from "./components/page/NotAllowed";
import Feedback from "./components/page/Feedback";
import Contribution from "./components/page/Contribution";
import IndexEntertainment from "./components/entertainment/IndexEntertainment";
import Game from "./components/page/Game";


function App() {
	const [token] = useCookies("tb-token");
	useEffect(() => {
		var form = new FormData();
		var date = new Date();
		if (!token["tb-token"]) {
			form.append("username", date.getTime().toString(31));
			form.append("password", "adminadmin");
			date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
			fetch(`${process.env.REACT_APP_API_URL}/api/user/`, {
				method: "POST",
				body: form,
			})
				.then((resp) => resp.json())
				.then((res) => {
					document.cookie = "tb-token=" + res + "; expires=" + date.toGMTString() + ";path=/;";
					document.cookie = "tb-user=" + form.get("username") + "; expires=" + date.toGMTString() + ";path=/;";
					window.location.reload();
				})
				.catch((err) => console.log(err));
		}
	}, []);

	return (
		<React.Fragment>
			<CookiesProvider>
			<Navbar />
			<div style={{paddingTop:'100px'}}>
				<Router>
					<Switch>
						<Route path="/" exact component={() => <Home />} />
						<Route path="/games" exact component={() => <Game />} />
						<Route path="/feedback" exact component={() => <Feedback />} />
						<Route path="/contribution" exact component={() => <Contribution />} />
						<Route path="/notallowed" exact component={() => <NotAllowed />} />
						<Route path="/quiz" exact component={() => <Quizhome />} />
						<Route path="/quiz/:type" exact component={(x) => <CreateQuiz type={x.match.params.type} />} />
						<Route path="/quiz/play/:code" exact component={(x) => <Playquiz code={x.match.params.code} />} />
						<Route path="/quiz/view/:code" exact component={(x) => <Quizshow code={x.match.params.code} />} />
						<Route path="/quiz/response/:code" exact component={(x) => <EachResponse responseCode={x.match.params.code} />} />
						<Route path="/rapidfire" exact component={() => <IndexRf />} />
						<Route path="/rapidfire/:type" exact component={(x) => <RfCreater type={x.match.params.type} />} />
						<Route path="/rapidfire/:type/:code" exact component={(x) => <Rapidfire gameId={x.match.params.code} type={x.match.params.type} />} />
						<Route path="/entertainment/:type" exact component={(x) => <Entertainment type={x.match.params.type} />} />
						<Route path="/entertainment" exact component={() => <IndexEntertainment />} />
						<Redirect to="/" />
					</Switch>
				</Router>
			</div>
			</CookiesProvider>
		</React.Fragment>
	);
}

export default App;
