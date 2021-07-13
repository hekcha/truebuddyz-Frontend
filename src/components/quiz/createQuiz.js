import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";
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
		// maxHeight: "600px",
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
			left: "-2rem",
		},
		transition: "all 0.3s ease-out",
		justifyContent: "center",
		alignItems: "center",
		cursor: "pointer",
	},
	cardBody: {
		display: "flex",
		justifyContent: "center",
		maxWidth: "80vw",
		height: "525px",
		border: "solid 2px",
		borderColor: "black",
		borderRadius: "20px",
	},
	heading: {
		fontSize: "2.4vw",
		// padding: "2.6vw",
		[theme.breakpoints.down("xs")]: {
			fontSize: "13px",
			fontWeight: "700",
		},
		fontFamily: "'Permanent Marker', cursive",
	},
	title: {
		fontSize: "2.4vw",
		[theme.breakpoints.down("xs")]: {
			fontSize: "24px",
			fontWeight: "999",
		},
		margin: "2vw",
	},
	text: {
		fontFamily: "'Satisfy', cursive",
		fontSize: "2.4vw",
		[theme.breakpoints.down("xs")]: {
			fontSize: "22px",
			fontWeight: "999",
		},
		fontWeight: "999",
	},
}));

//********* THIS IS THE STEPS FOR STEPPER  ********/
function getSteps() {
	return ["Create a Quiz", "Share", "Result"];
}
// **********************************************//

function Quizcreate() {
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
	const [click, setClick] = useState(0);

	var colourPalette = ["#55E6C1", "#FD7272", "#FEA47F", "#25CCF7", "#EAB543", "#FC427B", "#2C3A47", "#ffa801"];

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
		if (queBank && username) {
			setQue(`${queBank[i].part1} ${username} ${queBank[i].part2}`);
			setOptionA(queBank[i].optionA);
			setOptionB(queBank[i].optionB);
			setOptionC(queBank[i].optionC);
			setOptionD(queBank[i].optionD);
			setClick(0);
		}
	}, [i, queBank, username, click]);

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
			formdata.append("name", username);
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
				<div style={{ display: "flex", justifyContent: "center", marginTop: "8vh" }}>
					<Card className={`text-center ${classes.cardBody}`}>
						<Card.Header className={classes.heading}>How well your friends know you??❤️</Card.Header>
						<Card.Body>
							<Card.Text className={classes.text}>Friendship isn’t a big thing—it’s a million little things.</Card.Text>
							<Card.Title className={classes.title}>Share this Quiz with your friends</Card.Title>
							<Card.Title className={classes.title}>
								<textarea
									value={`${process.env.REACT_APP_URL}/quiz/play/${code}`}
									style={{
										padding: "0.5vw 2vw",
										marginBottom: "-20px",
										width: "60vw",
										maxHeight: "7.8vh",
										fontSize: "2.4vw",
										fontFamily: "'Comic Neue', cursive",
										justifyContent: "center",
										alignItems: "center",
										alignContent: "center",
										border: "solid 3px",
										borderColor: "black",
										borderRadius: "20px",
									}}
									disabled
								/>
							</Card.Title>
							<a href={`${process.env.REACT_APP_URL}/quiz/play/${code}`}>
								<button
									type="button"
									className="btn btn-outline-dark btn-sm"
									data-mdb-ripple-color="dark"
									style={{ marginTop: "18px", marginBottom: "-5px", borderRadius: "10px" }}
								>
									Result
								</button>
							</a>
						</Card.Body>
						<Card.Footer className="text-muted p-3">
							<h4 style={{ marginBottom: "-12px" }}>Share On</h4>
							<br />
							<div
								class="socializer a sr-32px sr-circle sr-float sr-font-lg sr-icon-white sr-bdr-grey sr-sw-icon-1 sr-pad"
								data-more="instagram,twitter,snapchat,telegram,reddit"
							>
								<span class="sr-shortlink sr-text-below">
									<a
										onClick={() => {
											var copyText = `${process.env.REACT_APP_URL}/quiz/play/${code}`;
											console.log(copyText);
											document.execCommand("copy");
											alert("Copied the text: " + copyText);
										}}
										title="Short link"
									>
										<i class="fa fa-link"></i>
									</a>
									<span class="text">Short link</span>
								</span>
								<span class="sr-facebook sr-text-below ">
									<a href={`https://www.facebook.com/share.php?u=${process.env.REACT_APP_URL}/quiz/play/${code}`} title="Facebook">
										<i class="fab fa-facebook-f"></i>
									</a>
									<span class="text">Facebook</span>
								</span>
								<span class="sr-whatsapp sr-text-below">
									<a href={`https://api.whatsapp.com/send?text=${process.env.REACT_APP_URL}/quiz/play/${code}`} target="_blank" title="WhatsApp">
										<i class="fab fa-whatsapp"></i>
									</a>
									<span class="text">WhatsApp</span>
								</span>
								<span class="sr-more sr-text-below">
									<a href="#" title="More">
										<i class="fa fa-share-alt"></i>
									</a>
									<span class="text">More</span>
									<ul class="socializer">
										<li class="sr-instagram sr-text-below">
											<a href="https://instagram.com" target="_blank" title="Instagram">
												<i class="fab fa-instagram"></i>
											</a>
											<span class="text">Instagram</span>
										</li>
										<li class="sr-twitter sr-text-below">
											<a
												href={`https://twitter.com/intent/tweet?text=${process.env.REACT_APP_URL}/quiz/play/${code}`}
												target="_blank"
												title="Twitter"
											>
												<i class="fab fa-twitter"></i>
											</a>
											<span class="text">Twitter</span>
										</li>
										<li class="sr-snapchat sr-text-below">
											<a href="https://snapchat.com" target="_blank" title="Snapchat">
												<i class="fab fa-snapchat"></i>
											</a>
											<span class="text">Snapchat</span>
										</li>
										<li class="sr-telegram sr-text-below">
											<a
												href={`https://telegram.me/share/url?url=${process.env.REACT_APP_URL}/quiz/play/${code};text=Free%20Social%20Media%20Share%20Buttons%20Generator%20-%20Aakash%20Web`}
												target="_blank"
												title="Telegram"
											>
												<i class="fab fa-telegram-plane"></i>
											</a>
											<span class="text">Telegram</span>
										</li>
										<li class="sr-reddit sr-text-below">
											<a
												href="https://reddit.com/submit?url=https%3A%2F%2Fwww.aakashweb.com%2Fapps%2Fsocial-buttons-generator%2F&amp;title=Free%20Social%20Media%20Share%20Buttons%20Generator%20-%20Aakash%20Web"
												target="_blank"
												title="Reddit"
											>
												<i class="fab fa-reddit"></i>
											</a>
											<span class="text">Reddit</span>
										</li>
									</ul>
								</span>
							</div>
						</Card.Footer>
					</Card>
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
					<Button variant="contained" color="secondary" className="my-2" onClick={() => setI(i + 1)} style={{}}>
						Skip
					</Button>
				</div>
			);
		}
		// window.location.href=`${process.env.REACT_APP_URL}`
		return <div>{alert("err")}</div>;
	}

	/**************  THIS SHOW WHILE PLAYING QUIZ  ******************/
	if (username)
		return (
			<div>
				<Stepper activeStep={j < 10 ? "1" : "2"} alternativeLabel>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel className={classes.fontChange}>{label}</StepLabel>
						</Step>
					))}
					{console.log(username)}
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
				<CreateQuiz setName={setUsername} />
			</div>
		);
}

export default Quizcreate;
