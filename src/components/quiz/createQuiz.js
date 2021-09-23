import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Button, Stepper, Step, StepLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CreateQuiz from "../page/CreateQuiz";
import QueNumber from "../QueNumber";
import QuizList from "./QuizList";
import Trending from "../page/Trending";
import ShareLink from "../ShareLink";

const useStyles = makeStyles((theme) => ({
	box: {
		margin: "30px 5vw",
		// border: "double 10px",
		display: "flex",
		flexDirection: "column",
		minWidth: "50vw",
		maxWidth: "400px",
		// maxHeight: "600px",
		backgroundColor: "#FFFAFA",
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: "20px",
		border: "solid 2px",
		boxShadow: "5px 5px 7px rgba(0, 0, 0, 0.2), -8px -8px 10px rgba(255, 255, 255, 0.8)",
		[theme.breakpoints.up("sm")]: {
			left: "20vw",
		},
	},

	question: {
		marginLeft: "3vw",
		marginRight: "3vw",
		marginBottom: "10px",
		padding: "12px 24px",
		width: "60vw",
		minHeight: "95px",
		minWidth: "300px",
		maxWidth: "30vw",
		maxHeight: "13vh",
		fontSize: "20px",
		fontFamily: "'Acme', sans-serif",
		fontWeight: "700	",
		lineHeight: "1.2em",
		wordWrap: "break-word",
		color: "#364547",
		background: "#f0f0f6",
		border: "solid 1px black",
		borderRadius: "20px",
		boxShadow: "8px 5px 15px 7px rgba(0, 0, 0, 0.3), -3px -7px 10px 8px rgba(255, 255, 255, 1)",
		overflowY: "scroll",
	},

	parentOption: {
		[theme.breakpoints.down("xs")]: {
			flexDirection: "column",
		},
	},

	option: {
		marginLeft: "6.5vw",
		marginRight: "3vw",
		marginTop: "5px",
		marginBottom: "5px",
		padding: "12px 20px",
		width: "69vw",
		maxHeight: "10vh",
		minWidth: "180px",
		maxWidth: "270px",
		fontSize: "22px",
		fontFamily: "'Acme', sans-serif",
		fontWeight: "700	",
		lineHeight: "1.2em",
		color: "#435560",
		background: "#f0f0f6",
		border: "solid 1px dark",
		borderRadius: "20px",
		boxShadow:
			"8px 8px 10px rgba( 0, 0, 0, 0.2), -8px -8px 10px rgba(255, 255, 255, 0.8), inset 6px 6px 10px rgba( 0, 0, 0, 0.2), inset -6px -6px 10px rgba(255, 255, 255, 0.8)",
	},

	checked: {
		color: "#22ca62",
		display: "flex",
		flexDirection: "column",
		margin: "2vw",
		position: "absolute",
		left: "-20px",
		[theme.breakpoints.down("xs")]: {
			position: "absolute",
			top: "3.2vh",
			left: "-9vw",
		},
		transition: "all 0.3s ease-out",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",
	},

	unchecked: {
		display: "flex",
		flexDirection: "column",
		margin: "2vw",
		position: "absolute",
		left: "-20px",
		[theme.breakpoints.down("xs")]: {
			position: "absolute",
			top: "3.2vh",
			left: "-2rem",
		},
		transition: "all 0.3s ease-out",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",
	},
	stepper: {
		minWidth: "370px",
		maxWidth: "700px",
		height: "90px",
		margin: "8px auto",
		borderRadius: "20px",
		color: "white",
		backgroundColor: "#e9e9e9",
	},
}));

//********* THIS IS THE STEPS FOR STEPPER  ********/
function getSteps() {
	return ["Create a Quiz", "Share", "Result"];
}
// **********************************************//

