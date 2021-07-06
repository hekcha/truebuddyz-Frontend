import { useEffect, useState } from "react";
import * as firebase from "firebase";    // important
import firebaseDb from "../../firebase";


function RfIndex(){

    const [data, setData] = useState(null)
    const [gameID, setGameID] = useState(1)
    const [view, setView] = useState(0)
    
    useEffect(()=>{
        firebaseDb.child('RapidFire').child(gameID).on('value',snapshot => {setData(snapshot.val())},
        (errorObject) => {console.log('The read failed: ' + errorObject.name);})
        console.log(data)
        if(data!==null && gameID!=1)
            window.location.href=`/rf/play/${gameID}`
    },[data,gameID])
            
    const CreateDB = () =>{
        var date = new Date();
        var gmId=date.getTime()
        setGameID(gmId)
        
        firebaseDb.child('RapidFire').child(gmId).set({
            queNo:0,
            users:"null",
            ans:"null",
        },  
        err => {
            if (err)
                alert(err)
        }) 
        setView(1);
    } 
    
    if(view===0)
        return(
            <div className="text-center pt-5" onClick={()=>CreateDB()} style={{height:'200px',width:'200px',backgroundColor:'orange'}}>
                click to start rapidfire
            </div>
        );
    else
        return(
            <div>
                loading.....      
                {/* khub sara ad dikhae ge paise! he paisa! hoga🤣🤣🤣🤣 */}
            </div>
        );
}

export default RfIndex