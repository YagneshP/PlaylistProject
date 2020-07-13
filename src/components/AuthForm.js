import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AuthForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			firstName: '',
			lastName: ''
			// profilePhotoUrl: ''
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const authType = this.props.signUp ? 'signup' : 'signin';
		const data = authType === 'signin' ? { email: this.state.email, password: this.state.password } : this.state;
		this.props
			.onAuth(authType, data)
			.then(() => {
				this.props.history.push('/');
			})
			.catch(() => {
				return;
			});
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { email, firstName, lastName, password } = this.state;
		const { signUp, heading, buttonText, errors, history, removeError } = this.props;

		history.listen(() => {
			removeError();
		});

		return (
			<div>
				<div className="row justify-content-md-center text-center">
					<div className="col-md-6">
						<form onSubmit={this.handleSubmit}>
							<h2>{heading}</h2>
							{errors.message && <div className="alert alert-danger">{errors.message}</div>}
							<label htmlFor="email">E-mail</label>
							<input
								autoComplete="off"
								className="form-control"
								id="email"
								name="email"
								onChange={this.handleChange}
								type="text"
								value={email}
							/>
							<label htmlFor="password">Password</label>
							<input
								autoComplete="off"
								className="form-control"
								id="password"
								name="password"
								onChange={this.handleChange}
								type="password"
								value={password}
							/>
							{signUp && (
								<div>
									<label htmlFor="firstName">FirstName</label>
									<input
										autoComplete="off"
										className="form-control"
										id="firstName"
										name="firstName"
										onChange={this.handleChange}
										type="text"
										value={firstName}
									/>
									<label htmlFor="lastName">LastName</label>
									<input
										autoComplete="off"
										className="form-control"
										id="lastName"
										name="lastName"
										onChange={this.handleChange}
										type="text"
										value={lastName}
									/>
									{/* <label htmlFor="image-url">Image URL</label>
									<input
										// autoComplete="off"
										className="form-control"
										id="profilePhotoUrl"
										name="profilePhotoUrl"
										onChange={this.handleChange}
										type="text"
										value={profilePhotoUrl}
									/> */}
								</div>
							)}
							<button id="formBtn" className="btn btn-dark btn-block btn-lg">
								{buttonText}
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
// AuthForm.propTypes = {
// 	buttonText: PropTypes.string,
// 	errors: PropTypes.object,
// 	heading: PropTypes.string,
// 	history: PropTypes.object,
// 	onAuth: PropTypes.func,
// 	signIn: PropTypes.bool,
// 	removeError: PropTypes.func
// };

export default AuthForm;
