import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Loader from "../Loader";
import { Card } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
	box: {
		display: "flex",
		margin: "5vw",
		border: "double 10px",
		flexDirection: "column",
		minWidth: "50vw",
		maxWidth: "400px",
		height: "350px",
		position: "absolute",
		justifyContent: "center",
		borderRadius: "20px",
		background: "url(../assets/friends.jpg)",
		[theme.breakpoints.up("sm")]: {
			left: "20vw",
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

	const classes = useStyles();

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
				<div>
					you answered {ans.length} question
					<br />
					que{i} = {que[`que${i + 1}`]}
					<br />
					<br />
					<br />
					<div className="row">
						<div className="optionA col-6 d-flex justify-content-center" onClick={() => Checkans(0)}>
							<img src={que[`img${i + 1}A`]}></img>
							<h4>{que[`option${i + 1}A`]}</h4>
						</div>

						<div className="optionB col-6 d-flex justify-content-center" onClick={() => Checkans(1)}>
							<img src={que[`img${i + 1}B`]}></img>
							<h4>{que[`option${i + 1}B`]}</h4>
						</div>

						<div className="optionC col-6 d-flex justify-content-center" onClick={() => Checkans(2)}>
							<img src={que[`img${i + 1}C`]}></img>
							<h4>{que[`option${i + 1}C`]}</h4>
						</div>

						<div className="optionD col-6 d-flex justify-content-center" onClick={() => Checkans(3)}>
							<img src={que[`img${i + 1}D`]}></img>
							<h4>{que[`option${i + 1}D`]}</h4>
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
				<div>
					congrats you give {marks} right ans
					<br />
					<br />
					click here to create your Quiz
				</div>
			);
		}
	}

	if (name)
		return (
			<div>
				play
				<br />
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
					<Card.Header as="h4">How well do you know {que.name}</Card.Header>
					<Card.Body>
						<Card.Title as="h2">True BFF Quiz🤝</Card.Title>
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
						<h4>Have to ADD Recommendation down below👇</h4>
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
