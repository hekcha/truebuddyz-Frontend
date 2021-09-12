function Card(props){
    return(
        <div className="card">
            <div onClick={() => (window.location.href = props.link)} className="card_image"><img src={props.img} /></div>
            <div className="card_title title-white"><p>{props.text}</p></div>
        </div>
    );
}

function BlueCard(props){
    return(
        <div className="card" style={{backgroundColor:'blue',}} onClick={()=>window.location.href=props.link}>
            <div 
                style={{
                    fontSize:'65px',
                    color:'white',
                    fontWeight:'700',
                    textTransform:'capitalize',
                    marginBlock:'auto',
                    }}
            >
                <center>{props.text}</center>
            </div>
        </div>
    );
}


export {BlueCard}
export default Card