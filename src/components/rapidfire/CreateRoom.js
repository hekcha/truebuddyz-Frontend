import finger from "../assets/finger.gif";
import NeonRapidfire from "../Neon/NeonRapidfire";



function CreateRoom(props) {
    return (
        <div id="playRF" style={{ margin: "40px auto" }}>
            <NeonRapidfire types={props.type} style={{ margin: "auto",}} />
            <br />
            <div
                className="card"
                style={{border:'0', zIndex: '-1'}}
            ><img
            src={finger} 
            alt="finger" 
            style={{
                backgroundImage: finger,
                margin: "8px auto",
                width: "330px",
                height: "243px",
                borderRadius: "450px",
            }}
        /></div>
            <p style={{ textAlign: "center", fontSize: "50px" }}>Creating A Room...</p>
        </div>
);
}

export default CreateRoom;
