function Card(props){
    return(
        <div className="card">
            <div onClick={() => (window.location.href = props.link)} className="card_image"><img src={props.img} /></div>
            <div className="card_title title-white"><p>{props.text}</p></div>
        </div>
    );
}

function GradientCard(props){
    return(
        <div className="card" onClick={()=>window.location.href=props.link} style={{
            backgroundColor:'#4158D0',
            backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
        }} >
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


export {GradientCard}
export default Card