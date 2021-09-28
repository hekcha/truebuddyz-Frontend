import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Table } from "react-bootstrap";
import QuizList from "./QuizList";


function Quizhome() {
	const [token] = useCookies(["tb-token"]);
	const [quizList, setQuizList] = useState([]);
	const [isUpdate, setIsUpdate] = useState(false);
	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/quiz/que/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
			.then((resp) => resp.json())
			.then(res => setQuizList(res.filter(item => item['is_active'])) )
			.catch((err) => console.log(err));
	// eslint-disable-next-line
	}, [isUpdate]);

	var options = { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
	
	const Delete = (item) => {
		if(window.confirm("del"))
		{
			fetch(`${process.env.REACT_APP_API_URL}/quiz/que/${item.id}/`, {
				method: "PUT",
				body: JSON.stringify({'id':item.id}),
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Token ${token["tb-token"]}`,
				},
			})
			.then((resp) => resp.json())
			.then((res) => {
				if(res.message==='ok') setIsUpdate(!isUpdate)
			})
			.catch((err) => console.log(err));
		}

	}

	return (
		<div>
			{quizList.length?
				<div style={{ textAlign: "center" }}>
					<h1 style={{ fontFamily: "'Dancing Script', cursive", textTransform: "capitalize", fontSize: "58px", marginBottom:'40px' }}>Quiz home</h1>
					<pre style={{ display: "inline", color: "black", verticalAlign: "text-bottom" }}>
						<span style={{ fontSize: "24px", fontWeight: "500" }}>You created &nbsp;</span>
						<span style={{ fontSize: "48px", fontWeight: "999" }}>{quizList.length}</span>
						<span style={{ fontSize: "24px", fontWeight: "500" }}>&nbsp; quiz.</span>
					</pre>
					<br />
					<Table style={{ display: "table", minWidth: "10rem", maxWidth: "45rem", margin: "auto" }} striped bordered hover>
						<tr style={{ border: "1px solid black", fontSize: "40px", fontWeight: "800", color: "black", textTransform: "capitalize" }}>
							<th style={{ border: "1px solid black", fontSize: "16px" }}>name</th>
							<th style={{ border: "1px solid black", fontSize: "16px" }}>category</th>
							<th style={{ border: "1px solid black", fontSize: "16px" }}>date of creation</th>
							<th style={{ border: "1px solid black", fontSize: "16px" }}>View</th>
							<th style={{ border: "1px solid black", fontSize: "16px" }}>delete</th>
						</tr>
						{quizList.map((item) => {
							var today = new Date(parseInt(item.code, 31));
							if(!item.is_active)
								return null
							return (
								<tr
									style={{ border: "1px solid black", fontWeight: "800" }}
								>
									<td style={{ border: "1px solid black", textTransform: "capitalize" }}>{item.name}</td>
									<td style={{ border: "1px solid black", textTransform: "capitalize" }}>{item.category}</td>
									<td style={{ border: "1px solid black" }}>{today.toLocaleDateString("en-US", options)}</td>
									{/* eslint-disable-next-line */}
									<td style={{ border: "1px solid black", color:'#0d6efd'}}><a href={`/quiz/view/${item.code}`} className="fas fa-sign-in-alt"></a></td>
									<td style={{ border: "1px solid black", color:'#dc3545'}}><i onClick={() => Delete(item)} className="fas fa-trash-alt"></i></td>
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
			<QuizList />
		</div>
	);
}

export default Quizhome;
