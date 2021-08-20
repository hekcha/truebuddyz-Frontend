function RfCreater(props){
        
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