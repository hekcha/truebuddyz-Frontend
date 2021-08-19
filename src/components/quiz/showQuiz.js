import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Typical from "react-typical";
import { Card } from "@material-ui/core";
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
	table: {
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
	},
	tableCard1: {
		width: "35vw",
		margin: "15px",
		background: "linear-gradient(-45deg, #24ff72, #9a4eff)",
		[theme.breakpoints.down("sm")]: {
			width: "280px",
		},
	},
	tableCard2: {
		width: "35vw",
		margin: "15px",
		[theme.breakpoints.down("sm")]: {
			width: "280px",
			backgroundPosition: "-20px",
		},
		"&:hover,&:active": {
			transform: "scale(1.1)",
			transition: " 0.5s",
			background: "#ada996",
			background: "-webkit-linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)",
			background: "linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)",
			backgroundPosition: "-150px",
		},
		cursor: "pointer",
	},
	nameHeading: {
		display: "inline-block",
		// marginRight: "140px",
		textAlign: "center",
		fontSize: "27px",
		textTransform: "capitalize",
	},
	marksHeading: {
		display: "inline-block",
		textAlign: "center",
		fontSize: "27px",
		textTransform: "capitalize",
	},
	name: {
		display: "inline-block",
		textAlign: "center",
		fontWeight: "500",

		fontSize: "24px",
		textTransform: "capitalize",
	},
	marks: {
		display: "inline-block",
		textAlign: "center",
		fontWeight: "525",
		fontSize: "24px",
		textTransform: "capitalize",
		verticalAlign: "center",
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
			.then((res) => {console.log(res);setQuizResp(res)})
			// .then((res) => setQuizResp(res))
			.catch((err) => console.log(err));
	}, []);

	function Showresp(resp) {
		return (
			<tr>
				<Card onClick={()=> window.location.href = `/quiz/response/${resp.respcode}`} className={classes.tableCard2} raised>
					<td className={`col-6 col-sm-6 ${classes.name}`}>{resp.name}</td>
					<td className={`col-6 col-sm-6 ${classes.marks}`}>{resp.marks}</td>
				</Card>
			</tr>
		);
	}
	//text-capitalize me show hoga name ka
	// hover effect daalna hai card me
	if (quizResp.length)
		return (
			<div className={classes.table}>
				{console.log(quizResp)}
				<h1>Friend's Responded : {quizResp.length}</h1>
				<br />
				<table style={{ margin: "auto", justifyContent: "center" }}>
					<tr>
						<Card className={classes.tableCard1} raised>
							<th className={`col-6 col-sm-6 ${classes.nameHeading}`}>name </th>

							<th className={`col-6 col-sm-6 ${classes.marksHeading}`}>marks</th>
						</Card>
					</tr>
					{quizResp.map((resp) => Showresp(resp))}
					{/* <h2>Click to view Friend Response</h2> */}
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
