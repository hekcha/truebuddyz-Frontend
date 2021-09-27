import React, { useEffect } from "react";
import finger from "../assets/finger.gif";

function Loading() {
	return (
		<div>
			<img
				alt="Loading"
				className="card"
				style={{
					margin: "8px auto",
					width: "330px",
					height: "243px",
					borderRadius: "450px",
				}}
				src={finger}
			/>
			<p style={{ textAlign: "center", fontSize: "50px" }}>Loading . . . .</p>
		</div>
	);
}

function LoadingReload() {
	useEffect(()=>{
		setTimeout(function(){
			window.location.reload();
		},3000)	
	},[])
	return (
		<div>
			<img
				alt="Loading Reload"
				className="card"
				style={{
					margin: "8px auto",
					width: "330px",
					height: "243px",
					borderRadius: "450px",
				}}
				src={finger}
			/>
			<p style={{ textAlign: "center", fontSize: "50px" }}>Loading . . .</p>
		</div>
	);
}

export default Loading;
export { LoadingReload };
