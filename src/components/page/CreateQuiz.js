import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, TextField, Stepper, Step, StepLabel } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import NeonCreateQuiz from "../Neon/NeonCreateQuiz";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		display: "flex",
		justifyContent: "center",
		margin: "45px auto 10px auto",
		top: "50px",
		minWidth: 100,
		maxWidth: 800,
		minHeight: 300,
		backgroundImage: `url("https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80")`,
		backgroundSize: "cover",
		backgroundPositionY: "top",
		backgroundRepeat: "no-repeat",
		border: "solid 2px dark",
		borderRadius: "20px",
		boxShadow: "10px 15px 10px rgba(0, 0, 1, 0.5), -10px -14px 10px whitesmoke",
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
	contentTitle: {
		color: "black",
		fontWeight: "bold",
		fontSize: "44px",
		marginBottom: "30px",
		marginTop: "13px",
		textTransform: "none",
		opacity: "0.85",
		WebkitTextFillColor: "whitesmoke",
		WebkitTextStroke: "1px",
		textAlign: "center",
		[theme.breakpoints.down("xs")]: {
			fontSize: "38px",
		},
	},
	subHeading: {
		// Add media breakpoint Material UI
		textTransform: "initial",
		justifyContent: "center",
		textAlign: "center",
		marginTop: "10px",
		fontWeight: "999",
		backgroundColor: "whitesmoke",
	},
	stepper: {
		minWidth: "330px",
		maxWidth: "700px",
		margin: "auto",
		borderRadius: "20px",
		color: "white",
		backgroundColor: "#e9e9e9",
	},
	filledTextarea: {
		backgroundColor: "white",
		marginBottom: "1rem",
		// marginTop: "-2rem",
		padding: "2px 1px 1px",
		width: "200px",
		height: "56px",
		opacity: "0.8",
		border: "ridge",
		borderWidth: "0 2px 3px 0",
		boxShadow: "0 2px 10px 0 whitesmoke",
	},
}));
function getSteps() {
	return ["Create a Quiz", "Share", "Result"];
}

export default function SimpleCard(props) {
	const classes = useStyles();
	const steps = getSteps();

	return (
		<div>
			<Stepper className={classes.stepper} activeStep="0" alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<NeonCreateQuiz />
			<Card className={classes.root} raised>
				<CardContent className={classes.content}>
					<h1 className={classes.contentTitle}>TrueBuddyz Quiz</h1>
					{/* <h2 className={classes.subHeading}>How well do your friends know you🤝?</h2> */}
					<TextField
						className={classes.filledTextarea}
						component="h1"
						id="name"
						label="Your Name Here"
						placeholder="Hello Dear👋"
						multiline
						variant="filled"
						name="name"
						inputProps={{ maxLength: 18 }}
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