function Quizcreate(props) {
	const [token] = useCookies("tb-token");
	const [username, setUsername] = useState(null);
	const [user, setUser] = useState(null);
	const [code, setCode] = useState("");
	const [queBank, setQueBank] = useState(null);
	const [que, setQue] = useState("");
	const [optionA, setOptionA] = useState("");
	const [optionB, setOptionB] = useState("");
	const [optionC, setOptionC] = useState("");
	const [optionD, setOptionD] = useState("");
	const [quizData, setQuizData] = useState([]);
	const [i, setI] = useState(0);
	const [j, setJ] = useState(0);
	const [item, setItem] = useState(null);

	var ALLOWED_PAGES = ["friends", "couple", "siblings"];

	var colourPalette = ["#55E6C1", "#FD7272", "#FEA47F", "#25CCF7", "#EAB543", "#FC427B", "#2C3A47", "#ffa801"];

	// DEFINING THE VARIABLE FOR USING CSS
	const classes = useStyles();
	const steps = getSteps();

	useEffect(() => {
		for (var i = 0; i < ALLOWED_PAGES.length; i++) {
			if (ALLOWED_PAGES[i] === props.type) break;
			if (i === ALLOWED_PAGES.length - 1) window.location.href = "/"; // SHOW 404 page
		}
		var date = new Date();
		setCode(date.getTime().toString(31));

		// fetch questions
		fetch(`${process.env.REACT_APP_API_URL}/quiz/quebank/?category=${props.type}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
			.then((resp) => resp.json())
			.then((res) => setQueBank(res))
			.catch((err) => console.log(err));

		// get id of user
		fetch(`${process.env.REACT_APP_API_URL}/core/user/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
			.then((resp) => resp.json())
			.then((res) => setUser(res))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		if (queBank && username) {
			setQue(`${queBank[i].part1} ${username} ${queBank[i].part2}`);
			setOptionA(queBank[i].optionA);
			setOptionB(queBank[i].optionB);
			setOptionC(queBank[i].optionC);
			setOptionD(queBank[i].optionD);
		}
	}, [i, queBank, username]);

	useEffect(() => {
		if (j == 10) {
			var formdata = new FormData();

			for (var p = 0; p < 10; p++) {
				formdata.append(`que${p + 1}`, quizData[p * 6]);
				formdata.append(`option${p + 1}A`, quizData[p * 6 + 1]);
				formdata.append(`option${p + 1}B`, quizData[p * 6 + 2]);
				formdata.append(`option${p + 1}C`, quizData[p * 6 + 3]);
				formdata.append(`option${p + 1}D`, quizData[p * 6 + 4]);
				formdata.append(`ans${p + 1}`, Number(quizData[p * 6 + 5]));
			}
			formdata.append("user", user);
			formdata.append("code", code);
			formdata.append("name", username);
			formdata.append("category", props.type);

			fetch(`${process.env.REACT_APP_API_URL}/quiz/que/`, {
				method: "POST",
				body: formdata,
				headers: {
					"Authorization": `Token ${token["tb-token"]}`,
				},
			})
				.then((resp) => resp.json())
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
		}
	}, [j]);

	const ChangeHandler = (func, event) => {
		func(event.target.value);
	};

	const SelectAns = (ans) => {
		setItem(ans);
		for (var w = 0; w < 4; w++) {
			if (w === ans) {
				document.getElementById(`option${w}`).classList.remove(`${classes.unchecked}`);
				document.getElementById(`option${w}`).classList.remove(`fa-circle`);
				document.getElementById(`option${w}`).classList.add(`${classes.checked}`);
				document.getElementById(`option${w}`).classList.add(`fa-check-circle`);
			} else {
				document.getElementById(`option${w}`).classList.remove(`${classes.checked}`);
				document.getElementById(`option${w}`).classList.remove(`fa-check-circle`);
				document.getElementById(`option${w}`).classList.add(`${classes.unchecked}`);
				document.getElementById(`option${w}`).classList.add(`fa-circle`);
			}
		}
	};

	const NextQue = () => {
		if (item !== null) {
			setQuizData([
				...quizData,
				document.getElementsByClassName("question")[0].value,
				document.getElementsByClassName("optionA")[0].value,
				document.getElementsByClassName("optionB")[0].value,
				document.getElementsByClassName("optionC")[0].value,
				document.getElementsByClassName("optionD")[0].value,
				item,
			]);

			for (var w = 0; w < 4; w++) {
				document.getElementById(`option${w}`).classList.remove(`${classes.checked}`);
				document.getElementById(`option${w}`).classList.remove(`fa-check-circle`);
				document.getElementById(`option${w}`).classList.add(`${classes.unchecked}`);
				document.getElementById(`option${w}`).classList.add(`fa-circle`);
			}
			setI((i + 1) % queBank.length);
			setJ(j + 1);
			setItem(null);
		}
	};

	function Showque() {
		if (queBank.length === 0) return <div />;
		if (j === 10)
			return (
				<div>
					<ShareLink game="quiz" type={props.type} link={`${process.env.REACT_APP_URL}/quiz/play/${code}`} />
					<br />
					<br />
					<Trending />
				</div>
			);

		if (i < queBank.length) {
			return (
				<div className={classes.box} style={{ borderColor: `${colourPalette[i % 8]}` }}>
					<br />
					<hr />

					<textarea className={`question ${classes.question}`} value={que} onChange={(event) => ChangeHandler(setQue, event)} />
					<br />
					<div className={`row ${classes.parentOption}`} value={optionA}>
						<div className="col-md-6 col-xs-12  d-flex justify-content-center">
							<span>
								<i id="option0" className={`far fa-circle fa-lg col-3 ${classes.unchecked}`} onClick={() => SelectAns(0)}></i>
								<textarea
									className={`border optionA ${classes.option} col-md-9 col-xs-11 `}
									id="optionA"
									value={optionA}
									onChange={(event) => ChangeHandler(setOptionA, event)}
								/>
							</span>
						</div>

						<div className="col-md-6 col-xs-12  d-flex justify-content-center">
							<span>
								<i id="option1" className={`far fa-circle fa-lg col-3 ${classes.unchecked}`} onClick={() => SelectAns(1)}></i>
								<textarea
									className={`border optionB ${classes.option} col-md-9 col-xs-11`}
									id="optionB"
									value={optionB}
									onChange={(event) => ChangeHandler(setOptionB, event)}
								/>
							</span>
						</div>

						<div className="col-md-6 col-xs-12 d-flex justify-content-center">
							<span>
								<i id="option2" className={`far fa-circle fa-lg col-3 ${classes.unchecked}`} onClick={() => SelectAns(2)}></i>
								<textarea
									className={`border optionC ${classes.option} col-md-9 col-xs-11`}
									id="optionC"
									value={optionC}
									onChange={(event) => ChangeHandler(setOptionC, event)}
								/>
							</span>
						</div>

						<div className="col-md-6 col-xs-12 d-flex justify-content-center">
							<span>
								<i id="option3" className={`far fa-circle fa-lg col-3 ${classes.unchecked}`} onClick={() => SelectAns(3)}></i>
								<textarea
									className={`border optionD ${classes.option} col-md-9 col-xs-11`}
									id="optionD"
									value={optionD}
									onChange={(event) => ChangeHandler(setOptionD, event)}
								/>
							</span>
						</div>
					</div>
					<div className="row my-2">
						<div className="col-6">
							<Button variant="contained" color="secondary" className="my-2" onClick={() => setI((i + 1) % queBank.length)} style={{}}>
								Skip
							</Button>
						</div>
						<div className="col-6">
							<Button
								variant="contained"
								className="my-2 col-6"
								onClick={() => NextQue()}
								style={{ backgroundColor: "green", color: "white", marginLeft: "4px" }}
							>
								Next
							</Button>
						</div>
					</div>
				</div>
			);
		}
		{
			/* // to avoid error resultant work of skip button is nothing */
		}
		{
			/* return */
		}
	}

	{
		/* /**************  THIS SHOW WHILE PLAYING QUIZ  ******************/
	}
	if (username)
		return (
			<div id="createquiz">
				<Stepper className={classes.stepper} activeStep={j < 10 ? "1" : "2"} alternativeLabel>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel className={classes.fontChange}>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<QueNumber que={j} />
				{Showque()}
			</div>
		);
	else
		return (
			<div id="createquiz">
				{/* <h1>This is {props.type} quiz</h1> */}
				<CreateQuiz setName={setUsername} />
				<br />
				<br />
				<QuizList />
			</div>
		);
}

export default Quizcreate;
