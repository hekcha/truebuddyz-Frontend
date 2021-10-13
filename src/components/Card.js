import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	card: {
		[theme.breakpoints.down("xs")]: {
			height: "260px !important",
			margin: "20px 0px !important",
		},
	},
	cardImage: {
		zIndex: "0",
		overflow: "hidden",
		textAlign: "center",
		backgroundPosition: "center",
		backgroundSize: "cover",
		[theme.breakpoints.down("xs")]: {
			width: "100% !important",
			backgroundSize: "cover",
		},
	},
	cardTitle: {
		[theme.breakpoints.down("sm")]: {
			marginTop: "60px",
			fontSize: "24px",
			// top: "200px",
		},
	},
}));

function Card(props) {
	const classes = useStyles();
	return (
		<a href={props.link}>
			<div className={`${classes.card} card`}>
				<div className={`${classes.cardImage} card_image`}>
					<img src={props.img} alt="Logo" />
				</div>
				<div
					className={`card_title`}
					style={{
						zIndex: "8",
						verticalAlign: "center",
						textAlign: "center",
						fontFamily: "cursive",
						fontWeight: "999",
						webkitTextFillColor: "#fdfffe",
						webkitTextStroke: "0.9px black",
						textShadow: "2px 1px black , 2px 0 5px gray",
						fontSize: "30px",
					}}
				>
					<p
						className={`${classes.cardTitle}`}
						style={{
							filter: "brightness(10)",
							// eslint-disable-next-line
							filter: "contrast(10)",
							// eslint-disable-next-line
							filter: "grayscale(4.2)",
						}}
					>
						{props.text}
					</p>
				</div>
			</div>
		</a>
	);
}

function GradientCard(props) {
	const classes = useStyles();
	return (
		<a href={props.link}>
			<div>
				<div
					className={`${classes.card} card`}
					style={{
						backgroundColor: "#4158D0",
						backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
					}}
				>
					<div
						style={{
							textAlign: "center",
							webkitTextFillColor: "#fdfffe",
							webkitTextStroke: "1px black",
							fontFamily: "cursive",
							fontWeight: "999",
							textShadow: "2px 2px black , 0 0 5px gray",
							fontSize: "30px",
							marginBlock: "auto",
						}}
					>
						<div
							style={{
								color: "white",
								zIndex: "8",
								textAlign: "center",
								verticalAlign: "center",
								webkitTextFillColor: "white",
								webkitTextStroke: "0.8px black",
								fontSize: "34px",
								fontWeight: "999",
								textTransform: "capitalize",
								// marginBlock: "auto",
							}}
						>
							<p>{props.text}</p>
						</div>
					</div>
				</div>
			</div>
		</a>
	);
}

export { GradientCard };
export default Card;
