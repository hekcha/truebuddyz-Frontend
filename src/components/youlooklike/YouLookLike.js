import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Card } from "@material-ui/core";

const NUMBER_OF_QUESTIONS=8+Math.floor(Math.random() * 3)

function YouLookLike(props) {
	const [token] = useCookies(["tb-token"]);
	const [que, setQue] = useState(null);
	const [randQue, setRandQue] = useState(null);
	const [i, setI] = useState(1);
	const [ans, setAns] = useState(0);
	const [result, setResult] = useState(null);

	var ALLOWED_PAGES = ["anime", "dog", "entrepreneur"];

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
			setQue(res['que'][0]);
			setRandQue(res['randque']);
		})
		.catch((err) => console.log(err));

	}, []);

	const GetResult = () => {
		fetch(`${process.env.REACT_APP_API_URL}/youlooklike/score/?category=${props.type}&code=${ans}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
			.then((resp) => resp.json())
			.then((res) => {
				console.log(res);
				setResult(res[0]);
			})
			.catch((err) => console.log(err));
	};

	const StoreAns = (x) => {
		console.log(ans);
		setAns(ans * 10 + x);
		setI(i + 1);
	};

	if (!(que && randQue))
		return <div>Loading...</div>;

	else if (i < 5)
		return (
			<div className="col-8 offset-2 row">
				<div class="image-container">
					<img class="thumbnail" src={que[`image${i}`]} alt="user image" />
				</div>
				<br />
				<div className="col-12 my-2 text-center">
					<h1>{que[`que${i}`]}</h1>
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
						onClick={() => StoreAns(1)}
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
							backgroundColor: "white",
							textAlign: "center",
							pointer: "cursor",
							border: "2px solid black",
						}}
						raised
					>
						<h3 className="text-capitalize text-center" style={{ fontSize: "26px" }}>
							{que[`option${i}A`]}
						</h3>
					</Card>
					<Card
						onClick={() => StoreAns(2)}
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
							backgroundColor: "white",
							textAlign: "center",
							pointer: "cursor",
							border: "2px solid black",
						}}
						raised
					>
						<h3 className="text-capitalize text-center" style={{ fontSize: "26px" }}>
							{que[`option${i}B`]}
						</h3>
					</Card>
					<Card
						onClick={() => StoreAns(3)}
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
							backgroundColor: "white",
							textAlign: "center",
							pointer: "cursor",
							border: "2px solid black",
						}}
						raised
					>
						<h3 className="text-capitalize text-center" style={{ fontSize: "26px" }}>
							{que[`option${i}C`]}
						</h3>
					</Card>
					<Card
						onClick={() => StoreAns(4)}
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
							backgroundColor: "white",
							textAlign: "center",
							pointer: "cursor",
							border: "2px solid black",
						}}
						raised
					>
						<h3 className="text-capitalize text-center" style={{ fontSize: "26px" }}>
							{que[`option${i}D`]}
						</h3>
					</Card>
				</Card>
			</div>
		);
	else if (i <= NUMBER_OF_QUESTIONS)
		return (
			<div className="col-8 offset-2 row">
				<div class="image-container">
					<img class="thumbnail" src={randQue[i - 5][`image`]} alt="user image" />
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
							backgroundColor: "white",
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
							backgroundColor: "white",
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
							backgroundColor: "white",
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
							backgroundColor: "white",
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
	else if (!result)
		return (
			<div>
				{GetResult()}
				we are procesing your response
			</div>
		);
	else
		return (
			<div>
				<img src={result.image} alt={result.code} />
				<p>{result.text}</p>
			</div>
		);
}

export default YouLookLike;
