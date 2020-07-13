import React from 'react';

const VideoItem = ({ date, description, url, thumbnail, setCurrentVideo }) => (
	<div className="row" style={{ height: '200px', marginBottom: '10px' }}>
		<img
			src={thumbnail}
			alt={description}
			style={{ height: '200px', cursor: 'pointer' }}
			onClick={setCurrentVideo}
		/>
	</div>
);

export default VideoItem;
