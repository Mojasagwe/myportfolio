import React from "react";
import "./skills.css";
import java8 from "../pictures/featured.png";
import pd1 from "../pictures/pd1.png";
import mule from "../pictures/mule.png";
import cloud from "../pictures/cloudplus.webp";
import azure from "../pictures/azure.png";
import certifcatesbg from "../pictures/keyboard.jpg";

function Skills() {
	return (
		<div
			className="project component__space"
			id="Skills"
			style={{ backgroundImage: `url(${certifcatesbg})` }}>
			<div className="heading">
				<h1 className="heading">Certifcations</h1>
			
			</div>
		<div className="container">

			<div className="row">

				<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img src={pd1} alt="" className="project__img" />
								</div>
								<div className="mask__effect"></div>
							</div>
						</div>
					</div>


					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img src={java8} alt="" className="project__img" />
								</div>
								<div className="mask__effect"></div>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img src={mule} alt="" className="project__img" />
								</div>
								<div className="mask__effect"></div>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img src={cloud} alt="" className="project__img" />
								</div>
								<div className="mask__effect"></div>
							</div>
						</div>
					</div>
					

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img src={azure} alt="" className="project__img" />
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
