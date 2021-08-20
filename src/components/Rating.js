import { useCookies } from "react-cookie";
import "./css/rating.css";

function Rating() {
	const [token] = useCookies("tb-token");
	
	const Submit = () => {
		var ele = document.getElementsByName('ratingRadio');
		for(var i = 0; i < ele.length; i++) {
			if(ele[i].checked)
			{
				var form = new FormData();
				form.append("user", '0');
				form.append('value', ele[i].value);
				fetch(`${process.env.REACT_APP_API_URL}/api/rating/`, {
					method: "POST",
					body: form,
					headers: {
						"Authorization": `Token ${token["tb-token"]}`,
					},
					})
					.then((resp) => resp.json())
					.then((res) => {
						if(res['message']==='Ok')
							alert('greets')
					})
					.catch((err) => console.log(err));
				break;
			}
		}
	}

	return (
		<div>
			<div class="wrapper">
				<i class="fa fa-null">
					<input name="ratingRadio" type="radio" id="st5" value="5" onChange={()=>Submit()} />
					<label for="st5"></label>
					<input name="ratingRadio" type="radio" id="st4" value="4" onChange={()=>Submit()} />
					<label for="st4"></label>
					<input name="ratingRadio" type="radio" id="st3" value="3" onChange={()=>Submit()} />
					<label for="st3"></label>
					<input name="ratingRadio" type="radio" id="st2" value="2" onChange={()=>Submit()} />
					<label for="st2"></label>
					<input name="ratingRadio" type="radio" id="st1" value="1" onChange={()=>Submit()} />
					<label for="st1"></label>
				</i>
			</div>
		</div>
	);
}

export default Rating;
