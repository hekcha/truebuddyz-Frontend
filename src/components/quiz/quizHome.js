import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Table, Button } from "react-bootstrap";
import friends from "../assets/quiz_friends.jpg";
import couples from "../assets/quiz_couples.jfif";
import bff from "../assets/quiz_bff.jfif";
import coming_soon from "../assets/coming_soon.jpg";



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
	

	return (
		<div>
			{quizList.length?
				<div style={{ textAlign: "center" }}>
					{console.log(quizList)}
					<h1 style={{ fontFamily: "'Dancing Script', cursive", textTransform: "capitalize", fontSize: "58px" }}>Quiz home</h1>
					<pre style={{ display: "inline", color: "black", verticalAlign: "text-bottom" }}>
						<span style={{ fontSize: "24px", fontWeight: "500" }}>You created &nbsp;</span>
						<span style={{ fontSize: "48px", fontWeight: "999" }}>{quizList.length}</span>
						<span style={{ fontSize: "24px", fontWeight: "500" }}>&nbsp; quiz.</span>
					</pre>
					<br />
					<Table style={{ display: "table", minWidth: "10rem", maxWidth: "45rem", margin: "auto" }} striped bordered hover>
						<tr style={{ border: "1px solid black", fontSize: "40px", fontWeight: "800", color: "black" }}>
							<th style={{ border: "1px solid black", fontSize: "16px" }}>name</th>
							<th style={{ border: "1px solid black", fontSize: "16px" }}>category</th>
							<th style={{ border: "1px solid black", fontSize: "16px" }}>date of creation</th>
							<th style={{ border: "1px solid black", fontSize: "16px" }}>response</th>
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
									<td style={{ border: "1px solid black", textTransform: "capitalize" }}>View</td>
								</tr>
							);
						})}
					</Table>
					<pre style={{ display: "inline", color: "black", verticalAlign: "text-bottom", paddingTop:'10px' }}>
						<span style={{ fontSize: "40px", fontWeight: "700" }}>Create More Quiz</span>
					</pre>
				</div>
			:
				<div style={{ textAlign: "center" }}>
					<h1 style={{ fontFamily: "'Dancing Script', cursive", textTransform: "capitalize", fontSize: "58px" }}>Quiz home</h1>
					<pre style={{ display: "inline", color: "black", verticalAlign: "text-bottom" }}>
						<span style={{ fontSize: "24px", fontWeight: "500" }}>you haven't created any quiz</span>
					</pre>
					<br />
					<pre style={{ display: "inline", color: "black", verticalAlign: "text-bottom" }}>
						<span style={{ fontSize: "40px", fontWeight: "700" }}>Create Quiz</span>
					</pre>
				</div>
			}
			<div id="indexrf" className="container">
				<div class="cards-list">
					<div class="card 1">
						<div class="card_image"><img src={friends} /></div>
						<div class="card_title title-white"><p>Friend's Quiz</p></div>
					</div>
					<div class="card 2">
						<div class="card_image"><img src={couples} /></div>
						<div class="card_title title-white"><p>Couple's Quiz</p></div>
					</div>
					<div class="card 3">
						<div class="card_image"><img src={bff} /></div>
						<div class="card_title title-white"><p>BFF Quiz</p></div>
					</div>
					<div class="card 3">
						<div class="card_image"><img src={coming_soon} /></div>
						{/* <div class="card_title"><p>Coming Soon</p></div> */}
					</div>
					<div class="card 3">
						<div class="card_image"><img src={coming_soon} /></div>
						{/* <div class="card_title"><p>Coming Soon</p></div> */}
					</div>
					<div class="card 3">
						<div class="card_image"><img src={coming_soon} /></div>
						{/* <div class="card_title"><p>Coming Soon</p></div> */}
					</div>
				</div>
			</div>



		</div>
	);
}

export default Quizhome;
