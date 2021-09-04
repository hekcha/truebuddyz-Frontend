import { useEffect, useState } from "react";
import * as firebase from "firebase"; // important
import firebaseDb, { firebaseAuth } from "../../firebase";
import { useCookies } from "react-cookie";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, TextField } from "@material-ui/core";
import "./playrf.css";
import ShareLink from "../ShareLink";

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
		margin: "5px",
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
		background: 'rgb(226,63,251)',
		background: 'radial-gradient(circle, rgba(226,63,251,1) 0%, rgba(89,176,231,1) 50%, rgba(70,252,203,1) 100%)',
		// backgroundImage: `url("https://64.media.tumblr.com/381f6796a346a78af0420054c4f6b45f/tumblr_oi4nevXFWr1u01kfzo1_1280.png")`,
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

function Rapidfire(props) {
	firebaseAuth.signInAnonymously().catch(alert);
	const [token] = useCookies("tb-token");
	const classes = useStyles();

	// store no of user playing
	const [users, setUsers] = useState({});
	// store answer of each que  (set to "null" after question result will display)
	const [ans, setAns] = useState({});
	// store which question is currently display
	const [i, setI] = useState(-1);
	// to switch btw "display question", "wating window", and "result component"
	const [y, setY] = useState(null);
	// store RF que fetch form backend
	const [queBank, setQueBank] = useState(null);
	// store name
	const [name, setName] = useState("");
	const [timer, startTimer] = useState(null);
	const [countdown, setCountDown] = useState(null);

	useEffect(() => {
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
		firebaseDb
			.child("RapidFire")
			.child(props.gameId)
			.child("users")
			.on(
				"value",
				(snapshot) => {
					setUsers(snapshot.val());
				},
				(errorObject) => {
					console.log("The read failed: " + errorObject.name);
				}
			);

		// monitor changes in RapidFire -> GameID -> ans (in firebase)
		firebaseDb
			.child("RapidFire")
			.child(props.gameId)
			.child("ans")
			.on(
				"value",
				(snapshot) => {
					setAns(snapshot.val());
				},
				(errorObject) => {
					console.log("The read failed: " + errorObject.name);
				}
			);

		// monitor changes in RapidFire -> GameID -> queNo (in firebase)
		firebaseDb
			.child("RapidFire")
			.child(props.gameId)
			.child("queNo")
			.on(
				"value",
				(snapshot) => {
					setI(snapshot.val());
					setY(1);
				},
				(errorObject) => {
					console.log("The read failed: " + errorObject.name);
				}
			);
	}, [null]);

	useEffect(() => {
		// alert(token['tb-user'])
		if (i === null) {
			firebaseDb
				.child("RapidFire")
				.child(props.gameId)
				.set(
					{
						queNo: 0,
						users: "null",
						ans: "null",
					},
					(err) => {
						if (err) console.log("Error: ", err);
					}
				);
		}
	}, [i]);

	const Submit = () => {
		var nme = document.getElementById("name").value;
		firebaseDb.child("RapidFire").child(props.gameId).child("users").child(token["tb-user"]).set(nme);
		setName(nme);
		setY(0);
	};

	const NextQue = () => {
		// Set ans to null
		firebaseDb.child("RapidFire").child(props.gameId).child("ans").set("null");
		// increse the count in queNo
		firebaseDb
			.child("RapidFire")
			.child(props.gameId)
			.child("queNo")
			.set(i + 1);
		setI((i + 1)%queBank.length);
	};
	useEffect(() => {
		if (y == 1 && name != "") {
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
			);
		} else if (y != 1 && countdown) clearInterval(countdown);
	}, [y, name]);

	const AnsChoice = (item) => {
		// post answer
		firebaseDb.child("RapidFire").child(props.gameId).child("ans").child(name).set(item);
		setY(2);
		clearTimeout(timer);
		// document.getElementById(name).style.border = "5px solid green";
		// document.getElementById(name).style.opacity = "1";
	};


	if (i === -1 || i === null) {
		return (
			<div>
				<h1 className={classes.heading1}>{props.type} Rapidfire</h1>
				<br />
				creating a room
			</div>
		);
		//loading se bdhiya ye dikhate h
	}

	if (name === "") {
		return (
			<div className="text-center" style={{ marginTop: "80px" }}>
				<h1 className={classes.heading1}>{props.type} Rapidfire</h1>
				<Card className={classes.card} raised>
					<p className="my-3" style={{ fontSize: "34px", fontWeight: "00", color: "black" }}>
						Enter Your Name
					</p>
					<TextField id="name" id="name" name="name" label="Name" variant="filled" style={{ border: "4px" }} required />
					<br />
					<Button className="my-3" variant="contained" color="primary" onClick={() => Submit()}>
						Play
					</Button>
					{/* <button onClick={() => Submit()}>submit</button> */}
				</Card>
			</div>
		);
	}

	if (y === 0) {
		return (
			<div className="text-center" style={{ marginTop: "80px" }}>
				<h1 className={classes.heading1}>{props.type} Rapidfire</h1>
				<br />				
				<Button variant="contained" color="primary" onClick={() => setY(1)}>
					Start
				</Button>
				<br />
				<ul>
					<Card
						style={{
							width: "200px",
							margin: "12px auto",
							height: "40px",
							fontSize: "28px",
							textTransform: "capitalize",
							borderRadius: "15px",
							backgroundColor: 'var(--bs-table-bg)',
							border: "1px solid gray",
						}}
						raised
					>
						Online - {Object.values(users).length}
					</Card>
					
					{Object.values(users).map((item) => {
						return (
							<Card
								style={{
									width: "200px",
									margin: "12px auto",
									height: "40px",
									fontSize: "28px",
									textTransform: "capitalize",
									borderRadius: "15px",
									border: "1px solid gray",
								}}
								raised
							>
								{item}
							</Card>
						);
					})}
				</ul>
				<br />
				<ShareLink game="rf" type={props.type} link={`${process.env.REACT_APP_URL}/rapidfire/${props.type}/${props.gameId}`} />
				<h1 className="my-4">Instructions📖</h1>
			</div>
		);
	}

	if (y === 1)
	{
		return (
			<div className="text-center" style={{overflow:'hidden'}}>
				<h1 className={classes.heading1}>{props.type} Rapidfire</h1>
				<br />
				<h3>Online🟢: {Object.values(users).length} </h3>
				<br />
				<div className="row">
					<div id="countdown">
						<div id="countdown-number">
							<span id="time">10</span>
						</div>
						<svg>
							<circle r="18" cx="20" cy="20"></circle>
						</svg>
					</div>
					<h1>{/* time left - <span id="time">100</span> */}</h1>
					<div className="col-8 offset-2 row">
						<div className="col-12 my-2">
							<h1>{queBank[parseInt(i)]["que"]}</h1>
						</div>
						<Card
							style={{
								minWidth: "250px",
								maxWidth: "400px",

								margin: "auto",
								backgroundImage: " linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
								backgroundColor: " #00DBDE",
								opacity: "0.5",
								borderRadius: "20px",
								border: "2px solid",
							}}
							raised
						>
							{Object.values(users).map((item) => {
								return (
									<Card
										onClick={() => AnsChoice(item)}
										className="my-3"
										id={item}
										style={{
											backgroundColor: "white",
											maxWidth: "350px",
											minWidth: "auto",
											// fontSize: "35px",
											fontWeight: "600",
											color: "black",
											margin: "10px auto",
											borderRadius: "15px",
											opacity: "0.85",
											backgroundColor: "white",
											textAlign: "center",
											pointer: "cursor",
											border: "2px solid black",
										}}
										raised
									>
										<h3 className="text-capitalize text-center" style={{ fontSize: "26px" }}>
											{item}
										</h3>
									</Card>
								);
							})}
						</Card>
					</div>
				</div>

			</div>
		);
	}
	if (y === 2) {
		if (ans != null && Object.values(users).length === Object.values(ans).length) setY(3);
		return (
			<div className="text-center m-auto">
				<h1 className={classes.heading1}>{props.type} Rapidfire</h1>
				<br />
				<div className="m-2">
					<h1 style={{ fontFamily: "'ZCOOL KuaiLe', cursive" }}>Wait for your friend's response</h1>
					<h3 className="my-3" style={{ fontFamily: "'ZCOOL KuaiLe', cursive" }}>
						these people voted✔️
					</h3>
					<ul>
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
					{/* Yha pr next button bhi tha kya??
					 */}
				</div>
			</div>
		);
	}

	if (y === 3)
		return (
			<div style={{ textAlign: "center" }}>
				<h1 className={classes.heading1}>{props.type} Rapidfire</h1>
				<br />
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
									<Card className={classes.tableCard2} raised>
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
	window.location.href = `/rapidfire`;
}

export default Rapidfire;
