import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"

function Quizshow(props){
    const [token] = useCookies(["tb-token"])
    const [quizResp, setQuizResp] = useState([])

    useEffect(()=>{
        console.log("quizhome")
        fetch(`${process.env.REACT_APP_API_URL}/api/quizresp/?quizcode=${props.code}`,{
            method:'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
        }).then(resp=>resp.json()).then(res=>setQuizResp(res))
        .catch(err => console.log(err))
    },[])

    function Showresp(resp){
        return(
            <tr>
                <td>{resp.name}</td>
                <td>{resp.marks}</td>
            </tr>
        );
    }

    if(quizResp.length)
        return(
            <div>
                {console.log(quizResp)}
                number of responce to this quiz is {quizResp.length}
                <br/>
                <table>
                    <tr>
                        <th>name </th>
                        <th>marks</th>
                    </tr>
                {quizResp.map(resp => Showresp(resp))}
                </table>
            </div>
        );
    else
        return(
            <div>
                No responce yet
            </div>
        );
    }

export default Quizshow


