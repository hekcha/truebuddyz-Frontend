import { useEffect, useState } from "react";
import * as firebase from "firebase";    // important
import firebaseDb from "../../firebase";


function RfIndex(){

    const CreateDB = () =>{
        var date = new Date();
        var gmId=date.getTime()

        firebaseDb.child('RapidFire').child(gmId).set({
            queNo:0,
            users:"null",
            ans:"null",
        },
        err => {
            if (err)
                alert(err)
        }) 

        // test   
        // need a proper solution 
        setTimeout(function(){ window.location.href=`/rf/play/${gmId}` }, 1500);
        // window.location.href=`/rf/play/${gmId}`
    } 

    return(
        <div className="text-center pt-5" onClick={()=>CreateDB()} style={{height:'200px',width:'200px',backgroundColor:'orange'}}>
            click to start rapidfire
        </div>
    );
}

export default RfIndex