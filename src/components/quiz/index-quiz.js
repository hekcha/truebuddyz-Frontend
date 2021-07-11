import React from "react";
import { Link } from "react-router-dom";
import "./index-quiz.css";
import vegetables from "../assets/vegetables.png";
import quiz from "../assets/quiz.png";
import happynewyear from "../assets/happynewyear.jpg";

function QuizIndex() {
	return (
		<div id="quizindex" className="container">
			<img src={quiz} className="quiz-img " />
			<div className="row">
				<div className="col-12 col-md-6">
					<Link to="/quiz/new">
						<div class="card">
							<div class="box">
								<div class="content">
									<img src={vegetables} className="card-image" />
									<h3>Quiz for Friend's </h3>
									<p>
										You can play this quiz with your friends or family.
										<br />
										You can choose questions or you can also add your questions.
									</p>
								</div>
							</div>
						</div>
					</Link>
				</div>
				<div className="col-12 col-md-6">
					<div class="card">
						<div class="box">
							<div class="content">
								<img src={happynewyear} className="card-image" />
								<h3>Happy New Year Quiz</h3>
								<p>Tomorrow, is the first blank page of a 365-page book. Write a good one.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default QuizIndex;
