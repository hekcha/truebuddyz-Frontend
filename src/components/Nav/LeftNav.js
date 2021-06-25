import React, { useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

const animateIn = keyframes`
	from{margin-left:-100%}
	50%{margin-left:-50%}
	to{margin-left:0%}
`;
const animateOut = keyframes`
	from{margin-left:0%}
	50%{margin-left:-50%}
	to{margin-left:-100%}
`;

const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;

	li {
		padding: 20px 25px;
		font-family: "Bangers", cursive;
		font-size: larger;
		cursor: pointer;
		color: #000;
	}

	@media (max-width: 768px) {
		flex-flow: column nowrap;
		background-color: #005a8d;
		position: fixed;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
		font-family: "Bangers", cursive;
		font-size: 20px;
		top: 60px;
		left: 0;
		height: 45vh;
		width: 250px;
		padding-top: 2.5rem;
		border-bottom-right-radius: 200px;
		transition: transform 0.5s ease-in-out;
		clip-path: circle(500px at ${({ open }) => (open ? "10% 10%" : "-100% -100%")});
	}
`;

const Apply1 = styled.div`
	animation: ${({ open }) =>
		open
			? css`
					${animateIn} 0.5s ease-in-out forwards
			  `
			: css`
					${animateOut} 4s linear backwards
			  `};
`;
const Apply2 = styled.div`
	animation: ${({ open }) =>
		open
			? css`
					${animateIn} 0.7s ease-in-out forwards
			  `
			: css`
					${animateOut} 4s linear backwards
			  `};
`;
const Apply3 = styled.div`
	animation: ${({ open }) =>
		open
			? css`
					${animateIn} 0.9s ease-in-out forwards
			  `
			: css`
					${animateOut} 4s linear backwards
			  `};
`;
const Apply4 = styled.div`
	animation: ${({ open }) =>
		open
			? css`
					${animateIn} 1.1s ease-in-out forwards
			  `
			: css`
					${animateOut} 4s linear backwards
			  `};
`;

const LeftNav = ({ open }) => {
	return (
		<Ul open={open}>
			<a href>
				<li>
					<Apply1 open={open}>Home</Apply1>
				</li>
			</a>
			<a href>
				<li>
					<Apply2 open={open}>Games</Apply2>
				</li>
			</a>
			<a href>
				<li>
					<Apply3 open={open}>Conribution</Apply3>
				</li>
			</a>
			<a href>
				<li>
					<Apply4 open={open}>Feedback</Apply4>
				</li>
			</a>
		</Ul>
	);
};

export default LeftNav;
