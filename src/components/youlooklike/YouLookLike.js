import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Card } from "@material-ui/core";
import Loading from "../page/Loading";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	imageContainer: {
		margin: "auto",
		width: "100%",
		height: "60vw",
		maxHeight: "360px",
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
	const [token] = useCookies(["tb-token"]);
	const [que, setQue] = useState(null);
	const [randQue, setRandQue] = useState(null);
	const [i, setI] = useState(1);
	const [ans, setAns] = useState(0);
	const [result, setResult] = useState(null);
	const classes = useStyles();

	var ALLOWED_PAGES = ["transformer", "naruto"];

	var frmdata = new FormData();
	frmdata.append("game", "YLL");
	frmdata.append("subGame", props.type);
	frmdata.append("user", token["tb-user"]);
	frmdata.append("text", ans);

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
				setQue(res["que"][0]);
				setRandQue(res["randque"]);
			})
			.catch((err) => console.log(err));
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (i > NUMBER_OF_QUESTIONS) {
			fetch(`${process.env.REACT_APP_API_URL}/youlooklike/score/?category=${props.type}&code=${ans}`, {
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

	const StoreAns = (x) => {
		setAns(ans * 10 + x);
		setI(i + 1);
	};

	if (!(que && randQue)) return <Loading />;
	else if (i < 5)
		return (
			<div className="text-center">
				<div className={`${classes.imageContainer} image-container`}>
					<img className={`${classes.thumbnail} thumbnail`} src={que[`image${i}`]} alt="Question" />
				</div>
				<br />
				<div className="text-center col-12">
					<h1 style={{ fontWeight: "bold", width: "auto", maxWidth: "800px", textAlign: "text-center", margin: "auto" }}> {que[`que${i}`]} </h1>
				</div>

				<Card onClick={() => StoreAns(1)} className={`${classes.options} my-3`} raised>
					<h3 className="text-capitalize text-center" style={{ fontSize: "23px", margin: "5px" }}>
						{que[`option${i}A`]}
					</h3>
				</Card>
				<Card onClick={() => StoreAns(2)} className={`${classes.options} my-3`} raised>
					<h3 className="text-capitalize text-center" style={{ fontSize: "23px", margin: "5px" }}>
						{que[`option${i}B`]}
					</h3>
				</Card>
				<Card onClick={() => StoreAns(1)} className={`${classes.options} my-3`} raised>
					<h3 className="text-capitalize text-center" style={{ fontSize: "23px", margin: "5px" }}>
						{que[`option${i}C`]}
					</h3>
				</Card>
				<Card onClick={() => StoreAns(1)} className={`${classes.options} my-3`} raised>
					<h3 className="text-capitalize text-center" style={{ fontSize: "23px", margin: "5px" }}>
						{que[`option${i}D`]}
					</h3>
				</Card>
			</div>
		);
	else if (i <= NUMBER_OF_QUESTIONS)
		return (
			<div className="col-8 offset-2 row">
				<div className="image-container">
					<img className="thumbnail" src={randQue[i - 5][`image`]} alt="Question" />
				</div>
				<div className="col-12 my-2 text-center">
					<h1>{randQue[i - 5][`que`]}</h1>
				</div>
				<Card
					style={{
						minWidth: "250px",
						maxWidth: "400px",

						margin: "auto",
						backgroundImage: " linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
						backgroundColor: " #00DBDE",
						opacity: "0.5",
						borderRadius: "20px",
						border: "2px solid",
					}}
					raised
				>
					<Card
						onClick={() => setI(i + 1)}
						className="my-3"
						style={{
							backgroundColor: "white",
							maxWidth: "350px",
							minWidth: "auto",
							// fontSize: "35px",
							fontWeight: "600",
							color: "black",
							margin: "10px auto",
							borderRadius: "15px",
							opacity: "0.85",
							textAlign: "center",
							pointer: "cursor",
							border: "2px solid black",
						}}
						raised
					>
						<h3 className="text-capitalize text-center" style={{ fontSize: "26px" }}>
							{randQue[i - 5][`optionA`]}
						</h3>
					</Card>
					<Card
						onClick={() => setI(i + 1)}
						className="my-3"
						style={{
							backgroundColor: "white",
							maxWidth: "350px",
							minWidth: "auto",
							// fontSize: "35px",
							fontWeight: "600",
							color: "black",
							margin: "10px auto",
							borderRadius: "15px",
							opacity: "0.85",
							textAlign: "center",
							pointer: "cursor",
							border: "2px solid black",
						}}
						raised
					>
						<h3 className="text-capitalize text-center" style={{ fontSize: "26px" }}>
							{randQue[i - 5][`optionB`]}
						</h3>
					</Card>
					<Card
						onClick={() => setI(i + 1)}
						className="my-3"
						style={{
							backgroundColor: "white",
							maxWidth: "350px",
							minWidth: "auto",
							// fontSize: "35px",
							fontWeight: "600",
							color: "black",
							margin: "10px auto",
							borderRadius: "15px",
							opacity: "0.85",
							textAlign: "center",
							pointer: "cursor",
							border: "2px solid black",
						}}
						raised
					>
						<h3 className="text-capitalize text-center" style={{ fontSize: "26px" }}>
							{randQue[i - 5][`optionC`]}
						</h3>
					</Card>
					<Card
						onClick={() => setI(i + 1)}
						className="my-3"
						style={{
							backgroundColor: "white",
							maxWidth: "350px",
							minWidth: "auto",
							// fontSize: "35px",
							fontWeight: "600",
							color: "black",
							margin: "10px auto",
							borderRadius: "15px",
							opacity: "0.85",
							textAlign: "center",
							pointer: "cursor",
							border: "2px solid black",
						}}
						raised
					>
						<h3 className="text-capitalize text-center" style={{ fontSize: "26px" }}>
							{randQue[i - 5][`optionD`]}
						</h3>
					</Card>
				</Card>
			</div>
		);
	else if (!result) return <Loading />;
	else
		return (
			<div style={{ textAlign: "center", margin: "auto" }}>
				<img src={result.image} style={{ margin: "auto" }} alt="Result" />
				<p style={{ fontSize: "54px", fontFamily: "'Akaya Kanadaka', cursive", color: "black" }}>You Are More Likly To- {result.name}</p>
				<Card
					style={{ width: "375px", margin: "auto", backgroundColor: "black", backgroundSize: "cover", border: "25px black", borderRadius: "12px" }}
					raised
				>
					<p style={{ fontSize: "24px", color: "white", verticalAlign: "justify" }}>Message- {result.text}</p>
				</Card>
			</div>
		);
}

export default YouLookLike;
