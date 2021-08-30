import React from "react";
import "./main.css";
import IndexRf from "../rapidfire/indexRF";
import QuizList from "../quiz/QuizList";
import IndexEntertainment from "../entertainment/IndexEntertainment";




function Game() {
	return (
		<React.Fragment>
			<div className="is-preload">
				<div className="row">
				</div>
				<div id="wrapper" className="div mx-4">
					<div id="main" className="div">

						<div className="inner div">
							<header className="header">
								<h1 onClick={() => window.location.href='/quiz'} style={{marginBottom:'0em'}}>Quizzes</h1>
							</header>
							<section className="tiles section" style={{marginTop:'0'}}>
								<QuizList />
							</section>
						</div>
						<br />
						<br />
						<IndexRf />
						<br />
						<br />
						<IndexEntertainment />

					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Game;