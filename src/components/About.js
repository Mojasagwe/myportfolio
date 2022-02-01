import React from "react";
import "./about.css";
import mypic from "../pictures/mypic.png";

export const About = () => {
	window.addEventListener("scroll", function () {
		const upToTop = document.querySelector("a.bottom__to__top");
		upToTop.classList.toggle("active", window.scrollY > 0);
	});
	return (
		<div className="about component__space" id="About">
			<div className="container">
				<div className="row">
					<div className="col__2">
						<img src={mypic} alt="" className="about__img" />
					</div>
					<div className="col__2">
						<h1 className="about__heading">About Me</h1>

						<div className="about__meta">
							<h3 className="hire__text white">
								<strong>
									Note: This profile is still in development phase and should
									not be viewed as the final product
								</strong>
							</h3>
							<p className="about__text p__color">
								I am a qualified software developer, and a certified java
								programmer completed my diploma in software development in 2021
								March, and ever since then I have put it upon myself to grow and
								become the best developer I could ever imagine, and use these
								skills to solve some of the most unique problems.
							</p>
							<p className="about__text p__color">
								On a daily basis, I keep busy working and writing code to grow
								my technical skills and to create an outstanding portfolio I am
								interested in both the backend and frontend of development
							</p>
							<p className="about__text p__color">
								I would like to thank you for taking the time to look through my
								portfolio you can also have a look through my GitHub profile or
								LinkedIn
							</p>

							<div className="about__button d__flex align__items__center">
								<button className="about btn pointer ">Download CV</button>

								<a href="https://github.com/Mojasagwe">
									<button className="about btn pointer ">GitHub</button>
								</a>
								<a href="https://www.linkedin.com/in/tpmmadi/">
									<button className="about btn pointer ">LinkedIn</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
