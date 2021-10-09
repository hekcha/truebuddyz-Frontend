import React from "react";

function Footer() {
	return (
		<div class="row text-center">
			<div class="col-12">
				<p class="copyright-text" style={{ fontWeight: "700", fontSize: "12px" }}>
					Copyright &copy; 2021 All Rights Reserved by
					<a href="{#}">TrueBuddyz</a>.
				</p>
			</div>

			<div class="col-12" style={{ display: "flex", marginTop: "-10px" }}>
				<p className="col-12">
					<a href="/policy" style={{ fontWeight: "700", fontSize: "14px", color: "black" }}>
						Privacy Policy
					</a>
				</p>

				{/* </span> */}
			</div>
		</div>
	);
}

export default Footer;
