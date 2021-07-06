import React, { useEffect, useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/page/HomePage";
import Quizcreate from "./components/quiz/createQuiz";
import Playquiz from "./components/quiz/playQuiz";
import Quizhome from "./components/quiz/quizHome";
import Quizshow from "./components/quiz/showQuiz";
import Navbar from "./components/Nav/Navbar";
import QuizIndex from './components/quiz/index-quiz';

// RapidFire
import RfIndex from "./components/rapidfire/index-rf";
import Rapidfire from "./components/rapidfire/friends-rf";

function App() {
	const [token] = useCookies("tb-token");
	const [view, setView] = useState(0)
	useEffect(() => {
		var frm = new FormData();
		var date = new Date();
		if(!token["tb-token"]) {
			frm.append("username", date.getTime());
			frm.append("password", "adminadmin");
			date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
			fetch(`${process.env.REACT_APP_API_URL}/api/user/`, {
				method: "POST",
				body: frm,
			})
				.then((resp) => resp.json())
				.then((res) => {
					document.cookie = "tb-token=" + res + "; expires=" + date.toGMTString() + ";path=/;";
					document.cookie = "tb-user=" + frm.get("username") + "; expires=" + date.toGMTString() + ";path=/;";
					setTimeout(function(){ setView(1); }, 1000);
				})
				.catch((err) => console.log(err));
		}
		else
			setView(1);
	}, []);

	if(view)
		return (
			<React.Fragment>
				{/* <Navbar /> */}
				<CookiesProvider>
					<Router>
						<Switch>
							<Route path="/home" exact component={() => <Home />} />
							<Route path="/quiz" exact component={() => <QuizIndex />} />
							<Route path="/quiz/new" exact component={() => <Quizcreate />} />
							<Route path="/quiz/view/:code" exact component={(x) => <Quizshow code={x.match.params.code} />} />
							<Route path="/quiz/play/:code" exact component={(x) => <Playquiz code={x.match.params.code} />} />

							<Route path="/rf" exact component={() => <RfIndex />} />
							<Route path="/rf/play/:code" exact component={(x) => <Rapidfire gameId={x.match.params.code} />} />
							
							<Redirect to="/rf" />
						</Switch>
					</Router>
				</CookiesProvider>
			</React.Fragment>
		);
		else return (
		<div>
			loading............
		</div>
	);
}

export default App;
