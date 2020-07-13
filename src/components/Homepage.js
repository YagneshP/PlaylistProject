import React from 'react';
import { Link } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';
// import MessageTimeline from './MessageTimeline';
import PlayListTimeline from './PlayListTimeline';
// import axios from 'axios';
// import Carousel from 'react-bootstrap/Carousel';

const Homepage = ({ currentUser }) => {
	// google auth successful response
	// const successResponse = (response) => {
	// 	console.log(response);
	// 	axios({
	// 		method: 'post',
	// 		url: 'http://localhost:8086/api/users/googlelogin',
	// 		data: { tokenId: response.tokenId }
	// 	}).then((response) => {
	// 		console.log(response);
	// 	});
	// };

	// google auth failure response
	// const errorResponse = (response) => {
	// 	console.log(response);
	// };

	if (!currentUser.isAuthenticated) {
		return (
			<div className="home-hero">
				<h1>What's Happening?</h1>
				<h4>New to WebAPP?</h4>
				<Link to="/signup" className="btn btn-dark">
					Sign up here
				</Link>
				{/* <GoogleLogin
					clientId=""
					buttonText="Login With Google"
					className="btn btn-dark"
					onSuccess={successResponse}
					onFailure={errorResponse}
					cookiePolicy={'single_host_origin'}
				/> */}
			</div>
		);
	}
	return (
		<div>
			{/* <MessageTimeline
				profilePhotoUrl={currentUser.user.profileImageUrl}
				firstName={currentUser.user.firstName}
			/> */}

			<PlayListTimeline
				profilePhotoUrl={currentUser.user.profileImageUrl}
				firstName={currentUser.user.userName}
			/>
		</div>
	);
};

export default Homepage;
