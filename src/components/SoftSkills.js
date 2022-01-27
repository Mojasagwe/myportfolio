import React from "react";
import "./softskills.css";

export const SoftSkills = () => {
	return (
		<div className="services" id="Skills1">
			<div className="heading">
				<h1 className="heading">Soft Skills</h1>
				<p className="heading p__color"> Soft skills are character traits </p>
				<p className="heading p__color">
					{" "}
					that positively affect how you work and interact with others.
				</p>
			</div>
			<div className="container">
				<div className="row">
					<div className="col__3">
						<div className="services__box pointer">
							<div className="icon">
								<svg
									stroke="currentColor"
									fill="none"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke-linecap="round"
									stroke-linejoin="round"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
									<circle cx="9" cy="7" r="4"></circle>
									<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
								</svg>
							</div>
							<div className="service__meta">
								<h1 className="service__text">TEAM-PLAYER</h1>
								<p className="p service__text p__color">
									Im a great team-player
								</p>
								<p className="p service__text p__color">
									who can LISTEN ACTIVELY
								</p>
								<p className="p service__text p__color">
									and COOPERATE with team members
								</p>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="services__box pointer">
							<div className="icon">
								<svg
									stroke="currentColor"
									fill="none"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke-linecap="round"
									stroke-linejoin="round"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg">
									<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
									<polyline points="2 17 12 22 22 17"></polyline>
									<polyline points="2 12 12 17 22 12"></polyline>
								</svg>
							</div>
							<div className="service__meta">
								<h1 className="service__text">ADAPTABILITY</h1>
								<p className="p service__text p__color">
									I am FLEXIBLE and embrace change
								</p>
								<p className="p service__text p__color">
									capable of working in fast-paced
								</p>
								<p className="p service__text p__color">Environment</p>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="services__box pointer">
							<div className="icon">
								<svg
									stroke="currentColor"
									fill="none"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke-linecap="round"
									stroke-linejoin="round"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg">
									<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
									<line x1="8" y1="21" x2="16" y2="21"></line>
									<line x1="12" y1="17" x2="12" y2="21"></line>
								</svg>
							</div>
							<div className="service__meta">
								<h1 className="service__text">PROBLEM-SOLVING</h1>
								<p className="p service__text p__color">
									I have great ANALYTICAL
								</p>
								<p className="p service__text p__color">
									and CREATIVE thinking
								</p>
								<p className="p service__text p__color">
									to create solutions for unique problems
								</p>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="services__box pointer">
							<div className="icon">
								<svg
									stroke="currentColor"
									fill="none"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke-linecap="round"
									stroke-linejoin="round"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg">
									<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
									<line x1="8" y1="21" x2="16" y2="21"></line>
									<line x1="12" y1="17" x2="12" y2="21"></line>
								</svg>
							</div>
							<div className="service__meta">
								<h1 className="service__text">WORK ETHIC</h1>
								<p className="p service__text p__color">
									“I understand the importance of WORK
								</p>
								<p className="p service__text p__color">
									and putting forward my best EFFORT
								</p>
								<p className="p service__text p__color">
									and taking RESPONSIBILITY
								</p>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="services__box pointer">
							<div className="icon">
								<svg
									stroke="currentColor"
									fill="none"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke-linecap="round"
									stroke-linejoin="round"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg">
									<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
									<polyline points="2 17 12 22 22 17"></polyline>
									<polyline points="2 12 12 17 22 12"></polyline>
								</svg>
							</div>
							<div className="service__meta">
								<h1 className="service__text">ATTENTION TO DETAIL</h1>
								<p className="p service__text p__color">
									I am thorough and ACCURATE in my work
								</p>
								<p className="p service__text p__color">
									with great CRITICAL observation
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
