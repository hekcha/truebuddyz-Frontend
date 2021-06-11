import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function Quizcreate(){
    const [token] = useCookies("tb-token")
    const [name,setName] = useState(null)
    const [user, setUser] = useState(null)
    const [code, setCode] = useState("")
    const [queBank, setQueBank] = useState([])
    const [que, setQue] = useState([])
    const [ans, setAns] = useState([])
    const [i, setI] = useState(0)

    useEffect(()=>{
        var date = new Date();
        setCode(date.getTime());

        // fetch questions
        fetch(`${process.env.REACT_APP_API_URL}/api/quizquebank/`,{
            method:'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token['tb-token']}`,
            },
        }).then(resp=>resp.json()).then(res=>setQueBank(res))
        .catch(err => console.log(err))

        // get id of user
        fetch(`${process.env.REACT_APP_API_URL}/api/user/`,{
            method:'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token['tb-token']}`,
            },
        }).then(resp => resp.json()).then(res=> setUser(res))
        .catch(err => console.log(err))
    },[])

    function Showque() {
        if(queBank.length===0)
            return(<div />);
        if(que.length===10)
        {
            var formdata =new FormData();
            for(var j=0;j<10;j++)
            {
                var x=que[j]
                formdata.append(`que${j+1}`,`${queBank[x].part1} ${name} ${queBank[x].part2}`)
                formdata.append(`option${j+1}A`,queBank[x].optionA)
                formdata.append(`img${j+1}A`,queBank[x].imgA)
                formdata.append(`option${j+1}B`,queBank[x].optionB)
                formdata.append(`img${j+1}B`,queBank[x].imgB)
                formdata.append(`option${j+1}C`,queBank[x].optionC)
                formdata.append(`img${j+1}C`,queBank[x].imgC)
                formdata.append(`option${j+1}D`,queBank[x].optionD)
                formdata.append(`img${j+1}D`,queBank[x].imgD)
                formdata.append(`ans${j+1}`,ans[j])
            }
            formdata.append("user",user)
            formdata.append("code",code)
            formdata.append('name',name)
            fetch(`${process.env.REACT_APP_API_URL}/api/quiz/`,{
                method:'POST',
                body : formdata,
                headers: {
                    "Authorization": `Token ${token['tb-token']}`,
                },
            }).then(resp => resp.json()).then(res=> console.log(res))
            .catch(err => console.log(err))
            return(
                <div>
                    link - <a href={`${process.env.REACT_APP_URL}/quiz/play/${code}`}>{process.env.REACT_APP_URL}/quiz/play/{code}</a>
                </div>
            );
        }
        if(i<queBank.length)
        {
            return(
                <div>
                    show que
                    Question =   {queBank[i].part1} you {queBank[i].part2}
                    <br />
                    <br />
                    <div className="row">
                        <div className="optionA col-6 d-flex justify-content-center" onClick={()=>{setAns([...ans,1]);setQue([...que,i]);setI(i+1)}} >
                            <img src={queBank[i].imgA}></img>
                            <h4>{queBank[i].optionA}</h4>
                        </div>

                        <div className="optionB col-6 d-flex justify-content-center" onClick={()=>{setAns([...ans,2]);setQue([...que,i]);setI(i+1)}} >
                            <img src={queBank[i].imgB}></img>
                            <h4>{queBank[i].optionB}</h4>
                        </div>

                        <div className="optionC col-6 d-flex justify-content-center" onClick={()=>{setAns([...ans,3]);setQue([...que,i]);setI(i+1)}} >
                            <img src={queBank[i].imgC}></img>
                            <h4>{queBank[i].optionC}</h4>
                        </div>

                        <div className="optionD col-6 d-flex justify-content-center" onClick={()=>{setAns([...ans,4]);setQue([...que,i]);setI(i+1)}} >
                            <img src={queBank[i].imgD}></img>
                            <h4>{queBank[i].optionD}</h4>
                        </div>

                    </div>

                    {/* A.<button onClick={()=>{setAns([...ans,1]);setQue([...que,i]);setI(i+1)}}> {queBank[i].optionA} </button><br/>
                    B.<button onClick={()=>{setAns([...ans,2]);setQue([...que,i]);setI(i+1)}}> {queBank[i].optionB} </button><br/>
                    C.<button onClick={()=>{setAns([...ans,3]);setQue([...que,i]);setI(i+1)}}> {queBank[i].optionC} </button><br/>
                    D.<button onClick={()=>{setAns([...ans,4]);setQue([...que,i]);setI(i+1)}}> {queBank[i].optionD} </button><br/> */}
                    <br />
                    <br />
                    <button onClick={() => setI(i+1)} >skip</button>
                </div>
            );
        }
        // window.location.href=`${process.env.REACT_APP_URL}`
        return(
            <div>
                {alert("err")}
            </div>
        );
    }

    if(name)
        return(
            <div>
                <h2>create Quiz</h2>
                you select {que.length}/{queBank.length}
                {Showque()}
            </div>
        );
    else
        return(
            <div>
                create Quiz
                <br />
                enter your name
                <br />
                <br />
                <label for="name">name</label>
                <input type="text" id="name" name="name"></input>
                <button onClick={()=>setName(document.getElementById("name").value)}>submit</button>
            </div>
        );

}

export default Quizcreate
