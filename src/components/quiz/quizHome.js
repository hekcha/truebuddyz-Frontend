import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function Quizhome(){
    const [token] = useCookies(["tb-token"])
    const [quizList, setQuizList] = useState([])
    useEffect(()=>{
        console.log("quizhome")
        fetch(`${process.env.REACT_APP_API_URL}/api/quiz/`,{
            method:'GET',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
        }).then(resp=>resp.json()).then(res=>setQuizList(res))
        .catch(err => console.log(err))
    },[])

    function ShowQuiz(item){
        return(
            <div>
                {console.log(item.code)}
                <h3 onClick={() => window.location.href='/item/view/'+item.code}>item no {item.id}</h3>
                {/* dont use item.id for numbering */}
            </div>
        );
    }

    return(
        <div>
            Quiz home
            <br />
            you created {quizList.length} no. of quiz
            <br />
            {/* {quizList.map(quiz=>ShowQuiz(quiz))} */}
            <button onClick={() => window.location.href="/quiz/new"}>create more quiz</button>
        </div>
    );
}

export default Quizhome