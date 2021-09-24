import copy from "copy-text-to-clipboard";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
	cardBody: {
		display: "flex",
		justifyContent: "center",
		maxWidth: "82vw",
		height: "565px",
		border: "solid 2px",
		borderColor: "black",
		borderRadius: "20px",
		boxShadow: "10px 15px 10px rgba(0, 0, 1, 0.5)",
	},
	heading: {
		fontSize: "2.4vw",
		marginTop: "3px",
		[theme.breakpoints.down("xs")]: {
			fontSize: "12px",
			fontWeight: "700",
		},
		fontFamily: "'Permanent Marker', cursive",
	},
	link: {
		overflow: "hidden",
		padding: "0vw 2vw",
		marginBottom: "-20px",
		width: "60vw",
		maxHeight: "7.8vh",
		fontSize: "4.5vh",
		fontFamily: "'Comic Neue', cursive",
		border: "solid 3px",
		borderColor: "black",
		borderRadius: "20px",
		[theme.breakpoints.down("xs")]: {
			fontSize: "22px",
			fontWeight: "999",
		},
	},
	title: {
		fontSize: "2.2vw",
		[theme.breakpoints.down("xs")]: {
			fontSize: "18px",
			fontWeight: "999",
		},
		margin: "2vw",
	},
	text: {
		fontFamily: "'Satisfy', cursive",
		fontSize: "2.4vw",
		[theme.breakpoints.down("xs")]: {
			fontSize: "22px",
			fontWeight: "999",
		},
		fontWeight: "999",
	},
}));

const TEXT = {
	"quiz": {
		"friends": "How well your friends know you??❤️",
		"couple": "How well your partner know you??❤️",
		"siblings": "How well your siblings know you??❤️",
		"response": "Your quiz link😎",
	},
	"rf": {
		"friends": "Play With friends ❤️",
		"couple": "Play with your partner ❤️",
		"siblings": "Play with your siblings ❤️",
	},
};
const QUOTES = {
	"quiz": {
		"friends": "Friendship isn’t a big thing—it’s a million little things.",
		"couple": "Relationship isn’t a big thing—it’s a million little things.",
		"siblings": "Relationship isn’t a big thing—it’s a million little things.",
		"response": "Share Your quiz to See more intresting response😜",
	},
	"rf": {
		"friends": "Friendship isn’t a big thing—it’s a million little things.",
		"couple": "Relationship isn’t a big thing—it’s a million little things.",
		"siblings": "Relationship isn’t a big thing—it’s a million little things.",
	},
};

const SHARE = {
	"quiz": {
		"friends": "SHARE THIS QUIZ WITH YOUR FRIENDS",
		"couple": "SHARE THIS QUIZ WITH YOUR PARTNER",
		"siblings": "SHARE THIS QUIZ WITH YOUR SIBLINGS",
	},
	"rf": {
		"friends": "SHARE THIS rapidfire WITH YOUR FRIENDS",
		"couple": "SHARE THIS rapidfire WITH YOUR PARTNER",
		"siblings": "SHARE THIS rapidfire WITH YOUR SIBLINGS",
	},
};

function ShareLink(props) {
	const classes = useStyles();

	return (
		<div style={{ display: "flex", justifyContent: "center", marginTop: "8vh" }}>
			<Card className={`text-center ${classes.cardBody}`}>
				<Card.Header className={classes.heading}>{TEXT[props.game][props.type]}</Card.Header>
				<Card.Body style={{ height: "300px" }}>
					<Card.Text className={classes.text}>{QUOTES[props.game][props.type]}</Card.Text>
					<Card.Title className={classes.title}>{SHARE[props.game][props.type]}</Card.Title>
					<Card.Title className={classes.title}>
						<textarea id="link" className={classes.link} value={props.link} style={{}} disabled />
					</Card.Title>
					<span>
						{props.game === "rf" ? null : (
							<a href={props.link}>
								<button
									type="button"
									className="btn btn-outline-dark btn-sm mx-1"
									data-mdb-ripple-color="dark"
									style={{ marginTop: "18px", marginBottom: "-25px", borderRadius: "10px" }}
								>
									Result
								</button>
							</a>
						)}
						<button
							type="button"
							className="btn btn-success btn-sm mx-1"
							data-mdb-ripple-color="dark"
							style={{ marginTop: "18px", marginBottom: "-25px", borderRadius: "10px" }}
							onClick={() => {
								copy(props.link);
								alert("Yuhuu😄...Share it😉");
							}}
						>
							Copy link🔗
						</button>
					</span>
				</Card.Body>
				<Card.Footer className="text-muted p-3">
					<h4 style={{ marginBottom: "-12px" }}>Share On</h4>
					<br />
					<div
						className="socializer a sr-32px sr-circle sr-float sr-font-lg sr-icon-white sr-bdr-grey sr-sw-icon-1 sr-pad justify-content-center"
						data-more="instagram,twitter,snapchat,telegram,reddit"
						style={{ display: "flex", flexDirection: "row", fontSize: "12px" }}
					>
						<span className="sr-whatsapp sr-text-below">
							<a href={`https://api.whatsapp.com/send?text=${props.link}`} title="WhatsApp">
								<i className="fab fa-whatsapp"></i>
							</a>
							<span className="text">WhatsApp</span>
						</span>
						<span className="sr-telegram sr-text-below">
							<a href={`https://telegram.me/share/url?url=${props.link};`} title="Telegram">
								<i className="fab fa-telegram-plane"></i>
							</a>
							<span className="text">Telegram</span>
						</span>

						<span className="sr-facebook sr-text-below ">
							<a href={`https://www.facebook.com/share.php?u=${props.link}`} title="Facebook">
								<i className="fab fa-facebook-f"></i>
							</a>
							<span className="text">Facebook</span>
						</span>
						{/* <span className="sr-instagram sr-text-below">
                            <a href="https://instagram.com" title="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <span className="text">Instagram</span>
                        </span> */}
					</div>
				</Card.Footer>
			</Card>
		</div>
	);
}

export default ShareLink;
