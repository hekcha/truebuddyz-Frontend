import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "../css/eachResponse.css";
import Loading from "../page/Loading";

function EachResponse(props) {
	const [token] = useCookies(["tb-token"]);
	const [quizResp, setQuizResp] = useState(null);
	const [quizQue, setQuizQue] = useState(null);
	const [quizCode, setQuizCode] = useState(null);
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/quiz/resp/?respcode=${props.responseCode}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
		.then((resp) => resp.json())
		.then((res) => {
			setQuizResp(res[0]);
			setQuizCode(res[0].quizcode);
		})
		.catch((err) => console.log(err));
	}, []);

	useEffect(()=>{
		if(quizCode)
		{
			fetch(`${process.env.REACT_APP_API_URL}/quiz/que/?code=${quizCode}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Token ${token["tb-token"]}`,
				},
			})
			.then((resp) => resp.json())
			.then((res) => setQuizQue(res[0]))
			.catch((err) => console.log(err));
		}
	},[quizCode])

	useEffect(()=>{
		if(quizQue)
		{
			fetch(`${process.env.REACT_APP_API_URL}/core/user/`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Token ${token["tb-token"]}`,
				},
			})
			.then((resp) => resp.json())
			.then((res) => {
				if(quizQue['user']!==res)
					window.location.href='/notallowed';
				else
					setUser(res);
			})
			.catch((err) => console.log(err));
		}
	},[quizQue])


	const ShowQue = (i) => {
		return (
			<tr>
				<td style={{ border: "1px solid black", wordWrap: "break-word", fontSize:'1rem', fontWeight:'600' }}>{quizQue[`que${i}`]}</td>
				<td style={{ border: "1px solid black", fontSize:'1rem', fontWeight:'600' }}>{quizQue[`option${i}${String.fromCharCode(quizQue[`ans${i}`]+65)}`]}</td>
				<td style={{ border: "1px solid black", fontSize:'1rem', fontWeight:'600' }}>{quizQue[`option${i}${String.fromCharCode(quizResp[`ans${i}`]+65)}`]}</td>
				{quizResp[`ans${i}`]===quizQue[`ans${i}`]?
				<td style={{ border: "1px solid black", fontSize:'1rem', fontWeight:'600' }}>✔️</td>
				:
				<td style={{ border: "1px solid black", fontSize:'1rem', fontWeight:'600' }}>❌</td>
				}
			</tr>
		);
	};

	if (quizQue&&user)
		return (
			<div className="container">
				<h1>{quizResp.name} responses</h1> <br />
				<h3>{quizResp.name} Score = {quizResp.marks}</h3>
				<div class="table-wrapper ">
					<table class="fl-table" style={{fontSize:'2rem'}}>
						<thead>
							<tr>
								<th style={{ border: "1px solid black",fontSize:'1.2rem' }}>question</th>
								<th style={{ border: "1px solid black",fontSize:'1.2rem' }}>correct ans</th>
								<th style={{ border: "1px solid black",fontSize:'1.2rem' }}>answer</th>
								<th style={{ border: "1px solid black",fontSize:'1.2rem' }}>status</th>
							</tr>
						</thead>
						<tbody>
							{ShowQue(1)}
							{ShowQue(2)}
							{ShowQue(3)}
							{ShowQue(4)}
							{ShowQue(5)}
							{ShowQue(6)}
							{ShowQue(7)}
							{ShowQue(8)}
							{ShowQue(9)}
							{ShowQue(10)}
						</tbody>
					</table>
				</div>
			</div>
		);
		else return <Loading />
}

export default EachResponse;
