import React, { useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

const animateIn = keyframes`
	from{margin-left:-100% }
	50%{margin-left:-50% }
	to{margin-left:0% }
`;
const animateOut = keyframes`
	from{margin-left:0% }
	50%{margin-left:-50% }
	to{margin-left:-100% }
`;

const Ul = styled.ul`
	list-style: none;
	display: flex;
	/* position: fixed; */
	flex-flow: row nowrap;
	z-index: "1000";
	text-decoration: none;

	li {
		padding: 2px 38px;
		/* font-family: "Bungee Shade", cursive; */
		font-size: 24px;
		font-weight: 999;
		cursor: pointer;
		color: black;
	}

	@media (max-width: 768px) {
		flex-flow: column nowrap;
		background-color: #585858;
		opacity: 0.9;
		position: fixed;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
		/* font-family: "Bangers", cursive; */
		font-size: 24px;
		top: 80px;
		left: 0;
		height: 45vh;
		width: 250px;
		padding-top: 2.5rem;
		border-bottom-right-radius: 20px;
		transition: transform 0.5s ease-in-out;
		clip-path: circle(500px at ${({ open }) => (open ? "10% 10%" : "-100% -100%")});
	}
`;

const Apply1 = styled.div`
	animation: ${({ open }) =>
		open
			? css`
					/* ${animateIn} 0.5s ease-in-out forwards */
			  `
			: css`
					/* ${animateOut} 4s linear backwards */
			  `};
`;
const Apply2 = styled.div`
	animation: ${({ open }) =>
		open
			? css`
					/* ${animateIn} 0.7s ease-in-out forwards */
			  `
			: css`
					/* ${animateOut} 4s linear backwards */
			  `};
`;
const Apply3 = styled.div`
	animation: ${({ open }) =>
		open
			? css`
					/* ${animateIn} 0.9s ease-in-out forwards */
			  `
			: css`
					/* ${animateOut} 4s linear backwards */
			  `};
`;
const Apply4 = styled.div`
	animation: ${({ open }) =>
		open
			? css`
					/* ${animateIn} 1.1s ease-in-out forwards */
			  `
			: css`
					/* ${animateOut} 4s linear backwards */
			  `};
`;

const LeftNav = ({ open }) => {
	return (
		<Ul open={open}>
			<a href="/">
				<li>
					<Apply1 open={open}>Home</Apply1>
				</li>
			</a>
			<a href="/games">
				<li>
					<Apply2 open={open}>Games</Apply2>
				</li>
			</a>
			<li>
				<Apply3 open={open}>
					<a href="/contribution">Contribution </a>
				</Apply3>
			</li>
			{/* <a href="localhost:3000/feedback"> */}
			<li>
				<Apply4 open={open} >
					<a href="/feedback">Feedback </a>
				</Apply4>
			</li>
			{/* </a> */}
		</Ul>
	);
};

export default LeftNav;
