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
		<div className={`${classes.card} card`}>
			<div onClick={() => (window.location.href = props.link)} className={`${classes.cardImage} card_image`} style={{ opacity: "0.93", zIndex: "0" }}>
				<img src={props.img} />
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
				<p style={{ filter: "brightness(10)", filter: "contrast(10)", filter: "grayscale(4.2)" }}>{props.text}</p>
			</div>
		</div>
	);
}

function GradientCard(props) {
	const classes = useStyles();
	return (
		<div
			className={`${classes.card} card`}
			onClick={() => (window.location.href = props.link)}
			style={{
				backgroundColor: "#4158D0",
				backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
				opacity: "0.9",
			}}
		>
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
					fontWeight: "999",
					marginBlock: "auto",
				}}
			>
				<center>{props.text}</center>
			</div>
		</div>
	);
}

export { GradientCard };
export default Card;
