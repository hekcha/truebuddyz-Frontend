import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Loader from "../Loader";
import NeonPlayQuiz from "../Neon/NeonPlayQuiz";
import QueNumber from "../QueNumber";
import { Card } from "react-bootstrap";
import Rating from "../Rating.js";
import CountUp from "react-countup";

const useStyles = makeStyles((theme) => ({
	box: {
		display: "flex",
		marginLeft: "5vw",
		marginRight: "5vw",
		marginTop: "2vw",
		border: "solid 2px",
		borderRadius: "25px",
		boxShadow: "10px 10px 7px rgba(0, 0, 0, 0.5), -8px -8px 10px rgba(255, 255, 255, 0.8)",
		flexDirection: "column",
		minWidth: "50vw",
		maxWidth: "400px",
		height: "375px",
		position: "absolute",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		fontFamily: "'Permanent Marker', cursive",
		[theme.breakpoints.up("sm")]: {
			left: "20vw",
		},
		[theme.breakpoints.down("sm")]: {
			height: "475px",
		},
	},
	filledTextarea: {
		opacity: "0.5",
		border: "ridge",
		borderWidth: "0 2px 3px 0",
		boxShadow: "0 2px 10px 0 whitesmoke",
		width: "168px",
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
		color: "#364547",
		background: "#f0f0f6",
		border: "solid 1px black",
		borderRadius: "20px",
		boxShadow: "8px 5px 15px 7px rgba(0, 0, 0, 0.3), -3px -7px 10px 8px rgba(255, 255, 255, 1)",
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
	playquizCard: {
		backgroundImage: `url("https://media.giphy.com/media/5T06ftQWtCMy0XFaaI/giphy.gif")`,
		margin: "auto",
		marginTop: "10px",
		width: "40vw",
		borderRadius: "40px",
		boxShadow: "10px 15px 10px rgba(0, 0, 1, 0.5), -10px -14px 10px whitesmoke",
		[theme.breakpoints.down("sm")]: {
			width: "350px",
		},
	},
}));

function Playquiz(props) {
	const [token] = useCookies("tb-token");
	const [name, setName] = useState(null);
	const [user, setUser] = useState(null);
	const [que, setQue] = useState(null);
	const [marks, setMarks] = useState(0);
	const [i, steI] = useState(0);
	const [ans, setAns] = useState([]);
	const [click, setClick] = useState(0);

	const classes = useStyles();
	var colourPalette = ["#55E6C1", "#FD7272", "#FEA47F", "#25CCF7", "#EAB543", "#FC427B", "#2C3A47", "#ffa801"];

	useEffect(() => {
		// for questions
		fetch(`${process.env.REACT_APP_API_URL}/api/quiz/?code=${props.code}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
			.then((resp) => resp.json())
			.then((res) => setQue(res[0]))
			.catch((err) => console.log(err));

		// for userID
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

	useEffect(() => {
		if (que && user && user === que.user) window.location.href = `/quiz/view/${que.code}`;
	}, [user, que]);

	function Checkans(a) {
		setAns([...ans, a]);
		if (que[`ans${i}`] === a) setMarks(marks + 1);
		steI(i + 1);
		console.log(i);
	}

	function Showque() {
		if (i < 10)
			return (
				<div style={{ position: "relative", top: "110px" }}>
					<div className="row justify-content-center align-items-center">
						<QueNumber que={ans.length} />
					</div>
					<br />
					<hr />
					<div className={classes.box} style={{ borderColor: `${colourPalette[i % 8]}` }}>
						{console.log(i)}

						<textarea className={`question ${classes.question}`} value={que[`que${i + 1}`]} disabled />
						<br />
						<div className={`row ${classes.parentOption}`}>
							<div className="col-md-6 col-xs-12  d-flex justify-content-center">
								<span>
									<i
										className={click == 1 ? `fas fa-check-circle fa-lg col-3 ${classes.checked}` : `far fa-circle fa-lg col-3 ${classes.unchecked}`}
										onClick={() => {
											Checkans(0);
											var v = document.getElementById("optionA").className;
											v += " border-success ";
										}}
									></i>
									<textarea
										className={` border optionA ${classes.option} col-md-9 col-xs-11 `}
										id="optionA"
										value={que[`option${i + 1}A`]}
										disabled
									/>
								</span>
							</div>

							<div className="col-md-6 col-xs-12  d-flex justify-content-center">
								<span>
									<i
										className={click == 1 ? `fas fa-check-circle fa-lg col-3 ${classes.checked}` : `far fa-circle fa-lg col-3 ${classes.unchecked}`}
										onClick={() => {
											Checkans(1);
											var v = document.getElementById("optionB").className;
											v += " border-success ";
										}}
									></i>
									<textarea className={`optionB ${classes.option} col-md-9 col-xs-11`} id="optionB" value={que[`option${i + 1}B`]} disabled />
								</span>
							</div>

							<div className="col-md-6 col-xs-12 d-flex justify-content-center">
								<span>
									<i
										className={click == 1 ? `fas fa-check-circle fa-lg col-3 ${classes.checked}` : `far fa-circle fa-lg col-3 ${classes.unchecked}`}
										onClick={() => {
											Checkans(2);
											var v = document.getElementById("optionC").className;
											v += " border-success ";
										}}
									></i>
									<textarea className={`optionC ${classes.option} col-md-9 col-xs-11`} id="optionC" value={que[`option${i + 1}C`]} disabled />
								</span>
							</div>

							<div className="col-md-6 col-xs-12 d-flex justify-content-center">
								<span>
									<i
										className={click == 1 ? `fas fa-check-circle fa-lg col-3 ${classes.checked}` : `far fa-circle fa-lg col-3 ${classes.unchecked}`}
										onClick={() => {
											Checkans(3);
											var v = document.getElementById("optionD").className;
											v += " border-success ";
										}}
									></i>
									<textarea className={`optionD ${classes.option} col-md-9 col-xs-11`} id="optionD" value={que[`option${i + 1}D`]} disabled />
								</span>
							</div>
						</div>
					</div>
				</div>
			);
		else {
			var formdata = new FormData();
			formdata.append("quizcode", que.code);
			formdata.append("user", que.user);
			formdata.append("name", name);
			formdata.append("marks", marks);
			formdata.append("respcode", token["tb-user"]);
			console.log(ans[0]);
			window.aa = ans;
			console.log(ans);
			for (var j = 0; j < 10; j++) formdata.append(`ans${j + 1}`, ans[j]);
			fetch(`${process.env.REACT_APP_API_URL}/api/quizresp/`, {
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
				<div style={{ position: "relative", top: "80px" }}>
					<h1 style={{ fontSize: "34px", textAlign: "center", marginTop: "28px" }}>How much you liked us?😍</h1>
					<Rating />
					<Card className={classes.playquizCard} raised>
						<h1 className="my-3" style={{ fontSize: "34px", textAlign: "center" }}>
							Congratulation🎉
						</h1>
						<h1 className="my-3" style={{ fontSize: "30px", textAlign: "center" }}>
							Your score is
						</h1>
						<h1 style={{ fontSize: "58px", textAlign: "center" }}>
							<CountUp start={0} end={marks} duration={4} onEnd={() => console.log("Ended! 👏")} onStart={() => console.log("Started! 💨")}></CountUp>
						</h1>
					</Card>
					<h1 style={{ fontSize: "34px", textAlign: "center", marginTop: "30px" }}>
						Click{" "}
						<a href="/quiz/new" as="u" style={{ color: "skyblue" }}>
							here
						</a>{" "}
						to create your own Quiz
					</h1>
				</div>
			);
		}
	}

	if (name)
		return (
			<div>
				<NeonPlayQuiz />
				{Showque()}
			</div>
		);
	// wait until question is fetched
	else if (!que)
		return (
			<div>
				<Loader />
			</div>
		);
	// ask user to enter name
	else
		return (
			<div>
				<br />
				<br />
				<br />
				<Card className={`text-center ${classes.box}`}>
					<Card.Header as="h1" style={{ fontFamily: "'Londrina Shadow', cursive", color: "black", fontWeight: "700" }}>
						How well do you know {que.name}??🥰
					</Card.Header>
					<Card.Body>
						<Card.Title as="h1" style={{ fontFamily: "'Monofett', cursive", color: "rgb(0,0,0,0.75)", fontSize: "39px", fontWeight: "999" }}>
							True BFF Quiz
						</Card.Title>
						<Card.Text>
							<TextField
								className={classes.filledTextarea}
								component="h1"
								id="name"
								label="Your Name Here"
								placeholder="Hello Dear👋"
								multiline
								variant="filled"
								name="name"
								gutterbottom
								raised
								required
							/>
						</Card.Text>
						<Button
							size="large"
							className={classes.btn}
							onClick={() => setName(document.getElementById("name").value)}
							variant="contained"
							color="primary"
							href=""
						>
							Play Quiz
						</Button>
					</Card.Body>
					<Card.Footer>
						<h6>Have to ADD Recommendation down below👇</h6>
					</Card.Footer>
				</Card>
			</div>
			// <div>
			// 	<label for="name">name</label>
			// 	<input type="text" id="name" name="name"></input>
			// 	<button onClick={() => setName(document.getElementById("name").value)}>submit</button>
			// </div>
		);
}

export default Playquiz;
