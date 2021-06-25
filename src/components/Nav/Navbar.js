import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
	width: 100%;
	height: 60px;
	/* background-color: rgb(0, 0, 0); */
	border-bottom: 2px solid #f1f1f1;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;

	.logo {
		padding: 15px 0;
	}
	//below code is not necessary
	.logo a img {
		width: 7rem;
		height: 2.7rem;
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<div className="logo animate__animated animate__flash">
				<a href="https://imgbb.com/">
					<img src="https://i.ibb.co/mqtjWzK/icon.png" alt="TRUE BFF" border="0" />
				</a>
			</div>
			<Burger />
		</Nav>
	);
};

export default Navbar;
