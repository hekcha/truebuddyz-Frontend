import { useState } from 'react';
import { useCookies } from "react-cookie";
import './feedback.css'
function Feedback() {

    const [emoji, setEmoji] = useState(0);
	const [token] = useCookies("tb-token");
    

    const SelectEmoji = (i) => {
        if(emoji)
        document.getElementById(`eachEmoji${emoji}`).style.filter='grayscale(1)';
        setEmoji(i);
        document.getElementById(`eachEmoji${i}`).style.filter='grayscale(0)';
    }
    const Send = () => {
        if(emoji)
        {
            var formdata = new FormData();
            formdata.append('user',token['tb-user']);
            formdata.append('rating',emoji);
            formdata.append('text',document.getElementById("users-feedback").value);
            fetch(`${process.env.REACT_APP_API_URL}/core/feedback/`, {
                method: "POST",
                body:formdata,
                headers: {
                    "Authorization": `Token ${token["tb-token"]}`,
                },
            })
            .then((resp) => resp.json())
            .then((res) => window.location.href='/')
            .catch((err) => console.log(err));
        }
        else
        {
            document.getElementById("error").style.opacity='1';
        }
    }
    const Reset = () => {
        if(emoji)
        document.getElementById(`eachEmoji${emoji}`).style.filter='grayscale(1)';
        setEmoji(0);
        document.getElementById("users-feedback").value="";
    }

    return (
        <div id="feedback">
            <main >
                <div class="card-layout layout-medium">
                    <div class="content">
                        <h1 class="title">Give feedback</h1>
                        <p>What do you think of TrueBFF?<span style={{color:'red'}}>*</span></p>
                        <i id="error" style={{color:'red',opacity:'0'}}>Please select any one option</i>
                        <div class="emojis">
                            <span onClick={()=> SelectEmoji(1)} id="eachEmoji1" class="eachEmoji">😥</span>
                            <span onClick={()=> SelectEmoji(2)} id="eachEmoji2" class="eachEmoji">😔</span>
                            <span onClick={()=> SelectEmoji(3)} id="eachEmoji3" class="eachEmoji">😐</span>
                            <span onClick={()=> SelectEmoji(4)} id="eachEmoji4" class="eachEmoji">😀</span>
                            <span onClick={()=> SelectEmoji(5)} id="eachEmoji5" class="eachEmoji">😇</span>
                        </div>
                        <h3>Do you have any thoughts you’d like to share?</h3>
                        <textarea name="users-feedback" id="users-feedback"></textarea>
                        <div class="user-actions">
                            <button onClick={() => Send()} class="btn-primary">Send</button>
                            <button onClick={() => Reset()} class="btn-outline">Reset</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Feedback