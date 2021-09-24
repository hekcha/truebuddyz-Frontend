import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Card } from "@material-ui/core";
import Loading from "../page/Loading";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	imageContainer: {
		margin: "auto",
		width: "100 %",
		height: "60vw",
		maxHeight: "360px",
	},
	thumbnail: {},
}));

function HowWellUKnow(props) {
	const [token] = useCookies(["tb-token"]);
	const [que, setQue] = useState(null);
	const [i, setI] = useState(0);
	const [result, setResult] = useState(null);
	const [score, setScore] = useState(0);
	const classes = useStyles();

	var ALLOWED_PAGES = ["marvel", "fastandfurious"];

	var frmdata =new FormData()
	frmdata.append('game','HWUK');
	frmdata.append('subGame',props.type);
	frmdata.append('user',token["tb-user"]);
	frmdata.append('text',score);

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


	useEffect(()=>{
		if(i===10)
		{
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
				body:frmdata,
				headers: {
					"Authorization": `Token ${token["tb-token"]}`,
				},
			})
			.catch((err) => console.log(err));
		}		
	// eslint-disable-next-line
	},[i])

	const StoreAns = (item) => {
		if (item === que[i]["ans"]) setScore(score + 1);
		setI(i + 1);
	};

	if (!que) return <Loading />;
	if (i < 10)
		return (
			<div className="text-center">
				<div className={`${classes.imageContainer} image-container`}>
					<img className={`${classes.thumbnail} thumbnail`} src={que[i][`image`]} alt="Question" />
				</div>
				<br />
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
					<div className="col-12 my-2 text-center">
						<h1>{que[i][`que`]}</h1>
					</div>
					<Card
						onClick={() => StoreAns(0)}
						className="my-3"
						style={{
							backgroundColor: "white",
							maxWidth: "350px",
							minWidth: "auto",
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
							{que[i][`optionA`]}
						</h3>
					</Card>
					<Card
						onClick={() => StoreAns(1)}
						className="my-3"
						style={{
							backgroundColor: "white",
							maxWidth: "350px",
							minWidth: "auto",
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
							{que[i][`optionB`]}
						</h3>
					</Card>
					<Card
						onClick={() => StoreAns(2)}
						className="my-3"
						style={{
							backgroundColor: "white",
							maxWidth: "350px",
							minWidth: "auto",
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
							{que[i][`optionC`]}
						</h3>
					</Card>
					<Card
						onClick={() => StoreAns(3)}
						className="my-3"
						style={{
							backgroundColor: "white",
							maxWidth: "350px",
							minWidth: "auto",
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
							{que[i][`optionD`]}
						</h3>
					</Card>
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
			<img src={result.image} style={{ margin: "auto" }} alt="Result" />
			<p style={{ fontSize: "54px", fontFamily: "'Akaya Kanadaka', cursive", color: "black" }}>Your Score Is- {result.score}</p>
			<Card
				style={{ width: "375px", margin: "auto", backgroundColor: "black", backgroundSize: "cover", border: "25px black", borderRadius: "12px" }}
				raised
			>
				<p style={{ fontSize: "24px", fontFamily: "'Akaya Kanadaka', cursive", color: "white", verticalAlign: "justify" }}>{result.complement}</p>
				<p style={{ fontSize: "24px", fontFamily: "'Akaya Kanadaka', cursive", color: "white", verticalAlign: "justify" }}>{result.message}</p>
			</Card>
		</div>
	);
}

export default HowWellUKnow;
