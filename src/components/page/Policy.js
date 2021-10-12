import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PrivacyPolicy from "../assets/privacy_policy.jpg";
const useStyles = makeStyles((theme) => ({
	heading: {
		margin: "auto",
		textAlign: "center",
		fontSize: "52px",
		color: "black",
		fontWeight: "700",
		[theme.breakpoints.down("sm")]: {
			fontSize: "28px",
		},
	},
	quote: {
		fontSize: "38px",
		color: "black",
		[theme.breakpoints.down("sm")]: {
			fontSize: "22px",
		},
	},
	text: {
		fontSize: "28px",
		color: "black",
		[theme.breakpoints.down("sm")]: {
			fontSize: "18px",
		},
	},
}));

function Policy() {
	const classes = useStyles();
	return (
		<div>
			<div className="row text-center">
				<img src={PrivacyPolicy} style={{ maxWidth: "820px", margin: "auto" }} alt="PrivacyPolicy" />
				{/* eslint-disable-next-line */}
				<div style={{ textAlign: "left", textAlign: "center" }}>
					<p className={classes.heading}>Privacy Policy📜</p>
					<p className={classes.quote}>Privacy is a not a myth here🙂</p>
					<a href="/feedback">
						<Button
							className="my-3"
							variant="contained"
							color="primary"
							size="large"
							style={{
								backgroundColor: "#1976d2",
							}}
						>
							Get in touch
						</Button>
					</a>
					<p className={classes.heading}>Here's how we handle your privacy</p>
					<p className={classes.text} style={{ maxWidth: "880px", margin: "auto" }}>
						In this privacy policy, we describe what kind of data we may collect of you in connection with your use of our games, applications and
						related services and how we may use such data. Below we call these collectively “Services”. By using our Services, you agree to the
						processing of your data in accordance with this privacy policy. We may update this privacy policy from time to time by posting a new
						version online so please review it frequently. Your continued use of our Services after the posting of a new version is deemed as your
						acceptance of the modified terms.
					</p>
					<p className={classes.heading}>What Data We Collect and Why?</p>
					<p className={classes.text} style={{ maxWidth: "880px", margin: "auto" }}>
						We may collect personal data that identifies you if you submit it to us (for example if send us an email query regarding our services or
						on Contribution & Feedback). We may use this data to provide Services to you, improve our Services and contact you. We don’t collect
						personal data providing our game services.Every user is only a timestamp in records.We don't have any access to their data. If you believe
						we have inadvertently collected such data, then please contact us so we can remove such data.
					</p>
					<p className={classes.heading}>Analytics Data</p>
					<p className={classes.text} style={{ maxWidth: "880px", margin: "auto" }}>
						We use analytical services and other tools (such as Google Analytics) on areas of our Services which enable us to collect your IP address,
						other identifiers, usage data relating to our Services, as well as device information. Based on this data we may create statistics to
						provide better services to our customers and to further develop our Services. This data is not personalised and only accessible in an
						aggregated form. We treat this information as non-personal data. You can disable Google Analytics with this tool:
						tools.google.com/dlpage/gaoptout
					</p>
					<p className={classes.heading}>Cookies and other identifiers.</p>
					<p className={classes.text} style={{ maxWidth: "880px", margin: "auto" }}>
						We and our partners may use cookies and other identifiers (such as clear gifs or pixel tags). With cookies and other identifiers, we and
						our partners can provide a better user experience. You may delete the cookies from your device after using our Services. If you disable
						cookies on your browser, some parts of our Services may not function properly.
					</p>
					<p className={classes.heading}>Data Security and Data Sharing</p>
					<p className={classes.text} style={{ maxWidth: "880px", margin: "auto" }}>
						We do not share your personal data to third parties without your consent unless we are compelled to do so by law or when we face
						exceptional situations, such as detection or prevention of misuse or criminal activities. We may publish aggregated or de-personalised
						data based on our users’ information (such as statistics) provided that such information does not identify you. We may process your data
						outside the country where you live in (for example if you are an IN citizen, outside the IN or the Indian Economic Area). This can happen,
						for instance, if the service provider of our analytical services is located outside your country. In such cases, we will take steps to
						ensure that your personal data is processed lawfully and in accordance with this privacy policy.
					</p>
					<p className={classes.heading}>Changes To This Privacy Statement</p>
					<p className={classes.text} style={{ maxWidth: "880px", margin: "auto" }}>
						We have the discretion to update this privacy policy at any time. You acknowledge and agree that it is your responsibility to review this
						privacy policy periodically and become aware of modifications.
					</p>
					<p className={classes.heading}>Your Acceptance Of These Terms</p>
					<p className={classes.text} style={{ maxWidth: "880px", margin: "auto" }}>
						By using our services, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our services.
						Your continued use of our services following the posting of changes to this policy will be deemed your acceptance of those changes.
					</p>
					<p className={classes.heading}>Contact Us</p>
					<p className={classes.text} style={{ maxWidth: "880px", margin: "auto" }}>
						Should you have any questions regarding this privacy policy or the processing of your personal data, please contact us by <br />
						Email : truebuddyz.official@gmail.com
					</p>
				</div>
			</div>
		</div>
	);
}

export default Policy;
