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
									<a href="#" className="a">
										<h1 className="h1">Quiz for Friends</h1>
										{/* <div className="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div> */}
									</a>
								</article>
								{/* UPTO HERE */}
								<article className="style2 article">
									<span className="image span">
										<img className="img" src={noimage} alt="No Image" />
									</span>
									<a href="#">
										<h2 className="h2">Lorem</h2>
										<div className="content div">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
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
								<article className="style1 article">
									<span className="image span">
										<img className="img" src={noimage} alt="No Image" />
									</span>
									<a href="#" className="a">
										<h2 className="h2">Tempus</h2>
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
										<h2 className="h2">Ipsum</h2>
										<div className="content div">
											<p className="p">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article className="style6 article">
									<span className="image span">
										<img className="img" src={noimage} alt="No Image" />
									</span>
									<a href="#" className="a">
										<h2 className="h2">Dolor</h2>
										<div className="content div">
											<p className="p">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
							</section>
						</div>
						<br />
						<div className="inner div">
							<header className="header">
								<h1>Hot & Trending🔥</h1>
							</header>
							<section className="tiles section">
								{/* COPY THIS BELOW SECTION UPTO ARTICLE FOR A NEW CARD ALSO COPY STYLE1 classNameNAME CSS TO OTHER STYLE2*/}
								<article className="style1 article">
									<span className="image span">
										<img className="img" src={image1} alt="" />
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
								<article className="style1 article">
									<span className="image span">
										<img className="img" src={noimage} alt="No Image" />
									</span>
									<a href="#" className="a">
										<h2 className="h2">Tempus</h2>
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
										<h2 className="h2">Ipsum</h2>
										<div className="content div">
											<p className="p">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article className="style6 article">
									<span className="image span">
										<img className="img" src={noimage} alt="No Image" />
									</span>
									<a href="#" className="a">
										<h2 className="h2">Dolor</h2>
										<div className="content div">
											<p className="p">Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
							</section>
						</div>
					</div>

					<footer id="footer">
						<div className="inner div">
							<section className="section">
								<h2 className="h2">Get in touch</h2>
								<form method="post" action="#" className="form">
									<div className="fields div">
										<div className="field half div">
											<input className="input" type="text" name="name" id="name" placeholder="Name" />
										</div>
										<div className="field half div">
											<input className="input" type="email" name="email" id="email" placeholder="Email" />
										</div>
										<div className="field div">
											<textarea className="textarea" name="message" id="message" placeholder="Message"></textarea>
										</div>
									</div>
									<ul className="actions ul">
										<li className="li">
											<input type="submit" value="Send" className="primary" />
										</li>
									</ul>
								</form>
							</section>
							<section>
								<h2 className="h2">Follow</h2>
								<ul className="icons ul">
									<li className="li">
										<a className="a" href="#" className="icon brands style2 fa-twitter">
											<span className="label span">Twitter</span>
										</a>
									</li>
									<li className="li">
										<a className="a" href="#" className="icon brands style2 fa-facebook-f">
											<span className="label span">Facebook</span>
										</a>
									</li>
									<li className="li">
										<a href="#" className="icon brands style2 fa-instagram a">
											<span className="label span">Instagram</span>
										</a>
									</li>
									<li className="li">
										<a href="#" className="icon brands style2 fa-dribbble a">
											<span className="label span">Dribbble</span>
										</a>
									</li>
									<li className="li">
										<a href="#" className="icon brands style2 fa-github a">
											<span className="label span">GitHub</span>
										</a>
									</li>
									<li className="li">
										<a href="#" className="icon brands style2 fa-500px a">
											<span className="label span">500px</span>
										</a>
									</li>
									<li className="li">
										<a href="#" className="icon solid style2 fa-phone a">
											<span className="label span">Phone</span>
										</a>
									</li>
									<li className="li">
										<a href="#" className="icon solid style2 fa-envelope a">
											<span className="label span">Email</span>
										</a>
									</li>
								</ul>
							</section>
							<ul className="copyright ul">
								<li className="li">&copy; TrueBFF. All rights reserved</li>
							</ul>
						</div>
					</footer>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Home;
