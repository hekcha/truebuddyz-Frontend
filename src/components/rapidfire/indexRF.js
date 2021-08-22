function IndexRf() {
	return (
		<div className="row">
			<div
				className="col-4"
				onClick={() => (window.location.href = "/rapidfire/friends")}
				style={{ margin: "1rem", backgroundColor: "green", height: "7rem" }}
			>
				<h1>rapidfire for friends</h1>
			</div>
			<div
				className="col-4"
				onClick={() => (window.location.href = "/rapidfire/bff")}
				style={{ margin: "1rem", backgroundColor: "green", height: "7rem" }}
			>
				<h1>rapidfire for BFF</h1>
			</div>
			<div
				className="col-4"
				onClick={() => (window.location.href = "/rapidfire/couples")}
				style={{ margin: "1rem", backgroundColor: "green", height: "7rem" }}
			>
				<h1>rapidfire for couples</h1>
			</div>
		</div>
	);
}

export default IndexRf;
