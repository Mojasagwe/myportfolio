import React from "react";
import "./skills.css";
import react2 from "../pictures/react2.jpeg";
import java from "../pictures/JavaLogo.png";
import Salesforces from "../pictures/Salesforces.png";
import APIintegration from "../pictures/APIintegration.png";
import sql from "../pictures/sql.png";
import dbms from "../pictures/lwc.png";
import webdev from "../pictures/Webdev.jpg";
import apex from "../pictures/apexs.png";
import github from "../pictures/github.jpg";
import restapi from "../pictures/realrest.png";
import clcumpting from "../pictures/soql.png";
import fullstack from "../pictures/fullstack.png";
import apple from "../pictures/apple.jpg";

function Skills() {
	return (
		<div
			className="project component__space"
			id="Skills"
			style={{ backgroundImage: `url(${apple})` }}>
			<div className="heading">
				<h1 className="heading">My Developer Skills</h1>
				<p className="heading p__color">
					These are a few of the many skills I have in my repertoire.
				</p>
				<p className="heading p__color">
					“Programming is a skill best acquired by practice and example rather
					than from books.” -Alan Turing
				</p>
			</div>
			<div className="container">
				<div className="row">

				<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img src={Salesforces} alt="" className="project__img" />
								</div>
								<div className="mask__effect"></div>
							</div>
						</div>
					</div>


					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img src={APIintegration} alt="" className="project__img" />
								</div>
								<div className="mask__effect"></div>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img src={java} alt="" className="project__img" />
								</div>
								<div className="mask__effect"></div>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img src={apex} alt="" className="project__img" />
								</div>
								<div className="mask__effect"></div>
							</div>
						</div>
					</div>
					

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img src={react2} alt="" className="project__img" />
								</div>
								<div className="mask__effect"></div>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img src={sql} alt="" className="project__img" />
								</div>
								<div className="mask__effect"></div>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img src={dbms} alt="" className="project__img" />
								</div>
								<div className="mask__effect"></div>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img src={restapi} alt="" className="project__img" />
								</div>
								<div className="mask__effect"></div>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img src={webdev} alt="" className="project__img" />
								</div>
								<div className="mask__effect"></div>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img src={github} alt="" className="project__img" />
								</div>
								<div className="mask__effect"></div>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img src={fullstack} alt="" className="project__img" />
								</div>
								<div className="mask__effect"></div>
							</div>
						</div>
					</div>


					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img src={clcumpting} alt="" className="project__img" />
								</div>
								<div className="mask__effect"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
