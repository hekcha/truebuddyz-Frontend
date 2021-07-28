import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
	position: fixed;
	background-color: #fff;
	width: 100%;
	height: 50px;
	z-index: 100;
	/* background-color: rgb(0, 0, 0); */
	border-bottom: 2px solid #f1f1f1;
	padding: 40px 20px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	.logo {
		padding: 0px 0;
	}
	//below code is not necessary
	.logo a img {
		position: relative;
		width: 9rem;
		height: 5rem;
		top: -5vh;
		left: -13vw;
		margin-left: -5vw;
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<div className="logo animate__animated animate__flash">
				<a href="/home" style={{}}>
					<img src="https://i.ibb.co/mqtjWzK/icon.png" alt="TRUE BFF" border="0" />
				</a>
			</div>
			<Burger />
		</Nav>
	);
};

export default Navbar;
