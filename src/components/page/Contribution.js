import './contribution.css'
import { useCookies } from "react-cookie";


function Contribution() {

    const [token] = useCookies("tb-token");

    const Send = () => {
        if(document.getElementById("message").value !== "")
        {
            var formdata = new FormData();
            formdata.append('user',token['tb-user']);
            formdata.append('name',`${document.getElementsByClassName("first-name")[0].value} ${document.getElementsByClassName("last-name")[0].value}`);
            formdata.append('email',`${document.getElementById("email").value}`);
            formdata.append('game',document.getElementById("game").value);
            formdata.append('message',document.getElementById("message").value);
            fetch(`${process.env.REACT_APP_API_URL}/core/contribution/`, {
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
            document.getElementsByClassName("error")[0].style.opacity='1';
    }

    return (
        <div id="contribution">
            <div class="container card message-container ">
                <h1 class="message-title">Send A Message</h1>
                <p style={{fontStyle: 'italic',fontSize:'1rem'}}>You can send us your Question and We will add that to our Question Bank.</p>
                <form>
                    <label for="name" class="name">Name<p id="break">(Optional)</p></label>
                    <input class="first-name" type="text" name="first-name" placeholder="First Name" maxlength="30" />
                    <input class="last-name" type="text" name="last-name" placeholder="Last Name" maxlength="30" />
                    
                    <label for="email" class="email">Email<p id="break">(Optional)</p></label>
                    <input id="email" type="email" name="email" placeholder="example@TrueBFF.com" />
                    
                    <label for="game" class="game">Game<p id="break">(Optional)</p></label>
                    <input id="game" type="text" name="game" maxlength="45" placeholder="Game" />

                    <label></label>
                    <label for="message" class="message">Message<span style={{color:'red'}}>*</span><p className="error" id="break" style={{color:'red',opacity:'0'}}>Required</p></label>
                    <textarea name="message" id="message" cols="30" rows="7" required maxlength="1000"></textarea>

                    <p class="button-container">
                    <input onClick={()=>Send()} class="button" value="Send" style={{textAlign:'center'}} />
                    </p>
                </form>
            </div>    
        </div>
    );
}
export default Contribution