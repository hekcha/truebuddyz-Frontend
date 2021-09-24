import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	card: {
		[theme.breakpoints.down("xs")]: {
			height: "260px !important",
			margin: "20px 0px !important",
		},
	},
	cardImage: {
		[theme.breakpoints.down("xs")]: {
			width: "100% !important",
		},
	},
}));

function Card(props) {
	const classes = useStyles();
	return (
		<a href={props.link}>
			<div className={`${classes.card} card`}>
				<div className={`${classes.cardImage} card_image`} style={{ opacity: "0.93", zIndex: "0" }}>
					<img src={props.img} alt="Logo" />
				</div>
				<div
					className={`${classes.cardTitle} card_title`}
					style={{
						zIndex: "2",
						textAlign: "center",
						fontFamily: "'Architects Daughter', cursive",
						fontWeight: "999",
						webkitTextFillColor: "#e8e8e8",
						webkitTextStroke: "1.2px black",
						// textShadow: "1px 0.5px white , 0 0 5px gray",
						fontSize: "34px",
					}}
				>
					
					<p 
						style={{ 
							filter: "brightness(10)", 
							// eslint-disable-next-line
							filter: "contrast(10)", 
							// eslint-disable-next-line
							filter: "grayscale(4.2)" 
						}}
					>{props.text}</p>
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
						opacity: "0.9",
					}}
				></div>
				<div
					style={{
						zIndex: "2",
						textAlign: "center",
						webkitTextFillColor: "#e8e8e8",
						webkitTextStroke: "1px black",
						fontFamily: "'Architects Daughter', cursive",
						fontWeight: "999",
						// textShadow: "1px 0.5px white , 0 0 5px gray",
						fontSize: "34px",
						marginBlock: "auto",
					}}
				>
					<div
						style={{
							color: "#e8e8e8",
							zIndex: "2",
							textAlign: "center",
							webkitTextFillColor: "white",
							webkitTextStroke: "1px black",
							fontSize: "34px",
							fontWeight: "999",
							textTransform: "capitalize",
							marginBlock: "auto",
						}}
					>
						<center>{props.text}</center>
					</div>
				</div>
			</div>
		</a>
	);
}

export { GradientCard };
export default Card;
