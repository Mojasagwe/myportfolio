import React from "react";
import "./about.css";
import mypic from "../pictures/myPicture.jpg";

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
							Qualified Software Engineer and certified Java SE 8 programmer
							with a strong foundation in SDLC, expertise in web services and
							API development.
							</p>
							<p className="about__text p__color">
							Currently working as a Salesforce developer
							and integration specialist. I am effective in cross-functional
							teams and as an individual contributor.
							</p>
							<p className="about__text p__color">
							Known for quickly learning any programming language and ready to excel in
							technical and code-related positions.
							</p>

							<div className="about__button d__flex align__items__center">
								<button className="about btn pointer ">Resumé</button>

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
