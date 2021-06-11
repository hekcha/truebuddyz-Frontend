import React, { useEffect } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Home from './components/pages/home';
import Quizcreate from './components/pages/quiz/createquiz';
import Playquiz from './components/pages/quiz/playquiz';
import Quizhome from './components/pages/quiz/quizhome';
import Quizshow from './components/pages/quiz/showquiz';

function App(){
	const [token] = useCookies('tb-token')
	useEffect(()=>{
		var frm=new FormData();
		var date = new Date();
		if (!token['tb-token'])
		{
			frm.append("username",date.getTime())
			frm.append("password",'adminadmin')
			date.setTime(date.getTime()+(365*24*60*60*1000))
			fetch(`${process.env.REACT_APP_API_URL}/api/user/`, {
				method: "POST",
				body: frm
			}).then((resp) => resp.json()).then((res) => {
				document.cookie = "tb-token="+res+"; expires="+date.toGMTString()+";path=/;";
				document.cookie = "tb-user="+frm.get('username')+"; expires="+date.toGMTString()+";path=/;";
				window.location.reload()
			})
			.catch((err) => console.log(err))
		}
	},[])

	if(token['tb-token'])
		return(
			<React.Fragment>
			<CookiesProvider>
				<Router>
					<Switch>
						<Route path="/home" exact component={() => <Home />} />
						<Route path="/quiz" exact component={() => <Quizhome />} />
						<Route path="/quiz/new" exact component={() => <Quizcreate />} />
						<Route path="/quiz/view/:code" exact component={(x) => <Quizshow code={x.match.params.code} />} />
						<Route path="/quiz/play/:code" exact component={(x) => <Playquiz code={x.match.params.code} />} />

						<Redirect to="/quiz" />
					</Switch>
				</Router>
			</CookiesProvider>
		</React.Fragment>
	);
	else
		return(<div />);
}

export default App;

