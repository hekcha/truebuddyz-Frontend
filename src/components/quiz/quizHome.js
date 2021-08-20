import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

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
			.then((res) => {setQuizList(res);window.xyz=res})
			.catch((err) => console.log(err));
	}, []);

	function ShowQuiz(item) {
		return (
			<div>
				{console.log(item.code)}
				<h3 onClick={() => (window.location.href = "/item/view/" + item.code)}>item no {item.id}</h3>
				{/* dont use item.id for numbering */}
			</div>
		);
	}

	var options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
	return (
		<div>
			{console.log(quizList)}
			Quiz home
			<br />
			you created {quizList.length} no. of quiz
			<br />
			<table style={{border:'1px solid black'}}>
				<tr style={{border:'1px solid black'}}>
					<th style={{border:'1px solid black'}}>name</th>
					<th style={{border:'1px solid black'}}>category</th>
					<th style={{border:'1px solid black'}}>date of creation</th>
				</tr>
				{quizList.map(item =>{
					var today  = new Date(parseInt(item.code,31));
					return (<tr onClick={() => (window.location.href = "/quiz/view/" + item.code)} style={{border:'1px solid black'}}>
						<td style={{border:'1px solid black'}}>{item.name}</td>
						<td style={{border:'1px solid black'}}>{item.category}</td>
						<td style={{border:'1px solid black'}}>{today.toLocaleDateString("en-US", options)}</td>
					</tr>)
				})}
			</table>
			<button onClick={() => (window.location.href = "/quiz/new")}>create more quiz</button>
		</div>
	);
}

export default Quizhome;
