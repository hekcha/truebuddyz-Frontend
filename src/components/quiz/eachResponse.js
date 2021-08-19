import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function EachResponse(props) {
	const [token] = useCookies(["tb-token"]);
	const [quizResp, setQuizResp] = useState([]);
	const [quizQue, setQuizQue] = useState(null);
	const [quizCode, setQuizCode] = useState(0);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/api/quizresp/?respcode=${props.responseCode}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
			.then((resp) => resp.json())
			.then((res) => {console.log(res[0].quizcode);setQuizResp(res[0]);setQuizCode(res[0].quizcode)})
			.catch((err) => console.log(err));
	}, []);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/api/quiz/?code=${quizCode}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token["tb-token"]}`,
            },
        })
        .then((resp) => resp.json())
        .then((res) => {console.log(res[0]);setQuizQue(res[0])})
        .catch((err) => console.log(err));
    },[quizCode])


    const ShowQue = (i) =>{
        return (<tr>
            <td style={{border:'1px solid black'}}>{quizQue[`que${i}`]}</td>
            <td style={{border:'1px solid black'}}>{quizQue[`option${i}A`]}</td>
            <td style={{border:'1px solid black'}}>{quizQue[`option${i}B`]}</td>
            <td style={{border:'1px solid black'}}>{quizQue[`option${i}C`]}</td>
            <td style={{border:'1px solid black'}}>{quizQue[`option${i}D`]}</td>
            <td style={{border:'1px solid black'}}>{quizQue[`ans${i}`]}</td>
            <td style={{border:'1px solid black'}}>{quizResp[`ans${i}`]}</td>
        </tr>)
    }
    
    //////////i will display everything beacuse you get exect idea of how much data is this page have
    if(quizQue)
        return (<div>
            <h1>each response in detail</h1> <br/>
            <h3>marks= {quizResp.marks}</h3>
            <table>
                <tr>
                    <th style={{border:'1px solid black'}}>question</th>
                    <th style={{border:'1px solid black'}}>option1</th>
                    <th style={{border:'1px solid black'}}>option2</th>
                    <th style={{border:'1px solid black'}}>option3</th>
                    <th style={{border:'1px solid black'}}>option4</th>
                    <th style={{border:'1px solid black'}}>correct ans</th>
                    <th style={{border:'1px solid black'}}>answer</th>
                </tr>
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
            </table>
        </div>)
    else
        return (<div>loading</div>)

}

export default EachResponse;
