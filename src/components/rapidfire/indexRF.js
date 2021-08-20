function RfIndex(){
        
    const Redirect = () =>{
        var date = new Date();
        var gameId=date.getTime().toString(31)
        window.location.href=`/rapidfire/play/${gameId}`
    } 
    
    return(
        <div className="text-center pt-5" onClick={()=>Redirect()} style={{height:'200px',width:'200px',backgroundColor:'orange'}}>
            click to start rapidfire
        </div>
    );
}

export default RfIndex