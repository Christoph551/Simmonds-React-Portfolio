import { useState } from "react";
import { validateEmail } from "../utils/helpers";

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const { name, email, message } = formState;

	function handleEmail(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleEmpty(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	return (
		<main style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'column',
			backgroundColor: '#342e37',
			minHeight: '100vh'
		}}>
			<h2 style={{
				fontSize: 40
			}}>Contact</h2>
			<div>
				<form className="form" style={{ display: 'flex', flexDirection: 'column' }}>
					<div style={{margin: 20}}>
						<div>
							<label className="contactTitle" style={{color: 'white'}}>Name:</label>
						</div>
						<input className="userInput" type="text" defaultValue={name} onBlur={handleEmpty} name="Name"/>
					</div>
					<div style={{margin: 20}}>
						<div>
							<label className="contactTitle" htmlFor="email" style={{color: 'white'}}>Email address:</label>
						</div>
						<input className="userInput" type="email" defaultValue={email} name="email" onBlur={handleEmail}/>
					</div>
					<div style={{margin: 20}}>
						<div>
							<label className="contactTitle" htmlFor="Message" style={{color: 'white', minHeight: 200}}>Message:</label>
						</div>
						<textarea className="messageInput" name="Message" defaultValue={message} onBlur={handleEmpty}/>
					</div>
					{errorMessage && (
						<div>
							<p>{errorMessage}</p>
						</div>
					)}
				</form>
			</div>
		</main>
	);
}

export default Contact;