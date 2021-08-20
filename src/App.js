import React, { useEffect } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/page/HomePage";
import Quizcreate from "./components/quiz/createQuiz";
import Playquiz from "./components/quiz/playQuiz";
import Quizhome from "./components/quiz/quizHome";
import Quizshow from "./components/quiz/showQuiz";
import Navbar from "./components/Nav/Navbar";
import EachResponse from "./components/quiz/eachResponse";
import RfIndex from './components/rapidfire/indexRF'
import Rapidfire from './components/rapidfire/playRF'

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
				<Router>
					<Switch>
						<Route path="/" exact component={() => <Home />} />
						<Route path="/quiz" exact component={() => <Quizhome />} />
						<Route path="/quiz/new" exact component={() => <Quizcreate />} />
						<Route path="/quiz/play/:code" exact component={(x) => <Playquiz code={x.match.params.code} />} />
						<Route path="/quiz/view/:code" exact component={(x) => <Quizshow code={x.match.params.code} />} />
						<Route path="/quiz/response/:code" exact component={(x) => <EachResponse responseCode={x.match.params.code} />} />
						
						<Route path="/rapidfire" exact component={() => <RfIndex />} />
						<Route path="/rapidfire/play/:code" exact component={(x) => <Rapidfire gameId={x.match.params.code} />} />
						
						<Redirect to="/" />
					</Switch>
				</Router>
			</CookiesProvider>
		</React.Fragment>
	);
}

export default App;
