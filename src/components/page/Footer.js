import React from "react";

function Footer() {
	return (
		<div class="row">
			<div class="col-md-8 col-sm-6 col-xs-12">
				<p class="copyright-text" style={{ fontWeight: "700", fontSize: "28px" }}>
					Copyright &copy; 2021 All Rights Reserved by{" "}
					<a href="{#}">TrueBuddyz</a>.
				</p>
			</div>

			<div class="col-md-4 col-sm-6 col-xs-12" style={{ display: "flex" }}>
				{/* <span className="row"> */}
				<p className="col-6 offset-6">
					<a href="/policy" style={{ fontWeight: "700", fontSize: "28px" }}>
						Privacy Policy
					</a>
				</p>

				{/* </span> */}
			</div>
		</div>
	);
}

export default Footer;
