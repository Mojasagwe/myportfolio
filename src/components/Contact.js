import React from "react";
import "./contact.css";

const Contact = () => {
	return (
		<div className="contact component__space" id="Contact">
			<div className="row">
				<div className="col__2">
					<div className="contact__box">
						<div className="contact__meta">
							<h1 className="hire__text"> Contact Me.</h1>
							<p className="hire__text white">
								I am open to work remote or on-site. Connect with me via phone
							</p>
							<p className="hire__text white">
								<strong>+27 653 49 4068</strong> or email
								<strong> tpmmadi@gmail.com</strong>
							</p>
						</div>
						<div className="input__box">
							<input
								type="text"
								className="contact name"
								placeholder="Your name *"></input>
							<input
								type="text"
								className="contact email"
								placeholder="Your email *"></input>
							<input
								type="text"
								className="contact subject"
								placeholder="Write subject *"></input>
							<textarea
								name="message"
								id="message"
								placeholder="Write your message"></textarea>
							<button className="btn contact pointer" type="submit">
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
