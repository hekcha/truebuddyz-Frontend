import { useCookies } from "react-cookie";
// import "./css/rating.css";

function Rating() {
	const [token] = useCookies(['tb-token','tb-user']);
	
	const Submit = () => {
		var ele = document.getElementsByName('ratingRadio');
		for(var i = 0; i < ele.length; i++) {
			if(ele[i].checked)
			{
				var form = new FormData();
				form.append("user", '0');
				form.append('value', ele[i].value);
				fetch(`${process.env.REACT_APP_API_URL}/core/rating/`, {
					method: "POST",
					body: form,
					headers: {
						"Authorization": `Token ${token["tb-token"]}`,
					},
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
					<label for="st5" style={{cursor:'pointer'}} />
					<input name="ratingRadio" type="radio" id="st4" value="4" onChange={()=>Submit()} />
					<label for="st4" style={{cursor:'pointer'}} />
					<input name="ratingRadio" type="radio" id="st3" value="3" onChange={()=>Submit()} />
					<label for="st3" style={{cursor:'pointer'}} />
					<input name="ratingRadio" type="radio" id="st2" value="2" onChange={()=>Submit()} />
					<label for="st2" style={{cursor:'pointer'}} />
					<input name="ratingRadio" type="radio" id="st1" value="1" onChange={()=>Submit()} />
					<label for="st1" style={{cursor:'pointer'}} />
				</i>
			</div>
		</div>
	);
}

export default Rating;
