import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { validateEmail } from "../utils/helpers";
import Button from '@mui/material/Button';

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");
	const { name, email, message } = formState;
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_c0kytx6', 'template_tuk574e', form.current, 'Q6MtIbz_bMsCdyhX1')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
	};

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
		if (e.target.name === "name" || e.target.name === "message") {
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
				<form 
				ref={form} onSubmit={sendEmail}
				className="form" 
				style={{ 
					display: 'flex', 
					flexDirection: 'column' 
					}}>
					<div style={{margin: 20}}>
						<div>
							<label className="contactTitle" style={{color: 'white'}}>Name:</label>
						</div>
						<input className="userInput" type="text" defaultValue={name} onBlur={handleEmpty} name="name"/>
					</div>
					<div style={{margin: 20}}>
						<div>
							<label className="contactTitle" htmlFor="email" style={{color: 'white'}}>Email address:</label>
						</div>
						<input className="userInput" type="email" defaultValue={email} name="email" onBlur={handleEmail}/>
					</div>
					<div style={{margin: 20}}>
						<div>
							<label className="contactTitle" htmlFor="Message" style={{color: 'white', maxHeight: 200}}>Message:</label>
						</div>
						<textarea  name="message" className="messageInput" defaultValue={message} onBlur={handleEmpty}/>
					</div>
					{errorMessage && (
						<div style={{display: 'flex', justifyContent: 'center'}}>
							<p style={{ color: '#ba1200'}}>{errorMessage}</p>
						</div>
					)}
				</form>
					<Button 
                        autoFocus color="inherit" 
                        onClick={sendEmail}
                        style={{
                            color: '#e9ebf8', 
                            fontSize: 18}}
                            >
                            Send Message
                        </Button>
			</div>
		</main>
	);
}

export default Contact;