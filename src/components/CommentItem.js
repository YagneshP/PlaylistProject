import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';
// ,
const CommentItem = ({ date, profileImageUrl, detail, firstName, removeComment, isCorrectUser }) => (
	<div className="col-12" style={{ marginTop: '4px' }}>
		<li className="list-group-item " style={{ display: 'flex' }}>
			<img
				src={profileImageUrl || DefaultProfileImg}
				alt={firstName}
				height="50"
				width="50"
				className="timeline-image"
			/>
			<div className="message-area">
				{/*  */}
				<Link to="/">@ {firstName}&nbsp;</Link>
				<span className="text-muted">
					<Moment className="text-muted" format="Do MMM YYYY">
						{date}
					</Moment>
				</span>
				<p>{detail}</p>
				{isCorrectUser && (
					<button className="btn btn-danger" onClick={removeComment}>
						Delete
					</button>
				)}
			</div>
		</li>
	</div>
);

export default CommentItem;
