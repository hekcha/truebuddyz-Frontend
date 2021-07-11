import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { CardActionArea, CardMedia, FormControl, InputLabel, OutlinedInput, TextField, Stepper, Step, StepLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button } from "react-bootstrap";
import CreateQuiz from "../page/CreateQuiz";
import QueNumber from "../QueNumber";
import turnJS from "../turnJS/turnJS.js";

const useStyles = makeStyles({
	btn: {
		display: "flex",
		// alignContent: "center",
		// alignItems: "center",
		justifyContent: "center",
		maxWidth: 100,
		margin: "-20px auto 10px auto",
		borderRadius: "15px",
		color: "white",
		backgroundColor: "black",
		opacity: "0.7",
		fontFamily: "'Comic Neue', cursive",
		fontSize: "18px",
	},

	filledTextarea: {
		display: "flex",
		justifyContent: "center",
		maxWidth: 200,
		maxHeight: 150,
		margin: "-80px auto 25px auto",
		backgroundColor: "white",
		// marginBottom: "1rem",
		opacity: "0.5",
		border: "ridge",
		borderWidth: "0 2px 3px 0",
		boxShadow: "0 2px 10px 0 whitesmoke",
	},
	fontChange: {
		fontSize: "40px",
		fonFamily: `'Zen Loop', cursive`,
	},
	inputTag: {
		backgroundImage: "linear-gradient(to left, red, orange)",
		textAlign: "center",
		height: "5vh",
		width: "123px",
		marginUp: "-500px",
		scoopRadius: "20px",
		borderBottomLeftRadius: "1.5vw",
		borderBottomRightRadius: "1.5vw",
		border: "none",
		// borderImageSlice: "0.5",
		// borderImageSource: "linear-gradient(to left, red, orange)",
	},
	borderGradientA: {
		border: "5px solid",
		// borderRadius: "100px",
		scoopRadius: "20px",
		borderImageSlice: "0.5",

		backgroundColor: "#4158D0",
		borderImageSource: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
	},
	borderGradientB: {
		border: "10px solid",
		borderImageSlice: "0.5",
		backgroundColor: "#FFFFFF",
		borderImageSource: "linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)",
	},
	borderGradientC: {
		border: "10px solid",
		borderImageSlice: "0.5",
		borderImageSource: "linear-gradient(to left, red, orange)",
	},
	borderGradientD: {
		border: "10px solid",
		borderImageSlice: "0.5",
		borderImageSource: "linear-gradient(to left, red, orange)",
	},
});

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
	const [queBank, setQueBank] = useState([]);
	const [que, setQue] = useState([]);
	const [ans, setAns] = useState([]);
	const [i, setI] = useState(0);

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

	function Showque() {
		if (queBank.length === 0) return <div />;
		if (que.length === 10) {
			var formdata = new FormData();
			for (var j = 0; j < 10; j++) {
				var x = que[j];
				formdata.append(`que${j + 1}`, `${queBank[x].part1} ${name} ${queBank[x].part2}`);
				formdata.append(`option${j + 1}A`, queBank[x].optionA);
				formdata.append(`img${j + 1}A`, queBank[x].imgA);
				formdata.append(`option${j + 1}B`, queBank[x].optionB);
				formdata.append(`img${j + 1}B`, queBank[x].imgB);
				formdata.append(`option${j + 1}C`, queBank[x].optionC);
				formdata.append(`img${j + 1}C`, queBank[x].imgC);
				formdata.append(`option${j + 1}D`, queBank[x].optionD);
				formdata.append(`img${j + 1}D`, queBank[x].imgD);
				formdata.append(`ans${j + 1}`, ans[j]);
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
				// ///////////////This is the section for question and options****************************************
				<div>
					{/* <FormControl variant="outlined">
						<InputLabel htmlFor="component-outlined">Question No. {que.length + 1}</InputLabel>
						<OutlinedInput id="component-outlined" value =  label="Name">
							{queBank[i].part1} you {queBank[i].part2}
						</OutlinedInput>
					</FormControl> */}
					{/* <h3 className="my-5" style={{ display: "flex", justifyContent: "center" }}>
						{queBank[i].part1} you {queBank[i].part2}
					</h3>
					<br />
					<br />*/}
					<div className="row">
						{/******************************  1 *************************************/}

						<div
							className="optionA col-6 d-flex justify-content-center"
							onClick={() => {
								setAns([...ans, 1]);
								setQue([...que, i]);
								setI(i + 1);
							}}
						>
							<img src={queBank[i].imgA}></img>
							<h4>{queBank[i].optionA}</h4>
						</div>
						{/******************************  2 *************************************/}

						<div
							className="optionB col-6 d-flex justify-content-center"
							onClick={() => {
								setAns([...ans, 2]);
								setQue([...que, i]);
								setI(i + 1);
							}}
						>
							<img src={queBank[i].imgB}></img>
							<h4>{queBank[i].optionB}</h4>
						</div>
						{/******************************  3 *************************************/}

						<div
							className="optionC col-6 d-flex justify-content-center"
							onClick={() => {
								setAns([...ans, 3]);
								setQue([...que, i]);
								setI(i + 1);
							}}
						>
							<img src={queBank[i].imgC}></img>
							<h4>{queBank[i].optionC}</h4>
						</div>

						{/******************************  4 *************************************/}

						<div
							className="optionD col-6 d-flex justify-content-center"
							onClick={() => {
								setAns([...ans, 4]);
								setQue([...que, i]);
								setI(i + 1);
							}}
						>
							<img src={queBank[i].imgD}></img>
							<h4>{queBank[i].optionD}</h4>
						</div>
					</div>

					{/* A.<button onClick={()=>{setAns([...ans,1]);setQue([...que,i]);setI(i+1)}}> {queBank[i].optionA} </button><br/>
                    B.<button onClick={()=>{setAns([...ans,2]);setQue([...que,i]);setI(i+1)}}> {queBank[i].optionB} </button><br/>
                    C.<button onClick={()=>{setAns([...ans,3]);setQue([...que,i]);setI(i+1)}}> {queBank[i].optionC} </button><br/>
                    D.<button onClick={()=>{setAns([...ans,4]);setQue([...que,i]);setI(i+1)}}> {queBank[i].optionD} </button><br/> */}
					<br />
					<br />
					<button onClick={() => setI(i + 1)}>skip</button>
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
				<QueNumber que={que} />
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
