import { useEffect, useState } from "react";
// eslint-disable-next-line
import * as firebase from "firebase"; // important
import firebaseDb from "../../firebase";
import { useCookies } from "react-cookie";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, TextField } from "@material-ui/core";
// import "./playrf.css";
import ShareLink from "../ShareLink";
import finger from "../assets/finger.gif";
import NeonTwoOpt from "../Neon/NeonTwoOpt";


const useStyles = makeStyles((theme) => ({
	btnGrad: {
		backgroundImage: "linear-gradient(to right, #007991 0%, #78ffd6  51%, #007991  100%)",
		margin: "15px auto",
		padding: "10px 25px",
		textAlign: "center",
		textTransform: "uppercase",
		transition: "0.5s",
		backgroundSize: "200% auto",
		color: "white",
		fontWeight: "600",
		boxShadow: "0 0 20px #eee",
		borderRadius: "10px",
		display: "block",

		"&:hover": {
			backgroundPosition: "right center" /* change the direction of the change here */,
			color: "#fff",
			textDecoration: "none",
		},
	},

	card: {
		// margin: "5px",
		minWidth: "350px",
		maxWidth: "500px",
		height: "250px",
		margin: "auto",
		marginTop: "28px",
		borderRadius: "50px",
		backgroundImage: `url("https://64.media.tumblr.com/0ab36988ed272b7eb6f306ba5da6cff3/tumblr_oi4neuR8ti1u01kfzo1_1280.png")`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	},
	heading1: {
		textTransform: "capitalize",
		fontSize: "40px",
		fontFamily: "'Rampart One', cursive",
		backgroundColor: "#FEE140",
		backgroundImage: "linear-gradient( 114.3deg,  rgba(55,60,126,0.89) 22%, rgba(13,104,175,0.76) 78.3% )",
		backgroundClip: "text",
		textFillColor: "transparent",
		fontWeight: "999",
		marginBottom: "-10px",
	},
	item0: {
		display: "inline-block",
		textAlign: "center",
		fontWeight: "500",

		fontSize: "24px",
		textTransform: "capitalize",
	},
	item1: {
		display: "inline-block",
		textAlign: "center",
		fontWeight: "525",
		fontSize: "18px",
		textTransform: "capitalize",
		verticalAlign: "center",
	},
	nameHeading: {
		display: "inline-block",
		// marginRight: "140px",
		textAlign: "center",
		fontSize: "27px",
		textTransform: "capitalize",
	},
	options: {
		backgroundColor: "white",
		maxWidth: "350px",
		minWidth: "auto",
		// fontSize: "35px",
		fontWeight: "600",
		color: "black",
		margin: "10px auto",
		// borderRadius: "15px",
		opacity: "0.85",
		wordWrap: "break-word",
		textAlign: "center",
		pointer: "cursor",
		border: "2px solid black",
		"&:hover": {
			scale: "1.1",
			backgroundColor: "#2eb62c",
		},
		"&:active": {
			scale: "1.1",
			backgroundColor: "#2eb62c",
		},
		"&:click": {
			scale: "1.1",
			backgroundColor: "#06fd59",
		},
	},
	voteHeading: {
		display: "inline-block",
		textAlign: "center",
		fontSize: "27px",
		textTransform: "capitalize",
	},
	tableCard1: {
		width: "35vw",
		margin: "15px",
		borderRadius: "10px",
		background: "linear-gradient(-45deg, #24ff72, #9a4eff)",
		[theme.breakpoints.down("sm")]: {
			width: "280px",
		},
	},
	tableCard2: {
		width: "35vw",
		margin: "15px",
		borderRadius: "15px",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		[theme.breakpoints.down("sm")]: {
			width: "280px",
			backgroundPosition: "-20px",
		},
		"&:hover,&:active": {
			transform: "scale(1.1)",
			transition: " 0.5s",
		},
		cursor: "pointer",
	},
}));

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function PlayTwoOpt(props) {
	// firebaseAuth.signInAnonymously().catch(alert);
	const [token] = useCookies(['tb-token','tb-user']);
	const classes = useStyles();
	// Check which colour to delete.
	// ["#FF00E4", "#28FFBF", "#C400FF", "#F7FD04", "#FF5200", "#FA163F", "#FF00C8", "#D80E70", "#00541A"];
	var colourPalette = [
		"#FFEDDA",
		"#FF2442",
		"#E7E0C9",
		"#FFF7AE",
		"#F6D167",
		"#FFBF86",
		"#F6A9A9",
		"#C2F784",
		"#297F87",
		"#7EB5A6",
		"#FF4848",
		"#F39189",
		"#4EF037",
		"#00FFF0",
		"#FDFDC4",
		"#85EF47",
	];

	// store no of user playing
	const [users, setUsers] = useState({});
	// store answer of each que  (set to "null" after question result will display)
	const [ans, setAns] = useState({});
	// store which question is currently display
	const [i, setI] = useState(-1);
	// to switch btw "display question", "wating window", and "result component"
	const [y, setY] = useState(null);
	// store RF que fetch form backend
	const [queBank, setQueBank] = useState([]);
	// store name
	const [name, setName] = useState("");
	const [timer, startTimer] = useState(null);
	const [countdown, setCountDown] = useState(null);

	var ALLOWED_GAMES = ["wouldyourather", "thisorthat"];
    var ALLOWED_PAGES = {
        "wouldyourather":["friends", "students"],
        "thisorthat":["friends", "students"],
    }

    var link;
    if(props.game==='wouldyourather')
        link =`${process.env.REACT_APP_URL}/would-you-rather/${props.subGame}/${props.gameId}`
    if(props.game==='thisorthat')
        link =`${process.env.REACT_APP_URL}/this-or-that/${props.subGame}/${props.gameId}`

    useEffect(() => {

		for (var i = 0; i < ALLOWED_GAMES.length; i++) {
			if (ALLOWED_GAMES[i] === props.game)
            {
                for(var j = 0; j < ALLOWED_PAGES[props.game].length; j++)
                {
                    if(ALLOWED_PAGES[props.game][j] === props.subGame) break;
                    if(j === ALLOWED_PAGES[props.game].length - 1) window.location.href = "/";
                }
                break;
            }
			if (i === ALLOWED_GAMES.length - 1) window.location.href = "/"; // SHOW 404 page
		}

		// fetch questions
		fetch(`${process.env.REACT_APP_API_URL}/twooptions/${props.game}/?category=${props.subGame}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Token ${token["tb-token"]}`,
			},
		})
			.then((resp) => resp.json())
			.then((res) => {setQueBank(res);console.log(res)})
			.catch((err) => console.log(err));

		// monitor changes in props.game -> GameID -> users (in firebase)
		firebaseDb.child(props.game).child(props.gameId).child("users").on(
				"value",
				(snapshot) => {
                    console.log(snapshot.val())
					setUsers(snapshot.val());
				},
				(errorObject) => {
					console.log("The read failed: " + errorObject.name);
				}
			);

		// monitor changes in props.game -> GameID -> ans (in firebase)
		firebaseDb.child(props.game).child(props.gameId).child("ans").on(
				"value",
				(snapshot) => {
                    console.log(snapshot.val())
					setAns(snapshot.val());
				},
				(errorObject) => {
					console.log("The read failed: " + errorObject.name);
				}
			);
		// monitor changes in props.game -> GameID -> queNo (in firebase)
		firebaseDb.child(props.game).child(props.gameId).child("queNo").on(
				"value",
				(snapshot) => {
                    console.log(snapshot.val())
					setI(snapshot.val());
					setY(1);
				},
				(errorObject) => {
					console.log("The read failed: " + errorObject.name);
				}
			);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (y === 1 && name !== "") {
			setCountDown(
				setInterval(function () {
					if (document.getElementById("time") && document.getElementById("time").innerHTML != null)
						document.getElementById("time").innerHTML = document.getElementById("time").innerText - 1;
				}, 1000)
			);
			startTimer(
				setTimeout(function () {
					AnsChoice("not selected");
				}, 10000)
				// yha shi krna time
			);
		} else if (y !== 1 && countdown) clearInterval(countdown);
		// eslint-disable-next-line
	}, [y, name]);

	const Submit = () => {
		var nme = document.getElementById("name").value;
		// var formdata = new FormData();
		// formdata.append("category", props.type);
		// formdata.append("roomId", props.gameId);
		// formdata.append("playerId", token["tb-user"]);
		// formdata.append("playerName", nme);

		// fetch(`${process.env.REACT_APP_API_URL}/rf/room/`, {
		// 	method: "POST",
		// 	body: formdata,
		// 	headers: {
		// 		"Authorization": `Token ${token["tb-token"]}`,
		// 	},
		// }).catch((err) => console.log(err));

		firebaseDb.child(props.game).child(props.gameId).child("users").child(token["tb-user"]).set(nme);
		setName(nme);
		setY(0);
	};

	const NextQue = () => {
		// increse the count in queNo
		firebaseDb.child(props.game).child(props.gameId).child("queNo").set((i + 1) % queBank.length);
		// Set ans to null
		firebaseDb.child(props.game).child(props.gameId).child("ans").set("null");
		// setI((i + 1) % queBank.length);
	};

	const AnsChoice = (item) => {
		// post answer
		firebaseDb.child(props.game).child(props.gameId).child("ans").child(name).set(item);
		setY(2);
		clearTimeout(timer);
	};

	if (i === -1) {
		return (
			<div id="playRF" style={{ margin: "40px auto" }}>
                <NeonTwoOpt game={props.game} />
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
				<p style={{ textAlign: "center", fontSize: "50px" }}>Loading Your Room...</p>
			</div>
		);
	}

	if (name === "") {
		return (
			<div id="playRF" className="text-center" style={{ marginTop: "80px" }}>
                <NeonTwoOpt game={props.game} />
				<Card className={classes.card} raised>
					<p className="my-3" style={{ fontSize: "34px", fontWeight: "00", color: "black" }}>
						Enter Your Name
					</p>
					<TextField id="name" name="name" label="Name" variant="filled" style={{ border: "4px" }} inputProps={{ maxLength: 18 }} required />
					<br />
					<Button className="my-3" variant="contained" color="primary" onClick={() => Submit()}>
						Play
					</Button>
				</Card>
			</div>
		);
	}

	// display game start button
	if (y === 0) {
		return (
			<div id="playRF" className="text-center" style={{ marginTop: "80px" }}>
                <NeonTwoOpt game={props.game} />
				<br />
				<Button variant="contained" color="primary" onClick={() => setY(1)}>
					Start
				</Button>
				<br />
				<Card
					style={{
						width: "400px",
						margin: "15px auto",
						backgroundColor: "#F8E2CF" /* fallback for old browsers */,
					}}
					raised
				>
					<h1 style={{ color: "whitesmoke", textShadow: " -1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000, 1px 1px 0 #000" }}>
						Online<i class="far fa-user fa-xs"></i> -{Object.values(users).length}
					</h1>

					{Object.values(users).map((item) => {
						return (
							<Card
								style={{
									width: "300px",
									margin: "12px auto",
									height: "48px",
									fontSize: "28px",
									textTransform: "capitalize",
									borderRadius: "8px",
									color: "white",
									backgroundColor: `${colourPalette[getRandomInt(16)]}`,
									border: "1px solid gray",
									verticalAlign: "center",
									fontWeight: "600",
									textShadow: "-1px -1px 5px black",
								}}
								// raised
							>
								{item}{" "}
								<i class="fas fa-check-circle fa-sm" style={{ color: "#01a4ef", textShadow: "1px 1px 3px black" }}>
									{" "}
								</i>
							</Card>
						);
					})}
				</Card>
				<br />
				<ShareLink game={props.game} type={props.subGame} link={link} />
				<h1 className="my-4">Instructions📖</h1>
			</div>
		);
	}

	// display questions
	if (y === 1) {
		return (
			<div id="playRF" className="text-center mt-5" style={{ margin: "0px auto" }}>
				<div className="my-2">
                    <NeonTwoOpt game={props.game} />
				</div>
				<br />
				<h3 className="my-2">
					Participants<i class="fas fa-circle fa-xs" style={{ color: "#05b714" }}></i>: {Object.values(users).length}{" "}
				</h3>
				<br />
				<div className="row">
					<div id="countdown" className="mb-3 col-12">
						<div id="countdown-number">
							<span id="time">10</span>
						</div>
						<svg>
							<circle r="18" cx="20" cy="20"></circle>
						</svg>
					</div>
					<br />
					<hr />
					<div className="col-8 offset-2 row">
                        <div style={{ textAlign: "center", marginX: "0" }}>
							{/* <h3>{queBank[parseInt(i)]["que"]}</h3> */}
                            {console.log(queBank[parseInt(i)],' ' ,i)}
						</div>
                        <Card onClick={() => AnsChoice(queBank[parseInt(i)]['optionA'])} className={classes.options} style={{}} raised>
                            <h3 className="text-capitalize text-center" style={{ fontSize: "26px" }}>
                                {queBank[parseInt(i)]['optionA']}
                            </h3>
                        </Card>
                        <Card onClick={() => AnsChoice(queBank[parseInt(i)]['optionB'])} className={classes.options} style={{}} raised>
                            <h3 className="text-capitalize text-center" style={{ fontSize: "26px" }}>
                            {queBank[parseInt(i)]['optionB']}
                            </h3>
                        </Card>
					</div>
				</div>
				<button className={`${classes.btnGrad}`} onClick={() => AnsChoice("Skipped")} style={{ width: "80px" }}>
					Skip
				</button>
			</div>
		);
	}
	// display who voted
	if (y === 2) {
		if (ans != null && Object.values(users).length === Object.values(ans).length) setY(3);
		return (
			<div className="text-center m-auto">
                <NeonTwoOpt game={props.game} />
				<br />
				<div className="m-2">
					<h1 style={{ fontFamily: "'ZCOOL KuaiLe', cursive" }}>Wait for your friend's response</h1>
					<h3 className="my-3" style={{ fontFamily: "'ZCOOL KuaiLe', cursive" }}>
						these people voted✔️
					</h3>
					<ul>
                        {console.log(ans)}
						{Object.getOwnPropertyNames(ans).map((item) => {
							return (
								<Card
									style={{
										width: "400px",
										margin: "12px auto",
										height: "40px",
										fontSize: "28px",
										fontWeight: "bold",
										textTransform: "capitalize",
										borderRadius: "15px",
										border: "1px solid black",
									}}
									raised
								>
									{item}
								</Card>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
	// display result
	if (y === 3)
		return (
			<div id="playRF" className="mt-4" style={{ textAlign: "center" }}>
				{ans===null?NextQue():null}
				<div className="my-5">
                    <NeonTwoOpt game={props.game} />
				</div>
				<div>
					<table style={{ margin: "auto", justifyContent: "center" }}>
						<tr>
							<Card className={classes.tableCard1} raised>
								<th className={`col-6 col-sm-6 ${classes.nameHeading}`}>Name </th>

								<th className={`col-6 col-sm-6 ${classes.voteHeading}`}>Vote</th>
							</Card>
						</tr>

						{Object.entries(ans).map((item) => {
							return (
								<tr>
									<Card className={classes.tableCard2} style={{ backgroundColor: `${colourPalette[getRandomInt(16)]}` }} raised>
										<td className={`col-6 col-sm-6 ${classes.item0}`}>{item[0]}</td>
										<td className={`col-6 col-sm-6 ${classes.item1}`}>{item[1]}</td>
									</Card>
								</tr>
							);
						})}
					</table>
				</div>
				<button className={classes.btnGrad} onClick={() => NextQue()}>
					Next⏭️
				</button>
			</div>
		);
	// window.location.href = `/rapid-fire`;
    <div>
        test
    </div>
}

export default PlayTwoOpt;
