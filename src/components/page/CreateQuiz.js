import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardHeader, Typography, TextField, Stepper, Step, StepLabel } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
	root: {
		position: "relative",
		display: "flex",
		justifyContent: "center",
		margin: "10px auto 10px auto",
		top: "50px",
		minWidth: 100,
		maxWidth: 800,
		minHeight: 300,
		backgroundImage: `url("https://media.giphy.com/media/Jsi9OgtvGylZq3mcMw/giphy.gif")`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	},
	content: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		marginTop: "-30px",
		color: "white",
	},
	subHeading: {
		// Add media breakpoint Material UI
		textTransform: "initial",
		fontWeight: "999",
		color: "whitesmoke",
	},
	filledTextarea: {
		backgroundColor: "white",
		marginBottom: "1rem",
		opacity: "0.5",
		border: "ridge",
		borderWidth: "0 2px 3px 0",
		boxShadow: "0 2px 10px 0 whitesmoke",
	},
});
function getSteps() {
	return ["Create a Quiz", "Share", "Result"];
}

export default function SimpleCard(props) {
	const classes = useStyles();
	const steps = getSteps();

	return (
		<div>
			{/* <HorizontalLabelPositionBelowSteeper /> */}
			<Stepper activeStep="0" alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<Card className={classes.root} raised>
				<CardContent className={classes.content}>
					<h1 style={{ color: "whitesmoke", fontWeight: "999" }}>BFF Quiz</h1>
					<h2 className={classes.subHeading}>How well do your friends know you🤝?</h2>
					<TextField
						className={classes.filledTextarea}
						component="h1"
						id="name"
						label="Your Name Here"
						placeholder="Hello Dear👋"
						multiline
						variant="filled"
						name="name"
						gutterbottom
						raised
						required
					/>
					<Button
						size="large"
						className={classes.btn}
						onClick={() => props.setName(document.getElementById("name").value)}
						variant="contained"
						color="primary"
						href=""
					>
						Next
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}

//
