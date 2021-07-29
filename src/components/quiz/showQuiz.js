import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Typical from "react-typical";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	text1: {
		verticalAlign: "center",
		textAlign: "center",
		marginTop: "150px",
	},
	text2: {
		verticalAlign: "center",
		textAlign: "center",
		marginTop: "50px",
		transition: "all 1s easeout",
	},
}));

function Quizshow(props) {
	const [token] = useCookies(["tb-token"]);
	const [quizResp, setQuizResp] = useState([]);

	const classes = useStyles();

	useEffect(() => {
		console.log("quizhome");
		fetch(`${process.env.REACT_APP_API_URL}/api/quizresp/?quizcode=${props.code}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
			.then((resp) => resp.json())
			.then((res) => setQuizResp(res))
			.catch((err) => console.log(err));
	}, []);

	function Showresp(resp) {
		return (
			<tr>
				<td>{resp.name}</td>
				<td>{resp.marks}</td>
			</tr>
		);
	}

	if (quizResp.length)
		return (
			<div>
				{console.log(quizResp)}
				number of responce to this quiz is {quizResp.length}
				<br />
				<table>
					<tr>
						<th>name </th>
						<th>marks</th>
					</tr>
					{quizResp.map((resp) => Showresp(resp))}
				</table>
			</div>
		);
	else
		return (
			<div className={classes.resp}>
				{/* <Typical loop={1} wrapper="h1" steps={["Sorry Buddy😕", 2000]}></Typical> */}
				<h1 className={classes.text1}>Sorry Buddy😕</h1>
				{/* <h2>But there is no response yet</h2> */}
				<Typical
					className={classes.text2}
					loop={Infinity}
					wrapper="h2"
					steps={["No response yet📝. . .", 1500, "Till then Checkout some handpicked games for you 👇 ", 3000]}
				></Typical>
			</div>
		);
}

export default Quizshow;
