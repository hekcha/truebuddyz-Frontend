import { useEffect, useState } from "react"
import * as firebase from "firebase";    // important
import firebaseDb from "../../firebase";
import { useCookies } from "react-cookie";

function Rapidfire(props){
    const [token] = useCookies("tb-token")
    
    // store no of user playing
    const [users, setUsers]=useState({})
    // store answer of each que  (set to "null" after question result will display)
    const [ans, setAns]=useState({})
    // store which question is currently display
    const [i, setI] =useState(-1)
    // to switch btw "display question", "wating window", and "result component"
    const [y, setY] =useState(null)
    // store RF que fetch form backend
    const [queBank, setQueBank]=useState(null)
    // store name
    const [name, setName] = useState('');
    const [timer, startTimer] = useState(null)
    const [countdown, setCountDown] = useState(null)



    useEffect(()=>{
		fetch(`${process.env.REACT_APP_API_URL}/api/rf/?category=${props.type}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
        .then((resp) => resp.json())
        .then((res) => setQueBank(res))
        .catch((err) => console.log(err));

        // monitor changes in RapidFire -> GameID -> users (in firebase)
        firebaseDb.child('RapidFire').child(props.gameId).child('users').on('value',snapshot => {setUsers(snapshot.val())},
        (errorObject) => {console.log('The read failed: ' + errorObject.name);})
        
        // monitor changes in RapidFire -> GameID -> ans (in firebase)
        firebaseDb.child('RapidFire').child(props.gameId).child('ans').on('value',snapshot => {setAns(snapshot.val())},
        (errorObject) => {console.log('The read failed: ' + errorObject.name);})
        
        // monitor changes in RapidFire -> GameID -> queNo (in firebase)
        firebaseDb.child('RapidFire').child(props.gameId).child('queNo').on('value',snapshot => {setI(snapshot.val());setY(1)},
        (errorObject) => {console.log('The read failed: ' + errorObject.name);})
    },[null])
    
    useEffect(()=>{
        // alert(token['tb-user'])
        if(i===null)
        {
            firebaseDb.child('RapidFire').child(props.gameId).set({
                queNo:0,
                users:"null",
                ans:"null",
            },  
            err => {
                if (err)
                console.log('Error: ',err)
            }) 
        }
    },[i])
    
    const Submit = () =>{
        var nme=document.getElementById("name").value;
        firebaseDb.child('RapidFire').child(props.gameId).child('users').child(token['tb-user']).set(nme)
        setName(nme)
        setY(0)
    }

    const NextQue = () => {
        // Set ans to null
        firebaseDb.child('RapidFire').child(props.gameId).child('ans').set("null")
        // increse the count in queNo
        firebaseDb.child('RapidFire').child(props.gameId).child('queNo').set(i+1)
        setI(i+1)
    }
    useEffect(()=>{
        if(y==1&&name!='')
        {
            setCountDown(setInterval(function(){
                if(document.getElementById("time") && document.getElementById("time").innerHTML != null)
                    document.getElementById("time").innerHTML = document.getElementById("time").innerText-1;
            }, 1000));
            startTimer(setTimeout(function(){
                AnsChoice("not selected");
            }, 10000))
        }
        else if(y!=1 && countdown)
            clearInterval(countdown)
    },[y,name])
    
    const AnsChoice = (item) =>{
        // post answer
        firebaseDb.child('RapidFire').child(props.gameId).child('ans').child(name).set(item)
        setY(2)
        clearTimeout(timer)
    }
    
    if(i===-1||i===null)
    {
        return( 
            <div>
                <h1>{props.type} Rapidfire</h1><br/>
                creating a room
            </div>
        )    
        //loading se bdhiya ye dikhate h
    }
    
    if(name==='')
    {
        return(
            <div>
                <h1>{props.type} Rapidfire</h1><br/>
                <h3>Enter Your Name</h3><br/>
                <label for="name">name</label>
                <input type="text" id="name" name="name"></input>
                <button onClick={()=>Submit()}>submit</button>
            </div>
        );
    }
    
    if(y===0)
    {
        return(
            <div>
                <h1>{props.type} Rapidfire</h1><br/>
                <button onClick={()=> setY(1)}> start </button>
            </div>
        );
    }
        
    if(y===1)
        return(
            <div>
                <h1>{props.type} Rapidfire</h1><br/>
                {Object.values(users).length} people join the game<br/>
                <div className="row">
                    <h1>time left - <span id="time">10</span></h1>
                    <div className="col-8 offset-2 row">
                        <div className="col-12">
                            {queBank[parseInt(i)]['que']}
                        </div>
                        {Object.values(users).map(item=>{
                            return(
                                <div onClick={()=>AnsChoice(item)} className="col-4 m-2" style={{backgroundColor:'yellow'}}>
                                        {item}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );

        if(y===2)
        {
            if(ans!=null&&Object.values(users).length===Object.values(ans).length)
            setY(3)
            return(
                <div>
                    <h1>{props.type} Rapidfire</h1><br/>
                    <div className="m-5" style={{backgroundColor:'violet'}}>
                        <h1>Wait for your friend's response</h1>
                        <h3>these people voted</h3>
                        <ul>
                            {Object.getOwnPropertyNames(ans).map(item=>{
                                return(
                                    <li>{item}</li>
                                    )
                                })}
                        </ul>
                    </div>
                </div>
            );
        }
    

    if(y===3)
        return(
            <div>
                <h1>{props.type} Rapidfire</h1><br/>
                <div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Vote</th>
                        </tr>
                        {Object.entries(ans).map(item=>{
                            return(
                                <tr>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
                <button onClick={()=>NextQue()} >Next Question</button>
            </div>
        );
        window.location.href = `/rapidfire`;
}

export default Rapidfire