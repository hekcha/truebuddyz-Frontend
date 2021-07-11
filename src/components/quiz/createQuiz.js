import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Button, Stepper, Step, StepLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "react-bootstrap";
import CreateQuiz from "../page/CreateQuiz";
import QueNumber from "../QueNumber";

const useStyles = makeStyles((theme) => ({
	box: {
		margin: "5vw",
		border: "double 10px",
		display: "flex",
		flexDirection: "column",
		minWidth: "50vw",
		maxWidth: "400px",
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: "20px",
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
		minWidth: "300px",
		maxWidth: "30vw",
		maxHeight: "13vh",
		fontSize: "20px",
		fontFamily: "'Acme', sans-serif",
		fontWeight: "700	",
		lineHeight: "1.2em",
		background: "#f0f0f6",
		border: "solid 3px",
		borderRadius: "20px",
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
		background: "#f0f0f6",
		border: "solid 5px",
		borderRadius: "20px",
	},

	checked: {
		color: "#22ca62",
		display: "flex",
		flexDirection: "column",
		margin: "2.7vw",
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
			left: "-9vw",
		},
		transition: "all 0.3s ease-out",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",
	},
}));

//********* THIS IS THE STEPS FOR STEPPER  ********/
function getSteps() {
	return ["Create a Quiz", "Share", "Result"];
}
// **********************************************//

function Quizcreate() {
	const [token] = useCookies("tb-token");
	const [name, setName] = useState(null);
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
	const [click, setClick] = useState(0);

	var colourPalette = ["#55E6C1", "#FD7272", "#FEA47F", "#25CCF7", "#EAB543", "#FC427B", "#2C3A47", "#ffa801"];
	function fun(item) {
		setName(item);
	}
	// DEFINING THE VARIABLE FOR USING CSS
	const classes = useStyles();
	const steps = getSteps();

	useEffect(() => {
		var date = new Date();
		setCode(date.getTime());

		// fetch questions
		fetch(`${process.env.REACT_APP_API_URL}/api/quizquebank/`, {
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
		fetch(`${process.env.REACT_APP_API_URL}/api/user/`, {
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

	const SelectAns = (item) => {
		setQuizData([
			...quizData,
			document.getElementsByClassName("question")[0].value,
			document.getElementsByClassName("optionA")[0].value,
			document.getElementsByClassName("optionB")[0].value,
			document.getElementsByClassName("optionC")[0].value,
			document.getElementsByClassName("optionD")[0].value,
			item,
		]);
		setI(i + 1);
		setJ(j + 1);
		setClick(1);
	};

	useEffect(() => {
		if (queBank && name) {
			setQue(`${queBank[i].part1} ${name} ${queBank[i].part2}`);
			setOptionA(queBank[i].optionA);
			setOptionB(queBank[i].optionB);
			setOptionC(queBank[i].optionC);
			setOptionD(queBank[i].optionD);
			setClick(0);
		}
	}, [i, queBank, name, click]);

	const ChangeHandler = (func, event) => {
		func(event.target.value);
	};

	function Showque() {
		if (queBank.length === 0) return <div />;
		if (j === 10) {
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
			formdata.append("name", name);
			fetch(`${process.env.REACT_APP_API_URL}/api/quiz/`, {
				method: "POST",
				body: formdata,
				headers: {
					"Authorization": `Token ${token["tb-token"]}`,
				},
			})
				.then((resp) => resp.json())
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
			return (
				<div>
					link -{" "}
					<a href={`${process.env.REACT_APP_URL}/quiz/play/${code}`}>
						{process.env.REACT_APP_URL}/quiz/play/{code}
					</a>
				</div>
			);
		}
		if (i < queBank.length) {
			return (
				<div className={classes.box} style={{ borderColor: `${colourPalette[i % 8]}` }}>
					<br />
					<hr />
					{console.log(i)}

					<textarea className={`question ${classes.question}`} value={que} onChange={(event) => ChangeHandler(setQue, event)} />
					<br />
					<div className={`row ${classes.parentOption}`} value={optionA}>
						<div className="col-md-6 col-xs-12  d-flex justify-content-center">
							<span>
								<i
									className={click == 1 ? `fas fa-check-circle fa-lg col-3 ${classes.checked}` : `far fa-circle fa-lg col-3 ${classes.unchecked}`}
									onClick={() => {
										SelectAns(0);
										var v = document.getElementById("optionA").className;
										v += " border-success ";
									}}
								></i>
								<textarea
									className={`optionA ${classes.option} col-md-9 col-xs-11 `}
									id="optionA"
									value={optionA}
									onChange={(event) => ChangeHandler(setOptionA, event)}
								/>
							</span>
						</div>

						<div className="col-md-6 col-xs-12  d-flex justify-content-center">
							<span>
								<i
									className={click == 1 ? `fas fa-check-circle fa-lg col-3 ${classes.checked}` : `far fa-circle fa-lg col-3 ${classes.unchecked}`}
									onClick={() => {
										SelectAns(1);
										var v = document.getElementById("optionB").className;
										v += " border-success ";
									}}
								></i>
								<textarea
									className={`optionB ${classes.option} col-md-9 col-xs-11`}
									id="optionB"
									value={optionB}
									onChange={(event) => ChangeHandler(setOptionB, event)}
								/>
							</span>
						</div>

						<div className="col-md-6 col-xs-12 d-flex justify-content-center">
							<span>
								<i
									className={click == 1 ? `fas fa-check-circle fa-lg col-3 ${classes.checked}` : `far fa-circle fa-lg col-3 ${classes.unchecked}`}
									onClick={() => {
										SelectAns(2);
										var v = document.getElementById("optionC").className;
										v += " border-success ";
									}}
								></i>
								<textarea
									className={`optionC ${classes.option} col-md-9 col-xs-11`}
									id="optionC"
									value={optionC}
									onChange={(event) => ChangeHandler(setOptionC, event)}
									// style={{ borderColor: `${click == 1} ? "red" : "blue"` }}
								/>
							</span>
						</div>

						<div className="col-md-6 col-xs-12 d-flex justify-content-center">
							<span>
								<i
									className={click == 1 ? `fas fa-check-circle fa-lg col-3 ${classes.checked}` : `far fa-circle fa-lg col-3 ${classes.unchecked}`}
									onClick={() => {
										SelectAns(3);
										var v = document.getElementById("optionD").className;
										v += " border-success ";
									}}
								></i>
								<textarea
									className={`optionD ${classes.option} col-md-9 col-xs-11`}
									id="optionD"
									value={optionD}
									onChange={(event) => ChangeHandler(setOptionD, event)}
								/>
							</span>
						</div>
					</div>
					<br />
					<br />
					<Button variant="contained" color="secondary" className="my-3" onClick={() => setI(i + 1)}>
						Skip
					</Button>
				</div>
			);
		}
		// window.location.href=`${process.env.REACT_APP_URL}`
		return <div>{alert("err")}</div>;
	}

	/**************  THIS SHOW WHILE PLAYING QUIZ  ******************/
	if (name)
		return (
			<div>
				<Stepper activeStep="1" alternativeLabel>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel className={classes.fontChange}>{label}</StepLabel>
						</Step>
					))}
					{console.log(name)}
				</Stepper>
				<QueNumber que={j} />
				{Showque()}
			</div>
		);
	//////////////////////////////////////////////////////////////
	else
		return (
			// Here I am rendering to create the quiz
			<div>
				<CreateQuiz setName={setName} />
			</div>
		);
}

export default Quizcreate;
