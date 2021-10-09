// have to add share option in you look like??
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Card } from "@material-ui/core";
import Loading from "../page/Loading";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	imageContainer: {
		margin: "10px auto",
		width: "100%",
		minWidth: "315px",
		height: "60vw",
		maxHeight: "360px",
	},
	messageCard: {
		maxWidth: "675px",
		margin: "-18px auto",
		// backgroundColor: "black",
		backgroundSize: "cover",
		border: "2px",
		borderRadius: "12px",
		animation: `$colorChange 10000ms ${theme.transitions.easing.easeInOut} infinite `,
	},
	options: {
		backgroundColor: "white",
		maxWidth: "450px",
		// minWidth: "auto",
		width: "100%",
		// opacity: "0.85",
		fontWeight: "600",
		color: "black",
		margin: "10px auto",
		borderRadius: "8px",
		textAlign: "center",
		cursor: "pointer",
		border: "2px solid black",
		"&:hover": {
			scale: "1.05",
			// eslint-disable-next-line
			background: " #1D976C",
			// eslint-disable-next-line
			background: "-webkit-linear-gradient(to right, #93F9B9, #1D976C)",
			// eslint-disable-next-line
			background: "linear-gradient(to right, #93F9B9, #1D976C)",
		},
		"&:active": {
			scale: "1.05",
			// eslint-disable-next-line
			background: " #1D976C",
			// eslint-disable-next-line
			background: "-webkit-linear-gradient(to right, #93F9B9, #1D976C)",
			// eslint-disable-next-line
			background: "linear-gradient(to right, #93F9B9, #1D976C)",
		},
	},
}));

const NUMBER_OF_QUESTIONS = 8 + Math.floor(Math.random() * 3);

function YouLookLike(props) {
	const [token] = useCookies(['tb-token','tb-user']);
	const [que, setQue] = useState(null);
	const [i, setI] = useState(0);
	const [result, setResult] = useState(null);
	const classes = useStyles();

	var ALLOWED_PAGES = ["transformer", "naruto"];

	var frmdata = new FormData();
	frmdata.append("game", "YLL");
	frmdata.append("subGame", props.type);
	frmdata.append("user", token["tb-user"]);

	useEffect(() => {
		for (var i = 0; i < ALLOWED_PAGES.length; i++) {
			if (ALLOWED_PAGES[i] === props.type) break;
			if (i === ALLOWED_PAGES.length - 1) window.location.href = "/"; // SHOW 404 page
		}

		fetch(`${process.env.REACT_APP_API_URL}/youlooklike/que/?category=${props.type}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
			.then((resp) => resp.json())
			.then((res) => {
				console.log(res)
				setQue(res);
			})
			.catch((err) => console.log(err));
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (i >= NUMBER_OF_QUESTIONS) {
			fetch(`${process.env.REACT_APP_API_URL}/youlooklike/result/?category=${props.type}`, {
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

	if (!que) return <Loading />;
	else if (i < NUMBER_OF_QUESTIONS)
		return (
			<div className="text-center">
				<div className={`${classes.imageContainer} image-container`}>
					<img key={Date.now()} className={`${classes.thumbnail} thumbnail`} src={que[i][`image`]} alt="Question" />
				</div>
				<br />
				<div className="text-center col-12">
					<h1 style={{ fontWeight: "bold", width: "auto", maxWidth: "800px", textAlign: "text-center", margin: "auto" }}>
						{" "}
						{que[i][`que`]}{" "}
					</h1>
				</div>

				<Card onClick={() => setI(i + 1)} className={`${classes.options} my-3`} raised>
					<h3 className="text-capitalize text-center" style={{ fontSize: "23px", margin: "5px" }}>
						{que[i][`optionA`]}
					</h3>
				</Card>
				<Card onClick={() => setI(i + 1)} className={`${classes.options} my-3`} raised>
					<h3 className="text-capitalize text-center" style={{ fontSize: "23px", margin: "5px" }}>
						{que[i][`optionB`]}
					</h3>
				</Card>
				<Card onClick={() => setI(i + 1)} className={`${classes.options} my-3`} raised>
					<h3 className="text-capitalize text-center" style={{ fontSize: "23px", margin: "5px" }}>
						{que[i][`optionC`]}
					</h3>
				</Card>
				<Card onClick={() => setI(i + 1)} className={`${classes.options} my-3`} raised>
					<h3 className="text-capitalize text-center" style={{ fontSize: "23px", margin: "5px" }}>
						{que[i][`optionD`]}
					</h3>
				</Card>
			</div>
		);
	else if (!result) return <Loading />;
	else
		return (
			<div style={{ textAlign: "center", margin: "auto" }}>
				<p style={{ fontSize: "54px", fontFamily: "'Akaya Kanadaka', cursive", color: "black" }}>{result.name} </p>
				<div className={`${classes.imageContainer} image-container`}>
					<img className=" thumbnail" src={result.image} style={{ margin: "18px auto" }} alt="Result" />
				</div>
				<div>
					<Card className={classes.messageCard} raised>
						<p style={{ fontSize: "28px", fontFamily: "'Akaya Kanadaka', cursive", color: "black", verticalAlign: "justify" }}>{result.text}</p>
					</Card>
				</div>
			</div>
		);
}

export default YouLookLike;
