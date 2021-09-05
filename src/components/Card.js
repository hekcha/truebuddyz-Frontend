function Card(props){
    return(
        <div className="card">
            <div onClick={() => (window.location.href = `${props.link}`)} className="card_image"><img src={props.img} /></div>
            <div className="card_title title-white"><p>{props.text}</p></div>
        </div>
    );
}

export default Card