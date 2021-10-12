import copy from "copy-text-to-clipboard";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
	cardBody: {
		display: "flex",
		justifyContent: "center",
		maxWidth: "82vw",
		// height: "565px",
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
		color: "black",
		overflow: "scrollY",
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
		fontFamily: "cursive",
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
		"friends": "Share This Link to your Friends.",
		"couple": "Share This Link to your Love.",
		"siblings": "Share This Link to your Friendly-enemy.",
		"response": "Your quiz link😎.",
	},
	"rf": {
		"friends": "Share This link to play the game with your friends.",
		"couple": "Share This link to play the game with your Love.",
		"siblings": "Share This link to play the game with your Friendly-enemy.",
	},
	"thisorthat": {
		"dirty": "Share This link to play the game.",
		"friends": "Share This link to play the game with your Friends.",
		"couple": "Share This link to play the game with your Love.",
		"funny": "Share This link to play the funny game.",
		"hard": "Share This link to play the game.",
	},
	"wouldyourather": {
		"all": "Share This link to play the game with your Friends.",
	},
};
const QUOTES = {
	"quiz": {
		"friends": "Friendship isn’t a big thing—it’s a million little things.",
		"couple": "A relationship is when one person is always right and the other person is the boyfriend.",
		"siblings": "Our parents made us siblings, but we choose to be best friends.",
		"response": "Share Your quiz to See more intresting response😜.",
	},
	"rf": {
		"friends": "Life is partly what we make it, and partly what it is made by the friends we choose.",
		"couple": "I’ve tried so many times to think of a new way to love you.",
		"siblings": "Siblings are put on this Earth to love, to entertain, and to annoy each other. It's part of their job requirements.",
	},
	"thisorthat": {
		"dirty": "Slightly Dirty And Fantastically Flirty “This Or That” Questions.",
		"friends": "Funny This or That Questions Enjoy With Your Friends.",
		"couple": "Thought-Provoking Questions for Couples.",
		"funny": "Funny This or That Questions.",
		"hard": "Extremely Challenging and Hilarious ‘This or That’ Game.",
	},
	"wouldyourather": {
		"all": 'These "Would You Rather" Questions Are Actually Pretty Difficult To Answer.',
	},
};

function ShareLink(props) {
	const classes = useStyles();

	return (
		<div style={{ display: "flex", justifyContent: "center", marginTop: "8vh" }}>
			<Card className={`text-center ${classes.cardBody}`}>
				<Card.Header className={classes.heading}>{TEXT[props.game][props.type]}</Card.Header>
				<Card.Body style={{ height: "15rem" }}>
					<Card.Text className={classes.text}>{QUOTES[props.game][props.type]}</Card.Text>
					<Card.Title className={classes.title}>
						<textarea id="link" className={classes.link} value={props.link} style={{cursor:'auto'}} disabled />
					</Card.Title>
					<span>
						{props.game !== "quiz" ? null : (
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
								alert("Bingo😄...Share this with friends😉");
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
							<a
								href={`https://api.whatsapp.com/send?text="Your friend share this **TrueBuddyz Quiz** :\n ${props.link} \n Click on the link☝ to show some love❤ to your friend."`}
								title="WhatsApp"
							>
								<i className="fab fa-whatsapp"></i>
							</a>
							<span className="text">WhatsApp</span>
						</span>
						<span className="sr-telegram sr-text-below">
							<a
								href={`https://telegram.me/share/url?url=Your friend share this **TrueBuddyz Quiz** :\n ${props.link} \n Click on the link☝ to show some love❤ to your friend.`}
								title="Telegram"
							>
								<i className="fab fa-telegram-plane"></i>
							</a>
							<span className="text">Telegram</span>
						</span>

						<span className="sr-facebook sr-text-below ">
							<a
								href={`https://www.facebook.com/share.php?u=Your friend share this **TrueBuddyz Quiz** :\n ${props.link} \n Click on the link☝ to show some love❤ to your friend.`}
								title="Facebook"
							>
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
