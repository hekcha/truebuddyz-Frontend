import React from "react";
import { useState } from "react";
import "./ShareButton.css";

function ShareButton() {
	const [width, setWidth] = useState(true);
	return (
		<div id="sharebutton">
			<div className="containerShare">
				<ul className="btn-share clearfix">
					<li
						onClick={() => {
							const note = document.querySelector(".share");
							if (width) {
								note.style.width = "44px";
								setWidth(false);
							} else {
								note.style.width = "220px";
								setWidth(true);
							}
						}}
					>
						<a href="#" className="button share entypo-share">
							<i className="fas fa-share-alt"></i>
						</a>
					</li>
					<li>
						{/* eslint-disable-next-line */}
						<a href="https://instagram.com/" className="button instagram entypo-instagram" target="_blank">
							<i className="fab fa-instagram"></i>
						</a>
					</li>
					<li>
						{/* eslint-disable-next-line */}
						<a href="https://www.facebook.com/share.php?u=" className="button facebook entypo-facebook" target="_blank">
							<i className="fab fa-facebook"></i>
						</a>
					</li>
					<li>
						{/* eslint-disable-next-line */}
						<a href="https://api.whatsapp.com/" className="button whatsapp entypo-whatsapp" target="_blank">
							<i className="fab fa-whatsapp"></i>
						</a>
					</li>
					<li>
						{/* eslint-disable-next-line */}
						<a href="https://instagram.com/" className="button twitter entypo-twitter" target="_blank">
							<i className="fab fa-twitter"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default ShareButton;
