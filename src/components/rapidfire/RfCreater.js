import { useEffect } from "react";

function RfCreater(props){
	var ALLOWED_PAGES=['friends','couples', 'bff'];

    useEffect(()=>{
        for(var i=0;i<ALLOWED_PAGES.length;i++)
		{
			if(ALLOWED_PAGES[i]===props.type)
				break;
			if(i===ALLOWED_PAGES.length-1)
				window.location.href='/';     // SHOW 404 page
		}
    },[])

    const Redirect = () =>{
        var date = new Date();
        var gameId=date.getTime().toString(31)
        window.location.href=`/rapidfire/${props.type}/${gameId}`
    } 
    
    return(
        <div className="text-center pt-5" onClick={()=>Redirect()} style={{height:'500px',width:'500px',backgroundColor:'orange'}}>
            <h1>click to start {props.type} rapidfire</h1>
        </div>
    );
}

export default RfCreater