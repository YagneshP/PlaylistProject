import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { postNewPlaylist } from '../store/actions/playlist';

// class PlayListForm extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			name: '',
// 			detail: ''
// 			// tags: [],
// 			// videos: []
// 		};
// 	}

// 	// =====================================
// 	handleNewPlaylist = (event) => {
// 		event.preventDefault();
// 		const { name, detail } = this.state;

// 		this.props.postNewPlaylist(name, detail);
// 		this.setState({
// 			name: '',
// 			detail: ''
// 			// tags: [],
// 			// videos: []
// 		});
// 		this.props.history.push('/');
// 	};

// 	render() {
// 		return (
// 			<form onSubmit={this.handleNewPlaylist}>
// 				{this.props.errors.message && <div className="alert alert-danger">{this.props.errors.message}</div>}
// 				<label htmlFor="name"> Playlist Name: </label>
// 				<input
// 					type="text"
// 					className="form-control"
// 					value={this.state.name}
// 					onChange={(e) => this.setState({ name: e.target.value })}
// 				/>
// 				<label htmlFor="detail"> Detail : </label>
// 				<input
// 					type="text"
// 					className="form-control"
// 					value={this.state.detail}
// 					onChange={(e) => this.setState({ detail: e.target.value })}
// 				/>

// 				{/* <label htmlFor="tags"> tags: </label>
// 				<input
// 					type="text"
// 					className="form-control"
// 					value={this.state.tags}
// 					onChange={(e) => this.setState({ tags: e.target.value })}
// 				/> */}
// 				<button type="submit" className="btn btn-success">
// 					Add My PlayList!
// 				</button>
// 			</form>
// 		);
// 	}
// }

//====================== redux form =====================//
class PlayListForm extends Component {
	renderField = ({ input, label, type, meta: { touched, error } }) => (
		<div className="input-row">
			<label>{label}</label>
			<input {...input} type={type} className="form-control" />
			{touched && error && <span className="error">{error}</span>}
		</div>
	);

	//========== removing tags ==============//
	renderTags = ({ fields, meta: { error } }) => (
		<ul style={{ listStyle: 'none' }}>
			<li>
				<button type="button" className="btn btn-m btn-outline-dark" onClick={() => fields.push()}>
					Add Tag
				</button>
			</li>
			{fields.map((tag, index) => (
				<li key={index}>
					<button
						type="button"
						title="Remove Tag"
						className="btn btn-m btn-outline-danger"
						onClick={() => fields.remove(index)}
					>
						Remove tag{' '}
					</button>
					<Field name={tag} type="text" component={this.renderField} label={`Tag #${index + 1}`} />
				</li>
			))}
			{error && <li className="error">{error}</li>}
		</ul>
	);

	// ============= remove video =========//

	// renderVideos = ({ fields, meta: { error } }) => (
	// 	<ul style={{ listStyle: 'none' }}>
	// 		<li>
	// 			<button type="button" className="btn btn-m btn-outline-dark" onClick={() => fields.push()}>
	// 				Add Video Url
	// 			</button>
	// 		</li>
	// 		{fields.map((videos, index) => (
	// 			<li key={index}>
	// 				<button
	// 					type="button"
	// 					title="Remove Video"
	// 					className="btn btn-m btn-outline-danger"
	// 					onClick={() => fields.remove(index)}
	// 				>
	// 					Remove Video{' '}
	// 				</button>
	// 				<Field name={videos} type="text" component={this.renderField} label={`Video #${index + 1}`} />
	// 			</li>
	// 		))}
	// 		{error && <li className="error">{error}</li>}
	// 	</ul>
	// );
	//=======================//
	renderVideos = ({ fields, meta: { error, submitFailed } }) => (
		<ul style={{ listStyle: 'none' }}>
			<li>
				<button className="btn btn-m btn-outline-dark" type="button" onClick={() => fields.push({})}>
					Add Video
				</button>
				{submitFailed && error && <span>{error}</span>}
			</li>
			{fields.map((videos, index) => (
				<li key={index}>
					<button
						className="btn btn-m btn-outline-danger"
						type="button"
						title="Remove Video"
						onClick={() => fields.remove(index)}
					>
						{' '}
						Remove Video{' '}
					</button>
					<h4>Video #{index + 1}</h4>
					<Field name={`${videos}.url`} type="text" component={this.renderField} label="Video Url" />
					<Field
						name={`${videos}.description`}
						type="text"
						component={this.renderField}
						label="Video Description"
					/>
					<Field
						name={`${videos}.thumbnail`}
						type="text"
						component={this.renderField}
						label="Video thumbnail"
					/>
				</li>
			))}
		</ul>
	);
	submit = (values) => {
		this.props.postNewPlaylist(values);
		this.props.history.push('/');
	};

	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.submit)}>
				<Field
					name="name"
					label={'Playlist Name'}
					component={this.renderField}
					type="text"
					className="form-control"
				/>

				<Field
					name="detail"
					label={'Detail'}
					component={this.renderField}
					type="text"
					className="form-control"
				/>
				<Field
					name="thumbnail"
					label={'Thumbnail for Playlist'}
					component={this.renderField}
					type="text"
					className="form-control"
				/>
				<FieldArray name="tag" component={this.renderTags} />
				<FieldArray name="videos" component={this.renderVideos} />
				<button type="submit" className="btn btn-success">
					Submit
				</button>
			</form>
		);
	}
}
function mapStateToProps(state) {
	return {
		errors: state.errors
	};
}

PlayListForm = reduxForm({
	// a unique name for the form
	form: 'playlistform'
})(PlayListForm);

export default connect(mapStateToProps, { postNewPlaylist })(PlayListForm);
