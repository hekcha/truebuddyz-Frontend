import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import logo from '../assets/logo.png'

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
		margin: 0;
		width: 57%;
	    max-width: 13rem;
	}
	//below code is not necessary
	.logo a img {
		position: relative;
		width: 15rem;
		height: 5rem;
		// top: -5vh;
		left: 0;
		margin-left: 0;
	}
`;

const Navbar = () => {
	return (
		<Nav style={{padding: '8px 31px 57px 21px'}}>
			<div className="logo animate__animated animate__flash">
				<a href="/home" style={{}}>
					<img src={logo} alt="TRUE BFF" border="0" />
				</a>
			</div>
			<Burger />
		</Nav>
	);
};

export default Navbar;
