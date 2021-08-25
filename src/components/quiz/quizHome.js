import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Table, Button } from "react-bootstrap";

function Quizhome() {
	const [token] = useCookies(["tb-token"]);
	const [quizList, setQuizList] = useState([]);
	useEffect(() => {
		console.log("quizhome");
		fetch(`${process.env.REACT_APP_API_URL}/api/quiz/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
			.then((resp) => resp.json())
			.then((res) => {
				setQuizList(res);
				window.xyz = res;
			})
			.catch((err) => console.log(err));
	}, []);

	function ShowQuiz(item) {
		return (
			<div>
				{console.log(item.code)}
				<h3 onClick={() => (window.location.href = "/item/view/" + item.code)}>item no {item.id}</h3>
			</div>
		);
	}

	var options = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
	
	if(quizList.length)
		return (
			<div style={{ textAlign: "center" }}>
				{console.log(quizList)}
				<h1 style={{ fontFamily: "'Dancing Script', cursive", textTransform: "capitalize", fontSize: "58px" }}>Quiz home</h1>
				<pre style={{ display: "inline", color: "black", verticalAlign: "text-bottom" }}>
					<span style={{ fontSize: "24px", fontWeight: "500" }}>You created &nbsp;</span>
					<span style={{ fontSize: "48px", fontWeight: "999" }}>{quizList.length}</span>
					<span style={{ fontSize: "24px", fontWeight: "500" }}>&nbsp; quiz.</span>
				</pre>
				<br />
				<Table style={{ display: "table", minWidth: "10rem", maxWidth: "30rem", margin: "auto" }} striped bordered hover>
					<tr style={{ border: "1px solid black", fontSize: "40px", fontWeight: "800", color: "black" }}>
						<th style={{ border: "1px solid black", fontSize: "16px" }}>name</th>
						<th style={{ border: "1px solid black", fontSize: "16px" }}>category</th>
						<th style={{ border: "1px solid black", fontSize: "16px" }}>date of creation</th>
					</tr>
					{quizList.map((item) => {
						var today = new Date(parseInt(item.code, 31));
						return (
							<tr
								onClick={() => (window.location.href = "/quiz/view/" + item.code)}
								style={{ border: "1px solid black", cursor: "pointer", fontWeight: "800" }}
							>
								<td style={{ border: "1px solid black", textTransform: "capitalize" }}>{item.name}</td>
								<td style={{ border: "1px solid black", textTransform: "capitalize" }}>{item.category}</td>
								<td style={{ border: "1px solid black" }}>{today.toLocaleDateString("en-US", options)}</td>
							</tr>
						);
					})}
				</Table>
				<Button variant="success" onClick={() => (window.location.href = "/quiz/friends/new")} style={{ borderRadius: "20px", margin: "12px" }}>
					Create more Quiz
				</Button>
			</div>
		);
	else
		return (
			<div style={{ textAlign: "center" }}>
				{console.log(quizList)}
				<h1 style={{ fontFamily: "'Dancing Script', cursive", textTransform: "capitalize", fontSize: "58px" }}>Quiz home</h1>
				<pre style={{ display: "inline", color: "black", verticalAlign: "text-bottom" }}>
					<span style={{ fontSize: "24px", fontWeight: "500" }}>you haven't created any quiz</span>
				</pre>
				<br />
				<Button variant="success" onClick={() => (window.location.href = "/quiz/friends/new")} style={{ borderRadius: "20px", margin: "12px" }}>
					Create a Quiz
				</Button>
			</div>
		);
}

export default Quizhome;
