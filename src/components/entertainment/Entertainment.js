import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function Entertainment(props){
	const [token] = useCookies(["tb-token"]);
    const [que, setQue] = useState(null);
    const [randQue, setRandQue] = useState(null)
    const [i, setI] = useState(1)
    const [ans, setAns] = useState(0)
    const [result, setResult] = useState(null)

	var ALLOWED_PAGES=['anime','dog', 'entrepreneur'];
    
    useEffect(()=>{
        for(var i=0;i<ALLOWED_PAGES.length;i++)
        {
            if(ALLOWED_PAGES[i]===props.type)
                break;
            if(i===ALLOWED_PAGES.length-1)
                window.location.href='/';     // SHOW 404 page
        }

        fetch(`${process.env.REACT_APP_API_URL}/api/entertainment/?category=${props.type}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
		.then((resp) => resp.json())
		.then((res) => {console.log(res);setQue(res[0])})
		.catch((err) => console.log(err));

		fetch(`${process.env.REACT_APP_API_URL}/api/quizquebank/entertainment/?category=${props.type}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
        .then((resp) => resp.json())
        .then((res) => {console.log(res);setRandQue(res)})
        .catch((err) => console.log(err));


    },[])

    const GetResult = () => {
		fetch(`${process.env.REACT_APP_API_URL}/api/entresult/?category=${props.type}&code=${ans}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
        .then((resp) => resp.json())
        .then((res) => {console.log(res);setResult(res[0])})
        .catch((err) => console.log(err));

    }


    const StoreAns = (x) => {
        console.log(ans)
        setAns(ans*10+x)
        setI(i+1);
    }
    

    const Showque = () => {
        if(i<5)
            return (
                <div className="row" style={{backgroundColor:'#cbf59a', border:'2px solid black', width:'70%',marginLeft:'15%'}}>
                    <div className="col-12" style={{borderBottom:'2px solid black'}}>{que[`que${i}`]}</div>
                    <div onClick={()=>StoreAns(1)} className="col-5" style={{backgroundColor:'#c177f2',border:'1px solid yellow', padding:'2rem'}}>{que[`option${i}A`]}</div>
                    <div onClick={()=>StoreAns(2)} className="col-5" style={{backgroundColor:'#c177f2',border:'1px solid yellow', padding:'2rem'}}>{que[`option${i}B`]}</div>
                    <div onClick={()=>StoreAns(3)} className="col-5" style={{backgroundColor:'#c177f2',border:'1px solid yellow', padding:'2rem'}}>{que[`option${i}C`]}</div>
                    <div onClick={()=>StoreAns(4)} className="col-5" style={{backgroundColor:'#c177f2',border:'1px solid yellow', padding:'2rem'}}>{que[`option${i}D`]}</div>
                </div>
            );
        else if(i<11)
            return(
                <div>
                <div className="row" style={{backgroundColor:'#e8b164', border:'2px solid black', width:'70%',marginLeft:'15%'}}>
                    <div className="col-12" style={{borderBottom:'2px solid black'}}>{randQue[i-5][`part1`]}</div>
                    <div onClick={()=>setI(i+1)} className="col-5" style={{backgroundColor:'#79e0be',border:'1px solid yellow', padding:'2rem'}}>{randQue[i-5][`optionA`]}</div>
                    <div onClick={()=>setI(i+1)} className="col-5" style={{backgroundColor:'#79e0be',border:'1px solid yellow', padding:'2rem'}}>{randQue[i-5][`optionB`]}</div>
                    <div onClick={()=>setI(i+1)} className="col-5" style={{backgroundColor:'#79e0be',border:'1px solid yellow', padding:'2rem'}}>{randQue[i-5][`optionC`]}</div>
                    <div onClick={()=>setI(i+1)} className="col-5" style={{backgroundColor:'#79e0be',border:'1px solid yellow', padding:'2rem'}}>{randQue[i-5][`optionD`]}</div>
                </div>

                </div>
            );
        else if(!result)
            return(
                <div>
                    {GetResult()}
                    we are procesing your response   
                </div>
            );
        else
            return(
                <div>
                    <img src={result.image} alt={result.code} />
                    <p>{result.text}</p>
                </div>
            )
    }


    if(que&&randQue)
    return(
        <div>
            <h1>{props.type} quiz</h1>
            <br/>
            {Showque()}
        </div>
    );

    return (
        <div>something went wrong</div>
    )
}

export default Entertainment