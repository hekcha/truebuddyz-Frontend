import React from "react";
import Navbar from "../Nav/Navbar";
import "./main.css";
import image1 from "../assets/vegetables.png";
import noimage from "../assets/noimage.jpg";

function Home() {
	return (
		<React.Fragment>
			<div className="is-preload">
				<div className="row">
					<Navbar />
				</div>
				<br />
				<br />
				<br />
				<br />
				<div id="wrapper" className="div mx-4">
					<div id="main" className="div">
						<div className="inner div">
							<header className="header">
								<h1 className="h1">Most Liked💗</h1>
								<h2 className="h2">Most loved❤️‍🔥 and played🃏 Games by TrueBff Family.</h2>
							</header>
							<section className="tiles section">
								{/* COPY THIS BELOW SECTION UPTO ARTICLE FOR A NEW CARD ALSO COPY STYLE1 classNameNAME CSS TO OTHER STYLE2*/}
								<article className="style1 article">
									<span className="image span">
										<img className="img" src={image1} alt="" />
									</span>
									<a href="/quiz/friends/new" className="a">
										<h1 className="h1">Quiz for Friends</h1>
										{/* <div className="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div> */}
									</a>
								</article>
								{/* UPTO HERE */}
								<article className="style2 article">
									<span className="image span">
										<img className="img" src={image1} alt="No Image" />
									</span>
									<a href="/quiz/couples">
										<h2 className="h2">quiz for couples</h2>
										{/* <div className="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div> */}
									</a>
								</article>

								<article className="style3 article">
									<span className="image span">
										<img className="img" src={image1} alt="No Image" />
									</span>
									<a href="/quiz/bff" className="a">
										<h2 className="h2">quiz for bff</h2>
										{/* <div className="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div> */}
									</a>
								</article>

								<article className="style3 article">
									<span className="image span">
										<img className="img" src={image1} alt="No Image" />
									</span>
									<a href="/rapidfire/friends" className="a">
										<h2 className="h2">rapidfire for friends</h2>
										{/* <div className="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div> */}
									</a>
								</article>

								<article className="style3 article">
									<span className="image span">
										<img className="img" src={image1} alt="No Image" />
									</span>
									<a href="/rapidfire/couples" className="a">
										<h2 className="h2">rapidfire for couples</h2>
										{/* <div className="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div> */}
									</a>
								</article>

								<article className="style3 article">
									<span className="image span">
										<img className="img" src={image1} alt="No Image" />
									</span>
									<a href="/rapidfire/bff" className="a">
										<h2 className="h2">rapidfire for bff</h2>
										{/* <div className="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div> */}
									</a>
								</article>

							</section>
						</div>
						<br />



						<div className="inner div">
							<header className="header">
								<h1>Our games🔥</h1>
							</header>
							<section className="tiles section">
								{/* COPY THIS BELOW SECTION UPTO ARTICLE FOR A NEW CARD ALSO COPY STYLE1 classNameNAME CSS TO OTHER STYLE2*/}
								<article className="style1 article">
									<span className="image span">
										<img className="img" src={image1} alt="" />
									</span>
									<a href="/quiz" className="a">
										<h1 className="h1">Quiz</h1>
									</a>
								</article>
								{/* UPTO HERE */}
								<article className="style2 article">
									<span className="image span">
										<img className="" src={image1} alt="No Image" />
									</span>
									<a href="/rapidfire" className="a">
										<h2 className="h2">rapidfire</h2>
										{/* <div className="content div">
											<p className="p">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div> */}
									</a>
								</article>
						
							</section>
						</div>



						<div className="inner div">
							<header className="header">
								<h1>Hot & Trending🔥</h1>
							</header>
							<section className="tiles section">
								{/* COPY THIS BELOW SECTION UPTO ARTICLE FOR A NEW CARD ALSO COPY STYLE1 classNameNAME CSS TO OTHER STYLE2*/}
								<article className="style1 article">
									<span className="image span">
										<img className="img" src={noimage} alt="" />
									</span>
									<a href="#" className="a">
										<h1 className="h1">Quiz for Friends</h1>
									</a>
								</article>
								{/* UPTO HERE */}
								<article className="style2 article">
									<span className="image span">
										<img className="" src={noimage} alt="No Image" />
									</span>
									<a href="#" className="a">
										<h2 className="h2">Lorem</h2>
										<div className="content div">
											<p className="p">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article className="style4 article">
									<span className="image span">
										<img className="img" src={noimage} alt="No Image" />
									</span>
									<a href="#" className="a">
										<h2 className="h2">Feugiat</h2>
										<div className="content div">
											<p className="p">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
						
							</section>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Home;