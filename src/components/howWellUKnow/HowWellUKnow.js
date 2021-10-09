import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Card } from "@material-ui/core";
import Loading from "../page/Loading";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	imageContainer: {
		margin: "-5px auto",
		width: "100%",
		height: "60vw",
		maxHeight: "360px",
		backgroundSize: "cover",
	},
	options: {
		backgroundColor: "white",
		maxWidth: "450px",
		width: "100%",
		fontWeight: "600",
		color: "black",
		margin: "10px auto",
		borderRadius: "8px",
		textAlign: "center",
		cursor: "pointer",
		border: "2px solid black",
	},
	messageCard: {
		width: "375px",
		margin: "-18px auto",
		// backgroundColor: "black",
		backgroundSize: "cover",
		border: "25px black",
		borderRadius: "12px",
		animation: `$colorChange 10000ms ${theme.transitions.easing.easeInOut} infinite `,
	},
	"@keyframes colorChange": {
		"0%": {
			backgroundColor: "teal",
		},
		"20%": {
			backgroundColor: "gold",
		},
		"40%": {
			backgroundColor: "indianred",
		},
		"60%": {
			backgroundColor: "violet",
		},
		"80%": {
			backgroundColor: "green",
		},
		"100%": {
			backgroundColor: "teal",
		},
	},
}));

var optionList =["optionA", "optionB", "optionC", "optionD"]

function HowWellUKnow(props) {
	const [token] = useCookies(['tb-token','tb-user']);
	const [que, setQue] = useState(null);
	const [i, setI] = useState(0);
	const [result, setResult] = useState(null);
	const [score, setScore] = useState(0);
	const classes = useStyles();

	var ALLOWED_PAGES = ["marvel", "fastandfurious"];

	var frmdata = new FormData();
	frmdata.append("game", "HWUK");
	frmdata.append("subGame", props.type);
	frmdata.append("user", token["tb-user"]);
	frmdata.append("text", score);

	useEffect(() => {
		for (var i = 0; i < ALLOWED_PAGES.length; i++) {
			if (ALLOWED_PAGES[i] === props.type) break;
			if (i === ALLOWED_PAGES.length - 1) window.location.href = "/"; // SHOW 404 page
		}

		fetch(`${process.env.REACT_APP_API_URL}/howwelluknow/que/?category=${props.type}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
			.then((resp) => resp.json())
			.then((res) => setQue(res))
			.catch((err) => console.log(err));
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (i === 10) {
			fetch(`${process.env.REACT_APP_API_URL}/howwelluknow/score/?category=${props.type}&score=${score}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Token ${token["tb-token"]}`,
				},
			})
				.then((resp) => resp.json())
				.then((res) => setResult(res[0]))
				.catch((err) => console.log(err));

			fetch(`${process.env.REACT_APP_API_URL}/core/data/`, {
				method: "POST",
				body: frmdata,
				headers: {
					"Authorization": `Token ${token["tb-token"]}`,
				},
			}).catch((err) => console.log(err));
		}
		// eslint-disable-next-line
	}, [i]);

	const StoreAns = (item) => {
		document.getElementById(optionList[0]).classList.remove("optionHover")
		document.getElementById(optionList[1]).classList.remove("optionHover")
		document.getElementById(optionList[2]).classList.remove("optionHover")
		document.getElementById(optionList[3]).classList.remove("optionHover")
		document.getElementById(optionList[item]).style.backgroundColor="#d96a6a";
		document.getElementById(optionList[que[i]["ans"]]).style.backgroundColor="#5dc760";
		
		if (item === que[i]["ans"]) setScore(score + 1);
		setTimeout(() => {
			document.getElementById(optionList[0]).classList.add("optionHover")
			document.getElementById(optionList[1]).classList.add("optionHover")
			document.getElementById(optionList[2]).classList.add("optionHover")
			document.getElementById(optionList[3]).classList.add("optionHover")

			document.getElementById(optionList[0]).style.backgroundColor="inherit";
			document.getElementById(optionList[1]).style.backgroundColor="inherit";
			document.getElementById(optionList[2]).style.backgroundColor="inherit";
			document.getElementById(optionList[3]).style.backgroundColor="inherit";
			setI(i + 1);
			
		}, 800);
	};

	if (!que) return <Loading />;
	if (i < 10)
		return (
			<div id="howwellyouknow" className="text-center">
				<div className={`${classes.imageContainer} image-container`}>
					<img className=" thumbnail" src={que[i][`image`]} alt="Question" />
				</div>
				<br />
				<div className="text-center col-12">
					<h1 style={{ fontWeight: "bold", width: "auto", maxWidth: "800px", textAlign: "text-center", margin: "auto" }}>{que[i][`que`]}</h1>
				</div>

				<Card onClick={() => StoreAns(0)} className={`${classes.options} my-3 optionHover`} id="optionA" raised>
					<h3 className="text-capitalize text-center" style={{ fontSize: "26px" }}>
						{que[i][`optionA`]}
					</h3>
				</Card>
				<Card onClick={() => StoreAns(1)} className={`${classes.options} my-3 optionHover`} id="optionB" raised>
					<h3 className="text-capitalize text-center" style={{ fontSize: "26px" }}>
						{que[i][`optionB`]}
					</h3>
				</Card>
				<Card onClick={() => StoreAns(2)} className={`${classes.options} my-3 optionHover`} id="optionC" raised>
					<h3 className="text-capitalize text-center" style={{ fontSize: "26px" }}>
						{que[i][`optionC`]}
					</h3>
				</Card>
				<Card onClick={() => StoreAns(3)} className={`${classes.options} my-3 optionHover`} id="optionD" raised>
					<h3 className="text-capitalize text-center" style={{ fontSize: "26px" }}>
						{que[i][`optionD`]}
					</h3>
				</Card>
			</div>
		);
	if (!result)
		return (
			<div>
				{/* {GetResult()} */}
				getting your result ready...
			</div>
		);
	return (
		<div style={{ textAlign: "center", margin: "auto" }}>
			<div className={`${classes.imageContainer} image-container`}>
				<img className=" thumbnail" src={result.image} alt="Question" />
			</div>
			<p style={{ fontSize: "54px", marginTop: "-15px", fontFamily: "'Akaya Kanadaka', cursive", color: "black" }}>Your Score Is </p>
			<p style={{ fontSize: "84px", marginTop: "-74px", fontFamily: "'Akaya Kanadaka', cursive", color: "black" }}> {result.score}</p>
			<p style={{ fontSize: "60px", marginTop: "-74px", fontFamily: "'Akaya Kanadaka', cursive", color: "black" }}> Performance</p>
			<Card className={classes.messageCard} raised>
				<p style={{ fontSize: "24px", fontFamily: "'Akaya Kanadaka', cursive", color: "white", verticalAlign: "justify" }}>{result.complement}</p>
				{/* to feed message in database */}
				<p style={{ fontSize: "24px", fontFamily: "'Akaya Kanadaka', cursive", color: "white", verticalAlign: "justify" }}>{result.message}</p>
			</Card>
		</div>
	);
}

export default HowWellUKnow;
