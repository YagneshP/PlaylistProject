import React from 'react';
import PlayListAll from '../containers/PlayListAll';
// import UserAside from './UserAside';

// import Carousel from 'react-bootstrap/Carousel';
const PlayListTimeline = (props) => {
	return (
		<div className="container-fluid">
			{/* <UserAside profileImageUrl={props.profileImageUrl} username={props.username} /> */}

			<PlayListAll />
		</div>
	);
};

export default PlayListTimeline;
